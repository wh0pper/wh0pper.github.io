console.log("hello world! javascripting now in progress")


document.addEventListener('DOMContentLoaded', () => {
  const newDiv = document.createElement("div", {
    classname: "scripted-div"
  })

  const newText = document.createTextNode("base js element")

  newDiv.appendChild(newText);

  document.body.appendChild(newDiv);
})