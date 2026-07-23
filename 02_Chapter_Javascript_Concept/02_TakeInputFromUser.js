const fs = require("fs");

const name1 = fs.readFileSync(0, "utf8").trim();

console.log(`Hello, ${name1}!`);
