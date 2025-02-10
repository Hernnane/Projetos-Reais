/********************************************************************************************************************************************/

/*BOTÕES DA SEÇÃO MINHAS UNIDADES*/

/*botão morumbi*/
const unidadeMorumbiFechada = document.getElementById("unidade-morumbi-fechada");
const unidadeMorumbiAberta = document.getElementById("unidade-morumbi-aberta");

const botaoMorumbiFechado = document.getElementById("botao-morumbi-fechado");
const botaoMorumbiAberto = document.getElementById("botao-morumbi-aberto");

botaoMorumbiFechado.addEventListener("click", ()=> {
    unidadeMorumbiFechada.classList.toggle("hide");
    unidadeMorumbiAberta.classList.toggle("hide");
});
    
botaoMorumbiAberto.addEventListener("click", ()=> {
    unidadeMorumbiFechada.classList.toggle("hide");
    unidadeMorumbiAberta.classList.toggle("hide");
});

/*botão parque da cidade*/
const unidadeParqueFechada = document.getElementById("unidade-parque-fechada");
const unidadeParqueAberta = document.getElementById("unidade-parque-aberta");

const botaoParqueFechado = document.getElementById("botao-parque-fechado");
const botaoParqueAberto = document.getElementById("botao-parque-aberto");

botaoParqueFechado.addEventListener("click", ()=> {
    unidadeParqueFechada.classList.toggle("hide");
    unidadeParqueAberta.classList.toggle("hide");
});

botaoParqueAberto.addEventListener("click", ()=> {
    unidadeParqueFechada.classList.toggle("hide");
    unidadeParqueAberta.classList.toggle("hide");
});

/*botão nacoes unidas*/
const unidadeNacoesFechada = document.getElementById("unidade-nacoes-fechada");
const unidadeNacoesAberta = document.getElementById("unidade-nacoes-aberta");

const botaoNacoesFechado = document.getElementById("botao-nacoes-fechado");
const botaoNacoesAberto = document.getElementById("botao-nacoes-aberto");

botaoNacoesFechado.addEventListener("click", ()=> {
    unidadeNacoesFechada.classList.toggle("hide");
    unidadeNacoesAberta.classList.toggle("hide");
});

botaoNacoesAberto.addEventListener("click", ()=> {
    unidadeNacoesFechada.classList.toggle("hide");
    unidadeNacoesAberta.classList.toggle("hide");
});