document.getElementById("runScriptButton").addEventListener("click", function() {
  // Your script logic goes here
  (function () {
    document.title = prompt('Tab Cloak\n\nEnter new Tab Title:');
    var icon = document.querySelector('link[rel="icon"]');
    switch (prompt('Choose new tab icon:\n\n[1] Salt (default)\n[2] Google \n[3] Google Drive \n[4] Bing \n[5] Custom URL')) {
      case '1':
        icon.setAttribute('href', 'https://denduednue.github.io/img/salt.png');
        break;
      case '2':
        icon.setAttribute('href', 'https://www.google.com/favicon.ico');
        break;
      case '3':
        icon.setAttribute('href', 'https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png');
        break;
      case '4':
        icon.setAttribute('href', 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bing.com&size=128');
        break;
      case '5':
        icon.setAttribute('href', prompt('Enter Custom Tab Icon URL:'));
        break;
      default:
        // Handle invalid input or do nothing
        break;
    }
  })();
});
