// Message
createScrollTrigger(".dashed-line-embed.is-coaching-message",
    "#maskPath-coachingMessage",
    true,
    ".section-content.is-coaching-message",
    null,
    null);

// Details Title
createScrollTrigger(".dashed-line-embed.is-coaching-details-title",
    "#maskPath-coachinngDetailsTitle",
    true,
    ".section-content.is-coaching-details-title",
    null,
    null);

// Match Media - On desktop
matchMedia.add("(min-width: 992px)", () => {
    // Details 01
    createScrollTrigger(".dashed-line-embed.is-coaching-details-dash1",
        "#maskPath-coachingDetailsDash1",
        true,
        ".coaching-details_option-item.is-01",
        null,
        null);

    // Details 02
    createScrollTrigger(".dashed-line-embed.is-coaching-details-dash2",
        "#maskPath-coachingDetailsDash2",
        true,
        ".coaching-details_option-item.is-02",
        0.5,
        1);

    // Details 03
    createScrollTrigger(".dashed-line-embed.is-coaching-details-dash3",
        "#maskPath-coachingDetailsDash3",
        true,
        ".coaching-details_option-item.is-03",
        null,
        null);

    // Details 04
    createScrollTrigger(".dashed-line-embed.is-coaching-details-dash4",
        "#maskPath-coachingDetailsDash4",
        false,
        ".coaching-details_option-item.is-04",
        0.5,
        1);
});

// Details CTA
createScrollTrigger(".dashed-line-embed.is-coaching-details-cta",
    "#maskPath-coachinngDetailsCta",
    true,
    ".section-content.is-coaching-details-cta",
    null,
    null);

// Embed
createScrollTrigger(".dashed-line-embed.is-coaching-embed",
    "#maskPath-coachingEmbed",
    true,
    ".section-content.is-coaching-embed",
    null,
    null);