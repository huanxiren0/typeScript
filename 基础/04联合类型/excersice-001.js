var myNumber;
myNumber = 7;
myNumber = 'seven';
myNumber = false; //Type 'boolean' is not assignable to type 'string | number'.
function getLength(sonmething) {
    return sonmething.length;
}
//length不是number和string的共有熟性
// Property 'length' does not exist on type 'string | number'.
//Property 'length' does not exist on type 'number'.
