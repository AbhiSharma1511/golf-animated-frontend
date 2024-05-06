let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(debt)=>{
    crsr.style.left = debt.x+"px";
    crsr.style.top = debt.y+"px";
    crsrblur.style.left = debt.x - 200 +"px";
    crsrblur.style.top = debt.y - 200+"px";
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
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
        markers:true,
        start: "top -40vh",
        end: "top -100%",
        scrub: 1,
    }
})