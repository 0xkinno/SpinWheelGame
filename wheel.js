// Wheel configuration
const theWheel = new Winwheel({
    canvasId: 'wheel',
    numSegments: 8,
    outerRadius: 200,
    textFontSize: 18,
    textAlignment: 'outer',
    textOrientation: 'horizontal',
    pointerAngle: 0,
    segments: [
      { fillStyle: '#eae56f', text: '+$300' },
      { fillStyle: '#89f26e', text: '+$500' },
      { fillStyle: '#7de6ef', text: '+$1,000' },
      { fillStyle: '#e7706f', text: '+$2,000' },
      { fillStyle: '#eae56f', text: '+$3,000' },
      { fillStyle: '#89f26e', text: '+$5,000' },
      { fillStyle: '#7de6ef', text: '+$7,500' },
      { fillStyle: '#e7706f', text: '+$10,000' },
    ],
    animation: {
      type: 'spinToStop',
      duration: 3,
      spins: 12,
      direction: 'clockwise',
      callbackFinished: alertPrize
    }
  });
  
  async function alertPrize(indicatedSegment) {
    const prizeText = indicatedSegment.text;
    alert("You won: " + prizeText);
    
    // TODO: Integrate with GenLayer contract
    // Uncomment the code below once you set up the GenLayer SDK properly
    
    /*
    try {
      // Contract address
      const contractAddress = '0x86F985F52B2d70aCa2c893959bFb66b00F534E06';
      
      // Record the spin result to the contract
      await window.genLayerClient.writeContract({
        address: contractAddress,
        functionName: 'record_spin',
        args: [prizeText]
      });
      
      // Optionally read and log the last result
      const lastResult = await window.genLayerClient.readContract({
        address: contractAddress,
        functionName: 'get_last_result',
        args: []
      });
      console.log('Last spin result from contract:', lastResult);
    } catch (error) {
      console.error('Error interacting with contract:', error);
    }
    */
  }
  
  document.getElementById('spin-btn').addEventListener('click', () => {
    // Reset the wheel rotation to starting position
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();
    
    // Start the animation
    theWheel.startAnimation();
  });
