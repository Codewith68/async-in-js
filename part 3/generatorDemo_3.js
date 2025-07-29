function* genarateNumbers() {
    console.log("inside generators");
    const x= yield 10;
    const y=x+20;
    yield y;
}
const it=genarateNumbers();
console.log(it.next()); // { value: 10, done: false }
console.log(it.next(5)); // { value: 25, done: false }
console.log(it.next()); // { value: undefined, done: true }