function loadHeaderFooter() {
  // Load header content
  var headerContainer = document.getElementById('header-placeholder');
  var headerRequest = new XMLHttpRequest();
  headerRequest.open('GET', 'header.html', true);
  headerRequest.onreadystatechange = function() {
    if (headerRequest.readyState === 4 && headerRequest.status === 200) {
      headerContainer.innerHTML = headerRequest.responseText;
    }
  };
  headerRequest.send();

  // Load footer content
  var footerContainer = document.getElementById('footer-placeholder');
  var footerRequest = new XMLHttpRequest();
  footerRequest.open('GET', 'footer.html', true);
  footerRequest.onreadystatechange = function() {
    if (footerRequest.readyState === 4 && footerRequest.status === 200) {
      footerContainer.innerHTML = footerRequest.responseText;
    }
  };
  footerRequest.send();
}

// Call the function to load the header and footer when the page loads
window.onload = loadHeaderFooter;
