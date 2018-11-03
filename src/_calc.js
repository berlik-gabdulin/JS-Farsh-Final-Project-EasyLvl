function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum * personsSum) * 4000;

        if (this.value == '' || this.value == '0' || restDays.value == '' || restDays.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    function getCount(elem) {
        for (let i = 0; i < elem.length; i++) {
            if (elem[i].type == 'text') {
                let count = elem[i];
                count.addEventListener('input', (event) => {
                    let num = parseInt(count.value.replace(/\D/g, ""));
                    if (isNaN(num)) {
                        event.preventDefault();
                        count.value = '';
                        num = '';
                    } else {
                        count.value = num;
                        console.log(count.value);
                    }
                });
            }
        }
    };

    getCount(document.getElementsByClassName('counter-block-input'));

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum * personsSum) * 4000;

        if (persons.value == '' || persons.value == '0' || this.value == '' || this.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (persons.value == '' || persons.value == '0' || restDays.value == '' || restDays.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
};

module.exports = calc;