var fs = require('fs');
var savejs = fs.readFileSync('./save.js');
console.log(savejs);

var x,y;

if (x == undefined || y == undefined)
{
    console.log('undefined');
    x=1,y=3;
}
var saveObj = ['x='+x+',y='+y];
fs.writeFileSync('save.js', saveObj);
console.log('saved');
console.log(x+y);