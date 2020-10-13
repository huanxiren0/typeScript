//一、语法
//值 as 类型   或者   <类型>值
//注意：在tsx语法（react）中必须使用前者，即 值 as 类型。


//二、类型断言的用途
//（一）将一个联合类型断言为其中一个类型
//前提：当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此
//联合类型的所有类型中共有的属性或者方法
interface Cat {
    name:string;
    run():void;
}
interface Fish {
    name:string;
    swim():void;
}
// function isFish(animal: Cat | Fish ){
//     if(typeof animal.swim === 'function'){
//         return true;
//     }
//     return false;
// }
// Property 'swim' does not exist on type 'Cat | Fish'.
//Property 'swim' does not exist on type 'Cat'.

function isFish(animal :Cat | Fish){
    // if(typeof (animal as Fish).swim==='function'){
    //     return 'true';
    // }
    // return 'false';
    (animal as Fish).swim()
}
//注意：此时类型断言只能够欺骗TypeScript编译器，
//无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
const tom :Cat = {
    name:'tom',
    run(){
        console.log('run')
    }
}

// console.log(isFish(tom))
//注意：此时编译不会发生错误，但是运行代码时会发生错误
//animal.swim is not a function
//所以使用类型断言一定要格外小心，尽量避免
//断言后调用方法或者引用深层属性，以减少不必要的运行时错误



//（二）将一个父类断言为更加具体的子类
// class ApiError extends Error{
//     code: number=0;
// }
// class HttpError extends Error{
//     statusCode:number= 200;
// }
interface ApiError extends Error{
    code:number;

}
interface HttpError extends Error{
    statusCode:number;
}
function isApiError(error:Error){
    if(typeof (error as ApiError).code==='number'){
    // if(error instanceof ApiError){
        return true;
    }
    return false;
}


//（三）将任何一个类型断言为any
