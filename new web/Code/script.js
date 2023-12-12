document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Convert to lowercase for case-insensitive search
    const menuItems = document.querySelectorAll('.menu-content .in-box h2'); // Select all h2 elements within menu items
    
    // Clear previous search results and messages
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '#';

    // Perform the search operation
    let resultsFound = false;
    menuItems.forEach(menuItem => {
        const itemName = menuItem.textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            // Display matching items in the search results
            const resultDiv = document.createElement('div');
            resultDiv.textContent = itemName;
            searchResultsContainer.appendChild(resultDiv);
            resultsFound = true;
        }
    });

    // If no results found, display a message
    if (!resultsFound) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = 'No results found.';
        searchResultsContainer.appendChild(noResultsMessage);
    }
});

function redirectToRegistration() {
    // Redirect to the registration form page
    window.location.href = 'registration.html'
}    
