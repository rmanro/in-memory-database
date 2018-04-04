const assert = require('assert');
const Store = require('../lib/store');

describe('The Movie Store', () => {

    let store;
    let current_id;
    before(() => {
        store = new Store('The Movie Store');
    });

    it('SAVE a new Blu Ray', () => {
        let objectToSave = { name: 'Blade Runner' };
        objectToSave = store.save(objectToSave);
        assert.ok(objectToSave);
        current_id = objectToSave._id;
    });

});