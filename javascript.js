var playing=false;
 var score;
 var action;
 var timeremaining;
 var correctAnswer;
 var correctPosition;


document.getElementById("startreset").onclick =function(){
    // if we  are playing

    if(playing == true){
       location.reload();// reload page
    }
    else{// if we are not playing

        playing= true;

        // set score to zero
     score=0;
     document.getElementById("scorevalue").innerHTML=score;

     // show countdown box
    
    show("timeremaining");
     timeremaining=60;
     document.getElementById("timeremainingvalue").innerHTML=timeremaining;

     hide("gameover");

     document.getElementById("startreset").innerHTML= "Reset Game";

     // start countdown

     startCountdown();

     generateQA();
    }
}

// clicking on answer box

for(i=1;i<5;i++)
    {
        document.getElementById("box"+i).onclick=function(){

      
            // check if we are playing
            if(playing == true){
           if(this.innerHTML == correctAnswer)
            {
                // correct answer 
        
                // score updation
                score++;
                document.getElementById("scorevalue").innerHTML=score;
        
                // hide wrong box and show correct box
                hide("wrong");
                show("correct"); 
                setTimeout(function(){
        
                    hide("correct");
                },1000); 
        
                // generate new QA
                generateQA();
            }
            else{
                // wrong answer
                hide("correct");
                show("wrong"); 
                setTimeout(function(){
        
                    hide("wrong");
                },1000);  
            }
            }
        }
    }

function startCountdown(){
     action = setInterval(function(){timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

        if(timeremaining == 0){
            // game over
            stopCountdown();
           show("gameover");

           document.getElementById("gameover").innerHTML="<p>Game over!</p> <p>Your score is " + score +"<p/>";
         hide("timeremaining");
         hide("correct");
         hide("wrong");
          playing=false; 
          document.getElementById("startreset").innerHTML="Start Game";
           
        }

     },1000);
}

function stopCountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}

function generateQA()
{// getting numbers between 1 and 10 
 var x = 1 + Math.round(9* Math.random());
 var y = 1 + Math.round(9* Math.random());

  correctAnswer=x*y;
  document.getElementById("question").innerHTML=x+"x"+y;

  correctPosition = 1 + Math.round(3*Math.random());

  document.getElementById("box"+correctPosition).innerHTML=correctAnswer;//fill one box with the correct answer

  // fill other boxes with wrong answers

  var answers =  [correctAnswer];

  for(i=1;i<5;i++){
    if(i!= correctPosition){

       var wrongAnswer;

       do{
        wrongAnswer = Math.round(9* Math.random()) * Math.round(9* Math.random());
       }
       while(answers.indexOf(wrongAnswer)>-1)
        
    
         document.getElementById("box"+i).innerHTML=wrongAnswer;

         answers.push(wrongAnswer);
    }
  }
}

 

