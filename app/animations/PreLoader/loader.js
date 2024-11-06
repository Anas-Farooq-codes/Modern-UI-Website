import gsap from "gsap";

const tl = gsap.timeline();

// Preloader animation 

export const preLoaderAnim = () => {
    tl.to(".text-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
    })
    .from(".text-container span", {
        duration: 1.5,
        delay: 0.5,
        y: 70,      
        scale: 0.5, 
        opacity: 0, 
        stagger: 0.4,
        ease: "Power3.easeOut"
    })
    .to(".text-container span", {
        duration: 1,
        y: 0,      
        scale: 1,   
        opacity: 1, 
        stagger: 0.1,
        ease: "Power3.easeOut"
    })
    .to("body", {
        duration: 0.01,
        css: { overflowY: "scroll" },
        ease: "power3.inOut",
    })
    .from(".sub", {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut",
    })
    .to(
        ".preloader",
        {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut",
            onComplete: fadeOutText,
        },
        "-=1.2"
    );
}

const fadeOutText = () => {

    gsap.to(".text-container span", {
        duration: 1,
        opacity: 0,
        y: -30,  
        stagger: 0.1,
        ease: "Power3.easeOut", 
        onComplete: removePreloader,
    });
}

const removePreloader = () => {
    gsap.to(".preloader", {
        duration: 1,
        opacity: 0,
        onComplete: mobileLanding, 
    });
}

export const mobileLanding = () => {
    if (window.innerWidth < 763) {
        gsap.from(".landing_main2", {
            duration: 1,
            delay: 0,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        });
    }
}