function selectionSort(arr) {
  // type your code here
  if (arr.length > 0){
    for (let i = 1; i<arr.length;i++){
      for (let j = 0; j<i;j++){
        if (arr[i]<arr[j]){
          let temp = arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
        }
      }
    }
    return arr;
  }
  else{
    return arr;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
