function addPromise (a, b) {
  return new Promise (function (resolve, reject){
    if (typeof a === "number" && typeof b === "number"){
      resolve(a + b);
    }else {
      reject("Not numbers!");
    };
  });
}

addPromise("a", 3).then(function (added){
  console.log("Success", added);
}, function (err){
  console.log("Error!", err);
})
