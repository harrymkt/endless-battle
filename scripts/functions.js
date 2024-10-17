function calculate_age(dob)
{ 
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms); 

return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function toggle_hidden(document_id, expanded_text, collapsed_text, button_id, aria)
{
if(document.getElementById(document_id).hidden==true)
{
document.getElementById(document_id).hidden=false;
document.getElementById(aria).innerHTML=expanded_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=expanded_text;
}//button_id
}//hidden
else if(document.getElementById(document_id).hidden==false)
{
document.getElementById(document_id).hidden=true;
document.getElementById(aria).innerHTML=collapsed_text;
if(button_id!="")
{
document.getElementById(button_id).innerHTML=collapsed_text;
}//button_id
}//hidden false.
else
{
document.getElementById(aria).innerHTML="error";
}//error
}//end
function createLinkListItem(href, text, target="_blank")
{
var listItem = document.createElement("li");
var link = document.createElement("a");
if(target!=="") link.target = target;
link.href = href;
link.textContent = text;
listItem.appendChild(link);
return listItem;
}
async function get_gh_release_info(owner, repo, which="latest", what="tag_name")
{
try
{
// Fetch the release from the GitHub API
const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/${which}`);

if (!response.ok)
{
return `Failed to fetch release ${which}: ${response.status} ${response.statusText}`;
}

const data = await response.json();
const info = data[what];
return info;
}
catch (error)
{
return `Error fetching release ${which}: ${error}`;
}
}
function get_storage(value, otherwise="undefined")
{
var n=localStorage.getItem(value);
if(n==="" || n==="undefined" || n===null) n=otherwise;
return n;
}
function round(num, decimals)
{
const factor = Math.pow(10, decimals);
return Math.round(num * factor) / factor;
}
function convert_size(size, round_to = 2)
{
if (size < 1) return "0 B";
if (size < 1024)
{
return round(size, round_to) + " B";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " KB";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " MB";
}
size = size / 1024;
if (size < 1024)
{
return round(size, round_to) + " GB";
}
size = size / 1024;
return round(size, round_to) + " TB";
}