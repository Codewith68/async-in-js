console.log("statrt");
setTimeout(function TimerCB(){
    console.log("timer callback is triggered");
},1000);
const pr=new Promise(function executor(res,rej){
    console.log("executor function is triggered by promise object");
    setTimeout( function prCB(){
        let randomnumber=Math.floor(Math.random()*100);
        console.log("random number is: " + randomnumber);
        if(randomnumber%2===0) res("success");
        else rej("failure");
    },2000);
});
pr.then(function onFulfilled(){console.log(" promise is fulfilled")},
function onRejected(){consoele.log("promise is rejected");});
pr.then(function f(){console.log(" promise is f")},
function g(){consoele.log("promise is g");});
for(let i=0;i<1000000000;i++){}

console.log("promise object is created");
console.log(pr);
console.log("end");
