/* Celsius */

/* celsius1 */
let celsius1Input = document.getElementById('celsius1');
let celsius1value = celsius1Input.value;
let celsius1 = Number(celsius1value);

/* celsius2 */
let celsius2Input = document.getElementById('celsius2');

/* celsius3 */
let celsius3Input = document.getElementById('celsius3');
let celsius3value = celsius3Input.value;
let celsius3 = Number(celsius3value);

/* celsius4 */
let celsius4Input = document.getElementById('celsius4');

/* Fahrenheit */

/* fahrenheit1 */
let fahrenheit1Input = document.getElementById('fahrenheit1');

/* fahrenheit2 */
let fahrenheit2Input = document.getElementById('fahrenheit2');
let fahrenheit2value = fahrenheit2Input.value;
let fahrenheit2 = Number(fahrenheit2value);

/* fahrenheit3 */
let fahrenheit3Input = document.getElementById('fahrenheit3');

/* fahrenheit4 */
let fahrenheit4Input = document.getElementById('fahrenheit4');
let fahrenheit4Value = fahrenheit4Input.value;
let fahrenheit4 = Number(fahrenheit4Value);

/* Kelvin */

/* kelvin1 */
let kelvin1Input = document.getElementById('kelvin1');

/* kelvin2 */
let kelvin2Input = document.getElementById('kelvin2');
let kelvin2Value = kelvin2Input.value;
let kelvin2 = Number(kelvin2Value);

/* kelvin3 */
let kelvin3Input = document.getElementById('kelvin3');
let kelvin3Value = kelvin3Input.value;
let kelvin3 = Number(kelvin3Value);

/* kelvin4 */
let kelvin4Input = document.getElementById('kelvin4');

function click1() {
    let fahrein1 = (celsius1 * 9 / 5) + 32
    let fahrein = fahrein1.toFixed(2)
    fahrenheit1Input.placeholder = `${fahrein}°F`
}

function click2() {
    let cel1 = (fahrenheit2 - 32) * 5 / 9
    let cel = cel1.toFixed(1)
    celsius2Input.placeholder = `${cel}°C`
}

function click3() {
    let kel1 = celsius3 + 273.15
    kelvin1Input.placeholder = `${kel1}K`
}

function click4() {
    let cel2 = kelvin2 - 273.15
    let cel = cel2.toFixed(1)
    celsius4Input.placeholder = `${cel}°C`
}

function click5() {
    let fah3 = (kelvin3 - 273.15) * 9 / 5 + 32
    let fah = fah3.toFixed(2);
    fahrenheit3Input.placeholder = `${fah}°F`
}

function click6() {
    let fah4 = (fahrenheit4 - 32) * 5 / 9 + 273.15
    let fah = fah4.toFixed(2);
    kelvin4Input.placeholder = `${fah}K`
}