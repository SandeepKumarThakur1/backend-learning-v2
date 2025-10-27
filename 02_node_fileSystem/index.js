const fs = require("fs");

// Create File
// fs.writeFile("demo.txt","Hey, this is demo data file with create text. ", function(err){
//     if(err) console.error(err);
//     else console.log("Done Task.")
// })

// Add text in File
// fs.appendFile("demo.txt","Hey, I'm Sandeep Kumar.", function(err){
//     if(err) console.error(err);
//     else console.log("Done Task.")
// })

// Rename file
// fs.rename("demo.txt","changeFile.txt",function(err){
//     if(err) console.error(err)
//     else console.log("Changed File Name.")
// })

// Copy File
// fs.copyFile("changeFile.txt","./copyfiled/copy.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Copied File");
// })

// Remove File
// fs.unlink("changeFile.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Removed")
// })

// Remove Folder
// fs.rm("./copyfiled", { recursive: true }, function (err) {
//   if (err) console.error(err);
//   else console.log("Remove Folder");
// });

// Read File
// fs.readFile("./copyFile/hello.txt", "utf8", function (err, data) {
//   if (err) console.error(err);
//   console.log(data);
// });

// Create Folder
// fs.mkdir("./createdFile/demo.txt", { recursive: false }, function (err) {
//   if (err) console.error(err);
//   else console.log("Folder created successfully!");
// });

// fs.writeFile("./createdFile/demo.txt", "This is Create by FS." , function (err) {
//   if (err) console.error(err);
//   else console.log("create file and Text Added Successful");
// });
