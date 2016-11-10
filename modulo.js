
function quarter(number) {
    return number / 4;
}

//12 / 4 = 3 therefore 0 === 0 since there's no remainders
if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
