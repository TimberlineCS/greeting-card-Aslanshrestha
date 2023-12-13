//Aslan Shrestha
//Period 1
//Dec.11.2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

// var background=document.createElement("div");
var text =document.createElement("div");
var triangleOne=document.createElement("div");
var triangleTwo=document.createElement("div");
var triangleThree=document.createElement("div");

// background.style.backgroundColor= "red";
// background.style.padding= "10px";
document.body.style.backgroundColor = "red"; 

document.body.append(text);
document.body.append(triangleOne);

text.style.innerHTML= "Merry Christmas";
text.style.backgroundColor= "green";
text.style.textAlign= "center";
text.style.color="maroon";
text.style.fontFamily="cursive";

triangleOne.style.border = "green solid 50px"; 
triangleOne.style.width ="0px";
triangleOne.style.height = "70px"; 
triangleOne.style.postion= "center";
triangleOne.style.borderLeftColor = "transparent"; 
triangleOne.style.borderRightColor = "transparent"; 
triangleOne.style.borderTopColor = "transparent"; 
triangleOne.style.borderBottomWidth = "40px" 
document.body.append(triangleOne); 
