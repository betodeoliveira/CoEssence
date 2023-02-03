// About
createScrollTrigger(".dashed-line-embed.is-home-about",
"#maskPath-homeAbout",
true,
".section-content.is-home-about");

// Offers
createScrollTrigger(".dashed-line-embed.is-home-offers",
"#maskPath-homeOffers",
true,
".section-content.is-home-offers");

// Events 01
createScrollTrigger(".dashed-line-embed.is-home-events-01",
"#maskPath-homeEvents01",
false);

// Events 02
createScrollTrigger(".dashed-line-embed.is-home-events-02",
"#maskPath-homeEvents02",
true,
".section-content.is-home-events");

// Events 03
createScrollTrigger(".dashed-line-embed.is-home-events-03",
"#maskPath-homeEvents03",
false);

// CTA Indivisual Class
createScrollTrigger(".dashed-line-embed.is-home-cta-individual-class",
"#maskPath-homeCtaIndividualClass",
true,
".section-content.is-home-cta-individual-class");

// Blog
createScrollTrigger(".dashed-line-embed.is-home-blog",
"#maskPath-homeBlog",
true,
".section-content.is-home-blog");

function createScrollTrigger(trigger, maskPath, drawSvgFromEnd, sectionContent) {
    
    if(drawSvgFromEnd) {
        gsap.set($(maskPath), {drawSVG: "100% 100%"});
    }
    else {
        gsap.set($(maskPath), {drawSVG: "0% 0%"});
    }
    if(sectionContent) {
        gsap.set($(sectionContent), {opacity: 0});
    }

    ScrollTrigger.create({
        trigger: $(trigger),
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
            
            if(drawSvgFromEnd) {
                gsap.to($(maskPath), {drawSVG: "0% 100%", duration: 0.5});
            }
            else {
                gsap.to($(maskPath), {drawSVG: "0% 100%", duration: 0.5});
            }
            
            if(sectionContent) {
                gsap.to($(sectionContent), {opacity: 1, duration: 0.5, delay: 0.5});
            }
        },
        onEnterBack: () => {
            if(sectionContent) {
                gsap.set($(sectionContent), {opacity: 0});
            }

            if(drawSvgFromEnd) {
                gsap.to($(maskPath), {drawSVG: "100% 100%", duration: 0.5});
            }
            else {
                gsap.to($(maskPath), {drawSVG: "0% 00%", duration: 0.5});
            }
        },
    });
}