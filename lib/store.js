const Generator = require('id-generator');
const g = new Generator();

class Store {
    constructor(name) {
        this.name = name;
        this.objects = [];
    }

    save(obj) {
        const newObj = { name: obj.name, _id: g.newId() };
        this.objects.push(newObj);
        return newObj;
    }

    get(_id) {
        if(!this.objects.find(obj => obj._id === _id)) return null;
        return this.objects.find(obj => obj._id === _id); 
    }

    getAll() {
        return this.objects.slice();
    }

    remove(_id) {
        if(!this.objects.find(obj => obj._id === _id)) return { removed: false };
        for(let i = 0; i < this.objects.length; i++) {
            if(this.objects[i]._id === _id) {
                this.objects.splice(i, 1);
                return { removed: true };
            }     
        }
    }
}

module.exports = Store;