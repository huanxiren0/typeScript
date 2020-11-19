//1、数组的解构赋值

//es6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这个被称为解构（Destructuring)

let [a,b,c] = [1,2,3];
console.log('a===='+a+','+'b===='+b+','+'c===='+c);
//这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被
//赋予对应的值。

//example1:::
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log('foo===='+foo+','+'bar===='+bar+','+'baz===='+baz);

//example2:::
let [, , third] = ['foo','bar','baz'];
console.log('third==='+third);

//example3:::
let [x, ,y] = [1,2,3];
console.log('x==='+x+','+'y==='+y);

//example4:::
let [head,...tail] = [1,2,3,4];
console.log('head==='+head+','+'tail==='+tail);
console.log(tail)

//example5:::
let [x1,y1,...z] = ['a'];
console.log('x1==='+x1+','+'y1==='+y1+','+'z===='+z);
//如果解构不成功变量的值就等于undefined

//example6:::
let [foo1] = [];
let [bar1,foo2] = [1];
console.log('foo1==='+foo1);
console.log('bar1==='+bar1+',foo2==='+foo2);

//example7:::不完全解构：即等号左边的模式，只匹配一部分等号右边的数组。
let [x2,y2] = [1,2,3];
console.log('x2==='+x2+',y2==='+y2);

//example8:::不完全解构
let [a1,[b1],c1] = [1,[2,3],4];
console.log('a1==='+a1+',b1==='+b1+',c1==='+c1)

//example9:::如果等号右边不是可遍历的结构会报错
// let [fooo] = 1;
// let [foo3] = false;
// let [foo4] = NaN;
// let [foo5] = undefined;
// let [foo6] = null;
// let [foo7] = {};


//example10:::set结构也可以使用数组的解构赋值
let [x3,y3,c3] = new Set(['a','b','c']);
console.log('x3==='+x3+',y3==='+y3+',c3==='+c3);

//example10:::只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值
function* fibs(){
    let a = 0;
    let b = 1;
    while (true){
        yield a;
        [a,b] = [b,a+b];
    }
}

let [fir,sec,thi,fou,fif,six] = fibs();
console.log('fir==='+fir);
console.log('sec==='+sec);
console.log('thi==='+thi);
console.log('fou==='+fou);
console.log('fif==='+fif);
console.log('six==='+six);

//example11:::解构赋值允许指定默认值
let [foo4 = 'xxx'] = [];
console.log('foo4==='+foo4);

let [x4,y4='yx'] = ['a'];
console.log('x4==='+x4+',y4==='+y4);

let [x5,y5='yx'] = ['a',undefined];
console.log('x5==='+x5+',y5==='+y5);

//example12:::es6内部使用严格相等运算符（===），判断一个位置是否有值。
let [x6=1] = [undefined];
console.log('x6==='+x6);

let [x7=1] = [null];
console.log('x7==='+x7);

let x8;
if([null][0]===undefined){
    x8 = 1;
}else{
    x8 = [null][0];
}

//example13:::
let [x9 = 1,y9 = x9] = [];
console.log('x9='+x9+',y9='+y9);

let [x10 = 1,y10 = x10] = [2];
console.log('x10='+x10+',y10='+y10);

let [x11 = 1,y11 = x11] = [3,4];
console.log('x11='+x11+',y11='+y11);

// let [x12 = y12, y12 = 1] = [];
// console.log('x12='+x12);//y12 is not defined;


//2、对象的解构赋值

//example14:::
let { foo5, bar5} = { foo5: 'aaa', bar5: 'bbb' };
console.log('foo5='+foo5+',bar5='+bar5);

//数组的元素是按照次序排列的，变量的取值由它的位置决定
//对象的属性没有次序，变量必须与属性同名，才能取到正确的值
//example15:::
let {  baz6, foo6 } = { foo6: 'zzz',bar6: 'bbb' };
console.log('foo6='+foo6+',baz6='+baz6);

//对象的解构赋值，可以很方便的将现有对象的方法，赋值到某个变量
//example16:::
let { sin, cos } = Math;
console.log(sin());

const { log } = console;
log('hello');

//example17:::变量名与属性名不一致时
let { foo7:baz7 } = { foo7:'fff', bar7: 'bbb' };
console.log('baz7='+baz7);

let obj1 = { first1: 'hello', last1: 'world' };
let { first1: f, last1:l } = obj1;
console.log('f='+f+',l='+l);
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋值给对应的变量，真正被赋值的是后者，而不是前者


//example18:::与数组一样，解构也可以用于嵌套结构的对象
let obj2 = {
    p:[
        'hello',
        { y18: 'world' }
    ]
};
// let { p } = obj2;
// let { p: [x18, { y18 }] } = obj2;//此时p是模式不是变量不会被赋值
let { p, p: [x18, { y18 }] } = obj2;//此时p可以作为变量被赋值
console.log('p='+p);
console.log('x18='+x18+',y18='+y18);

//example9:::
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let { loc, loc: { start:s }, loc: { start: { line }} } = node;
console.log(loc);
console.log(s);
console.log(line)

//example20:::
let obj4 = {};
let arr4 = [];
({ foo20: obj4.prop, bar20: arr4[0] } = { foo20: 123, bar20: true })
console.log(obj4);
console.log(arr4);

//example21:::
let { foo21, foo21: { bar21 } } = { foo21: { bar21: 'bbbb' } }
console.log(foo21)
console.log(bar21)

//example22:::对象的解构赋值可以取到继承的属性
const obj5 = {};
const obj6 = { foo22: 'foo22:::aaaa' };
Object.setPrototypeOf(obj5,obj6);

const { foo22 } = obj5;
console.log(foo22)

//example23:::
//默认值生效的条件是，对象的属性值严格等于undefined
let { x23 = 3 } = {};
console.log('x23='+x23);

let { x24, y24 = 5 } = { x24: 1 };
console.log('x24='+x24+',y24='+y24);

let { x25: y25 = 3 } = { y25: 4 };
log('y25='+y25);

let { x26: y26 = 3 } = { x26: 5 };
log('y26='+y26);

//example24:::如果将一个已经声明的变量用于解构赋值，必须非常小心
//错误写法
// let x27;
// { x27 } = { x27: 1 };

//正确写法
let x27;
({ x27 } = { x27: 1 });
log('x27='+x27);

//example25:::
//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
let arr25 = [1, 2, 3];
let { 0: first25, [arr25.length-2]: last25} = arr25;
console.log('first25='+first25+',last25='+last25);


//3、字符串的解构赋值
//example26:::
const [a26,b26,c26,d26,e26] = 'hello';
log('a26='+a26+',b26='+b26+',c26='+c26+',d26='+d26+',e26='+e26);

const { 0: a27, 1: b27, 2: c27, 3: d27, 4: e27 } = 'hello';
log('a27='+a27+',b27='+b27+',c27='+c27+',d27='+d27+',e27='+e27);

let { length: len26 } = 'hello';
log('len26='+len26);

//4、数值和布尔值的解构赋值
//解构赋值的规则是，只要右边的值不是对象或数组，就先将其转为对象。
//由于undefined和null无法转为对象，所以对她们进行解构赋值，都会报错

//example27:::
let {toString: s27} = 123;
log('s27='+(s27 === Number.prototype.toString));

let {toString: s28} = true;
log('s28='+(s28 === Boolean.prototype.toString));


//5、函数参数的解构赋值