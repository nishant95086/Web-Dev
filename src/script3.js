const sform = document.querySelector('#sform');
const dname = sform['name'];
const amount = sform['amo'];
const date = sform['date'];
const add = document.querySelector('#add');
const hbox = document.querySelector('.hbox');

const data = JSON.parse(localStorage.getItem('key')) || [];

const dataadd = (n, a, d) => {
    data.push({ n, a, d });
    localStorage.setItem('key', JSON.stringify(data));
    return { n, a, d };
};

const add_data = ({ n, a, d }) => {
    const ddiv = document.createElement('div');
    const dnm = document.createElement('p');
    const dam = document.createElement('p');
    const ddt = document.createElement('p');
    const paid = document.createElement('button');
    paid.innerText = '✅';
    paid.classList.add('done','hover:cursor-pointer');

    ddiv.classList.add('flex', 'justify-between', 'px-3', 'my-3', 'bg-neutral-700', 'text-[10px]');

    dnm.textContent = n;
    dam.textContent = a + '₹';
    ddt.textContent = d;

    paid.addEventListener('click', () => {
        ddiv.remove(); 

        const index = data.findIndex(item => item.n === n && item.a === a && item.d === d);
        if (index !== -1) {
            data.splice(index, 1); 
            localStorage.setItem('key', JSON.stringify(data)); 
        }
    });

    ddiv.append(dnm, dam, ddt,paid);
    hbox.appendChild(ddiv);
};

add.addEventListener('click', (e) => {
    e.preventDefault();

    const newd = dataadd(dname.value, amount.value, date.value);
    add_data(newd);

    dname.value = '';
    amount.value = '';
    date.value = '';
});

data.forEach(add_data);


