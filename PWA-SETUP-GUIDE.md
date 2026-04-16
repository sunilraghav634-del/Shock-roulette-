# 🚀 PWA Setup Guide - Shock Roulette

Your Shock Roulette game has been successfully converted into a Progressive Web App (PWA)! Here's what was added and how to use it.

## ✨ What's New

### 1. **Service Worker** (`service-worker.js`)
- **Offline Support**: The app now works without an internet connection after first load
- **Caching Strategy**: Uses cache-first strategy for fast loading
- **Auto-updates**: Automatically clears old caches when updated

### 2. **Web Manifest** (`manifest.json`)
- **Installation Support**: Users can install the app on their home screen
- **App Icons**: Custom emoji-based icons for all devices
- **App Info**: Name, description, theme colors, and more
- **Screenshots**: Preview images for app stores

### 3. **Updated HTML** (`index.html`)
- **Service Worker Registration**: Automatically registers on page load
- **PWA Meta Tags**: Added for better mobile app experience
- **Apple Support**: iOS-specific meta tags for home screen app

### 4. **Server Configuration** (`.htaccess`)
- **Content Compression**: Reduces file size for faster loading
- **Cache Headers**: Optimizes browser caching
- **MIME Types**: Proper content type handling

## 📱 Installation Instructions

### On Android
1. Open the app in Chrome or Edge
2. Look for the "Install app" prompt at the bottom/top of screen
3. Tap "Install" to add to home screen
4. The app will open full-screen without browser UI

### On iOS
1. Open the app in Safari
2. Tap the Share button (rectangle with arrow)
3. Scroll and tap "Add to Home Screen"
4. Enter a name (or keep default) and tap "Add"
5. The app will appear on your home screen

### On Desktop (PWA-capable browsers)
1. Open in Chrome, Edge, or other supported browser
2. Click the install icon in the address bar (looks like an arrow/download)
3. Confirm installation
4. App opens in its own window

## 🔧 Features Enabled by PWA

✅ **Offline Functionality** - Play without internet  
✅ **Home Screen Installation** - Like a native app  
✅ **Standalone Mode** - No browser UI  
✅ **Vibration API** - Full haptic feedback  
✅ **Full Screen** - Immersive gaming experience  
✅ **App Shortcuts** - Quick access to start game  
✅ **Push Notifications** (optional future feature)  
✅ **Background Sync** (optional future feature)  

## 🎮 How to Deploy

### GitHub Pages
1. Go to repository Settings
2. Find "Pages" section
3. Set source to "Deploy from a branch"
4. Select "main" branch
5. App will be available at: `https://your-username.github.io/Shock-roulette-/`

### Other Hosting
- Upload files to any web host
- Ensure HTTPS is enabled (required for PWA)
- Service Worker will work automatically

## 📊 Files Structure

```
Shock-roulette-/
├── index.html              # Main app with PWA registration
├── script.js               # Game logic (unchanged)
├── style.css               # Styling (unchanged)
├── manifest.json           # PWA manifest [NEW]
├── service-worker.js       # Offline support [NEW]
├── .htaccess               # Server config [NEW]
└── PWA-SETUP-GUIDE.md     # This file [NEW]
```

## 🛠️ Customization

### Change App Name
Edit `manifest.json`:
```json
"name": "Your Custom Name",
"short_name": "Custom"
```

### Change Theme Color
Edit `manifest.json`:
```json
"theme_color": "#your-color-hex"
```

### Change Icons
Replace the SVG data URIs in `manifest.json` with your own image URLs:
```json
"src": "/path/to/your-icon.png",
"sizes": "192x192",
"type": "image/png"
```

### Cache Strategy
Edit `service-worker.js` to change caching behavior:
- Change `CACHE_VERSION` to force cache refresh
- Modify `urlsToCache` array to cache different files

## 📈 Testing

### Check if PWA is Working
1. Open DevTools (F12)
2. Go to "Application" tab
3. Check "Manifest" - should show your manifest.json
4. Check "Service Workers" - should show registered and active

### Test Offline Mode
1. Open DevTools
2. Go to "Network" tab
3. Check "Offline" checkbox
4. Refresh page - app should still work

## 🐛 Troubleshooting

### Service Worker not registering
- Ensure you're on HTTPS (or localhost for development)
- Check browser console for errors
- Clear browser cache and restart

### App not installing
- Only works on HTTPS (except localhost)
- Manifest.json must be valid JSON
- Icons must be accessible

### Offline not working
- Wait for Service Worker to fully install
- Close and reopen the app
- Check cached files in DevTools > Application > Cache Storage

## 📚 Resources

- [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers)
- [PWA Checklist](https://web.dev/pwa-checklist/)

---

**Enjoy your new PWA! 🎉** Your Shock Roulette game is now ready to install as an app! 🚀