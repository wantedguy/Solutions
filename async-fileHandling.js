var lineReader = require("line-reader");
let count = 0;
lineReader.eachLine("data.txt", function (line, last) {
  count += line.split(" ").length;
  if (last) {
    // if done
    console.log("count of words", count);
  }
});
