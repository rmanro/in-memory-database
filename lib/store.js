const Generator = require('id-generator');
const g = new Generator();

class Store {
    constructor(name) {
        this.name = name;
        this.movies = [];
    }

    save(obj) {
        const newMovie = { name: obj.name, _id: g.newId() };
        this.movies.push(newMovie);
        return newMovie;
    }

    get(_id) {
        if(!this.movies.find(movie => movie._id === _id)) return null;
        return this.movies.find(movie => movie._id === _id); 
    }
}

module.exports = Store;