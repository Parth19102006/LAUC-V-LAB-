function checkAnswers(){
    
    let score=0;

    let q1=document.querySelector('input[name="q1"]:checked')?.value;
    if(q1==="c"){document.getElementById("q1-feedback").innerText="Correct!"; score++;}
    else if(q1){document.getElementById("q1-feedback").innerText="Incorrect. The correct answer is c) ∫x^n dx = (x^(n+1))/(n+1) + C, where n ≠ -1.";}
    else{document.getElementById("q1-feedback").innerText="Please select an answer.";}  

    let q2=document.querySelector('input[name="q2"]:checked')?.value;
    if(q2==="a"){document.getElementById("q2-feedback").innerText="Correct!"; score++;}
    else if(q2){document.getElementById("q2-feedback").innerText="Incorrect. The correct answer is a) ∫e^x dx = e^x + C.";}
    else{document.getElementById("q2-feedback").innerText="Please select an answer.";}

    let q3=document.querySelector('input[name="q3"]:checked')?.value;
    if(q3==="b"){document.getElementById("q3-feedback").innerText="Correct!"; score++;}
    else if(q3){document.getElementById("q3-feedback").innerText="Incorrect. The correct answer is b) ∫(1/x) dx = ln|x| + C.";}
    else{document.getElementById("q3-feedback").innerText="Please select an answer.";}

    let q4=document.querySelector('input[name="q4"]:checked')?.value;
    if(q4==="d"){document.getElementById("q4-feedback").innerText="Correct!"; score++;}
    else if(q4){document.getElementById("q4-feedback").innerText="Incorrect. The correct answer is d) ∫cos(x) dx = sin(x) + C.";}
    else{document.getElementById("q4-feedback").innerText="Please select an answer.";}

    let q5=document.querySelector('input[name="q5"]:checked')?.value;
    if(q5==="a"){document.getElementById("q5-feedback").innerText="Correct!"; score++;}
    else if(q5){document.getElementById("q5-feedback").innerText="Incorrect. The correct answer is a) ∫sin(x) dx = -cos(x) + C.";}
    else{document.getElementById("q5-feedback").innerText="Please select an answer.";}

    let q6=document.querySelector('input[name="q6"]:checked')?.value;
    if(q6==="c"){document.getElementById("q6-feedback").innerText="Correct!"; score++;}
    else if(q6){document.getElementById("q6-feedback").innerText="Incorrect. The correct answer is c) ∫sec^2(x) dx = tan(x) + C.";}
    else{document.getElementById("q6-feedback").innerText="Please select an answer.";}

    let q7=document.querySelector('input[name="q7"]:checked')?.value;
    if(q7==="b"){document.getElementById("q7-feedback").innerText="Correct!"; score++;}
    else if(q7){document.getElementById("q7-feedback").innerText="Incorrect. The correct answer is b) ∫(1/(x^2 + 1)) dx = arctan(x) + C.";}
    else{document.getElementById("q7-feedback").innerText="Please select an answer.";}

    let q8=document.querySelector('input[name="q8"]:checked')?.value;
    if(q8==="d"){document.getElementById("q8-feedback").innerText="Correct!"; score++;}
    else if(q8){document.getElementById("q8-feedback").innerText="Incorrect. The correct answer is d) ∫(1/√(1 - x^2)) dx = arcsin(x) + C.";}
    else{document.getElementById("q8-feedback").innerText="Please select an answer.";}

    let q9=document.querySelector('input[name="q9"]:checked')?.value;
    if(q9==="a"){document.getElementById("q9-feedback").innerText="Correct!"; score++;}
    else if(q9){document.getElementById("q9-feedback").innerText="Incorrect. The correct answer is a) ∫(1/√(x^2 + a^2)) dx = ln|x + √(x^2 + a^2)| + C.";}
    else{document.getElementById("q9-feedback").innerText="Please select an answer.";}

    let q10=document.querySelector('input[name="q10"]:checked')?.value;
    if(q10==="c"){document.getElementById("q10-feedback").innerText="Correct!"; score++;}
    else if(q10){document.getElementById("q10-feedback").innerText="Incorrect. The correct answer is c) ∫(1/(x√(x^2 - a^2))) dx = (1/a) sec^(-1)(|x|/a) + C.";}
    else{document.getElementById("q10-feedback").innerText="Please select an answer.";}

    document.getElementById("score").innerText="Your score: "+score+"/10";
}
