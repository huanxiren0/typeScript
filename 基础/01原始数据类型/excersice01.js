//布尔类型
var isDone = false; //boolean定义布尔值类型
// let createBoooleanByNewBoolean:boolean = new Boolean(1);//new Boolean(1)是一个对象不是布尔值
var createByBoolean = Boolean(1); //直接调用Boolean返回的也是布尔值
//数字类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var notAnumber = NaN;
var infinityNumber = Infinity;
//字符串
var myName = 'Tom';
var myAge = 25;
//模板字符串
var sentence = "Hello,my name is " + myName + ", I'll be " + myAge + " years old next month.";
//空值
//void表示没有返回值的函数
function alertName() {
    alert('my name is Tom');
}
//void类型的变量只能被赋值为null 或者undefined
//null  undefined类型是所有类型的子类型
var u = undefined;
var n = null;
//null和undefined可以赋值给所有类型，viod类型则不可以
var num = 1;
num = u;
num = n;
