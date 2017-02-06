/**
 * Created by Yakuhaishik on 06.02.2017.
 */
var firstNumber = prompt('Введите первое число.',''),
    secondNumber = prompt('Введите второе число','');

outer: for (var i = firstNumber; i < secondNumber; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    console.log(i);
}