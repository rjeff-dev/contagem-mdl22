AOS.init();

const dataEvent  = new Date("May 19, 2026 19:00:00");
const timestampDoEvent = dataEvent.getTime();

const contTime = setInterval(()=> {
    const agr = new Date();
    const timestampAtual = agr.getTime();

    const timeFEvent = timestampDoEvent - timestampAtual;
    
    //calcular o tempo
    // 1. Unidades de tempo fixas (Segundos, Minutos, Horas, Dias Totais)
    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasF = Math.floor(timeFEvent / dias);
    const hrsF = Math.floor((timeFEvent % dias) / horas);
    const minF = Math.floor((timeFEvent % horas) / minutos);
    const segF = Math.floor((timeFEvent % minutos) / segundos);

    document.getElementById('contador').innerHTML = `se abre em...<br> ${diasF}d ${hrsF}h ${minF}m ${segF}s`;

    if (timeFEvent < 0){
        clearInterval(contTime);
        document.getElementById('contador').innerHTML = '<br>O Halloween Fest já passou… e quem não foi, perdeu a noite mais arrepiante do ano! 🕯️'
    }
}, 1000)












// Data do JavaScript
// Podemos criar uma data utilizando o comando new Date().
// A partir disso, teremos acesso a funções para recuperar o dia, mês, ano e
// obter a data em timestamp.
    

// const minhaData = new Date();

// considerando a constante minhaData, temos:
// minhaData.getTime() // retorna a data atual em timestamp
// minhaData.getDate() // retorna o dia - número
// minhaData.getDay() // retorna o dia, como índice, onde
//     domingo = 0, segunda = 1
// minhaData.getFullYear() // retorna o ano completo, ex: 2022
// minhaData.getYear() // Retorna o ano porém considera o ano
//     2000 como 100, logo 2022 seria 122
// minhaData.getHour() // retorna a hora atual em 24hrs
// minhaData.getMinute() // retorna o minuto atual
// minhaData.getSeconds() // retorna o segundo atual

// SetInterval
// Com essa função, podemos executar uma função após determinado intervalo:
// setInterval(FUNCAO, intervalo);
// No primeiro argumento inserimos o código que será executado a cada
// intervalo e no segundo argumento passamos o tempo em milissegundos.
// setInterval(function() {
//     console.log(“olá”);
// }, 1000);
// // A cada 1 segundo teremos a mensagem olá no console