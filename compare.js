function compare(a,b,c){
    return (a>b?a: b)>c?(a>b?a: b):c;
}
console.log(compare(7,9,12));

//throw抛出错误
//function sqrRoot(x) {
//    try {
//        if (x == '') throw{message: "Can't Square Root Noting"};
//        if (isNaN(x))throw{message:"Can't Square Root Strings"};
//        if (x < 0) throw{message:"Sorry No Imagination"};
//        return "sqrt(" + x + ")=" + Math.sqrt(x);
//    } catch (err) {
//        return err.message;
//    }
//
//}
//function writeIt(){
//    console.log(sqrRoot("four"));
//    console.log(sqrRoot(""));
//    console.log(sqrRoot("4"));
//    console.log(sqrRoot("-4"));
//}
//writeIt();
//console.log(sqrRoot(-1));
//function testTryCatch(value){
//    try{
//        if(value < 0){
//            throw "too small";
//        }else if(value > 10){
//            throw "too big";
//        }
//        console.log("hello test");
//    }catch(err){
//        console.log("The number was"+err);
//    }finally {
//        console.log("This is always written.");
//    }
//}
//testTryCatch(-3);