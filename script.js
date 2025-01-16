document.addEventListener('DOMContentLoaded', function () {
    // Detect if the user is on a mobile device
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile/i.test(userAgent);
  
    // Adjust font size for mobile devices
    if (isMobile) {
      document.body.style.fontSize = "1.2em"; // Adjust font size for mobile
    }
  
    // Highlight the active tab in the sidebar based on the current page
    const links = document.querySelectorAll('.sidebar ul li a');
  
    links.forEach(link => {
      // Normalize the current page's pathname and the link's href
      const currentPath = window.location.pathname.split('/').pop(); // Extract current file name
      const linkPath = link.getAttribute('href');
  
      // Highlight if the paths match
      if (currentPath === linkPath) {
        link.classList.add('active'); // Add the 'active' class to the current page link
      }
    });
  });
  