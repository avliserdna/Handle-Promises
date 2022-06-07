function stretch() {
  // create a new promise
  // fulfill the promise after 1 second using setTimeOut()
  // print done stretch when promise is done
  const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("done stretching")
    }, 1000)
  });

  return newPromise
}

function runOnTreadmill() {
  const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("done running on treadmill")
    }, 500)
  });
  return newPromise
}

function liftWeights() {
  const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("done lifting weights")
    }, 2000)


  });
  return newPromise

}

function workout() {
  stretch().then((res) => {
    console.log(res)
    return runOnTreadmill()
  })
    .then((res) => {
      console.log(res)
      return liftWeights()
    })
    .then((res) => {
      console.log(res)
      console.log("done working out")
    })

  // liftWeights().then((res) => console.log(res))

}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/



workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
