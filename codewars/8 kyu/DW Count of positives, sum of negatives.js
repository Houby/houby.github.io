/**
 * Created by Yakuhaishik on 09.02.2017.
 */
function countPositivesSumNegatives(input) {
    var count = 0, sum = 0;
    if (input != null) {
        for (i=0; i<input.length; i++) {
            if (input[i] > 0) {++count;}
            else {sum += input[i];};};};
    var result = [count, sum];
    return result;
    content.log(result);
}