//let scrollHeader=function(){}
let scrollHeader=()=>{
    let header=document.querySelector(".section1");
    //console.log(scrollY)
    //console.log(pageYOffset)
    //조건문?참일때실행문:거짓일때실행문;
    pageYOffset>=50?
    header.classList.add("bg-header"):
    header.classList.remove("bg-header");
}
// window.addEventListener("scroll",function(){
//     scrollHeader()
// })
window.addEventListener("scroll",scrollHeader)
let scrollHeader2=()=>{
    let box=document.querySelector(".section1_box");
    //console.log(scrollY)
    //console.log(pageYOffset)
    //조건문?참일때실행문:거짓일때실행문;
    pageYOffset>=330?
    box.classList.add("bg-header"):
    box.classList.remove("bg-header");
}
// window.addEventListener("scroll",function(){
//     scrollHeader()
// })
window.addEventListener("scroll",scrollHeader2)

let fixed = document.querySelector(".fixed_wrap");
let fixedHeight = fixed.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= fixedHeight) {
    fixed.classList.add("drop");
  } else {
    fixed.classList.remove("drop");
  }
};
// 

var div2 = document.getElementsByClassName("click1");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }

}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }

}

init();

var div3 = document.getElementsByClassName("click2");

function handleClick2(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked2") {
    event.target.classList.remove("clicked2");
  } else {
    for (var i = 0; i < div3.length; i++) {
      div3[i].classList.remove("clicked2");
    }

    event.target.classList.add("clicked2");
  }

}

function init2() {
  for (var i = 0; i < div3.length; i++) {
    div3[i].addEventListener("click", handleClick2);
  }

}

init2();