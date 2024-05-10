let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");

const h4List = document.querySelectorAll("#nav h4");

h4List.forEach((element)=>{
    element.addEventListener("mouseenter",()=>{
        crsr.style.scale= 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    
})
h4List.forEach((element)=>{
    element.addEventListener("mouseleave",()=>{
        crsr.style.scale= 1
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#95c11e"
    })
    
})

document.addEventListener("mousemove",(debt)=>{
    crsr.style.left = debt.x+"px";
    crsr.style.top = debt.y+"px";
    crsrblur.style.left = debt.x - 250 +"px";
    crsrblur.style.top = debt.y - 250+"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -10%",
        scrub: 1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -40vh",
        end: "top -100%",
        scrub: 1,
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 1,
    // stagger: 0.2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 50%",
        scrub:2,
        // markers:true
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 80%",
        end: "top 50%",
        scrub:1,
        // markers:true
    }
})
gsap.from("#colon1",{
    y: -70,
    x:-70,
    
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 1,
        // markers:true
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 1,
        // markers:true
    }
})
gsap.from("#page4-1 h1",{
    y: 80,
    duration: 1,
    scrollTrigger:{
        trigger:"#page4-1 h1",
        scroller:"body",
        // markers:true,
        start: "top 85%",
        end: "top 75%",
        scrub: 1,
    }
})