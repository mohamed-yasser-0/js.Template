// change background
let backgrounds = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
  "img/10.jpg"
];
let count = 0

// settings
let open = document.querySelector(".landing .settings .toggle-settings");
let settings = document.querySelector(".landing .settings");
open.onclick = ()=>{
  settings.classList.toggle("settingsActive")
}

let root = document.documentElement;
let colors = document.querySelectorAll(".landing .coler li")
let randomBackgrounds = document.querySelectorAll(".settings-container .Background button");
let Bullets = document.querySelectorAll(".settings-container .Bullets button");
let Bullet = document.querySelector(".landing .bullet");


lcs = localStorage.getItem("ele")
bul = localStorage.getItem("Bullets")

if(localStorage.getItem("colors")){
  col = localStorage.getItem("colors");
}else{
  col = colors[1].getAttribute("data-color");
}


root.style.setProperty('--main-color', col);
let li = document.querySelector(`[data-color="${col}"]`)
      colors.forEach((x)=>{
        x.classList.remove("active")
      })
      li.classList.add("active")
      
if(bul){
if(bul == "Bullets[0]"){
    Bullets[1].classList.remove("active")
    Bullets[0].classList.add("active")
}else{
    Bullets[0].classList.remove("active")
    Bullets[1].classList.add("active")
}  
}else{
    Bullets[1].classList.remove("active")
    Bullets[0].classList.add("active")
}
if(lcs){
  if(lcs == "randomBackgrounds[0]"){
      randomBackgrounds[1].classList.remove("active")
      randomBackgrounds[0].classList.add("active")
  }else{
      randomBackgrounds[0].classList.remove("active")
      randomBackgrounds[1].classList.add("active")
  }  
}else{
    randomBackgrounds[1].classList.remove("active")
    randomBackgrounds[0].classList.add("active")
}


if(Bullets[1].classList.contains("active")){
    Bullet.classList.remove("show")
}
if(randomBackgrounds[0].classList.contains("active")){
    generate()
}

  randomBackgrounds.forEach((e)=>{
    e.onclick = ()=>{
console.log("done")
      randomBackgrounds[0].classList.remove("active")
      randomBackgrounds[1].classList.remove("active")
      e.classList.add("active")

        if(randomBackgrounds[0].classList.contains("active")){
          localStorage.setItem("ele", "randomBackgrounds[0]")
        generate()
        }else{
          localStorage.setItem("ele", "randomBackgrounds[1]")
        }
    }
  })

  Bullets.forEach((e)=>{
    e.onclick = ()=>{
      Bullets[0].classList.remove("active")
      Bullets[1].classList.remove("active")
      e.classList.add("active")

        if(Bullets[1].classList.contains("active")){
          localStorage.setItem("Bullets","Bullets[1]")
          Bullet.classList.remove("show")
          
        }else{
          localStorage.setItem("Bullets","Bullets[0]")
          Bullet.classList.add("show")
        }
    }
  })



  

  colors.forEach((e)=>{
    e.style.backgroundColor= `${e.dataset.color}`
    e.onclick = ()=>{
      root.style.setProperty('--main-color', `${e.dataset.color}`);
      localStorage.setItem("colors", `${e.dataset.color}`)
      colors.forEach((x)=>{
        x.classList.remove("active")
      })
      e.classList.add("active")
    }
  })
    // reset
  let reset = document.querySelector(".landing .settings .settings-container > button");
  reset.onclick = ()=>{
    
    localStorage.setItem("Bullets","Bullets[0]")
    localStorage.setItem("ele", "randomBackgrounds[0]")
    localStorage.setItem("colors", `#E91E63`)

      Bullets[1].classList.remove("active")
      Bullets[0].classList.add("active")
      Bullet.classList.add("show")

      randomBackgrounds[1].classList.remove("active")
      randomBackgrounds[0].classList.add("active")
      generate()

      colors.forEach((x)=>{
        x.classList.remove("active")
      })
      colors[1].classList.add("active")
      root.style.setProperty('--main-color', `#E91E63`);

  }

var intervalId;
function generate(){
  
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let landing = document.querySelector(".landing");
    if(randomBackgrounds[1].classList.contains("active")){
      clearInterval(intervalId);
    } else {
      landing.style.backgroundImage = `url(${backgrounds[count]})`;
      count = (count + 1) % backgrounds.length;
    }
  }, 3300);
}



// menu
let menu =document.querySelector(".landing .menu");
let list =document.querySelector(".landing .header-area ul")
menu.onclick = ()=>{
  menu.classList.toggle("active-menu")
  list.classList.toggle("active")
}
// Our Skills
let skill = document.querySelectorAll(".our-skills .on .info");
let ourSkills = document.querySelector(".our-skills");
let start = false

window.addEventListener("scroll",()=>{
  if(start === false){
    if(window.scrollY >= ourSkills.offsetTop-300){
      skill.forEach((e) => {
        e.style.width = e.dataset.number;
      });
      start = true;
    }
  }
})

//open gallery
let gallery = document.querySelectorAll(".gallery .box")
let img = document.querySelectorAll(".gallery .box img")
let pop = document.querySelector(".gallery .pop")
let title = document.querySelector(".gallery .pop h4")
let imgPop = document.querySelector(".gallery .pop img")
let ext = document.querySelector(".gallery .pop span")
let overlay = document.querySelector(".gallery .overlay")


gallery.forEach((e,index)=>{
  e.onclick=()=>{
    pop.classList.add("active")
    overlay.classList.add("active")
    imgPop.src = img[index].src
    title.innerHTML = img[index].alt

    ext.addEventListener("click",()=>{
      pop.classList.remove("active")
      overlay.classList.remove("active")
    })
  }
  
})


