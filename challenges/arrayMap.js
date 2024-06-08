function subarraySumExists(arr, target) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) return true;
  }

  return false;
}

console.log(subarraySumExists([4, 2, 7, 1, 8, 5], 17));
