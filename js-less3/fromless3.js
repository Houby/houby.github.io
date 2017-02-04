/**
 * Created by Yakuhaishik on 04.02.2017.
 */
var a = +prompt('i=',''), b = +prompt('i<','');
if (a>2) {a=2};
if (b<10) {b=10};
console.log('i=', a, '   i<', b);
for (var i=a; i<=b; ++i) {
    if (i % 2 != 0 || i<=0 || i>10) {
        continue;
    }
    console.log(i);
}