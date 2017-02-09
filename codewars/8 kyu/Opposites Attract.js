/**
 * Created by Yakuhaishik on 09.02.2017.
 */
function lovefunc(flower1, flower2){
    if (flower1 % 2 == 0) {
        if (flower2 % 2 !== 0) {return true;}
        else {return false;}
    } else {
        if (flower2 % 2 == 0) {return true;}
        else {return false;}
    };
};