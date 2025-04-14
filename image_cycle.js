const img1 = document.querySelector('.img');
const bgc = document.querySelector('.bgc');
const p1 = document.querySelector('.p1');
const name1 = document.querySelector('.p2');

const obj =[
    {
        name:'naruto',
        work:'Naruto is a determined and kind-hearted ninja whose unwavering spirit and belief in himself inspire everyone around him.',
        img:'https://ts3.mm.bing.net/th?id=OIP.RUIFZEyVjqwRbTL7kn5irQHaHa&pid=15.1',
        bgc:'yellow'
    },
    {
        name:'madara',
        work:'Madara Uchiha is a powerful and visionary shinobi driven by his desire for peace through control, making him both feared and respected.',
        img:'https://th.bing.com/th/id/OIP.NVbT5pe98fdrCMNK1hn5gQHaFj?w=283&h=212&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3',
        bgc:"purple"
    },
    {
        name:'jiraya',
        work:'Jiraiya is a wise and jovial ninja, known for his strength, loyalty, and deep compassion, while also being a legendary mentor and storyteller.',
        img:'https://th.bing.com/th/id/OIP.dG37ko2SqMUboOwBVOgPuAHaFj?w=217&h=180&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3',
        bgc:'green'
    }
]
let i = 0;
function move(){
    let ind = obj[i];
    img1.src = ind.img;
    bgc.className = `w-[50%] shadow-lg shadow-${ind.bgc}-600 min-h-60 bottom-5  rounded-lg absolute right-[25%] py-15 px-5 bg-${ind.bgc}-400`;
    p1.innerHTML = ind.work;
    name1.innerHTML = ind.name;
    i++;
    if(i === obj.length){
        i=0;
    }
}

move();

setInterval(move, 3000);

