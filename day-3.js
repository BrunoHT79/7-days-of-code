let areaProgramacao;
let frontEnd;
let backEnd;
let fullstack;
let nome;

nome = prompt("Qual seu nome? ");

areaProgramacao = prompt(nome+", qual área de programação você mais tem interesse: Front-End (1) ou Back-End (2)?");

if (areaProgramacao == "1") {
  frontEnd = prompt("E qual dessas linguagens mais lhe interessa: React ou Vue?");
  alert("Muito bom! Aprender "+frontEnd+" é muito útil! Mas considere sempre continuar aprendendo para se tornar Fullstack.");
  } else if (areaProgramacao == "2"){
    backEnd = prompt("E qual dessas linguagens mais lhe interessa: C# ou Java?");
    alert("Muito bom! Aprender "+backEnd+" é muito útil! Mas considere sempre continuar aprendendo para se tornar Fullstack.");
  } else {
    alert("Você não escolheu uma opção válida!");
}

while (fullstack != ""){
  fullstack = prompt("E quais outras linguagens você gostaria de aprender?");
}
