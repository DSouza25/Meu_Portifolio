const iconLinkedin = document.querySelector("#img1")
const iconGithub = document.querySelector("#img2")
const iconGmail = document.querySelector("#img3")

iconLinkedin.addEventListener('mouseenter', (e) => {
    iconLinkedin.src = "https://cdn-icons-png.flaticon.com/128/3991/3991775.png";
    iconLinkedin.style.borderRadius = "10px";
    iconLinkedin.style.boxShadow = "0px 1px 2px black";
})
iconLinkedin.addEventListener('mouseleave', (e) => {
    iconLinkedin.src = "https://cdn-icons-png.flaticon.com/128/3488/3488326.png";
    iconLinkedin.style.boxShadow = "0px 0px 0px black";
})

iconGithub.addEventListener('mouseenter', (e) => {
    iconGithub.src = "https://cdn-icons-png.flaticon.com/128/5968/5968866.png";
    iconGithub.style.borderRadius = "10px";
    iconGithub.style.boxShadow = "0px 1px 2px black";
})
iconGithub.addEventListener('mouseleave', (e) => {
    iconGithub.src = "https://cdn-icons-png.flaticon.com/128/3488/3488426.png";
    iconGithub.style.boxShadow = "0px 0px 0px black";
})

/* interação com as informações pessoais*/
function toMove(){
    let perfilBlock = document.querySelector(".perfil");
    perfilBlock.style.left = "52%";
    perfilBlock.style.transition = "1s";
    
    let name = document.querySelector("#name");
    let slogan = document.querySelector("#slogan");
    let moreInformation = document.querySelector("#moreInformation");
    
   
    name.style.animation = "sumir .5s both"

    
    slogan.style.animation = "sumir .5s both"
    
    
    moreInformation.style.animation = "sumir .5s both"

    
    
    let iName = document.querySelector("#iName");
    iName.style.animation = "informationsIn 1s both .3s";

    let fullName = document.querySelector("#fullName");
    fullName.style.animation = "informationsIn 1s both .4s";

    let iAge = document.querySelector("#iAge");
    iAge.style.animation = "informationsIn 1s both .3s";

    let age = document.querySelector("#age");
    age.style.animation = "informationsIn 1s both .4s";

    let iFormation = document.querySelector("#iFormation");
    iFormation.style.animation = "informationsIn 1s both .3s";

    let formation = document.querySelector("#formation");
    formation.style.animation = "informationsIn 1s both .4s";

    let iTech = document.querySelector("#iTech");
    iTech.style.animation = "informationsIn 1s both .3s";

    let tech = document.querySelector("#tech");
    tech.style.animation = "informationsIn 1s both .4s";
}

function toBack(){
    let perfilBlock = document.querySelector(".perfil");
    perfilBlock.style.left = "7.5%";
    perfilBlock.style.transition = "1s";
    
    let name = document.querySelector("#name");
    let slogan = document.querySelector("#slogan");
    let moreInformation = document.querySelector("#moreInformation");
    
    moreInformation.style.display = "flex";
    slogan.style.display = "block";
    name.style.display = "block";
    
    name.style.animation = "surgir 1s both .3s"

    slogan.style.animation = "surgir 1s both .3s"
   
    moreInformation.style.animation = "surgir 1s both .3s"

    
    
    let iName = document.querySelector("#iName");
    iName.style.transform = "translateY(-60px)";
    iName.style.animation = "sumir 1s both";

    let fullName = document.querySelector("#fullName");
    fullName.style.transform = "translateY(-60px)";
    fullName.style.animation = "sumir 1s both";

    let iAge = document.querySelector("#iAge");
    iAge.style.transform = "translateY(-60px)";
    iAge.style.animation = "sumir 1s both";

    let age = document.querySelector("#age");
    age.style.transform = "translateY(-60px)";
    age.style.animation = "sumir 1s both";

    let iFormation = document.querySelector("#iFormation");
    iFormation.style.transform = "translateY(-60px)";
    iFormation.style.animation = "sumir 1s both";

    let formation = document.querySelector("#formation");
    formation.style.transform = "translateY(-60px)";
    formation.style.animation = "sumir 1s both";

    let iTech = document.querySelector("#iTech");
    iTech.style.transform = "translateY(-60px)";
    iTech.style.animation = "sumir 1s both";

    let tech = document.querySelector("#tech");
    tech.style.transform = "translateY(-60px)";
    tech.style.animation = "sumir 1s both";
}


/*------------------------------------------------------------------*/
/* ↓↓↓↓↓ Projects ↓↓↓↓↓ */

