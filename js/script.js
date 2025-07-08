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

/* Fahrenheit */

/* fahrenheit1 */
let fahrenheit1Input = document.getElementById('fahrenheit1');

/* fahrenheit2 */
let fahrenheit2Input = document.getElementById('fahrenheit2');
let fahrenheit2value = fahrenheit2Input.value;
let fahrenheit2 = Number(fahrenheit2value);

/* Kelvin */

/* kelvin1 */
let kelvin1Input = document.getElementById('kelvin1');

function click1() {
    let fahrein1 = (celsius1 * 9 / 5) + 32
    let fahrein = fahrein1.toFixed(1)
    fahrenheit1Input.placeholder = `${fahrein}°F`
}

function click2() {
    let cel1 = (fahrenheit2 - 32) * 5 / 9
    let cel = cel1.toFixed(1)
    celsius2Input.placeholder = `${cel}°C`
}

function click3() {
    let kel1 = celsius3 + 273.15
    let kel = kel1.toFixed(2);
    kelvin1Input.placeholder = `${kel}K`
}

function click4() {

}

function click5() {

}

function click6() {

}