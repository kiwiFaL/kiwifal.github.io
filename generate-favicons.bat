@echo off
echo Favicon Generator Script
echo ========================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    goto :EOF
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: npm is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    goto :EOF
)

echo Installing required dependencies...
call npm install sharp --no-fund

echo.
echo Running favicon generator script...
node generate-favicons.js

echo.
echo If the script was successful, your favicons have been generated!
echo Check the assets/images directory for the new favicon files.
echo.
echo Note: This script does not generate the SVG favicon for Safari pinned tabs.
echo For the SVG favicon, please use an online tool like https://realfavicongenerator.net/
echo.

pause