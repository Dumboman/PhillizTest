// Toggle the dropdown menu when clicking the services link
document.querySelector('.services-link').addEventListener('click', function(e) {
    e.preventDefault();
    let dropdown = this.parentElement;
    dropdown.classList.toggle('open');
    let dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Show or hide the dropdown based on current display state
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none'; // Hide the dropdown
    } else {
      dropdownMenu.style.display = 'block'; // Show the dropdown
    }
  });
  
  // Add click event to each item in the dropdown to change the background
  document.querySelectorAll('.dropdown-menu li a').forEach(function(item) {
    item.addEventListener('click', function() {
      // Remove "clicked" class from previously clicked items
      document.querySelectorAll('.dropdown-menu li a').forEach(function(link) {
        link.classList.remove('clicked');
      });
  
      // Add "clicked" class to the item that was clicked
      this.classList.add('clicked');
    });
  });
  
