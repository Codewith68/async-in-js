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
        reject(status);
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

//  these all are parallel execution


// downloadfile("https://example.com/file.txt")
// .then(function(data){
//     console.log("File downloaded successfully:", data);
// })

// writefile("file content from https://example.com/file.txt", "file.txt")
// .then(function(status){
//     console.log("File written successfully:", status);
// })
// .uploadfile("file.txt", "https://example.com/upload")
// .then(function(uploadStatus){
//     console.log("File uploaded successfully:", uploadStatus);
// })






// this is sequential execution
console.log("Starting file processing...");
downloadfile("https://example.com/file.txt")
.then(function(data){
    console.log("File downloaded successfully:", data);
    return writefile(data, "file.txt");
})
.then(function(status){
    console.log("File written successfully:", status);
    return uploadfile("file.txt", "https://example.com/upload");
})
.then(function(uploadStatus){
    console.log("File uploaded successfully:", uploadStatus);
})
.catch(function(error){
    console.error("An error occurred:", error);
});
console.log("File processing completed.");
// This will initiate the download, write, and upload process in sequence.