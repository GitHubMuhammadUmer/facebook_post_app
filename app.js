function setBackground(){
 var postBackground = document.getElementById("post-background")
 postBackground.style.backgroundImage = 'url('+ event.target.src + ')'
 console.log(event.target.src)
}
function chageColor(){
var textArea = document.getElementById("textarea")
textArea.style.color = event.target.value
}

function chageBGColor(){
    var textArea = document.getElementById("textarea")
    textArea.style.backgroundColor = event.target.value
    }

function changeStyle(){
    var textArea = document.getElementById("textarea")
    var type = event.target.innerText;
    if (type === "B" ) {
       if ( textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal"
        event.target.style.backgroundColor = "white"
       } else{
        textArea.style.fontWeight = "bold"
event.target.style.backgroundColor = "grey"
    }
}
if (type === "I" ) {
    if ( textArea.style.fontStyle === "italic") {
     textArea.style.fontStyle = "normal"
     event.target.style.backgroundColor = "white"
    } else{
     textArea.style.fontStyle = "italic"
event.target.style.backgroundColor = "grey"
 }
}

if (type === "U" ) {
    if ( textArea.style.textDecoration === "underline") {
     textArea.style.textDecoration = "none"
     event.target.style.backgroundColor = "white"
    } else{
     textArea.style.textDecoration = "underline"
event.target.style.backgroundColor = "grey"
 }
}

if (type === "¢" ) {
    if ( textArea.style.textAlign === "center") {
     textArea.style.textAlign = "unset"
     event.target.style.backgroundColor = "white"
    } else{
     textArea.style.textAlign = "center"
event.target.style.backgroundColor = "grey"
 }
}

if (type === "€" ) {
    if ( textArea.style.textAlign === "left") {
     textArea.style.textAlign = "right"
     event.target.style.backgroundColor = "white"
    } else{
     textArea.style.textAlign = "left"
event.target.style.backgroundColor = "grey"
 }
}
}
function chageSize() {
    var textArea = document.getElementById("textarea")
    textArea.style.fontSize = event.target.value + "px"
}

function post() {
    var items = document.getElementById("items")
    items.style.display = "none"
    var textarea = document.getElementById("textarea")
    textarea.style.textDecoration = "hiden"
    

}
function setEmoji(){
    var textArea = document.getElementById("textarea")
    textArea.value += event.target.value
}

function commentbox(){
 var postBackground = document.getElementById("commentbox")
 postBackground.style.backgroundImage = 'url(https://tse1.mm.bing.net/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&P=0&h=220)'
}vvvv

// function liked(){
//     var likes = document.getElementById("likeed")
//     var likeed = document.getElementById("likeede")
//     likes.style.color = "#316FF6";
//     likeed.style.color = "#316FF6";
// }
// var inpt = document.getElementById("inpt");
// inpt.style.display = "none"
// function comment(){
//     var comments = document.getElementById("comments");
//     comments.style.display = "none";
//     var inpt = document.getElementById("inpt");
//     inpt.style.display = "block"
// }