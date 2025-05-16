# Favicon Generator Guide

This guide provides two methods for generating favicons from your updated logo:

1. Using online favicon generators (recommended for most users)
2. Using the included Node.js script (for developers with Node.js installed)

## Method 1: Online Favicon Generators

For detailed instructions, open the `favicon-generator.html` file in your browser.

### Quick Steps:

1. Visit [Real Favicon Generator](https://realfavicongenerator.net/) (recommended)
2. Upload your `assets/images/logo.png` file
3. Configure settings for each platform
4. Download the generated package
5. Replace the existing favicon files in your `assets/images/` directory:
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   - safari-pinned-tab.svg
   - site.webmanifest (if provided)

## Method 2: Using the Node.js Script

This method requires Node.js to be installed on your system.

### Windows Users:

1. Simply double-click the `generate-favicons.bat` file
2. The script will install the required dependencies and generate the favicons

### Mac/Linux Users or Manual Execution:

1. Open a terminal in this directory
2. Install the required dependency:
   ```
   npm install sharp
   ```
3. Run the script:
   ```
   node generate-favicons.js
   ```

### What the Script Does:

- Generates favicon-16x16.png and favicon-32x32.png
- Generates android-chrome-192x192.png and android-chrome-512x512.png
- Generates apple-touch-icon.png (180x180)
- Updates the site.webmanifest file if it exists

### Limitations:

- The script does not generate the SVG favicon for Safari pinned tabs
- For the SVG favicon, please use an online tool like [Real Favicon Generator](https://realfavicongenerator.net/)

## Testing Your New Favicons

After replacing the favicon files:

1. Run your Jekyll site locally or deploy it
2. Clear your browser cache
3. Visit your site and verify the new favicons appear correctly
4. Test on different browsers and devices if possible

## File References

Your favicon files are referenced in `_includes/head/custom.html`:

```html
<link rel="apple-touch-icon" sizes="180x180" href="{{ '/assets/images/apple-touch-icon.png' | relative_url }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ '/assets/images/favicon-32x32.png' | relative_url }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ '/assets/images/favicon-16x16.png' | relative_url }}">
<link rel="manifest" href="{{ '/assets/images/site.webmanifest' | relative_url }}">
<link rel="mask-icon" href="{{ '/assets/images/safari-pinned-tab.svg' | relative_url }}" color="#5bbad5">
```

If the favicon generator provides files with different names, you may need to update these references.

## Best Practices for Favicons

- Start with a high-quality, simple logo that works well at small sizes
- Avoid complex details that won't be visible at favicon sizes
- Use transparent backgrounds for better integration with different browser themes
- Test your favicons on different browsers and devices