import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
    return this.items.find(item => item.id === id);
};

function addItem(name, starRating, description) {
    try {
        item.validateName(name);
        item.validateStarRating(starRating);
        this.items.push(item.create(name, starRating, description));
    } catch (e) {
        console.log(`ERROR! ${e.message}`);
    }
};


function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
    } catch (e) {
        console.log(`Cannot update name: ${error.message}`)
    }
}

function findAndDelete(id) {
    let index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}

function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};