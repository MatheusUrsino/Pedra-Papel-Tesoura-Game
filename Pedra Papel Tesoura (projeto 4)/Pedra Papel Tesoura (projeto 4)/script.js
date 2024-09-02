const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => 
{
    image.addEventListener("click", (e) => 
    {
        image.classList.add("active");


        userResult.src = cpuResult.src = "img/pedra.png";

        result.textContent = "Espere...";


        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");
        });


        gameContainer.classList.add("start");
        
        let time = setTimeout(() =>{
        gameContainer.classList.remove("start");
        
        let imageSrc = e.target.querySelector("img").src;''
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        
        let cpuImages = ["img/pedra.png", "img/papel.png", "img/tesoura.png"];
        cpuResult.src = cpuImages[randomNumber];


        let cpuValue = ["PR", "P", "T"][randomNumber]

        let userValue = ["PR", "P", "T"][index]

        let outcomes = {
            PRPR: "Draw",
            PRP: "Cpu",
            PRT: "Usuário",
            PP: "Draw",
            PPR: "Usuário",
            PT: "Cpu",
            TT: "Draw",
            TPR: "Cpu",
            TP: "Usuário",
        };

        let outComeValue= outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Empate" : `${outComeValue} Ganhou !`;
    }, 2500);
    });
});

