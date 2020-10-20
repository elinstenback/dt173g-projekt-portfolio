// Projekt — DT0173G, Webbutveckling, Mittuniversitetet. Av Elin Stenbäck 2020 

const about = document.getElementById('about');
if (!about) {

    // Carousel
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector("#carousel-button-right");
    const prevButton = document.querySelector("#carousel-button-left");
    const linesNav = document.querySelector(".carousel-nav");
    const lines = Array.from(linesNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // arrange the slides
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    }

    slides.forEach(setSlidePosition)


    // sliding image function
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    }

    // line fill function
    const updateLines = (currentLine, targetLine) => {
        currentLine.classList.remove("current-slide");
        targetLine.classList.add("current-slide");
    }

    // hide arrows function
    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add("is-hidden");
            nextButton.classList.remove("is-hidden");
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden");
        } else {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden");
        }
    }


    // click left, move slide to left
    prevButton.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentLine = linesNav.querySelector(".current-slide");
        const prevLine = currentLine.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        updateLines(currentLine, prevLine);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    // click right, move slide to right
    nextButton.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const currentLine = linesNav.querySelector(".current-slide");
        const nextLine = currentLine.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateLines(currentLine, nextLine);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    // on click, nav indicators shift
    linesNav.addEventListener("click", e => {
        // what indicator was clicked on
        const targetLine = e.target.closest("button");

        if (!targetLine) return;

        const currentSlide = track.querySelector(".current-slide");
        const currentLine = linesNav.querySelector(".current-slide");
        const targetIndex = lines.findIndex(line => line === targetLine);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateLines(currentLine, targetLine);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);
    })

}