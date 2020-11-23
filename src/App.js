function App() {
  return (
      <div className="App">
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
    </div>
  );
}

export default App;
