// RGB Colors

// Event Listener

document.getElementById("preview-btn").addEventListener("click", rgbPreview);

// Event Function

function rgbPreview() {
  let rValue = document.getElementById("redIn").value;
  let gValue = document.getElementById("greenIn").value;
  let bValue = document.getElementById("blueIn").value;

  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  document.getElementById("rgbStrOut").innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}
