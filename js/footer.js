function loadFooter() {
    // Load footer content
    var footerContainer = document.getElementById('footer');
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
  window.onload = loadFooter;