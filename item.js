const items = require('fakeDb.js');

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }
    
    static findAll(){
        return items
    }

    static update(name, data) {
        let updateItem = Item.findAll(name);
        if (updateItem === undefined) {
            throw {message: "Not Found", status: 404}
        }

        updateItem.name = data.name;
        updateItem.price = data.price;

        return updateItem;
    }

    static find(name) {
        const theItem = items.find(e => e.name === name);
        if (theItem === undefined) {
            throw {message: "Not Found", status: 404}
        }

        return theItem;
    }

    static delete(name) {
        const theItem = items.findIndex(e => e.name === name);
        if (theItem === -1) {
            throw {message: "Not Found", status: 404}
        }

        item.splice(theItem, 1);
    }
}

module.exports = Item;
