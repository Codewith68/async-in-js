function fetchNextElement(arr){
    let idx=0;
    function next(){
        //some logic
        if(idx >=arr.length){
            return {value : undefined, done: true};
        }
        const newElement=arr[idx];
        idx++;
        //returning the next element
        //and marking it as not done
        return {value: newElement, done: false};
    }
    return {next};
}

const fetcher=fetchNextElement([1,2,3,4,5]);
console.log(fetcher.next()); // { value: 1, done: false }
console.log(fetcher.next()); // { value: 2, done: false }
console.log(fetcher.next()); // { value: 3, done: false }
console.log(fetcher.next()); // { value: 4, done: false }
console.log(fetcher.next()); // { value: 5, done: false }
console.log(fetcher.next()); // { value: undefined, done: true }