class ExtendedStack extends Array {
    sum() {
        let top1 = this.pop()
        let top2 = this.pop()
        this.push(top1 + top2)
    }
    sub(){
        let top1 = this.pop()
        let top2 = this.pop()
        this.push(top1 - top2)
    }
    mul() {
        let top1 = this.pop()
        let top2 = this.pop()
        this.push(top1 * top2)
    }
    div() {
        let top1 = this.pop()
        let top2 = this.pop()
        this.push(top1 / top2)
    }
}