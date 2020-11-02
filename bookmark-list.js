import store from './store.js'
import item from './item.js';

const generateItemElement = function(item) {
    let itemTitle = `<span class="bookmark-item bookmark-item__checked">${item.name}</span>`;
    if (!item.checked) {
        itemTitle = `
      <form class="js-edit-item">
        <input class="bookmark-item" type="text" value="${item.name}" />
      </form>
      
      
    `;
    }

    return `
    <li class="js-item-element" data-item-id="${item.id}">
      ${itemTitle}
      <div class="bookmark-item-controls">
        
      <span><strong>Rating:</strong> ${item.starRating}</span><br>
      <p>${item.description}</p>

        <button class="bookmark-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>


        
      </div>
    </li>`;


};

const generatebookmarkItemsString = function(bookmarkList) {
    const items = bookmarkList.map((item) => generateItemElement(item));
    return items.join('');
};

const render = function() {
    // Filter item list if store prop is true by item.checked === false
    let items = [...store.items];

    // render the bookmark list in the DOM
    const bookmarkListItemsString = generatebookmarkItemsString(items);
    // insert that HTML into the DOM
    $('.js-bookmark-list').html(bookmarkListItemsString);
    ///if (...) run firstPage()

    // PageTransitionEvent()

    $(`body`).html(createInitialView());
    //$(`body`).html(secondPage)
};


const handleNewItemSubmit = function() {
    $('#js-bookmark-list-form').submit(function(event) {
        event.preventDefault();
        const name = $('.js-bookmark-list-entry').val();
        $('.js-bookmark-list-entry').val('');

        const description = $('#user-name').val();
        $('#user-name').val('');

        const starRating = Number($('input[name=filterStarRating]:checked').val());

        store.addItem(name, starRating, description);
        console.log(store.items);
        console.log(starRating);
        render();
    });
};





const getItemIdFromElement = function(item) {
    return $(item)
        .closest('.js-item-element')
        .data('item-id');
};

/**
 * Responsible for deleting a list item.
 * @param {string} id 
 */

const handleDeleteItemClicked = function() {
    // like in `handleItemCheckClicked`, we use event delegation
    $('.js-bookmark-list').on('click', '.js-item-delete', event => {
        // get the index of the item in store.items
        const id = getItemIdFromElement(event.currentTarget);
        console.log(id);
        // delete the item
        store.findAndDelete(id);
        // render the updated bookmark list
        render();
    });
};

const handleEditbookmarkItemSubmit = function() {
    $('.js-bookmark-list').on('submit', '.js-edit-item', event => {
        event.preventDefault();
        const id = getItemIdFromElement(event.currentTarget);
        const itemName = $(event.currentTarget).find('.bookmark-item').val();
        store.findAndUpdateName(id, itemName);
        render();
    });
};

const bindEventListeners = function() {
    handleNewItemSubmit();

    handleDeleteItemClicked();
    // handleEditbookmarkItemSubmit();
    // handleToggleFilterClick();
};

// This object contains the only exposed methods from this module:
export default {
    render,
    bindEventListeners
};