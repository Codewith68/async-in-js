function* Mygenerator(){
    console.log("Generator started");

    yield 100;
    console.log("line 4");
    yield 99;
    console.log("line 6");
    yield 200;
    console.log("line 8");
    yield -1;
    console.log("Generator ended");
    yield "subrat ";// This yield will never be reached
    console.log("line 12");

}
const i=Mygenerator();
console.log(i.next()); // { value: 100, done: false }
console.log("generator outside");
console.log(i.next()); // { value: 99, done: false }
console.log("generator outside");
console.log(i.next()); // { value: 200, done: false }
console.log("generator outside");
console.log(i.next()); // { value: -1, done: false }
console.log("generator outside");
console.log(i.next()); // { value: undefined, done: true }
console.log("generator outside");
console.log(i.next()); // { value: "subrat ", done: false } - This will not execute

