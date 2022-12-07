
	playerpug1 = localStorage.getItem("pug1");
	playerpug2 = localStorage.getItem("pug2");

	chupchup_pontuação_1 = 0;
	chupchup_pontuação_2 = 0;

document.getElementById("playerpug1").innerHTML = playerpug1 + " : ";
document.getElementById("playerpug2").innerHTML = playerpug2 + " : ";

document.getElementById("chupchup_pontuação_1").innerHTML = chupchup_pontuação_1 ;
document.getElementById("chupchup_pontuação_2").innerHTML = chupchup_pontuação_2 ;

document.getElementById("fulano_1_pergunta").innerHTML = "Turno de Pergunta - " + playerpug1 ;
document.getElementById("fulano_2_responde").innerHTML = "Turno de Resposta - " + playerpug2 ;

function nuctuc() {
	getnumero1= document.getElementById("dois_numeros_de_100a1").value;
	getnumero2= document.getElementById("dois_numeros_de_1a100").value;
	resultado=getnumero1*getnumero2;
	console.log("resultado = " + resultado);
	

    
    question_word = "<h4 id='wordDisplay'> P. "+getnumero1+" X "+getnumero2+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("sida").innerHTML = row;
document.getElementById("dois_numeros_de_100a1").value = "";
document.getElementById("dois_numeros_de_1a100").value = "";
}


questionTurn = "player1";
var koko = "player2";


function check()
{
	answer = document.getElementById("inputCheckBox").value;
	if(answer == resultado)	
	{
		if(	koko == "player1")
		{
			chupchup_pontuação_1 = chupchup_pontuação_1 +1;
		    document.getElementById("chupchup_pontuação_1").innerHTML = chupchup_pontuação_1;
		}
		else 
		{
			chupchup_pontuação_2 = chupchup_pontuação_2 +1;
		    document.getElementById("chupchup_pontuação_2").innerHTML = chupchup_pontuação_2;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("fulano_1_pergunta").innerHTML = "Turno de Pergunta - " + playerpug2 ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("fulano_1_pergunta").innerHTML = "Turno de Pergunta - " + playerpug1 ;
	}

	if(koko == "player1")
	{
		koko = "player2"
		document.getElementById("fulano_2_responde").innerHTML = "Turno de Resposta - " + playerpug2 ;
	}
	else 
	{
		koko = "player1"
		document.getElementById("fulano_2_responde").innerHTML = "Turno de Resposta - " + playerpug1 ;
	}

    document.getElementById("sida").innerHTML = "";
}

