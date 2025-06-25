function throwError() {
  throw new Error("This is an error");
}

function infiniteLoop():never {
  while (true) {
    // This will run indefinitely
  }
}

let x :never;

function neverReturn():never {
  while (true) {}
} 