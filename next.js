//selecting popbox popupoverlay
var overlay = document.querySelector(".popup-overlay")
var box = document.querySelector(".popupbox")
var add = document.getElementById("add-popup-button")
add.addEventListener("click",function(){
    overlay.style.display = "block"
    box.style.display ="block"
})
//selecting the button
var cancel = document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    box.style.display ="none"
})
//addind the details
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookname = document.getElementById("bookname")
var author = document.getElementById("author")
var text = document.getElementById("details")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${bookname.value}</h1>
    <h3>${author.value}</h3>
    <p>${text.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    overlay.style.display = "none"
    box.style.display ="none"
})
function del(event){
    event.target.parentElement.remove()

}
