const body = document.getElementsByTagName("main")[0];
const firstChild = document.querySelector('main#main');
main.remove();

var newHeader = document.createElement("h1",);
newHeader.setAttribute("id","victory")
document.body.append(newHeader);

newHeader.innerHTML = "Michelle is the champion";
