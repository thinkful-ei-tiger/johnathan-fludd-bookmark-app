import $ from 'jquery';

const targetURL = 'https://thinkful-list-api.herokuapp.com/johnathan/Bookmarks';

let bookmarks, bookmark, _bookMarkList, idBookmark, postBody;   

function getBookmarksList(filter = false, rating = false) {
    fetch(targetURL, { method: 'GET' })
    .then(resp => resp.json())
    .then(bookmarks => { 
        _bookMarkList = '';
        if (bookmarks.length > 0) {
            for (const bookmark of bookmarks) {
                if (filter && bookmark.rating != rating && rating != '') continue;
                _bookMarkList += '<li data-idBookmark="' + bookmark.id + '">' + bookmark.title + '<span class="bookmark-rating">' + bookmark.rating + '  ★</span><div class="details"><p>' +
                    bookmark.rating + ' ★</p><p>' +
                    bookmark.desc + '</p><button class="deleteBookmark">Delete</button></div></li>';
            }
            $('#bookmark-list').html(_bookMarkList);
        } else
            $('#bookmark-list').html('<li>No bookmarks saved yet!</li>');
    });
}

function createBookmarks(body) {
    fetch(targetURL, {method: 'POST', headers: {'Content-Type': 'application/json'}, body : body})
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        getBookmarksList();
    });
}

function deleteBookmark(bookmarkID)
{
    fetch(targetURL +'/'+ bookmarkID, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(resp => {
        console.log('Bookmark has been deleted!');
        getBookmarksList();
    });
} 

$(function() {
    getBookmarksList();        

    $('#add-bookmark').click(function() {
        $('#bookmark-list-section').hide();
        $('#add-bookmark-section').show();
        $('#bookmark-list-form').trigger('reset');
        $('#filter').val('').trigger('change');
    });

    $('#cancel-bookmark').click(function() {
        $('#bookmark-list-section').show();
        $('#add-bookmark-section').hide();
        $('#bookmark-list-form').trigger('reset');
        $('#filter').val('').trigger('change');
    });

    $('#bookmark-list-form').submit(function(e) {
        e.preventDefault();            
        bookmark = {
            url: $('#bookmark-list-entry').val(),
            title: $('#website-name').val(),
            desc: $('#website-description').val(),
            rating: $('input[name="star-rating"]:checked').val()
        };
        postBody = JSON.stringify(bookmark);
        createBookmarks(postBody);
        $('#bookmark-list-section').show();
        $('#add-bookmark-section').hide();            
    });

    $('#bookmark-list').on('click', 'li', function(e) {
        $(e.target).find('.details').show();
        $(e.target).find('.bookmark-rating').hide();
    });
    
    $('#bookmark-list').on('click', '.deleteBookmark', function(e) {
        idBookmark = $(e.target).closest('li').attr('data-idBookmark');
        deleteBookmark(idBookmark);
    });

    $('#filter').change(function() {
        getBookmarksList(true, $(this).val());
    });
});
