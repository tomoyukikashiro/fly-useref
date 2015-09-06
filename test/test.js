var fs = require("fs")
var fixture = fs.readFileSync(__dirname + "/fixture.html", "utf8")
var html = fs.readFileSync(__dirname + "/index.html", "utf8")

if (html !== fixture) {
  console.error('See: diff test/fixture.html test/index.html')
  process.exit(1)
}

if (fs.existsSync(__dirname + "/index.html")) {
  fs.unlinkSync(__dirname + "/index.html")
}
