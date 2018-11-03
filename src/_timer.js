function timer() {
    setInterval(function () {
        let hoursWrp = document.querySelector('span.hours'),
            minutesWrp = document.querySelector('span.minutes'),
            secondsWrp = document.querySelector('span.seconds');

        let stopDate = ((new Date("2018-10-30T18:00:00")) / 1000).toFixed(),
            nowDate = (Date.now() / 1000).toFixed(),
            remain = stopDate - nowDate,
            sec = remain,
            min = sec / 60,
            hours = min / 60;

        if (remain > 0) {
            let remainH = Math.floor(hours % 24),
                remainM = Math.floor(min % 60),
                remainS = Math.floor(sec % 60);

            if (remainH < 10) {
                remainH = '0' + remainH;
            }
            if (remainM < 10) {
                remainM = '0' + remainM;
            }
            if (remainS < 10) {
                remainS = '0' + remainS;
            }

            hoursWrp.textContent = remainH;
            minutesWrp.textContent = remainM;
            secondsWrp.textContent = remainS;
        } else {
            hoursWrp.textContent = '00';
            minutesWrp.textContent = '00';
            secondsWrp.textContent = '00';
            document.getElementById('timer').style.cssText = 'opacity: .7; color: #c5c5c5;';
        }

    }, 1000);
};

module.exports = timer;