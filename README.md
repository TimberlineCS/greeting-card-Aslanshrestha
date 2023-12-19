
## Objectives

- [ ] Create HTML elements
- [ ] Use JavaScript to manipulate HTML elements
- [ ] Use variables to manage data

## Specifications

Create a Greeting Card on an HTML page.  Your Greeting Card should include at least 10 different HTML elements.  You must use JavaScript (only) to create and manipulate your elements in such a way that they come together to clearly resemble a picture.   Your Greeting Card should include a variety of colors (at least 5), text, an image, and music. 

## Your Tasks

- [ ] Locate the index.html page.  Here you will create the basic elements for your page.  You must include at least 10 different elements. 
- [ ] Locate the App.js file.  Write code to manipulate the elements on your index.html page
- [ ] Include music with your GreetingCard.  Below is an example of how to do this, 

```
var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
document.body.appendChild(au);
```

- [ ] Document your code thoroughly as you go with comments
- [ ] Complete the required README using specified guidelines

## Grade your project before you submit

- [ ] Before you submit your project, grade your project against the criteria below. 
	[Rubric.md](Rubric.md)




# Project 1: Greeting Card

* Author: Aslan Shrestha
* Class: AP Computer Science Princples 
* Semester: Fall 2023

## Overview

This is a Christmas tree and a snowman wishing you a Merry Christmas while the snow is falling compositied though Javascript code. 

## Compiling and Using

To sucessfuly access this greeting card navigate to FireFox or your browser and slect ctrl o. You should be prompted with file on your device.
Sleclt the file named index.html- Aslanshrestha-greeting card. After slecting this file you should see the hoilday greeting card. 

## Discussion

When I realized my paintComponent() method was getting really long and hard to
read, I broke out each graphical element into its own private method.  The hard
part of that was figuring out that I needed to pass in the Graphics object to
each method, but it worked well after I did that. It also helped to read about
the Graphics class in the Java API, to learn how to use the different draw
methods.

I tested values from 0 to 20 for each of the input parameters, but I found that
values greater than 20 cause the program to freeze up. I don't know how to
restrict input values, yet, but that would be a good feature to add. I added
a warning to the input dialog, but there's nothing to stop users from adding
values over 20.

I tried running the program remotely over SSH with X, but my connection wasn't
fast enough to see the animation very well and there were several times the
dialog boxes for my input prompts showed up behind the main window. When I
came into the lab and ran it, however, everything looked good and worked just
like it did when I ran it locally on my own computer.

The starting file for the project had a window size of 200 x 500, but I found
that the text was too small to read unless the height was at least 300, so I ended up with minimum dimensions of 300 x 500.  It looks best, though, even bigger.  I recommend 400 x 600. This project was challenging at first, but it was fun once I got the hang of it and I feel like I learned a lot about graphics in Java.

## Extra Credit

## Sources used
- Project guide
- Labs 15,16,17
- Ticket out the Door 20,21,22