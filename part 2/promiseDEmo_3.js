const pr=new Promise(function executor(res,rej){
    console.log("executor function is triggered by promise object");
    setTimeout(()=>{
        let randomnumber=Math.floor(Math.random()*100);
    console.log("random number is: " + randomnumber);
    if(randomnumber%2===0) res("success");
    else rej("failuer");
    }, 2000); // Simulating async operation with a timeout
});
console.log("promise object is created");
console.log(pr);