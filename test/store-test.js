const assert = require('assert');
const Store = require('../lib/store');

describe('The Movie Store', () => {

    let store;
    let current_id;
    before(() => {
        store = new Store('The Movie Store');
        store.save({ name: '2001: A Space Odyssey' });
        store.save({ name: 'Star Trek' });
    });

    it('SAVE a new Movie', () => {
        let objectToSave = { name: 'Blade Runner' };
        objectToSave = store.save(objectToSave);
        assert.ok(objectToSave);
        current_id = objectToSave._id;
    });

    it('GET a current movie', () => {
        const objectToGet = store.get(current_id);
        assert.deepEqual(objectToGet, { name: 'Blade Runner', _id: current_id });
    });

    it('GET a movie attempt by bad ID that returns null', () => {
        const objectToGet = store.get('bad id');
        assert.equal(objectToGet, null);
    });
    
    it('GET ALL movies back in an array', () => {
        const movieArray = store.getAll();
        assert.ok(movieArray);
    });

});