//footer.
function addfooter()
{
// Create a footer element
var footerElement = document.createElement("footer");

// Create a paragraph element
var copyrightParagraph = document.createElement("p");

// Create a copyright text node
var copyrightText = document.createTextNode("Copyright \u00A9 2024–" + new Date().getFullYear() + ', ');

// Create an anchor element
var anchorElement = document.createElement("a");
anchorElement.href = "https://harrymkt.github.io";
anchorElement.textContent = "Harry Min Khant.";

// Append the copyright text and anchor element to the paragraph
copyrightParagraph.appendChild(copyrightText);
copyrightParagraph.appendChild(anchorElement);

// Create another text node for "All rights reserved."
var rightsReservedText = document.createTextNode(" All rights reserved.");

// Append the rights reserved text to the paragraph
copyrightParagraph.appendChild(rightsReservedText);

// Append the paragraph to the footer
footerElement.appendChild(copyrightParagraph);

// Append the footer to the body or any other target element
document.body.appendChild(footerElement);
}//End