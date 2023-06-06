//задание 1

let value = +prompt('Insert the value');

if (typeof value === 'number' && !isNaN(value)) {
    value % 2 === 0 ? console.log('Even number') : console.log('Odd number');
} else {
    console.log('Oops! You\'re wrong!');
}