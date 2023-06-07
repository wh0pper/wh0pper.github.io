console.log("hello world! javascripting now in progress")


document.addEventListener('DOMContentLoaded', () => {
  const newDiv = document.createElement("div", {
    classname: "scripted-div"
  })

  const newText = document.createTextNode("warning: this content is scripted!")

  newDiv.appendChild(newText);

  document.body.appendChild(newDiv);
})