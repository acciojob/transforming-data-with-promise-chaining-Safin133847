//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const outputDiv = document.getElementById("output");

  function delayOperation(value, timeInSeconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, timeInSeconds * 1000); 
    });
  }

  delayOperation(Number(input), 2)
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result * 2, 1); 
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result - 3, 1); 
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result / 2, 1); 
    })
    .then((result) => {
      outputDiv.innerHTML = `Result: ${result}`;
      return delayOperation(result + 10, 1); 
    })
    .then((finalResult) => {
      outputDiv.innerHTML = `Final Result: ${finalResult}`; 
    })
    .catch((error) => {
      outputDiv.innerHTML = `Error: ${error}`;
    });
});