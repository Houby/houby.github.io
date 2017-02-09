/**
 * Created by Yakuhaishik on 06.02.2017.
 */
var fizzBuzz;

for (fizzBuzz = 1; fizzBuzz < 101; fizzBuzz++) {
    if (fizzBuzz % 3 == 0) {
        console.log('Fizz');
    } else {
        if (fizzBuzz % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(fizzBuzz);
        }
    }
};