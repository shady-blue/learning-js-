var average = function (num1, num2, num3, num4, num5) {
  var total = num1 + num2 + num3 + num4 + num5;
  var av = total / 5;
  if (av >= 12) {
    return "قبول";
  } else {
    return "مشروط";
  }
};
console.log(average(10, 20, 15.5, 12, 20));
var state = average(15, 10, 10, 12, 11);
console.log(state);
//-------------
function getEvenNum(arrayNum) {
  let evenNum = [];
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 == 0) {
      evenNum.push(arrayNum[i]);
    }
  }
  return evenNum;
}
console.log(getEvenNum([12, 3, 22, 35, 55, 20, 60]));
//--------------------------
//بدون تابع
// var count = 0, number = 11; 
// for (var i = 1; i <= number; i++) {
//   if (number % i == 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   console.log("aval");
// } else {
//   console.log("morakab");
// } 
//نکته:بخوایم اول بودن یا نبودن عدد های دیگه بفهمیم نمیتونیم این کد رو چند بار بنویسیم
//پس بجای تکرار کردن کد از توابع استفاده کنیم
function isPrime (number){
    let count = 0;
    for(let i = 1; i <= number ; i++){
        if(number % i ==0)
            count++;
    }
    if(count==2)
        return true;
    else
        return false;
}
console.log(isPrime(10));
console.log(isPrime(9));
