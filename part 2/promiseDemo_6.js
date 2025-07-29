const p1=new Promise(function executor(res.rej){
    setTimeout(()=>{
       console.log("timer of p1 done");
       res(100);  //pending ->fulfiled   undefined ->100
    },500)
})
const p2= p1.then(function a(){console.log("a")},function b(){console.log("b")});
// p2 is a promise object which is returned by then method
const p3= p1.then(function onFulfilled(v){console.log(" promise is fulfilled",v)})