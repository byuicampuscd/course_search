var template =
    `<div id="header">
            <img src="https://content.byui.edu/integ/gen/be2c7d0f-ed5e-4dca-ac0b-0b2a7155a4f2/0/smallBanner.jpg" alt="Course Banner" />
        </div>
        <div id="article">
            <h1>Course Search</h1>
            <form id="searchCourse">
                <label>Search:</label>
                <input id="searchBox" type="text" />
                <button type="submit">GO!</button>
                <br>
                <label>Case Sensitive</label>
                <input id="caseSensitive" type="checkbox">
                <label>Include HTML</label>
                <input id="includeHTML" type="checkbox">
                <label>RegEx</label>
                <input id="regex" type="checkbox">
            </form>
            <button id="showAllLinksBtn" class="right" type="button">Show All Links in Course</button>

            <ul id="results"></ul>

        </div>`;