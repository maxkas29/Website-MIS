let scrollPercent = 0;

function showInfoCard() {
    
    let iteams = [document.getElementById("abs-1"), document.getElementById("abs-2"), document.getElementById("abs-3"), document.getElementById("abs-4")];
    console.log(`Scroll Progress: ${scrollPercent.toFixed(0)}%`);
    console.log(typeof Math.round(scrollPercent));


    if(scrollPercent < 10 || scrollPercent > 100){
        iteams[0].style.display = "none";
        iteams[1].style.display = "none";
        iteams[2].style.display = "none";
        iteams[3].style.display = "none";
    }else if(scrollPercent > 10 && scrollPercent < 35){
        iteams[0].style.display = "block";
        iteams[1].style.display = "none";
        iteams[2].style.display = "none";
        iteams[3].style.display = "none";
    }else if(scrollPercent > 35 && scrollPercent < 65){
        iteams[0].style.display = "none";
        iteams[1].style.display = "block";
        iteams[2].style.display = "none";
        iteams[3].style.display = "none";
    }else if(scrollPercent > 65 && scrollPercent < 85){
        iteams[0].style.display = "none";
        iteams[1].style.display = "none";
        iteams[2].style.display = "block";
        iteams[3].style.display = "none";
    }else if(scrollPercent > 85 && scrollPercent < 90){
        iteams[0].style.display = "none";
        iteams[1].style.display = "none";
        iteams[2].style.display = "none";
        iteams[3].style.display = "block";
    }
}

function updateScrollProgress() {
  
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    scrollPercent = ((scrollTop / scrollHeight) * 100)  ;
    
    showInfoCard();

}

let abs1 = document.getElementById("abs-1");
abs1.style.display = "block";