/**
 * Created by Yakuhaishik on 04.02.2017.
 */

var name = prompt('login','');

var text = (name == 'admin') ? 'Hi' : (name== 'manager') ? 'Hello' : (name == '') ? 'No login' : 'Canceled';

alert(text);