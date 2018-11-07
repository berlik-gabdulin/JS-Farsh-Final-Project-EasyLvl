function timer(date) {

    function timerInnerDom(remainTime, wrapper) {
        wrapper.innerHTML = '';
        let remainArr = remainTime.split(''),
        tempNode;
        for (let i = 0; i < remainArr.length; i++) {
            tempNode = document.createElement('span');
            tempNode.textContent = remainArr[i];
            wrapper.appendChild(tempNode);
        }
    }

    setInterval(function () {
        let daysWrp = document.querySelector('span.days'),
        hoursWrp = document.querySelector('span.hours'),
        minutesWrp = document.querySelector('span.minutes'),
        secondsWrp = document.querySelector('span.seconds');

        let stopDate = ((new Date(date)) / 1000).toFixed(),
        nowDate = (Date.now() / 1000).toFixed(),
        remain = stopDate - nowDate,
        sec = remain,
        min = sec / 60,
        hours = min / 60,
        days = hours / 24;

        if (remain > 0) {
            let remainH = String(Math.floor(hours % 24)),
            remainM = String(Math.floor(min % 60)),
            remainS = String(Math.floor(sec % 60)),
            remainD = String(Math.floor(days));

            if (Number(remainH) < 10) {
                remainH = '0' + remainH;
            }
            if (Number(remainM) < 10) {
                remainM = '0' + remainM;
            }
            if (Number(remainS) < 10) {
                remainS = '0' + remainS;
            }
            if (Number(remainD) < 10) {
                remainD = '0' + remainD;
            }

            timerInnerDom(remainD, daysWrp);
            timerInnerDom(remainH, hoursWrp);
            timerInnerDom(remainM, minutesWrp);
            timerInnerDom(remainS, secondsWrp);
            
        } else {
            document.getElementById('timer').style.cssText = 'opacity: .7; color: #c5c5c5;';
        }

    }, 1000);
}

module.exports = timer;