// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// create an 8x8 grid )
for (let row = 0; row < 8; row++) {
    let line = ''; // starts an empty string for each row
  
    for (let col = 0; col < 8; col++) {
      // checks if it should be a space or a #
      if ((row + col) % 2 === 0) {
        line += '#'; // adds # for even spots
      } else {
        line += ' '; // adds space for odd spots
      }
    }
  
    console.log(line); // Output the completed row
  }
  