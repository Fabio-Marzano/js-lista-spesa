//const ingredienti = ['Pomodoro', 'Patate', 'Pane', 'Pasta', 'Insalata', 'Uova',];
//RECUPERO L'ELEMENTO DAL DOM//
//const lista_spesa = document.getElementById('lista-spesa');

//for (let i = 0; i < ingredienti.length; i++) {

    //CREO NUOVA LISTA//
   // const li = document.createElement('li');
    //INSERISCO IL TESTO //
    //li.innertext = ingredienti[i];

    //lista_spesa.append(li);
//}

const lista_spesa = ['Pomodoro', 'Patate', 'Pane', 'Pasta', 'Insalata'];
//RECUPERO L'ELEMENTO CONTENENTE I VALORI DELL'ARRAY//
const ul = document.getElementById('lista-spesa');
//AVVIO CICLO ARRAY CON WHILE//
let i = 0;
//DEFINISCO CONDIZIONE FINE CICLO//
while(i < lista_spesa.length) {
    //CREO NUOVA LISTA//
    const li = document.createElement('li');

    li.innerText = lista_spesa[i];

    //AGGIUNGO LIST ITEM ALLA LISTA//
    ul.append(li);
    //FINE CICLO: INCREMENTO DI 1 DI I//
    i++;
}



