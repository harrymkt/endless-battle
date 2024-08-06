//footer.
function addfooter()
{
var fdd = document.createElement("div");
fdd.className = "beforefooter";
fdd.id="footersection";
var usefulLinksHeading = document.createElement("h1");
usefulLinksHeading.textContent = "Useful links";

fdd.appendChild(usefulLinksHeading);

// Appending "fdd" to the body or any other target element
document.body.appendChild(fdd);

var fd=document.createElement("div");
// Create individual paragraphs with links
var aboutLink = document.createElement("p");
var contactLink = document.createElement("p");

// Create anchor elements and set their attributes
var aboutAnchor = document.createElement("a");
aboutAnchor.href = "/endless-battle/about";
aboutAnchor.textContent = "About the game";
aboutLink.appendChild(aboutAnchor);

var contactAnchor = document.createElement("a");
contactAnchor.href = "/endless-battle/contact";
contactAnchor.textContent = "Contact";
contactLink.appendChild(contactAnchor);

var accpar=document.createElement("p");
var acclink=document.createElement("a");
acclink.href="/accessibility";
acclink.title="Learn more about the accessibility of the site!";
acclink.textContent="Accessibility";
accpar.appendChild(acclink);
var clpar=document.createElement("p");
var cllink=document.createElement("a");
cllink.href="/endless-battle/changes";
cllink.textContent="Change Log";
clpar.appendChild(cllink);

// Append paragraphs to the existing "fd" container
fd.appendChild(aboutLink);
fd.appendChild(contactLink);
fd.appendChild(clpar);

fd.appendChild(accpar);
document.body.appendChild(fd);
// Create a footer element
var footerElement = document.createElement("footer");

// Create a paragraph element
var copyrightParagraph = document.createElement("p");

// Create a copyright text node
var copyrightText = document.createTextNode("Copyright \u00A9 " + birthyear + "-" + new Date().getFullYear() + ', ');

// Create an anchor element
var anchorElement = document.createElement("a");
anchorElement.href = "/";
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