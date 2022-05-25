const miliSecondsSpan = document.querySelector('#miliseconds');
let miliSecondsValue = 0;
const secondsSpan = document.querySelector('#seconds');
let secondsValue = 0;
const minutesSpan = document.querySelector('#minutes');
let minutesValue = 0;
const lapSpan = document.querySelector('#clock-lap')
let lapValue = [];
let currentChronometer;
function startChronometer (){
    currentChronometer = setInterval(() => {
        miliSecondsValue += 1;
        if(miliSecondsValue === 100){
            miliSecondsValue = 0
            secondsValue += 1
            secondsSpan.textContent = formatValue(secondsValue);
        }
        if (secondsValue === 60){
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        } 
        miliSecondsSpan.textContent = formatValue(miliSecondsValue);
    }, 10)
}

function formatValue(value){
    if(value < 10)
        return ('0' + value);
    else
        return value;
}

function stopChronometer(){
    clearInterval(currentChronometer);
}

function resetChronometer() {
    secondsValue = 0;
    minutesValue = 0;
    miliSecondsValue = 0;
    secondsSpan.textContent = '00';
    minutesSpan.textContent = '00';
    miliSecondsSpan.textContent = '00';
    lapSpan.innerHTML = ``;
    lapValue = []
}

function lapChronometer(){
    lapSpan.innerHTML = ``;
    lapValue.push(formatValue(minutesValue)+':'+formatValue(secondsValue)+':'+formatValue(miliSecondsValue));
    lapValue.forEach(element => {
        lapSpan.innerHTML += `<p>${element}</p>`
    });
}