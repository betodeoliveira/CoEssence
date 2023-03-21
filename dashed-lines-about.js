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

// Match Media - On desktop
matchMedia.add("(min-width: 992px)", () => {
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
});

// Match Media - On tablet and below
matchMedia.add("(max-width: 991px)", () => {
    // Options Mobile
    createScrollTrigger(".dashed-line-embed.is-essence-options-mobile",
        "#maskPath-essenceOptionsMobile",
        true,
        ".section-content.is-essence-options",
        null,
        null);

    // Judith Mobile
    createScrollTrigger(".dashed-line-embed.is-essence-judith-mobile",
        "#maskPath-essenceJudithMobile",
        true,
        ".section-content.is-essence-judith",
        null,
        null);
});

// Praxis Gallery
createScrollTrigger(".dashed-line-embed.is-essence-praxis",
    "#maskPath-essencePraxis",
    true,
    ".section-content.is-essence-praxis",
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