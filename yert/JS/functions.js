/**
 * Created by Yakuhaishik on 10.09.2017.
 */

var fibon = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
var chance = [1,1,1,1,1,1,0.75,0.70,0.65,0.60,0.55,0.50,0.45,0.40,0.35,0.30];

var frig1=0;
function frigi1() {
    var n = 50 + Math.floor(Math.random()*20);
    frig1+=n;
    document.getElementById('numbering').innerHTML = frig1;
}

var count=0;
function inc(n) {
    count+=n;
    if (count<0) {
        console.log("hui");
        count=0
        document.getElementById('naming').innerHTML = count;
    } else {
        if (count>15) {
            console.log(count);
            count = 15
            document.getElementById('naming').innerHTML = count;
        } else {

            if (frig1<fibon[count]) {
                count = count-1;
                document.getElementById('naming').innerHTML = count;
            } else {
                var tetta = Math.random();
                console.log(tetta);
                if (tetta>chance[count]) {
                    frig1 = frig1 - fibon[count];
                    document.getElementById('numbering').innerHTML = frig1;
                    count = count - 1;
                    document.getElementById('naming').innerHTML = count;
                } else {
                    frig1 = frig1 - fibon[count];
                    document.getElementById('numbering').innerHTML = frig1;
                    console.log(count);
                    document.getElementById('naming').innerHTML = count;
                };
            };
        };
    };
    console.log(frig1);
};

function refresh() {
    count = 0;
    document.getElementById('naming').innerHTML = count;
}
