@echo off
title HR Onboarding Server
echo ========================================================
echo Starting local HR Onboarding Assistant server...
echo ========================================================
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [System] Python detected.
    echo [System] Starting server on http://localhost:8000 ...
    echo [System] Close this window to stop the server.
    
    :: Open browser after a 1 second delay
    timeout /t 1 /nobreak >nul
    start "" http://localhost:8000/
    
    :: Start python server
    python -m http.server 8000
    exit /b
)

:: Check if Node is installed
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [System] Node.js detected.
    echo [System] Starting server on http://localhost:8000 ...
    echo [System] Close this window to stop the server.
    
    :: Open browser after a 1 second delay
    timeout /t 1 /nobreak >nul
    start "" http://localhost:8000/
    
    :: Start node server
    npx http-server -p 8000
    exit /b
)

echo.
echo ========================================================
echo ERROR: Neither Python nor Node.js was found on your system.
echo ========================================================
echo To run this application locally without the microphone permission popup:
echo 1. Install Python (https://www.python.org/downloads/) OR
echo 2. Install Node.js (https://nodejs.org/)
echo.
echo Make sure to check the "Add to PATH" option during installation.
echo ========================================================
echo.
pause
