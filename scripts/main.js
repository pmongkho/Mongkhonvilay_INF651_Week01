
//change title to Hello world
const myHeading = document.querySelector("h1")
myHeading.textContent = "Hello world!"

//click for new image
const myImage = document.querySelector("img")

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src")
	if (mySrc === "images/firefox-icon.png") {
		myImage.setAttribute("src", "images/firefox2.png")
	} else {
		myImage.setAttribute("src", "images/firefox-icon.png")
	}
}

//create buttom
let myButton = document.querySelector("button")


//function to set username
function setUserName() {
	const myName = prompt("Please enter your name.")

    if(!myName){
        setUserName();
    }else{
       localStorage.setItem("name", myName)
	myHeading.textContent = `Mozilla is cool, ${myName}` 
    }
	
}

//call condition block
if (!localStorage.getItem("name")) {
	setUserName()
} else {
	const storedName = localStorage.getItem("name")
	myHeading.textContent = `Mozilla is cool, ${storedName}`
}

//change name when click button
myButton.onclick = () => {
	setUserName()
}