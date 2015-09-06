const useref = require("node-useref")
const assign = require("object-assign")

module.exports = function (debug) {
  this.filter("useref", (data, options) => {
    var result = useref(data.toString(), options)
    return assign({code: result[0], ext: ".html"}, result[1])
  })
}
