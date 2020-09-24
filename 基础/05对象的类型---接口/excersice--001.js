var tom = {
    name: 'tom',
    age: 32
};
//1.tom的形状必须和Person一致
//2.接口一般首字母大写
//3.定义的变量比接口多或者少都是不可以的
console.log(tom);
var tom1 = {
    name: 'tom1'
};
var tom2 = {
    name: 'tom2',
    age: 22
};
console.log(tom1);
console.log(tom2);
var tom3 = {
    name: 'tom3',
    age: 25,
    gender: true
};
var tom4 = {
    id: 3333,
    name: 'tom4'
};
tom4.id = 0;
