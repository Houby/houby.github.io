/**
 * Created by Yakuhaishik on 04.02.2017.
 */

var userlogin = prompt('Введите логин','');

if (userlogin=='admin') {var userPassword = prompt('Введите пароль','');
    if (userPassword=='passw0rd') {alert('Welcome home!');}
    else if (userPassword == undefined) {alert ('Canceled.');}
    else {alert ('Wrong password.');}}
    else if (userlogin == undefined) {alert('Canceled.');}
    else {alert('Access denied.');}