let matchMedia = gsap.matchMedia();

function createScrollTrigger(trigger, maskPath, invertSvgAnimation, sectionContent, drawDelay, contentDelay) {

    if (invertSvgAnimation) {
        gsap.set($(maskPath), { drawSVG: "100% 100%" });
    }
    else {
        gsap.set($(maskPath), { drawSVG: "0% 0%" });
    }
    if (sectionContent) {
        gsap.set($(sectionContent), { opacity: 0 });
    }

    let drawDelayValue = 0;
    let contentDelayValue = 0.5;
    if (drawDelay) {
        drawDelayValue = drawDelay;
    }
    if (contentDelay) {
        contentDelayValue = contentDelay;
    }

    ScrollTrigger.create({
        trigger: $(trigger),
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {

            if (invertSvgAnimation) {
                gsap.to($(maskPath), { drawSVG: "0% 100%", duration: 0.5, delay: drawDelayValue });
            }
            else {
                gsap.to($(maskPath), { drawSVG: "0% 100%", duration: 0.5, delay: drawDelayValue });
            }
            if (sectionContent) {
                gsap.to($(sectionContent), { opacity: 1, duration: 0.5, delay: contentDelayValue });
            }
        },
        onEnterBack: () => {
            if (sectionContent) {
                gsap.set($(sectionContent), { opacity: 0 });
            }

            if (invertSvgAnimation) {
                gsap.to($(maskPath), { drawSVG: "100% 100%", duration: 0.5 });
            }
            else {
                gsap.to($(maskPath), { drawSVG: "0% 0%", duration: 0.5 });
            }
        },
    });
}