/**
 * Favicon Generator Script
 * 
 * This script generates favicon files from your logo.png file.
 * 
 * Requirements:
 * - Node.js installed
 * - Sharp library installed (npm install sharp)
 * 
 * Usage:
 * 1. Install sharp: npm install sharp
 * 2. Run: node generate-favicons.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const SOURCE_LOGO = path.join(__dirname, 'assets', 'images', 'logo.png');
const OUTPUT_DIR = path.join(__dirname, 'assets', 'images');
const FAVICON_SIZES = [16, 32, 192, 512];
const APPLE_TOUCH_ICON_SIZE = 180;

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to generate PNG favicons
async function generatePngFavicons() {
  try {
    // Load the source image
    const sourceImage = sharp(SOURCE_LOGO);
    const metadata = await sourceImage.metadata();
    
    console.log(`Processing source image: ${SOURCE_LOGO}`);
    console.log(`Source image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Generate standard favicons (16x16, 32x32)
    for (const size of FAVICON_SIZES) {
      const outputPath = path.join(OUTPUT_DIR, size === 16 || size === 32 
        ? `favicon-${size}x${size}.png` 
        : `android-chrome-${size}x${size}.png`);
      
      await sourceImage
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`Generated: ${outputPath}`);
    }
    
    // Generate Apple Touch Icon (180x180)
    const appleTouchIconPath = path.join(OUTPUT_DIR, 'apple-touch-icon.png');
    await sourceImage
      .resize(APPLE_TOUCH_ICON_SIZE, APPLE_TOUCH_ICON_SIZE, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(appleTouchIconPath);
    
    console.log(`Generated: ${appleTouchIconPath}`);
    
    console.log('\nFavicon generation completed successfully!');
    console.log('\nNote: This script does not generate the SVG favicon for Safari pinned tabs.');
    console.log('For the SVG favicon, please use an online tool like https://realfavicongenerator.net/');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Check if source logo exists
if (!fs.existsSync(SOURCE_LOGO)) {
  console.error(`Error: Source logo not found at ${SOURCE_LOGO}`);
  process.exit(1);
}

// Generate favicons
generatePngFavicons();

// Update site.webmanifest
const webmanifestPath = path.join(OUTPUT_DIR, 'site.webmanifest');
if (fs.existsSync(webmanifestPath)) {
  try {
    const webmanifest = JSON.parse(fs.readFileSync(webmanifestPath, 'utf8'));
    
    // Ensure the paths are correct
    if (webmanifest.icons && Array.isArray(webmanifest.icons)) {
      webmanifest.icons.forEach(icon => {
        if (icon.src.includes('android-chrome-192x192.png')) {
          icon.src = '/assets/images/android-chrome-192x192.png';
        } else if (icon.src.includes('android-chrome-512x512.png')) {
          icon.src = '/assets/images/android-chrome-512x512.png';
        }
      });
      
      fs.writeFileSync(webmanifestPath, JSON.stringify(webmanifest, null, 4), 'utf8');
      console.log(`Updated: ${webmanifestPath}`);
    }
  } catch (error) {
    console.error('Error updating site.webmanifest:', error);
  }
}