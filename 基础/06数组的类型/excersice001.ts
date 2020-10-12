
//一、类型+方括号表示法

let fibonacci:number[] = [1,2,3,4,6];
//数组中不允许出现其他类型
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制

//二、数组泛型
let fibonacci2:Array<number> = [1,2,3,4,5]

//三、用接口表示数组
interface NumberArray{
    [index:number]:number;
}
let fibonacci3:NumberArray = [1,1,2,4,5]