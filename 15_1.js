class MoneyBox {
    constructor(capacity) {
        this.capacity = capacity
        this.money = 0
    }

    can_add(v) {
        if (this.capacity - this.money >= v){ return true}
        else { return false }
    }

    add(v) {
        let money = 0
        if (this.can_add(v) === true) {this.money += v; return true}
        else {return false}
    }
}
