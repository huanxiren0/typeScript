//一、函数声明
function sum(x:number,y:number):number{
    return x+y
}
//1、输入多余（或者少于要求的）参数是不被允许的

// sum(1,2,3)
// Expected 2 arguments, but got 3

// sum('1',2)
//An argument for 'y' was not provided.

//二、函数表达式
let mysum:(x:number,y:number) => number=  function(x:number,y:number):number{
    return x+y;
}
//注意：1.不要混淆了TypeScript中的=>和es6中的=>.
//2.在TypeScript的类型定义中，=>用来表示函数的定义，左边是输如类型，需要用括号扩起来，右边是输出类型。
//3.在es6中=>表示箭头函数

//三、用接口定义函数的形状
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source:string,subString:string):boolean{
    return source.search(subString)!==-1;
}

//四、可选参数
function buildName(firstName:string,lastName?:string):string{
    if(lastName){
        return firstName+lastName;
    }else{
        return firstName;
    }
}
buildName('tom1','tom2')
buildName('tom3')
buildName('')

// function sumName(first?:string,secondN:string):string{
//     if(first){
//         return first+secondN;
//     }else{
//         return secondN;
//     }
// }
// sumName('tom','ton6')
//A required parameter cannot follow an optional parameter.
//注意：1.可选参数必须接在必需参数后面。换句话说，可选参数后面不允许出现必需参数


//五、参数默认值
function buildName2(firstName:string,secondName:string = 'cat'){
    return firstName+''+secondName;
}
let tomcat = buildName2('tom','cat');
let dog = buildName2('dog')

function buildName3(firstName:string = 'dog',secondName:string){
    return firstName+ ' '+secondName;
}
let dogTom = buildName3('dog','tom')
let cat = buildName3(undefined,'cat')

//注意：有了参数默认值之后就不受可选参数必须在必需参数后面的限制了

let myDog:(firstName:string,secondName:string)=>string = function(firstName:string='Dog',secondName:string):string{
    return firstName+secondName;
}

interface MyCat{
    (firstName:string,secondName?:string):string;

}
let myCatName:MyCat;
myCatName=  function(firstName:string='Cat',secondName:string):string{
    return firstName;
}
console.log(myCatName(undefined))


//六、剩余参数
function push(list,...items){
    items.forEach(function(item){
        list.push(item);
    })
    return list;
}
let a :any[] = [];
console.log(push(a,1,2,3))

function push2(array:any[],...items:any[]){
    items.forEach(function(item){
        array.push(item)
    })
    return array;
}
let a1 = ['aaa',1];
console.log(push2(a1,'asas',34,{a:1,n:2}));
//注意：rest参数只能是最后一个参数

//七、重载
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:string|number):string|number{
    if(typeof x==='number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x==='string'){
        return x.split('').reverse().join('');
    }
}