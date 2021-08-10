const root = document.querySelector('body');
const busca = document.querySelector('.busca');
const paises = document.querySelector('.paises');

fetch('https://restcountries.eu/rest/v2/all').then(res => {
    const promiseBody = res.json();

    promiseBody.then(body => {
        body.forEach(pais => {
            const div = document.createElement('div');
            const nome = document.createElement('h2');
            const regiao = document.createElement('span');
            const capital = document.createElement('span');
            const populacao = document.createElement('p');
            const bandeira = document.createElement('img');

            nome.textContent = pais.name;
            regiao.textContent = 'Região: ' + pais.region;
            capital.textContent = 'Capital: ' + pais.capital;
            populacao.textContent = 'População: ' + pais.population;
            bandeira.src = pais.flag;

            div.append(nome, regiao, capital, populacao, bandeira);
            paises.append(div);
        })
    })
});

busca.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || busca.value === '') return;

    const pais = document.querySelectorAll('.paises div');
    const nomePaisFormatado = busca.value[0].toUpperCase() + busca.value.substr(1).toLowerCase();

    pais.forEach(pais => {
        if (pais.children[0].textContent !== nomePaisFormatado) {
            pais.style.display = 'none';
        } else {
            pais.style.display = '';
        }
    })
})

root.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    const pais = document.querySelectorAll('.paises div');

    pais.forEach(pais => {
        pais.style.display = '';
    })
})