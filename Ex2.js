// Array plus array
function arrayPlusArray(arr1, arr2) {
  /* let sumArr1 = 0,
    sumArr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr2[i];
  }

  return sumArr1 + sumArr2; //something went wrong */
  let sum = 0;
   for(let i=0; i < arr1.length; i++) {
      const product = (arr1[i] + arr2[i]);
      sum += product;
   };
   return sum;
}

console.log(arrayPlusArray([1,2,3,], [4,5,6]));
