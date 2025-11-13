const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.add("accordion__active");
    content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("accordion__active");
    content.style.maxHeight = null;
};

// If sticky_header add not small screen size, offset of 80/100 based on device width.
const getScrollOffset = () => {
    // Based on .header.stick media breakpoints.
    const isSmallCategory = window.innerWidth >= 515 && window.innerHeight <= 615;

    if (isSmallCategory) {
        return 0;
    } else if (window.innerWidth < 1000) {
        return stickyHeader ? 80 : 0;
    } else {
        return stickyHeader ? 100 : 0;
    }
};

accordions.forEach((accordion) => {
    const title = accordion.querySelector(".accordion__title");
    const content = accordion.querySelector(".accordion__content");

    title.onclick = () => {
        if (content.style.maxHeight) {
            closeAccordion(accordion);
        } else {
            accordions.forEach((accordion) => closeAccordion(accordion));
            openAccordion(accordion);

            // Use setTimeout to wait a moment before scrolling into view.
            setTimeout(() => {
                const offset = getScrollOffset();
                const elementTop = accordion.getBoundingClientRect().top;
                window.scrollBy({
                    top: elementTop - offset,
                    behavior: 'smooth'
                });
            }, 250);
        }
    };
});

/* === Deep Link Anchor Opener === */
function openAnchor() {
    var anchorId = window.location.hash;
    
    if (anchorId && anchorId.length > 1) {
        // Find the question header using the data-target attribute
        var headerElement = document.querySelector('[data-target="' + anchorId + '"]');

        if (headerElement) {
            // Trigger the theme's own click handler, which now correctly includes
            // the max-height, the active class, and the complex scroll offset logic.
            headerElement.click(); 
        }
    }
}

// Call the new function when the accordion script (which runs after DOMContentLoaded) finishes its setup.
// We use a small delay just to ensure the accordion click listeners are fully attached.
setTimeout(openAnchor, 50);