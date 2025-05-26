import os
import shutil

def replace_image():
    original_path = 'assets/images/bio-photo.jpg'
    edited_path = 'assets/images/bio-photo-edited.jpg'
    backup_path = 'assets/images/bio-photo-backup.jpg'
    
    try:
        # Check if the edited image exists
        if not os.path.exists(edited_path):
            print(f"Error: Edited image not found at {edited_path}")
            return
            
        # Create a backup of the original image
        print(f"Creating backup of original image at {backup_path}")
        shutil.copy2(original_path, backup_path)
        
        # Replace the original with the edited image
        print(f"Replacing original image with edited version")
        shutil.copy2(edited_path, original_path)
        
        print("Image replacement complete!")
        print(f"Original image backed up at: {backup_path}")
        print(f"Profile image has been updated to the square, brighter version")
        
    except Exception as e:
        print(f"Error replacing image: {e}")

if __name__ == "__main__":
    replace_image()