const assert = require('assert');
const Store = require('../lib/store');

describe('The Movie Store', () => {

    let store;
    let emptyStore;
    let current_id;
    
    before(() => {
        store = new Store();
        emptyStore = new Store();
        store.save({ name: '2001: A Space Odyssey' });
        store.save({ name: 'Star Trek' });
    });

    it('SAVE a new Movie', () => {
        let objectToSave = { name: 'Blade Runner' };
        objectToSave = store.save(objectToSave);
        assert.notEqual(objectToSave._id, undefined);
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
        assert.notDeepEqual(movieArray, []);
    });

    it('GET ALL from an empty store with no movies', () => {
        const movieArray = emptyStore.getAll();
        assert.deepEqual(movieArray, []);
    });

    it('REMOVE a movie', () => {
        const movieToRemove = store.remove(current_id);
        assert.deepEqual(movieToRemove, { removed: true });
    });

    it('REMOVE - attempt to remove one that doesn\'t exist', () => {
        const movieToRemove = store.remove('bad id');
        assert.deepEqual(movieToRemove, { removed: false });
    });

});