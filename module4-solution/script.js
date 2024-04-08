var $dc = {}; // Define the namespace if not already defined

$dc.loadRandomMenuCategory = function() {
    // Array of available categories (replace this with your actual list of categories)
    var categories = ["Lunch", "Dinner", "Sushi", "Breakfast", "Drinks"];

    // Generate a random index to select a category from the array
    var randomIndex = Math.floor(Math.random() * categories.length);

    // Get the short_name of the randomly selected category
    var randomCategoryShortName = categories[randomIndex]; // Assuming short_name matches category names

    // Load menu items for the random category
    $dc.loadMenuItems(randomCategoryShortName);
};

// Mock function, replace this with your actual function to load menu items
$dc.loadMenuItems = function(categoryShortName) {
    // Here you would implement the logic to load menu items for the given category
    // This is just a mock function, replace it with your actual implementation
    console.log("Loading menu items for category: " + categoryShortName);
};
