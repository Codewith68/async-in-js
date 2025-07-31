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
        resolve (status);
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

async function exc(){
    try{
        console.log("strating execution ");
    const downloadedData = await downloadfile("https://example.com/file.txt");
    console.log("File downloaded successfully:", downloadedData);
    const writeStatus = await writefile(downloadedData, "file.txt");
    console.log("File written successfully:", writeStatus);
    const uploadStatus = await uploadfile("file.txt", "https://example.com/upload");
    console.log("File uploaded successfully:", uploadStatus);

    console.log("File processing completed.");
    return uploadStatus;
    }
    catch(error){
        console.error("An error occurred during file processing:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}

exc().then((result) => {
    console.log("All operations completed successfully:", result);
});



//this code is an example of using async/await to handle asynchronous operations in JavaScript.
// It simplifies the flow of asynchronous code, making it easier to read and maintain.
// The async function `exc` orchestrates the download, write, and upload operations sequentially.
// The `await` keyword pauses the execution of the function until the Promise is resolved, allowing for a more synchronous-like flow in asynchronous code.
// This approach avoids the complexity of nested callbacks and makes error handling more straightforward.
// The final result is a cleaner and more understandable code structure for handling asynchronous tasks.
// This code is a modern approach to handling asynchronous operations in JavaScript using async/await syntax.
