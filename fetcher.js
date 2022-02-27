//Paired with Liam Smith

const request = require("request");
const fs = require("fs");
const readline = require("readline");
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1]
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

request(url, (error, response, body) => {
  if (error) {
    console.log("Error: URL does not exist");
    rl.close();
  } else {
    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.log("Cannot create file");
      } else { 
        fs.stat (localPath, (err, stats) =>{
          console.log(
            `downloaded and saved ${
              stats.size
            } bytes to ${localPath}.`
          );
        })
      }
    });
  }
});
rl.close()
