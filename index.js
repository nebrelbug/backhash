//th stands for to hash

function hashIt(val) {
  var hv = val.toString();
  var hArray = [];
  var nArray = [];
  for (i = 0; i < hv.length + 1; i++) { 
    hArray.push(hv.charCodeAt(i).toString(2));
  }
  for (j = 0; j <hArray.length ; j++) {\
    if (hArray[j+2] !== undefined && hArray[j+2]!== null) {
    nArray.push(hArray[j] + hArray[j+2]);
    } else {
      nArray.push(hArray[j]);
    }
  }
  
  var hv = nArray.join('-');
  
  return hv;
}

function outputHash (th) {
  var hashOut = hashIt(th);
  
  document.getElementById("output").innerHTML = hashOut;
}
