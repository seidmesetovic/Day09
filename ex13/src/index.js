function inverseWhile(){
    var fiveNumbers = "5,";
    var i = 4;
    while (i >= 0){
        fiveNumbers += parseInt(i) + ",";
        i --;
        if(i <= 0){
            fiveNumbers += parseInt(i)
            break;
        }

        
        

    }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;