

//Factory function

var createPolitician = function(name, partyColor){
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  // Tally up the votes 

  politician.tallyUpTotalVotes = function () {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults [i];
      console.log(this.totalVotes)
    }
  };
    
  return politician;
};
  
//creating the politicians
var jane = createPolitician("Jane Doesitall", [245, 141, 136]);
  
var betsy = createPolitician("Betsy Rocks", [132, 17, 11]);

//Arrays for election results per state

jane.electionResults = [4, 2, 4, 4, 17, 3, 3, 1, 2, 1, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 11, 3, 1, 2, 11, 2, 3, 1];
betsy.electionResults = [5, 1, 7, 2, 38, 6, 4, 2, 1, 28, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 27, 3, 2, 11, 1, 3, 7, 2];

//Assign the winner of the state per the Results per state

var setStateResults = function (state){

  theStates[state].winner = null;
  if (jane.electionResults[state] < betsy.electionResults[state]) {
    theStates[state].winner = betsy;
  } 
else if(jane.electionResults[state] > betsy.electionResults[state]) {
    theStates[state].winner = jane;
}

//change the color of the state depending on the winner 

var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
  theStates[state].rgbColor = stateWinner.partyColor;
}
else {
  theStates[state].rgbColor = [11, 32, 57];
}

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = betsy.name;
row.children[1].innerText = betsy.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];


stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = betsy.name;
candidate2Name.innerText = jane.name;
 
candidate1Results.innerText = betsy.electionResults[state];
candidate2Results.innerText = jane.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

};




//caling the method 
betsy.tallyUpTotalVotes();
jane.tallyUpTotalVotes();
 
//console log total votes

console.log(jane.totalVotes);
console.log(betsy.totalVotes);

var winner = "who?";

if (jane.totalVotes = betsy.totalVotes) {
    winner = "It's a DRAW!";
}
else if (jane.totalVotes > betsy.totalVotes) {
  winner = "Jane is the winner";
}
else if (jane.totalVotes < betsy.totalVotes) {
  winner = "Betsy is the winner";
}

console.log("AND THE WINNER IS..." + winner + "!!!");

