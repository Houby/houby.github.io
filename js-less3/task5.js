/**
 * Created by Yakuhaishik on 08.02.2017.
 */
var question = confirm('Доска будет квадратной?');
var dwidth, dheight, result = '';

if (question == true) {
    dwidth = dheight = +prompt('Введите ширину и высоту квадратной доски.','');
}
else {
    dwidth = +prompt('Введите ширину доски.','');
    dheight = +prompt('Введите высоту доски.','');
};

for (i = 1; i <= dheight; i++) {
    result = '';
    if (i % 2 !== 0) {
        for (j = 1; j <= dwidth; j++) {
            if (j % 2 !== 0) {
                result = result + '#';
            }
            else {
                result = result + '  ';
            }
        }
        console.log(result);
    } else {
        for (j = 1; j <= dwidth; j++) {
            if (j % 2 !== 0) {
                result = result + '  ';
            }
            else {
                result = result + '#';
            }
        }
        console.log(result);
    };
};