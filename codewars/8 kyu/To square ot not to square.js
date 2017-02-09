/**
 * Created by Yakuhaishik on 10.02.2017.
 */
function squareOrSquareRoot(array) {
    for (i=0; i<array.length; i++) {
        if (Math.sqrt(array[i]) % 1 == 0) {array[i] = Math.sqrt(array[i])}
        else {array[i] *= array[i];};
    };
    return array;
}