// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

arrayOfLetters = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z", " ", "\"", ".", ",",
"?", "!", "@", "#", "$", "%", "^", "&", "*",  "(", ")",
"[", "]", "{", "}" ];


arrayOfRandoms = ["100101111","110101010","010101101","011100010","011100100",
"100110010","001100101","110001111","011011110","101100111","011000100","101011100",
"010100010","010000011","111010001","011100011","000111010","111101100","100000011",
"110000101","001001000","101100110","011001101","011001100","100011010","010100101",
"011100001","100010000","011000111","001010110","100100001","001101001","111111010",
"000011111","010100010","010000111","010101011","100111111","101011111","100001001",
"111111101","011101001","010110011","001100010","100010011","100000010"];

var count = 0;
$("#startButton").click(function(){
  resetAll();
  
  if($("#myWords").val()!==""||$("#myWords").val()!==null){
    var arrayOfMyWords = gettingMyWords();
    // var stringOf1and0 = printCor(arrayOfMyWords[count]);
    var stringOf1and0 = printCor(arrayOfMyWords[count]);
    blueOrWhite(stringOf1and0);
    count=count+1;
  }
  if(count==($("#myWords").val().length)+1){
      count=0;
      console.log("true");
      resetAll();
      // alert("Done!");
      $("#1").css("background-color", "orange");
  }
});

//one use function 
function makeAndCheckRandoms(){
  
  for (var i=0; i<=35; i++){
    var savedRandom = createRandoms();
    for(var ii=0;ii<arrayOfRandoms.length;ii++){
    if(savedRandom==arrayOfRandoms[ii]){
      console.log("BAD! try again");
      makeAndCheckRandoms()
    }
  }
  console.log("\""+savedRandom+"\",");
  }
  
  
}


var myWordsArray = [];
var display = 0;
function gettingMyWords(){
  var word = $("#myWords").val().toLowerCase();
  for(var i=0, j=0;i<word.length;i++, j++){ 
    myWordsArray[j]=word.substring(i,i+1);
    console.log(myWordsArray);
  }
  return myWordsArray;
  
}

function makeClick(){
  $("#left").click(function(){
  alert("ok");
  for(var i=0;i<myWordsArray;i++){
    if(display===0){
      //do nothing
    }
    if(displa>=1){
      //go back
      
      display = display-1;
      console.log("dis "+display);
      console.log(myWordsArray[display]);
      printCor(myWordsArray[display]);
    }
      
  }
});
}

function createRandoms(){
  var stringOfFlashes = "";
     for(var ii=0; ii<9; ii++){
       stringOfFlashes += onOrOff(0, 2);
     }
  // console.log(stringOfFlashes);
  return stringOfFlashes;
}

function onOrOff(min, max){
  return Math.floor(Math.random()*(max - min) + min);
}

//print Letter and corresponding string
//soon to be flashing to squares
function printCor(letter){
  for(var i=0;i<=arrayOfLetters.length;i++){
    if(letter == arrayOfLetters[i]){
      console.log(arrayOfLetters[i]+"\n");
      console.log(arrayOfRandoms[i]+"\n\n");
      return arrayOfRandoms[i];
    }else{
      if(i>=arrayOfLetters.length){
        return "";
      }
      
    }
  }
  
}

function blueOrWhite(stringMe){
  if(stringMe===""){$("#1").css("background-color", "black");}
  for(var i=0;i<(stringMe.length);i++){     //length? -1 or regular??
    console.log("StringMe: "+stringMe);
    if(stringMe.substring(i, i+1)=="1"){
      console.log("blue!");
      var tmp = "#" + String(i+1);
      $(tmp).css("background-color", "blue");
    }else{
      console.log("white!");
    }
  }
}

function resetAll(){
  for(var i=1;i<=9;i++){
    var tmp = "#" + String(i);
    $(tmp).css("background-color", "white");
  }
  // count=0;
}


//===============

window.onload = function(){
  if(localStorage.getItem("words")!==null||localStorage.getItem("words")!==""||
  localStorage.getItem("words")!==undefined){
    $("#myWords").val(localStorage.getItem("words"));
  }
}


$("#myWords").change(function(){
    localStorage.setItem("words", $("#myWords").val());

});