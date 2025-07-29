function* gen(){
    console.log("generator started");
    const x= yield 10;
    return  88;
    const y=x+10;
    yield y;
    console.log("generator ended");
}
const it=gen();
console.log(it.next()); // { value: 10, done: false }
console.log(it.next(5)); // { value: 88, done: true }
console.log(it.next()); // { value: undefined, done: true }