// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
// Display the top of the triangle by submitting a # until it reaches the value of 4
for (let i = 1; i <= 4; i++) {
    console.log('#'.repeat(i));
  }
  
  // Display the bottom of the triangle by submitting a total of 3 # until it reaches 1
  for (let i = 3; i >= 1; i--) {
    console.log('#'.repeat(i));
  }
  