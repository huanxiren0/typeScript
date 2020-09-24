//ts会根据变量的赋值对没有指明变量类型的变量推测出一个类型
let number = 'seven';
// number = 7;Type 'number' is not assignable to type 'string'.
//如果定义的时候没有赋值，不管之后有没有赋值，，都会被推断为any类型而完全不被类型检查
let some;
some = 7;
some = 'some'