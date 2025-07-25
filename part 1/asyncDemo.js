function createTimer(time,timerId){
    console.log("creating a new timer with timer id",timerId);
    setTimeout(()=>{
        console.log("timer with id is",timerId, "is executed after", time, "milliseconds");
    
    },time);
    console.log("timer with id", timerId, "created");
}
console.log("Creating timers...");
createTimer(1000, 1);
createTimer(0, 2);
console.log("starting a loop");
for(let i=0;i<100000000;i++){
    //something is done
}
console.log("Loop completed");
console.log("End line of the script");
console.log("This is executed immediately after the loop completes");