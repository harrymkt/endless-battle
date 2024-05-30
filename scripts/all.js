//all.js
var birthyear = 2024;
var ptype="https"; //the protercall type, http/"+ptype+".
var domain="harrymkt.github.io"; //domain.
var ownername="Harry Min Khant";
function sett(pagett="untitled",wtt="Endless Battle")
{
var finaltt="";
if(pagett=="") finaltt=wtt;
else
finaltt=pagett+""+(wtt==""?"":" | "+wtt);
document.title=finaltt;
}