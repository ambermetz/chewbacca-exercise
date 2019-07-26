class Friend {
  constructor(name, flyingSkills = 0, dejarik = 0, galacticFear = 0) {
    this.name = name;
    this.flyingSkills = flyingSkills;
    this.dejarik = dejarik;
    this.galacticFear = galacticFear;
    this.score = flyingSkills + dejarik - galacticFear;
  }

  addFriend() {
    let userName = prompt("What is your name?");
    let userFlyingSkills = Number(prompt("Rate your flying skills from 1-10"));
    let userDejarik = Number(
      prompt("Rate your Dejarik playing skills from 1-10")
    );
    let userGalacticFear = Number(
      prompt("Rate your fear of the Galactic Empire")
    );

    let potentialFriend = new Friend(
      userName,
      userFlyingSkills,
      userDejarik,
      userGalacticFear
    );

    listOfPotentialFriends.push(potentialFriend);
    listOfPotentialFriends.sort((a, b) => {
      return b.score - a.score;
    });
  }
}
const listOfPotentialFriends = [];

let length = listOfPotentialFriends.length;

const optionOne = new Friend();
optionOne.addFriend();
optionOne.addFriend();
optionOne.addFriend();
console.log(listOfPotentialFriends);
console.log("Best Candidate ", listOfPotentialFriends[0]);
console.log("Worst Candidate ", listOfPotentialFriends[length - 1]);
