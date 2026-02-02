const btn = document.querySelector('.btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const height = Number(document.getElementById('height').value);
  const weight = Number(document.getElementById('weight').value);


  const bmi = weight / (height * height);
  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${status})`;
});
