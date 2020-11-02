import bookmarkList from './bookmark-list.js';

function createInitalView() {

    let firstPage = `<div class="container-1">
    <h1>My Bookmarks</h1>
    <button>New </button>
    <button>Filter By</button>
    <form id="js-bookmark-list-form">

        <label for="bookmark-list-entry">
            <input type="text" name="bookmark-list-entry" class="js-bookmark-list-entry"
                placeholder="e.g., www.google.com">
            Add a website</label>

        <p>Star Rating:</p>
        <label for="star-rating-1"> 
            <input name="star-rating" type="radio" value="1" id="1">1 </label>

        <label for="star-rating-2">
            <input name="star-rating" type="radio" value="2" id="2">2 </label>

        <label for="star-rating-3">
            <input name="star-rating" type="radio" value="3" id="3">3 </label>

        <label for="star-rating-4">
            <input name="star-rating" type="radio" value="4" id="4">4 </label>

        <label for="star-rating-5">
            <input name="star-rating" type="radio" value="5" id="5">5 </label>


        <button type="submit">Add Website</button>
    </form>


    <div>
        <label for="site-description">Site Description:</label>
        <input id="user-name" type="text" name="name">
    </div>
    <ul class="bookmark-list js-bookmark-list"> </ul>


    </ul>
</div>
`

    return firstPage;
}


function createSecondaryView() {

    let secondPage = `<div class="container-2">

    <br>
    <br>
    <br>
    <br>




    <h1>My Bookmarks</h1>
    <button>New </button>
    <button>Filter By</button>

    <li>

        <ul>Title 1</ul>
        <ul>Title 2</ul>
        <ul>Title 3</ul>
        <ul>Title 4</ul>
        <ul>Title 5</ul>




    </li>

</div>`

    return secondPage;

}



let bookmarks,
            bookmark, _bookMarkList, idBookmark;
        //localStorage.setItem('bookmarks', JSON.stringify([]));
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (!bookmarks) bookmarks = [];

        function getBookmarks(filter = false, rating = false) {
            _bookMarkList = '';
            if (bookmarks.length > 0) {
                for (const index in bookmarks) {
                    if (filter && bookmarks[index].rating != rating && rating != '') continue;
                    _bookMarkList += '<li data-idBookmark="' + index + '">' + bookmarks[index].name + '<span class="bookmark-rating">' + bookmarks[index].rating + '  ★</span><div class="details"><p>' +
                        bookmarks[index].rating + ' ★</p><p>' +
                        bookmarks[index].description + '</p><button class="deleteBookmark">Delete</button></div></li>';
                }
                $('#bookmark-list').html(_bookMarkList);
            } else
                $('#bookmark-list').html('<li>No bookmarks saved yet!</li>');
        }
        $(function() {
            getBookmarks();
        });
        // document.getElementById('add-bookmark').addEventListener('click', function() {});
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
                name: $('#website-name').val(),
                description: $('#website-description').val(),
                rating: $('input[name="star-rating"]:checked').val()
            };
            bookmarks.push(bookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            $('#bookmark-list-section').show();
            $('#add-bookmark-section').hide();
            getBookmarks();
        });

        $('#bookmark-list').on('click', 'li', function(e) {
            $(e.target).find('.details').show();
            $(e.target).find('.bookmark-rating').hide();
        });
        
        $('#bookmark-list').on('click', '.deleteBookmark', function(e) {
            idBookmark = $(e.target).closest('li').attr('data-idBookmark');
            bookmarks.splice(idBookmark, 1);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            getBookmarks();
        });

        $('#filter').change(function() {
            getBookmarks(true, $(this).val());
        });




const main = function() {

    createInitalView();
    createSecondaryView();
    bookmarkList.bindEventListeners();
    bookmarkList.render();
};

$(main);






