const Generator = require('id-generator');
const g = new Generator();

class Store {
    constructor(name) {
        this.name = name;
        this.movies = [];
    }

    save(name) {
        const newMovie = { name: name, _id: g.newId() };
        this.movies.push(newMovie);
        return newMovie;
    }
}

module.exports = Store;