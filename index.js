const phoneSVG = document.querySelector("#phone-svg");

const laptop = document.querySelector("#laptop-svg");

const tabletSVG = document.querySelector("#tablet-svg");

let svgList = [phoneSVG, laptop, tabletSVG];

let animationText = document.querySelector(".comment-animation-container");

hideSavages(svgList);

let workingAnimation;

function animateSVG(svgFile){

    workingAnimation = svgFile;

    let svgChildren = svgFile.children;

    svgFile.classList.remove("hidden");
    
    for(let i = 0 ; i < svgChildren.length; i++){
        let child = svgChildren[i];

        setTimeout(function(){

            if(svgFile.id === "laptop-svg"){
                child.classList.add("animate-laptop");
            }

            if(svgFile.id === "phone-svg"){
                child.classList.add("animate-phone");
                setTimeout(function(){
                    animationText.innerHTML = "Compatible Sites.";
                }, 200)
            }
            if(svgFile.id === "tablet-svg"){
                child.classList.add("animate-tablet");
                animationText.classList.add("move-text");
                setTimeout(function(){
                    animationText.innerHTML = "Thoughtfully Crafted."
                }, 2000)
            }

            if(svgChildren.length - i === 1){

                setTimeout(function(){

                    switchAnimations(workingAnimation)

                }, 1000)
            }
        }, i * 200)
    }

}

function switchAnimations(oldAnimation){

    if(oldAnimation.id === "laptop-svg"){

        oldAnimation.classList.add("remove-laptop");

        animateSVG(phoneSVG)

    }
    
    if(oldAnimation.id === "phone-svg"){

        oldAnimation.classList.add("remove-phone");

        animateSVG(tabletSVG)

    }
    if(oldAnimation.id === "tablet-svg"){

        oldAnimation.classList.add("remove-tablet");

    }

    setTimeout(function(){

        if(oldAnimation.id === "tablet-svg"){

            animateHero();

        }

        oldAnimation.remove();

    }, 3000)

}

function hideSavages(list){

    for(let j = 0 ; j < list.length ; j++){

        let testChildren = list[j].children;

        for(let i = 0; i < testChildren.length; i++){
            let svgElement = testChildren[i];
            svgElement.style.opacity = 0;
        }

    }

}

setTimeout(function(){
    animateSVG(laptop)
}, 500);


// ANIMATED COMMENTS SECTION

const heroSVG = document.querySelector("#hero1");

const heroPaths = document.querySelectorAll("#hero1 path");

const animationContainer = document.querySelector(".animation-container");

// the following is how we determine the stroke-dash properties of each SVG letter path

// for(let i = 0 ; i < heroPaths.length ; i++){

//     let path = heroPaths[i];
//     let pathLength = path.getTotalLength();
//     console.log(pathLength);

// };

const homeButton = document.querySelector(".button-animation");

function animateHero(){

    heroSVG.classList.add("fill");

    setTimeout(() => {
        homeButton.classList.remove("hidden");
    }, 2000);

}
