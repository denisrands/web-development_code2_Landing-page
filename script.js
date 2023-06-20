window.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Add event listener to each tab
    tabs.forEach(function(tab, index) {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs and tab contents
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
        tabContents.forEach(function(content) {
          content.classList.remove('active');
        });
  
        // Add active class to the clicked tab and corresponding tab content
        tab.classList.add('active');
        tabContents[index].classList.add('active');
      });
    });
  });
  