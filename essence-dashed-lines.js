// Meaning
createScrollTrigger(".dashed-line-embed.is-essence-meaning",
"#maskPath-essenceMeaning",
true,
".section-content.is-essence-meaning",
null,
null);

// Message
createScrollTrigger(".dashed-line-embed.is-essence-message",
"#maskPath-essenceMessage",
true,
".section-content.is-essence-message",
null,
null);

// Options Dash 1
createScrollTrigger(".dashed-line-embed.is-essence-options-dash1",
"#maskPath-essenceOptionsDash1",
true,
".essence-options_item.is-01",
null,
null);

// Options Dash 2
createScrollTrigger(".dashed-line-embed.is-essence-options-dash2",
"#maskPath-essenceOptionsDash2",
true,
".essence-options_item.is-02",
0.5,
1);

// Options Dash 3
createScrollTrigger(".dashed-line-embed.is-essence-options-dash3",
"#maskPath-essenceOptionsDash3",
false,
".essence-options_item.is-03",
1,
1.5);

// Judith
createScrollTrigger(".dashed-line-embed.is-essence-judith",
"#maskPath-essenceJudith",
false,
".section-content.is-essence-judith",
null,
null);

// Values
createScrollTrigger(".dashed-line-embed.is-essence-values",
"#maskPath-essenceValues",
true,
".section-content.is-essence-values",
null,
null);

// Partners
createScrollTrigger(".dashed-line-embed.is-essence-partners",
"#maskPath-essencePartners",
true,
".section-content.is-essence-partners",
null,
null);

// CTA Events
createScrollTrigger(".dashed-line-embed.is-essence-cta-events",
"#maskPath-essenceCtaEvents",
true,
".section-content.is-essence-cta-events",
null,
null);

function createScrollTrigger(trigger, maskPath, invertSvgAnimation, sectionContent, drawDelay, contentDelay) {
    
    if(invertSvgAnimation) {
        gsap.set($(maskPath), {drawSVG: "100% 100%"});
    }
    else {
        gsap.set($(maskPath), {drawSVG: "0% 0%"});
    }
    if(sectionContent) {
        gsap.set($(sectionContent), {opacity: 0});
    }

    let drawDelayValue = 0;
    let contentDelayValue = 0.5;
    if(drawDelay) {
        drawDelayValue = drawDelay;
    }
    if(contentDelay) {
        contentDelayValue = contentDelay;
    }

    ScrollTrigger.create({
        trigger: $(trigger),
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
            
            if(invertSvgAnimation) {
                gsap.to($(maskPath), {drawSVG: "0% 100%", duration: 0.5, delay: drawDelayValue});
            }
            else {
                gsap.to($(maskPath), {drawSVG: "0% 100%", duration: 0.5, delay: drawDelayValue});
            }          
            if(sectionContent) {
                gsap.to($(sectionContent), {opacity: 1, duration: 0.5, delay: contentDelayValue});
            }
        },
        onEnterBack: () => {
            if(sectionContent) {
                gsap.set($(sectionContent), {opacity: 0});
            }

            if(invertSvgAnimation) {
                gsap.to($(maskPath), {drawSVG: "100% 100%", duration: 0.5});
            }
            else {
                gsap.to($(maskPath), {drawSVG: "0% 00%", duration: 0.5});
            }
        },
    });
}