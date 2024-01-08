let selectedCategory = "";

function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();

    // Handle search for other categories
    if (query.toLowerCase() === 'nature' || query.toLowerCase() === 'architecture' || query.toLowerCase() === 'people'|| query.toLowerCase() === 'sports') {
        selectedCategory = query.toLowerCase();

        const imageGrid = document.getElementById('imageGrid');

        if (!imageGrid) {
            console.error("imageGrid element not found!");
            return;
        }

        // Clear the grid and reset the loaded images array
        imageGrid.innerHTML = "";
        loadedImages.length = 0;

        // Load images based on the selectedCategory
        loadRandomImages();

        // Add query to history
        history.push(query);

        // Update history display
        displayHistory();

        // Clear search input
        searchInput.value = '';
    } else {
        // Handle other searches or show a message
        alert('No images found for the entered category.');
    }
}



function loadRandomImages() {
    const numImagesToLoad = 25; // Adjust the number of images as needed

    for (let i = 0; i < numImagesToLoad; i++) {
        let imageUrl;
        do {
            imageUrl = getRandomImageUrl(selectedCategory);
        } while (loadedImages.includes(imageUrl));

        displayImage(imageUrl);
        page++;
    }
}

function getRandomImageUrl(category = "") {
    let apiUrl = `https://source.unsplash.com/random/800x600`;

    if (category) {
        apiUrl += `?${category}`;
    }

    // Add a timestamp to ensure unique images
    apiUrl += `&timestamp=${Date.now()}`;

    return apiUrl;
}
