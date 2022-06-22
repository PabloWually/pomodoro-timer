let miliSecondsSpan = document.querySelector("#miliseconds");
let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
const lapSpan = document.querySelector("#clock-lap");
const timerButton = document.querySelector("#timer-button");
const hero = document.querySelector("#principal");
let miliSecondsValue = 0;
let secondsValue = 0;
let minutesValue = 0;
let lapValue = [];
let currentInterval;
let currentButton;

function startChronometer() {
    currentButton = event.target;
    currentButton.disabled = true;
    currentInterval = setInterval(() => {
        miliSecondsValue += 1;
        if (miliSecondsValue === 100) {
            miliSecondsValue = 0;
            secondsValue += 1;
            secondsSpan.textContent = formatValue(secondsValue);
        }
        if (secondsValue === 60) {
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
        miliSecondsSpan.textContent = formatValue(miliSecondsValue);
    }, 10);
}

function formatValue(value) {
    return ("0" + value).slice(-2);
}

function stopChronometer() {
    if (currentButton.disabled) currentButton.disabled = false;
    clearInterval(currentChronometer);
}

function resetChronometer() {
    secondsValue = 0;
    minutesValue = 0;
    miliSecondsValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
    miliSecondsSpan.textContent = "00";
    lapSpan.innerHTML = ``;
    lapValue = [];
}

function lapChronometer() {
    lapSpan.innerHTML = ``;
    lapValue.push(
        formatValue(minutesValue) +
            ":" +
            formatValue(secondsValue) +
            ":" +
            formatValue(miliSecondsValue)
    );
    lapValue.forEach((element) => {
        lapSpan.innerHTML += `<p>${element}</p>`;
    });
}

function startTimer() {
    event.preventDefault();
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);

    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    secondsValue = seconds;
    minutesValue = minutes;
    currentInterval = setInterval(() => {
        secondsValue -= 1;
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }

        if (minutesValue === 0 && secondsValue === 0) {
            const container = document.querySelector(".hero--time");
            const title = document.createElement("h2");
            container.appendChild(title);
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}

function executeTimer() {
    hero.innerHTML = `
        <h1 class="hero--title">Timer</h1>
        <div class="hero--time">
            <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
        </div>
        <div class="hero--buttons">
            <form onsubmit="startTimer()">
                <input type="number" placeholder="Escribe los minutos" id="minutesInput" name="minutes">
                <input type="number" placeholder="Escribe los segundos" id="secondsInput" name="seconds">
                <button type="submit">Start</button>
            </form>
        </div>
        `;
    miliSecondsSpan = document.querySelector("#miliseconds");
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
}

function executeChronometer() {
    miliSecondsSpan = document.querySelector("#miliseconds");
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");

    hero.innerHTML = `
        <h1 class="hero--title">Chronometer</h1>
        <div class="hero--time">
            <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span>:<span id="miliseconds">00</span></p>
        </div>
        <div class="hero--buttons">
            <button class="button hero--button" type="button" onclick="startChronometer()">Start</button>
            <button class="button hero--button" type="button" onclick="stopChronometer()">Stop</button>
            <button class="button hero--button" type="button" onclick="resetChronometer()">Reset</button>
            <button class="button hero--button" type="button" onclick="lapChronometer()">Lap</button>
        </div>
        `;
}

function executePomodoro() {
    hero.innerHTML = `
            <h1 class="hero--title">Timer</h1>
            <div class="hero--time">
                <p id="time"><span id="minutes">25</span>:<span id="seconds">00</span></p>
            </div>
            <div class="hero--buttons">
                <button type="button" onclick="startPomodoro()">Start</button>
            </div>
            `;

    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
}

function startPomodoro(){
    secondsValue = 0;
    minutesValue = 25;

    currentInterval = setInterval(() => {
        secondsValue -= 1;
        console.log(secondsSpan);
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }

        if (minutesValue === 0 && secondsValue === 0) {
            const container = document.querySelector(".hero--time");
            const title = document.createElement("h2");
            container.appendChild(title);
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = formatValue(minutesValue);
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}