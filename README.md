# GenLayer Gaming - Spin Wheel

A spin wheel game integrated with GenLayer blockchain.

## Quick Start (Current Version)

The wheel game is fully functional! Simply open `wheel.html` in your browser to play.

## GenLayer Integration Setup

To enable blockchain integration with your deployed contract, you need to set up a proper development environment:

### Option 1: Using a Local Development Server (Recommended)

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Initialize npm project and install dependencies:**
   ```bash
   npm init -y
   npm install genlayer-js
   npm install -D vite
   ```

3. **Create a module version of wheel.js:**
   
   Create `wheel-module.js`:
   ```javascript
   import { createClient, createAccount } from 'genlayer-js';
   import { localnet } from 'genlayer-js/chains';

   // Set up GenLayer client
   const account = createAccount(); // Or use your private key
   const client = await createClient({
     chain: localnet,
     account: account
   });

   await client.initializeConsensusSmartContract();

   // Contract address
   const contractAddress = '0x86F985F52B2d70aCa2c893959bFb66b00F534E06';

   // Make client available globally
   window.genLayerClient = client;
   ```

4. **Update wheel.html to load the module:**
   ```html
   <script type="module" src="wheel-module.js"></script>
   <script src="wheel.js"></script>
   ```

5. **Start development server:**
   ```bash
   npx vite
   ```

6. **Open the local URL** (usually http://localhost:5173)

### Option 2: Using Python HTTP Server (Simple but Limited)

```bash
python -m http.server 8000
```

Then open: http://localhost:8000/wheel.html

**Note:** This won't support ES modules, so blockchain integration won't work.

## Contract Integration

Your deployed contract address: `0x86F985F52B2d70aCa2c893959bFb66b00F534E06`

The wheel will call:
- `record_spin(result)` - Records the spin result
- `get_last_result()` - Retrieves the last spin result

## Files

- `wheel.html` - Main HTML file
- `wheel.css` - Styling
- `wheel.js` - Wheel logic (currently working without blockchain)
- `wheel_game.py` - Your GenLayer smart contract

## Current Status

✅ Wheel spins correctly
✅ Pointer indicates winning prize accurately
✅ Clockwise spinning at consistent speed
✅ 8 prize segments ($300 to $10,000)
⏳ Blockchain integration (ready to uncomment once setup is complete)
