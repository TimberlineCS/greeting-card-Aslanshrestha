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
triangleOne.style.width ="0px";
triangleOne.style.height = "0px"; 
triangleOne.style.borderLeftColor = "transparent"; 
triangleOne.style.borderRightColor = "transparent"; 
triangleOne.style.borderTopColor = "transparent"; 
triangleOne.style.borderBottomWidth = "50px" 
triangleOne.style.marginLeft="190px";
triangleOne.style.marginTop="0px";
triangleOne.style.marginBottom="0px";
document.body.append(triangleOne);

triangleTwo.style.border="#0d4701 solid 50px";
triangleTwo.style.width="100px";
triangleTwo.style.height = "0px"; 
triangleTwo.style.borderLeftColor = "transparent"; 
triangleTwo.style.borderRightColor = "transparent"; 
triangleTwo.style.borderTopColor = "transparent"; 
triangleTwo.style.borderBottomWidth = "80px" 
triangleTwo.style.marginLeft="115px";
triangleTwo.style.marginTop="0px";
triangleTwo.style.marginBottom="0px";
triangleTwo.style.postion= "relative"
document.body.append(triangleTwo); 

triangleThree.style.border="#0d4701 solid 50px";
triangleThree.style.width="150px";
triangleThree.style.height = "0px"; 
triangleThree.style.borderLeftColor = "transparent"; 
triangleThree.style.borderRightColor = "transparent"; 
triangleThree.style.borderTopColor = "transparent"; 
triangleThree.style.borderBottomWidth = "90px" 
triangleThree.style.marginLeft="95px";
triangleThree.style.marginTop="0px";
triangleThree.style.marginBottom="0px";
document.body.append(triangleThree); 

rectangleOne.style.width="5%";
rectangleOne.style.height="5em";
rectangleOne.style.backgroundColor="#572d03";
rectangleOne.style.marginLeft="190px";
document.body.append(rectangleOne);

circleOne.style.width = "50px"; 
circleOne.style.height = "50px"; 
circleOne.style.border = "white solid 5px"; 
circleOne.style.backgroundColor = "white";
circleOne.style.borderRadius = "50%"; 
circleOne.style.marginLeft="800px";
circleOne.style.marginTop="0px";
document.body.append(circleOne); 

circleTwo.style.width = "100px"; 
circleTwo.style.height = "100px"; 
circleTwo.style.border = "white solid 5px"; 
circleTwo.style.backgroundColor = "white"; 
circleTwo.style.borderRadius = "50%";
circleTwo.style.marginLeft="800px";
circleTwo.style.marginTop="0.1px";
document.body.append(circleTwo); 

circleThree.style.width = "150px"; 
circleThree.style.height = "150px"; 
circleThree.style.border = "white solid 5px"; 
circleThree.style.backgroundColor = "white"; 
circleThree.style.borderRadius = "50%"; 
circleThree.style.marginLeft="800px";
circleThree.style.marginTop="0px";
document.body.append(circleThree); 
