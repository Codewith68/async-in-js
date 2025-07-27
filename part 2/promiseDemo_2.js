const pr=new Promise(function executor(res,rej){
    console.log("executor function is triggered by promise object");
    let randomnumber=Math.floor(Math.random()*100);
    console.log("random number is: " + randomnumber);
    if(randomnumber%2===0){
        res("success");
    }else{
        rej("failuer");
    }
}
)
console.log("promise object is created");
console.log(pr);