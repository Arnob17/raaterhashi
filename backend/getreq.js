class req {
    constructor () {
        this.id = '';
    }
    send_req(id) {
        return this.id = id;
    }
    get_req() {
        return this.id;
    }
}

module.exports = req;