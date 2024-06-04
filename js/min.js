const genaret = document.getElementById('genaret');
genaret.addEventListener('click', function () {
    const pBox = document.getElementById('pBox');
    let charecter = 'asdfghASDFGH123456%R$E#U&^';
    let pass = '';
    for (let i = 18; i < charecter.length; i++) {
        pass += charecter[Math.floor(Math.random() * charecter.length)];
    }
    pBox.value = pass;

})