//一、类型+方括号表示法
var fibonacci = [1, 2, 3, 4, 6];
//数组中不允许出现其他类型
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
//二、数组泛型
var fibonacci2 = [1, 2, 3, 4, 5];
var fibonacci3 = [1, 1, 2, 4, 5];
//四、类数组
function sum() {
    // let args:number[] = arguments;
}
//Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more.
//arguments是一个类数组，不能用普通的方法来描述，而应该用接口：
function sum2() {
    var args = arguments;
}
//事实上常用的类数组都有自己的接口定义，如IArguments,NodeList,HTMLCollection等：
function sum3() {
    var args = arguments;
}
// //IArguments是TypeScript中定义好的类型
// interface IArguments{
//     [index:number]:any;
//     length:number;
//     callee:Function;
// }
//五、any在数组中的应用
var list = ['xxxx', 25, false, { 'asas': 111 }];
