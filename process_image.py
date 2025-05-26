from PIL import Image, ImageEnhance
import os

def process_image():
    # Configuration
    input_path = 'assets/images/bio-photo.jpg'
    output_path = 'assets/images/bio-photo-edited.jpg'
    brightness_factor = 1.2  # 20% brightness increase
    
    try:
        print(f"Loading image from {input_path}...")
        
        # Open the image
        img = Image.open(input_path)
        
        # Get dimensions
        width, height = img.size
        
        # Calculate dimensions for square crop
        size = min(width, height)
        left = (width - size) // 2
        top = (height - size) // 2
        right = left + size
        bottom = top + size
        
        # Crop to square
        img_square = img.crop((left, top, right, bottom))
        
        # Increase brightness
        enhancer = ImageEnhance.Brightness(img_square)
        img_bright = enhancer.enhance(brightness_factor)
        
        # Save the processed image
        img_bright.save(output_path)
        
        print(f"Image processed successfully and saved to {output_path}")
        print("To use the new image, you can:")
        print(f"1. Review the edited image at {output_path}")
        print(f"2. If satisfied, replace the original by copying the edited image over {input_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    process_image()