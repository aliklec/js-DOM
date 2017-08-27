/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = 
"Tay-Tay";


//can also just do name1.innerHTML = "taytay"//




/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

document.getElementById("position2").innerHTML = "Project Manager";

/* 

can also do:
var NEW = document.getElementById("position2")

NEW.innerHTML = "Project Manager"


 */

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

document.getElementById("alias3").innerHTML = "Concatenation*";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

/*
var x = document.getElementsByClassName("profile");

x[0].innerHTML = ' "A body like yours oughta be in jail, cuz its on the verge of bein obscene"';*/

var profileElem = document.getElementsByClassName("profile");
console.log(profileElem);

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var x = document.getElementsByClassName("profile");

x[1].innerHTML = ' "Notice that the stiffest tree is most easily cracked, while bamboo survives by bending with the wind"';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var samuels = document.getElementsByClassName("alias");
samuels[2].innerHTML = "Mr. Glass";



/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newDiv = document.createElement("div");
newDiv.id = "name7";
newDiv.innerHTML = "Peter Griffin";
nameParent.appendChild(newDiv);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var newDiv2 = document.createElement("div");
newDiv2.id = "alias8";
newDiv2.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(newDiv2);



//Final Boss
/*9. Create your own profile.*/

/*
var findimg = document.images[8].src;
findimg.id = "myImg";*/

/*var rrrg = document.getElementsByClassName("block3 col-sm-4")[2];

var getimage = document.getElementsByTagName("img");

getimage[8].src = "https://media1.popsugar-assets.com/files/thumbor/mWmHSJ8u4mf327CMNlIsx_MORzY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/11/47/2/192/1922243/3431091907fc0047_GageTucker/i/Cute-Smush-Faced-Cats.jpg";
*/

var imgBox = document.getElementsByTagName("img");
console.log(imgBox);
imgBox[8].src = "../assets/ali.jpg";

var orange = document.getElementsByClassName("block3 col-sm-4");
console.log(orange);

var nameBox = document.createElement("div");
nameBox.id = "name9";
nameBox.innerHTML = "Swarly";
orange[2].appendChild(nameBox);

var positionBox = document.createElement("div");
positionBox.id = "position9";
positionBox.innerHTML = "Operations and Events";
orange[2].appendChild(positionBox);

var aliasBox = document.createElement("div");
aliasBox.id = "alias8";
aliasBox.innerHTML = 'The debugger';
orange[2].appendChild(aliasBox);

var bioBox = document.createElement("div");
bioBox.id = "bio8";
bioBox.innerHTML = ' "I do not function without my java in the morning" ';
orange[2].appendChild(bioBox);
