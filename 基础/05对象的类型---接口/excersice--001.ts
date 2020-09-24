interface Person{
    name:string;
    age:number;
}
let tom:Person = {
    name:'tom',
    age:32
}
//1.tom的形状必须和Person一致
//2.接口一般首字母大写
//3.定义的变量比接口多或者少都是不可以的
console.log(tom)

//可选属性
interface Person2{
    name:string;
    age?:number;
}
let tom1:Person2 = {
    name:'tom1'
}
let tom2:Person2 = {
    name:'tom2',
    age:22
}
console.log(tom1);
console.log(tom2);

//任意属性
interface Person3{
    name:string;
    age:number;
    gender?:boolean;
    [propName:string]:any;

}
let tom3:Person3 = {
    name:'tom3',
    age:25,
    gender:true
}
//1.一旦定义了任意属性，那么确定属性和可选属性的类型必须是它的类型的子集

//只读属性
interface Person4{
    readonly id:number;
    name:string;
}
let tom4:Person4 = {
    id:3333,
    name:'tom4'
}
//1.只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候