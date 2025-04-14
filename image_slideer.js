const img = document.querySelector('.img1');
const btnl = document.querySelector('.lft');
const btnr = document.querySelector('.rght');

const obj = [
    {
        url:'https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?w=297&h=180&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3'
    },
    {
        url:'https://th.bing.com/th/id/OIP.ipfGiyG7ctjSkhmjCpNfTAHaFj?w=268&h=180&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3'
    },
    {
        url:'https://th.bing.com/th/id/OIP.ShDMVFbdsBcORh_GCwAqmAHaEc?w=263&h=180&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3'
    },
    {
        url:'https://th.bing.com/th/id/OIP.NaSNi50A2kNJsXcBqC0-ewHaE7?w=278&h=186&c=7&r=0&o=7&cb=iwp&dpr=1.3&pid=1.7&rm=3'
    }
]

let i = 0;

img.src = obj[i].url;

btnl.addEventListener('click',()=>{
    i--;
    if(i < 0){
        i = obj.length - 1; 
    }
    img.src = obj[i].url;
})

btnr.addEventListener('click',()=>{
    i++;
    if(i >= obj.length){
        i = 0;
    }
    img.src = obj[i].url;
})
