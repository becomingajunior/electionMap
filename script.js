var makePolitician = function(polName,polColor){
 var politician = {};
politician.name = polName;
politician.electionResults = null;
politician.countTotalVotes = 0;
politician.color = polColor;

politician.totalVotes = function () {
  this.totalVotes = 0;
for (var i = 0; i < this.electionResults.length; i++)
{
  this.totalVotes = this.totalVotes + this.electionResults[i];
}
};
return politician;
};

var myPol1 = makePolitician("Hillary Rodham Clinton",([132, 17, 11]));
var myPol2 = makePolitician("Not Hillary Eww",([245, 141, 136]));

myPol1.electionResults = [140, 1, 7, 2, 33, 6, 4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
myPol2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

myPol1.electionResults[9] = 1;
myPol1.electionResults[4] = 17;
myPol1.electionResults[43] = 11;
myPol2.electionResults[9] = 28;
myPol2.electionResults[4] = 38;
myPol2.electionResults[43] = 27;

var setStateResults = function(state) {

  theStates[state].winner = null;

  if (myPol1.electionResults[state] > myPol2.electionResults[state]) {
    theStates[state].winner = myPol1;
  } else if (myPol1.electionResults[state] < myPol2.electionResults[state]) {
    theStates[state].winner = myPol2;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;}
  else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var stateAbbrev = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var name2 = body.children[1].children[0];
    var results1 = body.children[0].children[1];
    var results2 = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  name1.innerText = myPol1.name;
  name2.innerText = myPol2.name;

  results1.innerText = myPol1.electionResults[state];
  results2.innerText = myPol2.electionResults[state];

if (theStates[state].winner === null){
  winnerName.innerText = "DRAW";
} else {
  winnerName.innerText = theStates[state].winner.name;
}
};

myPol1.totalVotes();
myPol2.totalVotes();

var winner = "???"

if (myPol1.totalVotes > myPol2.totalVotes) {
winner = myPol1.name;
} else if(myPol1.totalVotes < myPol2.totalVotes){
winner = myPol2.name;
} else {
winner = "DRAW."
}

var countryInfoTable = document.getElementById('countryResults');
   var row = countryInfoTable.children[0].children[0];

 row.children[0].innerText = myPol1.name;
 row.children[1].innerText = myPol1.totalVotes;
 row.children[2].innerText = myPol2.name;
 row.children[3].innerText = myPol2.totalVotes;
 row.children[5].innerText = winner;
