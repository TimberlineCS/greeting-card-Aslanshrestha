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
var triangleFour=document.createElement("div");
var triangleFive=document.createElement("div");
var rectangleOne=document.createElement("div");
var circleOne=document.createElement("div");
var circleTwo=document.createElement("div");
var circleThree=document.createElement("div");

document.body.style.backgroundColor = "#3b434f"; 

document.body.append(triangleOne);

var welcome = document.createElement("div");
welcome.innerHTML = "Merry Christmas"
welcome.style.fontSize="50px";
welcome.style.fontFamily="cursize";
welcome.style.color="maroon";
welcome.style.position="absolute";
welcome.style.left="350px";
document.body.append(welcome)

triangleOne.style.border = "#0d4701 solid 50px"; 
triangleOne.style.width ="10px";
triangleOne.style.height = "0px"; 
triangleOne.style.borderLeftColor = "transparent"; 
triangleOne.style.borderRightColor = "transparent"; 
triangleOne.style.borderTopColor = "transparent"; 
triangleOne.style.borderBottomWidth = "50px" 
triangleOne.style.marginLeft="167px";
triangleOne.style.marginTop="30px";
triangleOne.style.marginBottom="0px";
triangleOne.style.position="absolute";
document.body.append(triangleOne);

triangleTwo.style.border="#0d4701 solid 50px";
triangleTwo.style.width="50px";
triangleTwo.style.height = "0px"; 
triangleTwo.style.borderLeftColor = "transparent"; 
triangleTwo.style.borderRightColor = "transparent"; 
triangleTwo.style.borderTopColor = "transparent"; 
triangleTwo.style.borderBottomWidth = "80px" 
triangleTwo.style.marginLeft="147px";
triangleTwo.style.marginTop="60px";
triangleTwo.style.marginBottom="0px";
triangleTwo.style.position= "absolute";
document.body.append(triangleTwo); 

triangleThree.style.border="#0d4701 solid 50px";
triangleThree.style.width="90px";
triangleThree.style.height = "0px"; 
triangleThree.style.borderLeftColor = "transparent"; 
triangleThree.style.borderRightColor = "transparent"; 
triangleThree.style.borderTopColor = "transparent"; 
triangleThree.style.borderBottomWidth = "80px" 
triangleThree.style.marginLeft="127px";
triangleThree.style.marginTop="120px";
triangleThree.style.marginBottom="0px";
triangleThree.style.position= "absolute"
document.body.append(triangleThree); 

triangleFour.style.border="#0d4701 solid 50px";
triangleFour.style.width="115px";
triangleFour.style.height = "0px"; 
triangleFour.style.borderLeftColor = "transparent"; 
triangleFour.style.borderRightColor = "transparent"; 
triangleFour.style.borderTopColor = "transparent"; 
triangleFour.style.borderBottomWidth = "80px" 
triangleFour.style.marginLeft="113px";
triangleFour.style.marginTop="190px";
triangleFour.style.marginBottom="30px";
triangleFour.style.position= "absolute"
document.body.append(triangleFour); 

triangleFive.style.border="#0d4701 solid 50px";
triangleFive.style.width="150px";
triangleFive.style.height = "0px"; 
triangleFive.style.borderLeftColor = "transparent"; 
triangleFive.style.borderRightColor = "transparent"; 
triangleFive.style.borderTopColor = "transparent"; 
triangleFive.style.borderBottomWidth = "90px" 
triangleFive.style.marginLeft="95px";
triangleFive.style.marginTop="255px";
triangleFive.style.marginBottom="100px";
triangleFive.style.position="absolute";
document.body.append(triangleFive); 

rectangleOne.style.width="5%";
rectangleOne.style.height="5em";
rectangleOne.style.backgroundColor="#572d03";
rectangleOne.style.marginLeft="190px";
rectangleOne.style.marginTop="393px"
rectangleOne.style.position="absolute";
document.body.append(rectangleOne);

circleOne.style.width = "100px"; 
circleOne.style.height = "100px"; 
circleOne.style.border = "white solid 5px"; 
circleOne.style.backgroundColor = "white";
circleOne.style.borderRadius = "50%"; 
circleOne.style.marginLeft="830px";
circleOne.style.marginTop="185px";
circleOne.style.position="absolute";
document.body.append(circleOne); 

circleTwo.style.width = "140px"; 
circleTwo.style.height = "140px"; 
circleTwo.style.border = "white solid 5px"; 
circleTwo.style.backgroundColor = "white"; 
circleTwo.style.borderRadius = "50%";
circleTwo.style.marginLeft="813px";
circleTwo.style.position="absolute";
circleTwo.style.marginTop="255px";
document.body.append(circleTwo); 

circleThree.style.width = "180px"; 
circleThree.style.height = "180px"; 
circleThree.style.border = "white solid 5px"; 
circleThree.style.backgroundColor = "white"; 
circleThree.style.borderRadius = "50%"; 
circleThree.style.position="absolute";
circleThree.style.marginLeft="795px";
circleThree.style.marginTop="340px";
document.body.append(circleThree); 

var imageOne= document.createElement("img");
imageOne.src="Images/FallingSnowTransparent.gif";
document.body.append(imageOne)