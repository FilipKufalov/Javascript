// Script is not available through node.js

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://restapi.adequateshop.com/api/Customer"); // free public sample dummy rest API URL with XML response for testing purposes
xhr.onload = function() {
    if (xhr.status == 200) { console.log(xhr.responseText); }
};
xhr.send();