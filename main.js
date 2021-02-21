function addUser() {
    playerRedName = document.getElementById("playerRedName").value;
    playerBlueName = document.getElementById("playerBlueName").value;

    localStorage.setItem("playerRedName", palyerRedName);
    localStorage.setItem("playerBlueName", palyerBlueName);

    window.location = "game_page.html";
    
}

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id ='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check<</button>";
row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

question_turn ="playerRed";
answer_turn = "playerBlue";

function check(){

    get_answer = document.getElementById("answer").value;
    if(get_answer == actual_answer)

    if(answer_turn == "playerRed"){

    update_playerRed_score = playerRed_score + 1;
    document.getElementById("player1_score").innerHTML = update_playerRed_score;}

    else{

        update_playerBlue_score = playerBlue_score + 1;
    document.getElementById("player2_score").innerHTML = update_playerBlue_score;
    }

if(question_turn == "playerRed"){

    question_turn = "playerBlue";
    document.getElementById("player_question").innerHTML = "Question Turn -" + playerBlueName;
}

else
{

    question_turn = "playerRed";
    document.getElementById("player_question").innerHTML = "Question Turn -" + playerRedName;
}



}
