const phoneSVG = document.querySelector("#phone-svg");

const laptop = document.querySelector("#laptop");

let svgList = [phoneSVG, laptop]

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
                child.classList.add("animate-phone");
            }

            if(svgChildren.length - i === 1){

                setTimeout(function(){

                    switchAnimations(workingAnimation)

                }, 1000)
            }
        }, i * 200)
    }

}

// AFTER TEST WE WILL ADD SECOND PARAMETER FOR THE NEW ANIMATION

function switchAnimations(oldAnimation){

    if(oldAnimation.id === "laptop"){

        oldAnimation.classList.add("remove-laptop");

        animateSVG(phoneSVG)

    }
    
    if(oldAnimation.id === "phone-svg"){

        oldAnimation.classList.add("remove-phone");

        // animateSVG(phoneSVG)

    }

    setTimeout(function(){

        oldAnimation.removeAttribute("style");

    }, 1000)

}

// HIDING ALL OF THE SVG ELEMENTS

function hideSavages(list){

    for(let j = 0 ; j < list.length ; j++){

        let testChildren = list[j].children;

        for(let i = 0; i < testChildren.length; i++){
            let svgElement = testChildren[i];
            svgElement.style.opacity = 0;
        }

    }

}
