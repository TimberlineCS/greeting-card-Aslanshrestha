//Aslan Shrestha
//Period 1
//Dec.11.2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

var triangleOne=document.createElement("div");
var triangleTwo=document.createElement("div");
var triangleThree=document.createElement("div");
var rectangleOne=document.createElement("div");
var circleOne=document.createElement("div");
var circleTwo=document.createElement("div");
var circleThree=document.createElement("div");

document.body.style.backgroundColor = "#3b434f"; 

document.body.append(triangleOne);

triangleOne.style.border = "#0d4701 solid 50px"; 
triangleOne.style.width ="50px";
triangleOne.style.height = "50px"; 
triangleOne.style.borderLeftColor = "transparent"; 
triangleOne.style.borderRightColor = "transparent"; 
triangleOne.style.borderTopColor = "transparent"; 
triangleOne.style.borderBottomWidth = "85px" 
triangleOne.style.marginLeft="180px";
triangleOne.style.marginTop="0px";
document.body.append(triangleOne);

triangleTwo.style.border="#0d4701 solid 50px";
triangleTwo.style.width="110px";
triangleTwo.style.height = "1px"; 
triangleTwo.style.borderLeftColor = "transparent"; 
triangleTwo.style.borderRightColor = "transparent"; 
triangleTwo.style.borderTopColor = "transparent"; 
triangleTwo.style.borderBottomWidth = "125px" 
triangleTwo.style.marginLeft="145px";
triangleTwo.style.marginTop="1px";
document.body.append(triangleTwo); 

triangleThree.style.border="#0d4701 solid 50px";
triangleThree.style.width="110px";
triangleThree.style.height = "1px"; 
triangleThree.style.borderLeftColor = "transparent"; 
triangleThree.style.borderRightColor = "transparent"; 
triangleThree.style.borderTopColor = "transparent"; 
triangleThree.style.borderBottomWidth = "125px" 
triangleThree.style.marginLeft="145px";
triangleThree.style.marginTop="1px";
document.body.append(triangleThree); 

rectangleOne.style.width="50%";
rectangleOne.style.height="5em";
rectangleOne.style.backgroundColor="brown";

circleOne.style.width = "200px"; 
circleOne.style.height = "200px"; 
circleOne.style.border = "white solid 5px"; 
circleOne.style.backgroundColor = "white";
circleOne.style.borderRadius = "50%"; 
document.body.append(circleOne); 

circleTwo.style.width = "200px"; 
circleTwo.style.height = "200px"; 
circleTwo.style.border = "white solid 5px"; 
circleTwo.style.backgroundColor = "white"; 
circleTwo.style.borderRadius = "50%";
document.body.append(circleTwo); 

circleThree.style.width = "200px"; 
circleThree.style.height = "200px"; 
circleThree.style.border = "white solid 5px"; 
circleThree.style.backgroundColor = "white"; 
circleThree.style.borderRadius = "50%"; 
document.body.append(circleThree); 