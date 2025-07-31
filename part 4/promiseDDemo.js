function downloadfile(url){
    return new Promise(function executor(resolve, reject){
        console.log("downloading file from", url);
        setTimeout(function(){
            let data = "file content from " + url;
            console.log("download complete for", url);
            resolve("file content from " ,data);
        }, 2000);
    });
}




function writefile(data, filename){
    return new Promise(function executor(resolve, reject){
      console.log("Writing",data,"to file...");
      setTimeout(() => {
        console.log("File written successfully.");
        let status="success"; // Simulating write status
        resolve(status);
    }, 2000); // Simulating a 1-second write operation
})
}

function uploadfile(filename, url){
    return new Promise(function executor(resolve, reject){
        console.log(`Uploading ${filename}... to`, url);
        setTimeout(() => {
            console.log(`${filename} uploaded successfully.`);
            let uploadstatus= "success"; // Simulating upload status
            resolve(uploadstatus);
        }, 4000); // Simulating a 3-second upload
    });
}

function *exc(){
    console.log("strating execution ");
    const downloadedData = yield downloadfile("https://example.com/file.txt");
    console.log("File downloaded successfully:", downloadedData);
    const writeStatus = yield writefile(downloadedData, "file.txt");
    console.log("File written successfully:", writeStatus);
    const uploadStatus = yield uploadfile("file.txt", "https://example.com/upload");
    console.log("File uploaded successfully:", uploadStatus);

    console.log("File processing completed.");
    return uploadStatus;
}


const it=exc(); // exc funtion return us an iterator object of generator function 
const ft = it.next(); // this will start the execution of generator function and return us an object with value and done property
console.log("ft is ",ft);
ft.value.then(function doafterreceving(value){
    console.log("calling do after receiving data");
    const future = it.next(value); // this will call the next yield statement in the generator function
    if(future.done){
        console.log("All operations completed successfully.");
    }
    future.value.then(doafterreceving)
})