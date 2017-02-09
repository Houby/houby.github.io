/**
 * Created by Yakuhaishik on 09.02.2017.
 */
function find_average(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i], 10);}
    var average = sum / array.length;
    return average;
    console.log(average);
}