//一、语法
//值 as 类型   或者   <类型>值
//注意：在tsx语法（react）中必须使用前者，即 值 as 类型。
// function isFish(animal: Cat | Fish ){
//     if(typeof animal.swim === 'function'){
//         return true;
//     }
//     return false;
// }
// Property 'swim' does not exist on type 'Cat | Fish'.
//Property 'swim' does not exist on type 'Cat'.
function isFish(animal) {
    // if(typeof (animal as Fish).swim==='function'){
    //     return 'true';
    // }
    // return 'false';
    animal.swim();
}
//注意：此时类型断言只能够欺骗TypeScript编译器，
//无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误
var tom = {
    name: 'tom',
    run: function () {
        console.log('run');
    }
};
function isApiError(error) {
    if (typeof error.code === 'number') {
        // if(error instanceof ApiError){
        return true;
    }
    return false;
}
