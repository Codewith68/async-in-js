function manualexception(){
    const randomnumber=Math.floor(Math.random()*100);
    console.log("random number is: " + randomnumber);
    if(randomnumber%2===0) return  "success";
    else throw "failure";
}
function caller(){
    try{
        console.log("this is risky code ");
        const result = manualexception();
        console.log("result is: " + result);
    }
    catch (exception){
        console.log("caught exception: " + exception);
    }
}
    caller();
// This function will either return "success" or throw an error "failure"