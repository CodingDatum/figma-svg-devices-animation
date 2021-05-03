const phoneSVG = document.querySelector("#phone-svg");

const laptop = document.querySelector("#laptop");

const tabletSVG = document.querySelector("#tablet-svg");

let svgList = [phoneSVG, laptop, tabletSVG]

hideSavages(svgList);

let workingAnimation;

animateSVG(laptop)

function animateSVG(svgFile){

    workingAnimation = svgFile;

    let svgChildren = svgFile.children;
    
    for(let i = 0 ; i < svgChildren.length; i++){
        let child = svgChildren[i];

        setTimeout(function(){

            if(svgFile.id === "laptop"){
                child.classList.add("animate-laptop");
            }

            if(svgFile.id === "phone-svg"){
                svgFile.classList.remove("hidden");
                child.classList.add("animate-phone");
            }
            if(svgFile.id === "tablet-svg"){
                svgFile.classList.remove("hidden");
                child.classList.add("animate-tablet");
            }

            if(svgChildren.length - i === 1){

                setTimeout(function(){

                    switchAnimations(workingAnimation)

                }, 1000)
            }
        }, i * 100)
    }

}

function switchAnimations(oldAnimation){

    if(oldAnimation.id === "laptop"){

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

        oldAnimation.remove();

        if(oldAnimation.id === "tablet.svg"){

            const animationContainer = document.querySelector(".animation-container");

            animationContainer.remove();

            animateHero();

        }

    }, 1000)

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
