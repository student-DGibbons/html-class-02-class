// the first thing that we are going to do is make sure that all our HTML has been rendered

document.addEventListener('DOMContentLoaded', (loaded) =>{



    //Lab 3 code
/*1. Send a welcome message to the console, the welcome message can be anything
you want.
2. Add a new row of content to the main element.
3. The new row of content should contain a h element, a new paragraph, and an
image.
4. Add some styling to the new content using JavaScript.*/
console.log("Welcome message.");

document.getElementById("main").innerHTML = 
"<h3 id='heading1'>A new row of content</h3>" +
"<p>Here's some text.</p>" +
"<a href='index.html'>" +
"<img id='logo1' src='./img/logo.png' alt='second-header-logo'>";

document.getElementById("logo1").style.cssText =
"width: auto; height: 100%";

document.getElementById("heading1").style.cssText =
"color: #E6E6FA; font-size: 150px;";



    //Now test to see if our JS is connected

    console.log('Our JS is connected');
    //Now we will look at how to declare a variable in JS

    let a = 200;
    let b = 180;
    let c = a + b;

    console.log(c);
    //The const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    
    const value2 = 600;

    let total = value1 + value2;
    console.log(total);

    //now, let's look at how we can output our HTML

    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + 
    "<p>Let: The value of C is " + c +  "</p>" + 
    "<p>Const: The total is: " + total + "</p>";

    //Well, now we can't see our HTML... Let's style it with JS

    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";
    //now, let's create our global header (use for assignment)

    //full marks on final assignment

    document.getElementById("lesson-global-header").innerHTML = 
    "<div id='logo-container'>" +
    "<a href='index.html'>" +
    "<img id='logo' src='./img/logo.png' alt='header-logo'>" +
    "</a>" +
    "</div>" +
    "<nav><menu>" +
    "<li><a href='#'>Item 1</a></li>" +
    "<li><a href='#'>Item 2</a></li>" +
    "<li><a href='#'>Item 3</a></li>" +
    "</menu></nav>";
document.getElementById("lesson-global-header").style.cssText =
"display: flex; height: 125px; background-color: #f8f8f8; align-items: center;"

document.getElementById("logo-container").style.cssText = 
"flex-grow: 1; height: 110px; width: auto;";

document.getElementById("logo").style.cssText =
"width: auto; height: 100%";




});

