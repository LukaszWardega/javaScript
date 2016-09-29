//equation

var a = prompt('Podaj wartość a:'),
    b = prompt('Podaj wartość b:'),
    value = (a * a) + (2 * a* b) - (b * b);

console.log(value);

if  (value > 0)  {
    console.log('Wynik wynosi: ' + value + ' więc jest dodatni');
    alert('Wynik wynosi: ' + value + ' więc jest dodatni');
}  else  if  (value < 0)  {
    console.log('Wynik wynosi: ' + value + ' więc jest ujemny');
    alert('Wynik wynosi: ' + value + ' więc jest ujemny');
}  else  {
    console.log('wynik równa się: ' + value );
    alert('wynik równa się: ' + value );
}
