
// Function to change the color of the walls
function changeWallColor() {
    // Generate a random RGB color
    const newColor = `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
    
    // Update the wall color and redraw the walls
    context.fillStyle = newColor;
    context.fillRect(0, 0, 1, 1);
  
    // Update the wallData with the new color
    const newWallData = context.getImageData(0, 0, 1, 1);
    const [newWallRed, newWallGreen, newWallBlue] = newWallData.data;
  
    // Update the wallColor and wallData variables
    wallColor = newColor;
    wallData.data[0] = newWallRed;
    wallData.data[1] = newWallGreen;
    wallData.data[2] = newWallBlue;
  }
  
  // Attach the function to the button's click event
  document.getElementById('runButton').onclick = runScript;
  document.getElementById('changeColorButton').onclick = changeWallColor; // Attach the function to the new button
  