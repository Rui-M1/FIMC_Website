function loadHeader() {
    // Load header content
    var headerContainer = document.getElementById('header');
    var headerRequest = new XMLHttpRequest();
    headerRequest.open('GET', 'header.html', true);
    headerRequest.onreadystatechange = function() {
      if (headerRequest.readyState === 4 && headerRequest.status === 200) {
        headerContainer.innerHTML = headerRequest.responseText;
      }
    };
    headerRequest.send();
  }
  
  // Call the function to load the header and footer when the page loads
  window.onload = loadHeader;
  