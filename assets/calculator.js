document.addEventListener('DOMContentLoaded', function () {
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');


const heightFtInput = document.getElementById('height_ft');
const heightInInput = document.getElementById('height_in');
const weightStInput = document.getElementById('weight_st');
const weightLbsInput = document.getElementById('weight_lbs');

const metricRadio = document.getElementById('metric');
const imperialRadio = document.getElementById('imperial');

const metricSystem = document.querySelector('.stats');
const imperialSystem = document.querySelector('.stats_imperial');

const topBMI = document.getElementById('top_bmi');
const resultElement = document.getElementById('result');
const idealBMI = document.getElementById('ideal_bmi_info');

const welcome = document.getElementById('welcome');
const welcomeMore = document.getElementById('welcome_more');

heightInput.addEventListener('input', calculateBMI_Metric);
weightInput.addEventListener('input', calculateBMI_Metric);

heightFtInput.addEventListener('input', calculateBMI_Imperial);
heightInInput.addEventListener('input', calculateBMI_Imperial);

weightStInput.addEventListener('input', calculateBMI_Imperial);
weightLbsInput.addEventListener('input', calculateBMI_Imperial);


document.getElementById("weight").addEventListener("focus", function() { this.select(); });
document.getElementById("height").addEventListener("focus", function() { this.select(); });


function calculateBMI_Metric() {
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
	var BackgroundColor="RED"; // what ever color you want

    welcome.style.display = "none";
    welcomeMore.style.display = "none";
    topBMI.style.display = "none";

	

    if (!isNaN(height) && !isNaN(weight)) {
        var meters = height / 100;
        const bmi = weight / (meters * meters);
        const minBMI = 18.5 * (meters*meters);
        const maxBMI = 24.9 * (meters*meters);
        resultElement.innerText = bmi.toFixed(1);
		
        if(bmi >= 18.5 && bmi <= 24.9){
            const idealM = 'BMI شما نشان می دهد که وزن مناسبی دارید.'
            idealBMI.innerText = `${idealM} وزن ایده آل شما بین ${minBMI.toFixed(1)}kgs. - ${maxBMI.toFixed(1)}kgs باید باشد.`
			document.getElementById("result_outputbg").style.background = "linear-gradient(135deg, #099500 0%, #006c6d 100%)";
        }
        else {
            const idealMNot = 'BMI شما نشان می دهد که وزن مناسبی ندارید.'
            idealBMI.innerText = `${idealMNot} وزن ایده آل شما بین ${minBMI.toFixed(1)}kgs. - ${maxBMI.toFixed(1)}kgs باید باشد.`
			document.getElementById("result_outputbg").style.background = "linear-gradient(135deg, rgb(197 4 4) 0%, rgb(81 1 1) 100%)";
        }
        topBMI.style.display = "block";
        idealBMI.style.display = "block";
    } else {
        resultElement.innerText = "";
        idealBMI.innerText = "";
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
		document.getElementById("result_outputbg").style.background = "linear-gradient(135deg, #04c3c4 0%, #006c6d 100%)";
    }
}
function calculateBMI_Imperial() {
    var heightFt = parseFloat(heightFtInput.value);
    var heightIn = parseFloat(heightInInput.value);
    var weightSt = parseFloat(weightStInput.value);
    var weightLbs = parseFloat(weightLbsInput.value);

    welcome.style.display = "none";
    welcomeMore.style.display = "none";
    topBMI.style.display = "none";
    idealBMI.style.display = "none";

    if (!isNaN(heightFt) && !isNaN(weightSt) && !isNaN(heightIn) && !isNaN(weightLbs)) {
        var imperFt = (heightFt * 30.48)/100;
        var imperIn = (heightIn * 2.54)/100;
        var imperSt = weightSt * 6.35;
        var imperLbs = weightLbs * 0.43;
        var imperW = imperSt + imperLbs;
        var imeprH = imperFt + imperIn;
        const bmi = imperW / (imeprH * imeprH);
        const minBMI = 18.5 * (imeprH * imeprH) / 6.35;
        const maxBMI = 24.9 * (imeprH * imeprH) / 6.35;
        resultElement.innerText = bmi.toFixed(1);
        if(bmi >= 18.5 && bmi <= 24.9){
            const idealM = 'BMI شما نشان می دهد که وزن مناسبی دارید.'
            idealBMI.innerText = `${idealM} وزن ایده آل شما بین ${minBMI.toFixed(1)}st. - ${maxBMI.toFixed(1)}st باید باشد.`
        }
        else {
            const idealMNot = 'BMI شما نشان می دهد که وزن مناسبی ندارید.'
            idealBMI.innerText = `${idealMNot} وزن ایده آل شما بین ${minBMI.toFixed(1)}st. - ${maxBMI.toFixed(1)}st باید باشد.`
        }
        topBMI.style.display = "block";
        idealBMI.style.display = "block";
    } else {
        resultElement.innerText = "";
        welcome.style.display = "block";
        welcomeMore.style.display = "block";
    }
}
});