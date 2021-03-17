function myDoWhile(){
    var myNumbers = "";
    var i = 0;
    do{
        if(i == 9){
            myNumbers += parseInt(i);
            break;
        }else{
        myNumbers += parseInt(i) + ", ";}
        i++;
    }
    while (i < 10);
    return myNumbers;
}
console.log(myDoWhile());
module.exports = myDoWhile;