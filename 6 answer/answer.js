// Function to get the missing number
function getMissingData(a, n) {
    //getting natural number
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= a[i];
  console.log(total)
  return total;
}

const arr = [1, 2, 4, 5, 6];
const n = arr.length;
getMissingData(arr, n);

