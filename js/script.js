const ingredienti = ['Pomodoro', 'Patate', 'Pane', 'Pasta', 'Insalata', 'Uova',];

const lista_spesa = document.getElementById('lista-spesa');

for (let i = 0; i < ingredienti.length; i++) {

    //CREO NUOVA LISTA//
    const li = document.createElement('li');
    //INSERISCO IL TESTO //
    li.innertext = ingredienti[i];

    lista_spesa.append(li);
}