const projects = [{
    tecnology: ["HTML5", "CSS3"],
    name: "Login animado",
    link: "https://dsouza25.github.io/Login-Animado-com-CSS/",
    image: "images/login_animado.png",
    description: "Projeto feito com HTML5 e CSS3, onde mostra a entrada suavizada dos inputs para gerar uma dinamização com o usuário",
}, {
    tecnology: ["HTML5", "CSS3", "JavaScript"],
    name: "Pokedex",
    link: "https://dsouza25.github.io/pokedex/",
    image: "images/pokedex.png",
    description: "Projeito feito para treinar o uso do javascript na estilização dinâmica e a consulta de API's",
}]
/* ↑↑↑↑↑ Projects ↑↑↑↑↑*/
/* ------------------------------------------------------------------*/
let projectName = document.querySelector("#nameView")
let proectView = document.querySelector("#projectView")
let projectDescription = document.querySelector("#description")
let projectLink = document.querySelector("#projectLink")

let index = 0;
    projectName.innerHTML = projects[index].name;
    proectView.style.backgroundImage = `url(${projects[index].image})`;
    projectDescription.innerHTML = projects[index].description;
    projectLink.href = projects[index].link;
function changeProject(increment){
    if((index == 0 && increment < 0)||(index == (projects.length - 1) && increment > 0)){
        index = index;
    } else{
        index = index + increment;
    }
    projectName.innerHTML = projects[index].name;
    proectView.style.backgroundImage = `url(${projects[index].image})`;
    projectDescription.innerHTML = projects[index].description;
    projectLink.href = projects[index].link;

}
    var elemento_pai = document.querySelector('.backgroundDinamico');
    for (let index = 0; index < 50; index++) {
    
    var divNova = document.createElement("div");
    divNova.classList.add("luz");
    elemento_pai.appendChild(divNova);
    const brilho = document.querySelectorAll('.luz');
    let divisor = Math.random() * (20 - 5) + 5;
    brilho[index].style.animation = `piscar calc(180s/${divisor}) linear infinite`;
    }

if(window.innerWidth <= 425){
    function toMove(){
        let perfilBlock = document.querySelector(".perfil");
        perfilBlock.style.left = "0%";
        perfilBlock.style.top = "50%";
        perfilBlock.style.transition = "1s";
        
        let name = document.querySelector("#name");
        let slogan = document.querySelector("#slogan");
        let moreInformation = document.querySelector("#moreInformation");
        
       
        name.style.animation = "sumir .5s both"
    
        
        slogan.style.animation = "sumir .5s both"
        
        
        moreInformation.style.animation = "sumir .5s both"
    
        
        
        let iName = document.querySelector("#iName");
        iName.style.animation = "informationsIn 1s both .3s";
    
        let fullName = document.querySelector("#fullName");
        fullName.style.animation = "informationsIn 1s both .4s";
    
        let iAge = document.querySelector("#iAge");
        iAge.style.animation = "informationsIn 1s both .3s";
    
        let age = document.querySelector("#age");
        age.style.animation = "informationsIn 1s both .4s";
    
        let iFormation = document.querySelector("#iFormation");
        iFormation.style.animation = "informationsIn 1s both .3s";
    
        let formation = document.querySelector("#formation");
        formation.style.animation = "informationsIn 1s both .4s";
    
        let iTech = document.querySelector("#iTech");
        iTech.style.animation = "informationsIn 1s both .3s";
    
        let tech = document.querySelector("#tech");
        tech.style.animation = "informationsIn 1s both .4s";
    }

    function toBack(){
        let perfilBlock = document.querySelector(".perfil");
        perfilBlock.style.left = "0%";
        perfilBlock.style.top = "0%";
        perfilBlock.style.transition = "1s";
        
        let name = document.querySelector("#name");
        let slogan = document.querySelector("#slogan");
        let moreInformation = document.querySelector("#moreInformation");
        
        moreInformation.style.display = "flex";
        slogan.style.display = "block";
        name.style.display = "block";
        
        name.style.animation = "surgir 1s both .3s"
    
        slogan.style.animation = "surgir 1s both .3s"
       
        moreInformation.style.animation = "surgir 1s both .3s"
    
        
        
        let iName = document.querySelector("#iName");
        iName.style.animation = "sumir 1s both";
    
        let fullName = document.querySelector("#fullName");
        fullName.style.animation = "sumir 1s both";
    
        let iAge = document.querySelector("#iAge");
        iAge.style.animation = "sumir 1s both";
    
        let age = document.querySelector("#age");
        age.style.animation = "sumir 1s both";
    
        let iFormation = document.querySelector("#iFormation");
        iFormation.style.animation = "sumir 1s both";
    
        let formation = document.querySelector("#formation");
        formation.style.animation = "sumir 1s both";
    
        let iTech = document.querySelector("#iTech");
        iTech.style.animation = "sumir 1s both";
    
        let tech = document.querySelector("#tech");
        tech.style.animation = "sumir 1s both";
    }
}