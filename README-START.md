# How to Start the Development Server

## If you're getting connection refused errors:

1. **Stop all Node processes:**
   - Open Task Manager (Ctrl+Shift+Esc)
   - End all "Node.js" processes

2. **Run the server:**
   ```bash
   npm run dev
   ```

3. **If you see esbuild permission errors:**
   - Right-click on the project folder
   - Go to Properties > Security
   - Make sure your user has full control
   - Or add an exception in Windows Defender for this folder

4. **Alternative: Try a different port**
   - Edit `vite.config.js` and change port to `3000` or `8080`
   - Then run `npm run dev`

5. **Check firewall:**
   - Make sure Windows Firewall isn't blocking Node.js
   - Allow Node.js through firewall if prompted

## The server should show:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Then open http://localhost:5173 in your browser.
