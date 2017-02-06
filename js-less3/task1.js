/**
 * Created by Yakuhaishik on 06.02.2017.
 */
outer: do {
    var numbere = prompt('Введите число больше 100.','');
    if (numbere == null) {break outer;}
    if (isNaN(numbere) != false) {
        while (isNaN(numbere) != false) {
            var numbere = +prompt('Введите число больше 100.','');
            if (numbere == null) {break outer;}
        }
    }
} while (numbere < 101);