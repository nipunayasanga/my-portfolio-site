@echo off
echo 🚀 Starting React portfolio deployment...
echo.

REM 1. Go to project folder
cd /d %~dp0

REM 2. Remove old build
echo 🧹 Cleaning previous build...
rmdir /s /q build

REM 3. Build the project
echo 🏗️ Building project...
npm run build

REM 4. Deploy to GitHub Pages
echo 📦 Deploying to GitHub Pages...
npm run deploy

REM 5. Open live site
echo 🌐 Opening live site...
start https://nipunayasanga.online

echo ✅ Deployment complete!
pause
