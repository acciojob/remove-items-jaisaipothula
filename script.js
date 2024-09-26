// Function to remove the selected color from the dropdown list
document.getElementById('removeButton').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    
    // Get the selected index
    const selectedIndex = colorSelect.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    } else {
        alert("Please select a color to remove.");
    }
});