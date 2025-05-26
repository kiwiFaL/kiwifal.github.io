const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Configuration
const inputPath = 'assets/images/bio-photo.jpg';
const outputPath = 'assets/images/bio-photo-edited.jpg';
const brightnessAdjustment = 0.2; // 20% brightness increase

async function processImage() {
  try {
    console.log(`Loading image from ${inputPath}...`);
    const image = await loadImage(inputPath);
    
    // Calculate dimensions for square crop
    const sourceSize = Math.min(image.width, image.height);
    const sourceX = (image.width - sourceSize) / 2;
    const sourceY = (image.height - sourceSize) / 2;
    
    // Create canvas with square dimensions
    const canvas = createCanvas(sourceSize, sourceSize);
    const ctx = canvas.getContext('2d');
    
    // Draw the image as a square (cropping to center)
    ctx.drawImage(
      image,
      sourceX, sourceY, sourceSize, sourceSize,
      0, 0, sourceSize, sourceSize
    );
    
    // Apply brightness adjustment
    const imageData = ctx.getImageData(0, 0, sourceSize, sourceSize);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Adjust RGB values
      data[i] = Math.min(255, data[i] + (255 - data[i]) * brightnessAdjustment);     // Red
      data[i + 1] = Math.min(255, data[i + 1] + (255 - data[i + 1]) * brightnessAdjustment); // Green
      data[i + 2] = Math.min(255, data[i + 2] + (255 - data[i + 2]) * brightnessAdjustment); // Blue
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Save the processed image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Image processed successfully and saved to ${outputPath}`);
    console.log('To use the new image, rename it to bio-photo.jpg');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();