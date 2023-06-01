// get the element of the score and the winning message
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let messageEl = document.getElementById("message")

// get the elements of the home buttons
let homeAddBtnOne = document.getElementById("home-add-btn-one")
let homeAddBtnTwo = document.getElementById("home-add-btn-two")
let homeAddBtnThree = document.getElementById("home-add-btn-three")

// get the elements of the guest buttons
let guestAddBtnOne = document.getElementById("guest-add-btn-one")
let guestAddBtnTwo = document.getElementById("guest-add-btn-two")
let guestAddBtnThree = document.getElementById("guest-add-btn-three")

// get the element of the theme button for light and dark mode
let themeBtn = document.getElementById("theme-btn")
// initially set the theme to dark
let themeState = "dark"

// initially set the score to 0
homePoints.textContent = 0
guestPoints.textContent = 0

// function that adds a specific number to the current score
function addToScore(score, value) {
    score.textContent = +score.textContent + value;
}

// when buttons are clicked, corresponding value is added to the score
homeAddBtnOne.addEventListener( "click" , function() { addToScore(homePoints,1); gameOver()} )
homeAddBtnTwo.addEventListener( "click" , function() { addToScore(homePoints,2); gameOver() } )
homeAddBtnThree.addEventListener( "click" , function() { addToScore(homePoints,3); gameOver() } )
guestAddBtnOne.addEventListener( "click" , function() { addToScore(guestPoints,1); gameOver() } )
guestAddBtnTwo.addEventListener( "click" , function() { addToScore(guestPoints,2); gameOver() } )
guestAddBtnThree.addEventListener( "click" , function() { addToScore(guestPoints,3); gameOver() } )

// function that shows the "win" or "lost" message when 30 points are reached
// "new game"-button and winning message are generated
function gameOver () {
    if (homePoints.textContent >= 30) {
        homePoints.textContent = "WON"
        guestPoints.textContent = "LOST"
        messageEl.textContent = "The Home team won!"
        document.getElementById("message").style.background = "#8B2500";
        addBtn()
        disableAddButtons(true)
    } else if (guestPoints.textContent >= 30) {
        homePoints.textContent = "LOST"
        guestPoints.textContent = "WON"
        messageEl.textContent = "The Guest team won!"
        document.getElementById("message").style.background = "#8B2500";
        addBtn()
        disableAddButtons(true)
    }
}

// function that disables the add buttons when the state is true
// used after the score reaches 30 and no value can be added anymore
function disableAddButtons(state) {
    homeAddBtnOne.disabled = state;
    homeAddBtnTwo.disabled = state;
    homeAddBtnThree.disabled = state;
    guestAddBtnOne.disabled = state;
    guestAddBtnTwo.disabled = state;
    guestAddBtnThree.disabled = state;
}

// function that adds a "new game" button and a winning message
function addBtn() {
    //create button and add it to the HTML
    let newGameBtn = document.createElement("button");
    newGameBtn.innerHTML = "New Game";
    document.body.appendChild(newGameBtn);

    // when the "new game"-button is clicked, the button and the message will
    // disappear, the scores are set to 0 and the add buttons will be enabled again
    newGameBtn.addEventListener("click", function() {
        homePoints.textContent = 0
        guestPoints.textContent = 0
        disableAddButtons(false)
        newGameBtn.remove()
        messageEl.textContent = ""
        document.getElementById("message").style.backgroundColor = "transparent"
    })
}

// Theme button switches between dark and light mode
// Changes button background, color and textContent and body background
themeBtn.addEventListener("click", function() {
    if(themeState == "dark") {
        // Change the state of the theme
        themeState = "light"

        // Change the button style
        themeBtn.style.background = "#121212"
        themeBtn.style.color = "white"
        themeBtn.textContent = "Change Theme🌑"

        // Change the body style
        document.body.style.background = "white"
        document.body.style.color = "black"
    } 
    else if(themeState == "light"){
        themeState = "dark"
        themeBtn.style.background = "white"
        themeBtn.style.color = "#121212"
        themeBtn.textContent = "Change Theme☀️"
        document.body.style.background = "#121212"
        document.body.style.color = "white"
    }
})