//提取指定字符串输出数组
//function extract(str){
//    var str1=str.substr(str.indexOf(':'));
//    var str2=str1.substring(1,str1.indexOf('.'));
//    var arr=str2.split(",");
//    return arr;
//}
//var str="'This is one sentence. This is a sentence with a list of items:'" +
//    "+'cherries,oranges,apples,bananas.That was the list of items.'";
//console.log(extract(str));

//求一个数的阶层
function jc(n){
    return n==1?1:jc(n-1)*n;
}
console.log(jc(4));