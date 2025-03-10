//We are initializing the js variables that would help us impact our HTML
let homeScore=0;// for the js function so that we can input it in the html. Note we create individually for both home and guest to prevent confusion
let guestScore=0;


// We are selecting the html element using DOM so that we can use those JS at the top to fill them in
let homeNum= document.getElementById('home-num');// placing it outsode so it can be accessible by other functions
let guestNum= document.getElementById('guest-num'); // placing it outsode so it can be accessible by other functions


//This is for the home section where we add one two and three functions and they are all onclikc funcs set in the html
// they take the current valuse of the home score at anypoint when we click the button on the webpage and give us the addition meant for each
function addHomeOne(){
    homeScore+=1;// This is te js part, so that score variable we set at the top was always needed 
    homeNum.textContent= homeScore; // This is what we used to target ten part and we use the score to replace 
}

function addHomeTwo(){
    homeScore+=2;
    homeNum.textContent= homeScore;
}

function addHomeThree(){
    homeScore+=3;// The current exsisting score in the whole js and add three to it.
    homeNum.textContent= homeScore;
}

//This is for the guest section where we add one two and three functions and they are all onclikc funcs set in the html
// they take the current valuse of the guest score at anypoint when we click the button on the webpage and give us the addition meant for each

function addGuestOne(){
    guestScore+=1;// The current exsisting score in the whole js and add three to it.
    guestNum.textContent= guestScore;
}

function addGuestTwo(){
    guestScore+=2;// The current exsisting score in the whole js and add three to it.
    guestNum.textContent= guestScore;
}

function addGuestThree(){
    guestScore+=3;// The current exsisting score in the whole js and add three to it.
    guestNum.textContent= guestScore;// basically the same we  are also updating for the guest side
}

function resetBtn(){
    guestScore=0;// We had to set the guest score to zero so that our js test score at the top would be zero when we click the button
    guestNum.textContent= guestScore;// This changes the HTML content to zero 

    homeScore=0;// We had to set the home  score to zero so that our js test score at the top would be zero when we click the button
    homeNum.textContent= homeScore;// // This changes the HTML content to zero 
}