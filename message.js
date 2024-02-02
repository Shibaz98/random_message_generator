//Leisure day planner - This project creates an ideal day for me on my day off// 

const leisure = {
    gaming: ['Destiny 2', 'Call of Duty', 'League of Legends', 'Diablo 4', 'Elden Ring'],
    'physical activity': ['Go to the gym', 'Go for a walk', 'Go on a long drive', 'Hang out with the wife', 'Go and play TopGolf', 'Go and play badminton with cousins'],
    'food options': ['Lamb Donner Kebab from Spicebite', 'Pizza from Marios Pizza', 'Rice and curry', 'Whatever is available in the freezer','Take a look on Deliveroo or UberEats', 'Go out and grab a burger'],
};


let randomIndex = (num) =>{
    return Math.floor(Math.random() * num)   // This function allows me to generatre a random number, num argument is the length of the given array so I don't need to stress about it being a fixed number
}

let randomMessageArray = []; 

for (let key in leisure){
    let optionIndex = randomIndex(leisure[key].length) // .length gives me the length of the entire array and then randomIndex takes that number as an argument
    
        switch(key){
            case 'gaming':
                randomMessageArray.push(`Since it's your day off, you should play a console game, I recommend: ${leisure[key][optionIndex]}`)
                break;
            case 'physical activity':
                randomMessageArray.push(`Don't spend the entire day playing games, definitely do a physical activity such as: ${leisure[key][optionIndex]}`) 
                break;
            case 'food options':
                randomMessageArray.push(`For dinner, you should have: ${leisure[key][optionIndex]}`)
                break;      
        }
    
    /*    
    if(key === 'gaming'){
        console.log(`testing out the if statement ${leisure[key][optionIndex]}`)
    } else if(key === 'physical activity'){
        console.log(`testing out the if statement ${leisure[key][optionIndex]}`)  <<< The above also works as an If statement, just put this here for fun
    } else if(key === 'food options'){
        console.log(`testing out the if statement ${leisure[key][optionIndex]}`)
    }  
    */ 
    

}






