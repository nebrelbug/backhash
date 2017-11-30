//th stands for to hash

function hashIt(val) {
  var hv = val.toString();
  
  return hv;
}

function outputHash (th) {
  var hashOut = hashIt(th);
  
  document.getElementById("output").innerHTML = hashOut;
}
