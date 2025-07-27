const pr=new Promise((res, rej) => {
    console.log("exceeutor object is triggred by promise object");
    for(let i=0;i<1000000000;i++){}
})
console.log("promise object is created");
console.log(pr);
