
class LoggableList extends Array, Loggable {
    append(item) {
        super.push(item)
        this.log(String(item))
}
}