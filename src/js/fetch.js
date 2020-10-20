// Projekt — DT0173G, Webbutveckling, Mittuniversitetet. Av Elin Stenbäck 2020 

"use strict";

// Variables
let portfolioEl = document.getElementById("printPortfolio");
let studyEl = document.getElementById("printStudy");
let workEl = document.getElementById("printWork");

// Eventlisteners
window.addEventListener("load", getPortfolio);
window.addEventListener("load", getStudy);
window.addEventListener("load", getWork);

// Function to get portfolio table
function getPortfolio() {
    portfolioEl.innerHTML = "";
    fetch("http://elinstenback.se/projekt/portfolio.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(portfolio => {
                portfolioEl.innerHTML +=
                    `<div class="portfolio">
                    <p>${portfolio.title} -
                    <a target="_blank" href="${portfolio.url}">To site</a>,
                    ${portfolio.description}</p>
                </div>`
            })
        })
}

// Function to get study table
function getStudy() {
    studyEl.innerHTML = "";
    fetch("http://elinstenback.se/projekt/study.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(study => {
                studyEl.innerHTML +=
                    `<div class="study">
                    <p>${study.university} -
                    ${study.coursename},
                    ${study.date}</p>
                </div>`
            })
        })
}

// Function to get work table
function getWork() {
    workEl.innerHTML = "";
    fetch("http://elinstenback.se/projekt/work.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(work => {
                workEl.innerHTML +=
                    `<div class="work">
                    <p>${work.name} -
                    ${work.title},
                    ${work.date}</p>
                </div>`
            })
        })
}