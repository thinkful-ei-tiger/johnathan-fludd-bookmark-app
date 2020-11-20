function App() {
  return (
      <div className="App">
        <div className="container-1">
            <div className="error"></div>

            <div id="bookmark-list-section">
                <button id="add-bookmark" type="button">New</button>
                <label htmlFor="filter" className="Filter-By">Filter By</label>

                <select id="filter" name="fonts">
                    <option value="">All</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>

                <ul id="bookmark-list" className=""> </ul>
            </div>
            <div id="add-bookmark-section">
                <form id="bookmark-list-form">
                    <div className="form-group">
                        <label htmlFor="bookmark-list-entry">Add a website</label>
                        <input type="url" id="bookmark-list-entry" className="js-bookmark-list-entry" placeholder="e.g., www.google.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="website-name">Website Name:</label>
                        <input id="website-name" type="text" required />
                    </div>
                    <p>Star Rating:</p>

                    <input id="star-rating-1" name="star-rating" type="radio" value="1" required />
                    <label htmlFor="star-rating-1">1 ★</label>

                    <input id="star-rating-2" name="star-rating" type="radio" value="2" required />
                    <label htmlFor="star-rating-2">2 ★</label>

                    <input id="star-rating-3" name="star-rating" type="radio" value="3" required />
                    <label htmlFor="star-rating-3">3 ★</label>

                    <input id="star-rating-4" name="star-rating" type="radio" value="4" required />
                    <label htmlFor="star-rating-4">4 ★</label>

                    <input id="star-rating-5" name="star-rating" type="radio" value="5" required />
                    <label htmlFor="star-rating-5">5 ★</label>

                    <div className="form-group">
                        <label htmlFor="website-description">Website Description:</label>
                        <textarea id="website-description" rows="5"></textarea>
                    </div>
                    <input type="submit" id="submit-bookmark" value="submit" />
                    <input type="button" id="cancel-bookmark" value="cancel" />
                </form>
            </div>
        </div>
      </div>
  );
}

export default App;
