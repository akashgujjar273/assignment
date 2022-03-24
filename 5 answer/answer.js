const request = require("request");

const util = require("util");

// Use the util to promisify the request method
function getGoogleHomePage(finalCallBack) {
  const promisified = util.promisify(finalCallBack);
  promisified("http://www.google.com", function (error, response, body) {
    console.error("error:", error);
  }).then(data=>{
      console.log(data)
  });

  promisified(null, body);
}
console.log(
  getGoogleHomePage((result) => {
    console.log("RESULT==>", result);
  })
);

