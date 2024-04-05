// Define an array of names
var names = ["Jan", "Jane", "Jack", "Jano", "Ghazanfar", "Alice", "Bob"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];
    
    // Check if the name starts with 'j' or 'J'
    if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
        // If yes, print "Goodbye" followed by the name
        console.log("Goodbye " + name);
    } else {
        // If no, print "Hello" followed by the name
        console.log("Hello " + name);
    }
}
