let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]

// Prompt 1: double the hitpoints of everyone in the party

party.forEach((el) => {
    el.hitpoints = 2* el.hitpoints;
} )
console.log(party);

//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
//create function that takes persons name and hp
//1. loop through array
//2. check if name matchs
//3. subtract 5hp

// const takeDamage = (name, hp) => {
// party.forEach((member) => {
//     if (member.name == name){
//         member.hitpoints = member.hitpoints - hp
//     }
// })
// }
//  takeDamage("Timothy", 5)
//  console.log(party)

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it
// Find Person
// Find Companion
// Change companion

// const updateCompanion = (name, petType) => {
//     // loop through array
//     //find name match
//     //update to jellyfish
//     party.forEach((member) =>{
//         if (member.name == name){
//             member.companion.type = petType
//         }
//     })
// }
// updateCompanion("Sarah", "Jellyfish")

// console.log(party)

//Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
 // Loop through array
    // Find Person
    // Increase hp by 20
    // Remove potion from belongings

// const potionIncrease = (name, hp) => {
//     party.forEach((member) => {
        
//         if (member.name == name){
//             member.hitpoints = member.hitpoints + hp
//             member.belongings.forEach()
//         }
//         if (member.name == name){
//              member.belongings.splice(1,1)
//         }
        
//     })
// }
// potionIncrease("Timothy", 20)
// console.log(party)

    //Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it into Timothy's belongings.
    // loop 
    // find Joline
    // locate array and remove bread
    // loop
    // find timothy
    // locate array and add bread

const takeBelongings = () => {
    party[0].belongings.splice(1,1)
    return party[1].belongings.push("bread")
}
takeBelongings()
console.log(party)



//Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
const leavingMember = (memberName) => {
    party.splice(0,1)
    return party
}
leavingMember("Joline")
console.log(party)
 
// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const newAdventurer = (newMember) => {
    party.push(newMember)
}
let myAdventurer = {
    name: "Dave Chappell",
    hitpoints: 75,
    belongings: ["knife", "water", "gravel"],
    companion: {
        name: "elephante", 
        type: "elephant"
    }

}
newAdventurer(myAdventurer)
console.log(party)


let myAdventurer2 = {
    name: "Sally Chappell",
    hitpoints: 75,
    belongings: ["knife", "water", "gravel"],
    companion: {
        name: "elephante", 
        type: "elephant"
    }
}
newAdventurer(myAdventurer2)
console.log(party)

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
const foundGold = (gold) => {
    let splitGold = gold / party.length
console.log(splitGold)

party.forEach((el) => {
    el.gold = splitGold;
} )

}
 foundGold(200)
 console.log(party)

//  Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 
let newCompanion = "bear"
party[1].companion.type = newCompanion
party[1].gold = (party[1].gold) - 15
console.log(party)

// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
// go through 
let swordStatus = "Rusty Sword"
party[0].belongings[0] = swordStatus 
console.log(party)

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.
// const setLeader = (name) => {
//     let Leader = setLeader
//     if (name == name){
//         return {Leader}
//         console.log("true")
//     } else {
//         return {Leader}
//         console.log("false")
//     }
// }
// setLeader("Dave Chappell")
// console.log(party)
 party.forEach ((setLeader) => {
    setLeader.leader = false;
    if (setLeader.name == "Dave Chappell"){
        setLeader.leader = true
    }
 })
 console.log(party)