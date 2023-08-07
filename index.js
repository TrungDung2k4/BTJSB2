// Bài 1
document.getElementById("calculateTotalSalary").onclick = () => {
  var dailySalary = +document.getElementById("dailySalary").value;
  var workingDayNumbers = +document.getElementById("workingDayNumbers").value;
  var totalSalary = dailySalary * workingDayNumbers;
  document.getElementById("totalSalary").innerHTML = totalSalary;
};
// Bài 2
document.getElementById("calculateAvaerageValue").onclick = () => {
  var Number1 = +document.getElementById("Number1").value;
  var Number2 = +document.getElementById("Number2").value;
  var Number3 = +document.getElementById("Number3").value;
  var Number4 = +document.getElementById("Number4").value;
  var Number5 = +document.getElementById("Number5").value;
  var averageValue = (Number1 + Number2 + Number3 + Number4 + Number5) / 5;
  document.getElementById("averageValue").innerHTML = averageValue;
};
// Bài 3
document.getElementById("equalTo").onclick = () => {
  var initialAmount = +document.getElementById("initialAmount").value;
  var equivalentAmount = initialAmount * 23500;
  document.getElementById("equivalentAmount").innerHTML = equivalentAmount;
};
// Bài 4
document.getElementById("calculateValue").onclick = () => {
  var length = +document.getElementById("length").value;
  var width = +document.getElementById("width").value;
  var perimeter = (length + width) * 2;
  var area = length * width;
  var value = `Chu Vi: ${perimeter} - Diện Tích: ${area}`;
  document.getElementById("value").innerHTML = value;
};
// Bài 5
document.getElementById("calculateSumDigit").onclick = () => {
  var number = +document.getElementById("number").value;
  var digit1 = number % 10;
  number = Math.floor(number / 10);
  var digit2 = number % 10;
  var sumDigit = digit1 + digit2;
  document.getElementById("sumDigit").innerHTML = sumDigit;
};
