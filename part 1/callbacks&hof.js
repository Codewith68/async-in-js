const arr=[1,2,3,4,5,6,];
function mymap(arr,fn){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
console.log(mymap(arr,function getsquare(num){
    return num**2;
}))