console.log("statrt");
const pr1=new Promise((res, rej) => {
    console.log("exceeutor object is triggred by promise object :p1");
   setTimeout(()=>{
    console.log("timer of p1 done ");
    res(100);
   },500)
});
pr1.then(function a(){console.log("a")},function b(){console.log("b")});
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
pr.then(function onFulfilled(v){console.log(" promise is fulfilled",v)},
function onRejected(v){consoele.log("promise is rejected",v);});
pr.then(function f(v){console.log(" promise is f",v)},
function g(v){consoele.log("promise is g",v);});
for(let i=0;i<1000000000;i++){}

console.log("promise object is created");
console.log(pr);
console.log("end");
