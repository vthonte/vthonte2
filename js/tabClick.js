
function initialize()
{
document.getElementById('background_img').style.backgroundImage="url(../pics/hb.jpg)";
}

function openPart(evt,partName,pic){
var i, tabcontent, tablinks;

document.getElementById('homeclick').style.display="none";

document.getElementById('background_img').style.backgroundImage="url("+pic+")"

tabcontent=document.getElementsByClassName("tabcontent");
for(i=0;i<tabcontent.length;i++)
{
tabcontent[i].style.display="none";
tabcontent[i].style.backgroundImage="url(pic)";
}
tablinks=document.getElementsByClassName("tablinks");
for(i=0;i<tablinks.length;i++)
{
tablinks[i].className=tablinks[i].className.replace("active","");
}


document.getElementById(partName).style.display="block";
evt.currentTarget.className+="active";
}
