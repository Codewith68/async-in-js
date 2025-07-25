/**implement a set of dummy functions which can mimic the behavior of the following functions :
 * 1.download -> this function should mimic downloading of some content from a url
 * 2.writefile -> this function should mimic writing some content to a file
 * 3.2.upload -> this function should mimic uploading the file to the server
 * 
 * 
 * now after implementing these functions,try to use them in scenario where you download a file,
 *  write it to disk and then upload it to the server.
 * 
 * 
 */


function Download(url,callback) {
    console.log(`Downloading content from ${url}...`);
    setTimeout(() => {
        console.log(`Download complete from ${url}`);
        let downloadedContent = "some data"; // Simulating downloaded content
        callback ?.(downloadedContent);
    }, 3000); // Simulating a 2-second download
}
function WriteFile(data, filename, callback) {
    console.log("Writing",data,"to file...");
    setTimeout(() => {
        console.log("File written successfully.");
        let status="success"; // Simulating write status
        callback?.(status);
    }, 2000); // Simulating a 1-second write operation
}
function upload(filename, url, callback) {
    console.log(`Uploading ${filename}...`,"to", url);
    setTimeout(() => {
        console.log(`${filename} uploaded successfully.`);
       let uploadstatus= "success"; // Simulating upload status
        callback?.(uploadstatus);
    }, 4000); // Simulating a 3-second upload
}

function processFile(){
    Download("http://example.com/file", function handelDownload(data)  {
        WriteFile(data, "file.txt", function handelwritefile(status) {
            if (status === "success") {
                upload("file.txt", "http://example.com/upload", function handelupload(uploadStatus) {
                    console.log("File processing completed with status:", uploadStatus);
                });
            } else {
                console.log("Failed to write file.");
            }
        });
    });
}
processFile();
// This will initiate the download, write, and upload process in sequence.
