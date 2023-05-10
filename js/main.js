let hd = document.querySelector("header");
let btn = document.querySelector("header button");
let btnI = document.querySelector("header button i");
let ulist = document.querySelector("header ul");
let aContact = document.querySelector("header a.btn-contact");

let dropM = document.querySelector(".drop-m");
let dropMA = document.querySelector(".drop-m a");
let dropMI = document.querySelector(".drop-m i");
let dropS = document.querySelector(".m-ser");

// dropM.onclick = function () {
//     dropS.classList.toggle("show-ms");
// }

btn.onclick = function () {
    hd.classList.toggle("open-hd");
    ulist.classList.toggle("hid-f");
    aContact.classList.toggle("hid-b");
}

//-----------------

//------
let lA1 = document.querySelector(".m-i1 a");
let lA2 = document.querySelector(".m-i2 a");
let lA3 = document.querySelector(".m-i3 a");
let lA4 = document.querySelector(".m-i4 a");
let lA5 = document.querySelector(".m-i5 a");

lA1.onclick = () => {
    lA1.classList.add("Active");
    lA2.classList.remove("Active");
    lA3.classList.remove("Active");
    lA4.classList.remove("Active");
    lA5.classList.remove("Active");
}
lA2.onclick = () => {
    lA1.classList.remove("Active");
    lA2.classList.add("Active");
    lA3.classList.remove("Active");
    lA4.classList.remove("Active");
    lA5.classList.remove("Active");
}
lA3.onclick = () => {
    lA1.classList.remove("Active");
    lA2.classList.remove("Active");
    lA3.classList.add("Active");
    lA4.classList.remove("Active");
    lA5.classList.remove("Active");
}
lA4.onclick = () => {
    lA1.classList.remove("Active");
    lA2.classList.remove("Active");
    lA3.classList.remove("Active");
    lA4.classList.add("Active");
    lA5.classList.remove("Active");
}
lA5.onclick = () => {
    lA1.classList.remove("Active");
    lA2.classList.remove("Active");
    lA3.classList.remove("Active");
    lA4.classList.remove("Active");
    lA5.classList.add("Active");
}

//---------------

document.addEventListener("click" , (e) =>{

    if(e.target !== btn  && e.target !== hd && e.target !== btnI && e.target !== dropM && e.target !== dropS && e.target !== dropMA && e.target !== dropMI){

        if(hd.classList.contains("open-hd")){
            hd.classList.remove("open-hd");
            ulist.classList.remove("hid-f");
            aContact.classList.remove("hid-b");
        }
    }
});

//-----


//----------------

//600 about
//1668 serves
//2471 store
//2900 footer

//------------------
//عادة يشتي صيانه
let fr1 = document.querySelector(".fr-1");
let fr2 = document.querySelector(".fr-2");
let fr3 = document.querySelector(".fr-3");
let fr4 = document.querySelector(".fr-4");
let fr5 = document.querySelector("footer");
console.log(fr2.offsetTop);
console.log(fr3.offsetTop);
window.onscroll = function(){
    let windowScrollTop = window.pageYOffset;
    let fr1offsetTop = fr1.offsetTop;
    if(windowScrollTop < (350)){
        lA1.classList.add("Active");
        lA2.classList.remove("Active");
        lA3.classList.remove("Active");
        lA4.classList.remove("Active");
        lA5.classList.remove("Active");
    }

    let fr2offsetTop = fr2.offsetTop;
    if(windowScrollTop > fr2offsetTop && windowScrollTop < (fr2offsetTop + fr2.offsetHeight) ){
        lA1.classList.remove("Active");
        lA2.classList.add("Active");
        lA3.classList.remove("Active");
        lA4.classList.remove("Active");
        lA5.classList.remove("Active");
    }

    let fr3offsetTop = fr3.offsetTop;
    if(windowScrollTop > fr3offsetTop && windowScrollTop < (fr3offsetTop + fr3.offsetHeight) ){
        lA1.classList.remove("Active");
        lA2.classList.remove("Active");
        lA3.classList.add("Active");
        lA4.classList.remove("Active");
        lA5.classList.remove("Active");
    }

    let fr4offsetTop = fr4.offsetTop;
    if(windowScrollTop > fr4offsetTop && windowScrollTop < (fr4offsetTop + fr4.offsetHeight) ){
        lA1.classList.remove("Active");
        lA2.classList.remove("Active");
        lA3.classList.remove("Active");
        lA4.classList.add("Active");
        lA5.classList.remove("Active");
    }

    let fr5offsetTop = fr5.offsetTop;
    if(windowScrollTop > (fr5offsetTop - 280)){
        lA1.classList.remove("Active");
        lA2.classList.remove("Active");
        lA3.classList.remove("Active");
        lA4.classList.remove("Active");
        lA5.classList.add("Active");
    }
    // console.log(scrollY)
    // console.log(fr5offsetTop - 300)
    // console.log(fr5.offsetHeight) // height of frim
    // console.log(window.innerHeight) // height of frim
}

//------------------
