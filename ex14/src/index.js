function myForLoop1(){
    var evenNumbers = "" 
    for(var i=0; i<9; i++){
        if(i<8 && i % 2 == 0){
            evenNumbers += parseInt(i) + ", "; 

        }
        if(i==8){
            evenNumbers += parseInt(i);
        }
        i++;
    }
    return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers = "";
    for(var i=8;i>=0; i--){
        if(i > 0 && i % 2 == 0){
        evenInverseNumbers += parseInt(i) +", ";
        }
        if(i == 0){
            evenInverseNumbers += parseInt(i);
        }
    }
    return evenInverseNumbers;

}
console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};