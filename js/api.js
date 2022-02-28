// create javascript api
let output = document.getElementById('output');

console.log(window.location.hash.substr(1));
// create a function to get the url
function getUrl() {
  return window.location.hash.substr(1);
}


