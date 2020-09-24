//声明一个任意值后，对它的所有操作，返回的内容都是任意值
let anyThing:any = 'any';
anyThing = 7;
anyThing = false;
anyThing.setName('透明');
anyThing.name;

let something //此时会被识别为任意值
something = 'some';
something = 8;
something.name;
something.setName('asui');