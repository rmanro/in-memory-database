const assert = require('assert');
const Store = require('../lib/store');

describe('The Movie Store', () => {

    let store;
    let current_id;
    before(() => {
        store = new Store('The Movie Store');
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

});