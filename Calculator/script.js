let string = "";
let btn = document.querySelectorAll('.button');
let buttons = Array.from(btn);
let val = document.querySelector('.input');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            val.value = string;
        }
        else if (e.target.innerHTML == "-1") {
            string = string - e.target.innerHTML -2;
            val.value = string;
        }
        else if (e.target.innerHTML == "+1") {
            string = string + e.target.innerHTML;
            string = eval(string);
            val.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            val.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            val.value = string;
        }
    });

});