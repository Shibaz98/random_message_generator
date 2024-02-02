//Leisure day planner - This project creates an ideal day for me on my day off// 

const leisure = {
    gaming: ['Destiny 2', 'Call of Duty', 'League of Legends', 'Diablo 4', 'Elden Ring'],
    'physical activity': ['Go to the gym', 'Go for a walk', 'Go on a long drive', 'Hang out with the wife', 'Go and play TopGolf', 'Go and play badminton with cousins'],
    'food options': ['Lamb Donner Kebab from Spicebite', 'Pizza from Marios Pizza', 'Rice and curry', 'Whatever is available in the freezer','Take a look on Deliveroo or UberEats', 'Go out and grab a burger'],
};


let randomIndex = (num) =>{
    return Math.floor(Math.random() * num)
}


for (let key in leisure){
    let optionIndex = randomIndex(leisure[key].length)
    

    

}






