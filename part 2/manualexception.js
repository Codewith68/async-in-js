function manualexception(){
    const randomnumber=Math.floor(Math.random()*100);
    console.log("random number is: " + randomnumber);
    if(randomnumber%2===0) return  "success";
    else throw "failure";
}
manualexception();
// This function will either return "success" or throw an error "failure"