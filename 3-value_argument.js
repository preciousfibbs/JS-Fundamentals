// Get the third element in process.argv (first real argument)
const arg = process.argv[2];

// Check if it's undefined (i.e. no argument passed)
if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}

