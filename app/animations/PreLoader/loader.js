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
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut"
    })
    .to(".text-container span", {
        duration: 1,
        y: 70,
        skewY: -20,
        stagger: 0.1,
        ease: "Power3.easeOut"
    })
    .to("body", {
        duration: 0.01,
        css: {overflowY: "scroll"},
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
            onComplete: mobileLanding(),
        },
        "-=2"
    )
    .to(".preloader", {
        duration: 0,
        css: {display: "none"},
    })
}

export const mobileLanding = () => {
    window.innerWidth < 763 && 
    tl.from(".landing_main2", {
        duration: 1,
        delay: 0,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut",
    })
}
