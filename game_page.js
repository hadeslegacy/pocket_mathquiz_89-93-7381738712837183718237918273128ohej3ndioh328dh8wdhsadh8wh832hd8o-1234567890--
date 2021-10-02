player_name1 = localStorage.getItem("key1");
player_name2 = localStorage.getItem("key2");

player_score1 = 0;
player_score2 = 0;

document.getElementById("player_name1_1").innerHTML = player_name1 + " : ";
document.getElementById("player_name2_2").innerHTML = player_name2 + " : ";
document.getElementById("lol_span_1").innerHTML = player_score1;
document.getElementById("lol_span_2").innerHTML = player_score2;
document.getElementById("question-turn").innerHTML = "question turn - " + player_name1;
document.getElementById("anser-turn").innerHTML = "answer turn - " + player_name2;

function send() {
    num1 = document.getElementById("input1").value;
    num2 = document.getElementById("input2").value;
    correcto_answeros = parseInt(num1) * parseInt(num2);
    question_word = "<h4>Ques. " + num1 + " x " + num2 + "</h4>"
    input_box = "<br> <input type='text' id='input_checker'> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    row = question_word + input_box;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    answer = document.getElementById("input_checker").value;
    if (answer == correcto_answeros) {
        if (answer_turn == "player1") {
            player_score1 = player_score1 + 1;
            document.getElementById("lol_span_1").innerHTML = player_score1;
        } else {
            player_score2 = player_score2 + 1;
            document.getElementById("lol_span_2").innerHTML = player_score2;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question-turn").innerHTML = "question turn - " + player_name2;
    } else {
        question_turn = "player1";
        document.getElementById("question-turn").innerHTML = "question turn - " + player_name1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("anser-turn").innerHTML = "answer turn - " + player_name2;
    } else {
        answer_turn = "player1";
        document.getElementById("anser-turn").innerHTML = "answer turn - " + player_name1;
    }
    document.getElementById("output").innerHTML = "";
}