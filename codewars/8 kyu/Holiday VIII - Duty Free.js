/**
 * Created by Yakuhaishik on 10.02.2017.
 */
function dutyFree(normPrice, discount, hol){
    var result = hol / (normPrice * discount / 100);
    return Math.floor(result);
}