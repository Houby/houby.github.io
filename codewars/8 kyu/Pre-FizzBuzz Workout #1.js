/**
 * Created by Yakuhaishik on 10.02.2017.
 */
function preFizz(n) {
    var array = [], j = 0;
    for (i = 0; i < n; i++) {
        array[i] = ++j;
    };
    return array;
}