function functionElse(num){
    var result;
    if(num <= 5){
    result = "5 or smaller";
    console.log(result);

}
else{
    result = "Bigger than 5";
    console.log(result);

}

}
functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);
module.exports = functionElse;