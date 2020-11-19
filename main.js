//document.getElementById("milk").innerHTML = "<h1>Where is the Milk?</h1>"
fetch('/translations.json')
  .then(response => response.text())
  .then((data) => {
    document.getElementById("milk").innerHTML = "<h1>Where is the Milk?</h1>"
    console.log(data)
  })
