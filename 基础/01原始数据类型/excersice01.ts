//布尔类型
let isDone:boolean = false; //boolean定义布尔值类型

// let createBoooleanByNewBoolean:boolean = new Boolean(1);//new Boolean(1)是一个对象不是布尔值

let createByBoolean:boolean = Boolean(1);//直接调用Boolean返回的也是布尔值


//数字类型
let decLiteral:number = 6;

let hexLiteral:number = 0xf00d;

let binaryLiteral:number = 0b1010;

let octalLiteral:number = 0o744;

let notAnumber:number = NaN;

let infinityNumber:number = Infinity;

//字符串
let myName:string = 'Tom';
let myAge:number = 25;
//模板字符串
let sentence:string = `Hello,my name is ${myName}, I'll be ${myAge} years old next month.`

//空值
//void表示没有返回值的函数
function alertName():void{
    alert('my name is Tom')
}
//void类型的变量只能被赋值为null 或者undefined

//null  undefined类型是所有类型的子类型
let u:undefined = undefined;
let n:null = null;
//null和undefined可以赋值给所有类型，viod类型则不可以

let num:number = 1;
num = u;
num = n;

let num2:number = undefined;