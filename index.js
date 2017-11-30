//th stands for to hash

function hashIt(val) {
  var hv = val.toString();
  var hArray = [];
  for (i = 0; i < hv.length + 1; i++) { 
    hArray.push(hv.charCodeAt(i -1).toString(2));
  }
  var hv = hArray.join('-');
  
  return hv;
}

function outputHash (th) {
  var hashOut = hashIt(th);
  
  document.getElementById("output").innerHTML = hashOut;
}
