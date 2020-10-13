//一、函数声明
function sum(x, y) {
    return x + y;
}
//1、输入多余（或者少于要求的）参数是不被允许的
// sum(1,2,3)
// Expected 2 arguments, but got 3
// sum('1',2)
//An argument for 'y' was not provided.
//二、函数表达式
var mysum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
//四、可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
}
buildName('tom1', 'tom2');
buildName('tom3');
buildName('');
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
function buildName2(firstName, secondName) {
    if (secondName === void 0) { secondName = 'cat'; }
    return firstName + '' + secondName;
}
var tomcat = buildName2('tom', 'cat');
var dog = buildName2('dog');
function buildName3(firstName, secondName) {
    if (firstName === void 0) { firstName = 'dog'; }
    return firstName + ' ' + secondName;
}
var dogTom = buildName3('dog', 'tom');
var cat = buildName3(undefined, 'cat');
//注意：有了参数默认值之后就不受可选参数必须在必需参数后面的限制了
var myDog = function (firstName, secondName) {
    if (firstName === void 0) { firstName = 'Dog'; }
    return firstName + secondName;
};
var myCatName;
myCatName = function (firstName, secondName) {
    if (firstName === void 0) { firstName = 'Cat'; }
    return firstName;
};
console.log(myCatName(undefined));
//六、剩余参数
function push(list) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        list.push(item);
    });
    return list;
}
var a = [];
console.log(push(a, 1, 2, 3));
function push2(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}
var a1 = ['aaa', 1];
console.log(push2(a1, 'asas', 34, { a: 1, n: 2 }));
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
