/**
 * Created by Yakuhaishik on 08.02.2017.
 */
function pow (x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
var a = prompt('Введите число, которое нужно возвести в степень.'),
    b = prompt('Введите степень, в которую  нужно возвести число.','')
console.log(pow(a, b));