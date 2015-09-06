export default function* () {
  yield this.clear("test/index.html")
  yield this
    .source("test/src/index.html")
    .useref()
    .target("test")
}
