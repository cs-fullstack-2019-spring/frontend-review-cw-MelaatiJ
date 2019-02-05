var userinput = "";
//getting my userinput to equal an empty string
var userinputArray = [];
//creating an empty array to put my input inside
userinputArray=0
//setting my array to 0
function whenbuttonclicked(e)
{
    console.log("test");
    while (userinput !== "n")
    {
        userinput = prompt("Do you want to quit? Enter 'n' if you want to stop");
        if (userinput !== "n")
        {
            userinputArray += 1;
            //adding 1 everytime they input something


        }

    }

    console.log(userinputArray);

}


var ClickMeButton = document.getElementsByTagName("button");
//calling my button using the tag name and making a function
ClickMeButton[0].onclick =whenbuttonclicked;

