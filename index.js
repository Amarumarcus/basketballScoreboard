// javascript

//AWAY

let awayScore = document.getElementById("away-score")
let awaycount = 0

function plus1a() {
    awaycount += 1
    awayScore.textContent = awaycount
}

function plus2a() {
    awaycount += 2
    awayScore.textContent = awaycount
}

function plus3a() {
    awaycount += 3
    awayScore.textContent = awaycount
}

//HOME

let homeScore = document.getElementById("home-score")
let homecount = 0

function plus1h() {
    homecount += 1
    homeScore.textContent = homecount
}

function plus2h() {
    homecount += 2
    homeScore.textContent = homecount
}

function plus3h() {
    homecount += 3
    homeScore.textContent = homecount
}
