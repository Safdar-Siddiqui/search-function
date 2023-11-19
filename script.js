var oldText = document.getElementById("para").innerHTML;

function search(term) {
  var flag = true;
  var term = prompt("search");
  let myPara = document.getElementById("para");
  var a = myPara.textContent;
  for (var f = 0; f < a.length; f++) {
    var check = a.slice(f, f + term.length).toLowerCase();
    if (check == term.toLowerCase()) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  if (flag == true) {
    var span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.innerHTML = check;
    myPara.innerHTML = oldText;
    var regex = new RegExp(check, "gi");
    myPara.innerHTML = myPara.innerHTML.replace(regex, span.outerHTML);
  } else {
    alert("not found");
    myPara.innerHTML = oldText;
  }
}
