let num = 31  //1以上の正の数
console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
else if (num % 5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}