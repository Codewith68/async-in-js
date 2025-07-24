setTimeout(() => {
    console.log("This is executed after 2 seconds");
}, 100);
let x=0;
for(let i=0;i<10;i++){
    x++;
}
setTimeout(() => {
    console.log("This is executed after 6 seconds");
}, 4);
console.log("This is executed after the loop completes");
console.log("Loop completed with x =", x);
console.log("This is executed immediately after the setTimeout");

