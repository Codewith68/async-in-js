function* generator(arr){
    for(let i=0;i<arr.length;i++){
        console.log("inside generator");
        yield arr[i];
    }
    console.log("Generator completed");
}
const i=generator([1,2,3,4,5]);
console.log(i.next()); // { value: 1, done: false }
console.log(i.next()); // { value: 2, done: false }
console.log(i.next()); // { value: 3, done: false }