
function produceDrivingRange(blockRange) {
  return function(beg, end){
      d = parseInt(end) - parseInt(beg);
      if ( d < blockRange) {
        return `within range by ${Math.abs(blockRange - d)}`;
     } else {
        return `${Math.abs(blockRange - d)} blocks out of range`;
     };

  }
}

function produceTipCalculator(tip) {
  return function(bill) {
    return tip * bill;
  }
}


function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;

      this.id = ++DriverId;
    }
  }
}
