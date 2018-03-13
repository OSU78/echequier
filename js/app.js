var app = {
  // Va contenir le tableau HTML
  table: null,
  init: function() {

    console.log('Init');

    // On crée le tableau
    app.createTable();
  },
  // Crée le tableau HTML
  createTable: function() {

    // On crée le tableau HTML et on
    // l'enregistre dans une propriété de "app"
    app.table = document.createElement('table');

    for (var line = 0; line < 8; line++) {

      // On crée une ligne du tableau
      app.createLine();
    }

    // On affiche le <table> dans la <div> "chess"
    var div = document.getElementById('chess');
    // var div = document.querySelector('#chess');

    div.appendChild( app.table );
  },

  createLine: function() {

    // On utilise des boucles pour dessiner
    // les lignes et les colonnes du tableau
    var tr = document.createElement('tr');

    for (var column = 0; column < 8; column++) {

      // On crée un <td>
      var td = document.createElement('td');

      // On ajoute le <td> dans le <tr>
      tr.appendChild( td );
    }

    // On insère le <tr> dans <table>
    app.table.appendChild( tr );
  }
};

// On crée l'écoute qui va nous prévenir
// que la page est correctement chargée
document.addEventListener('DOMContentLoaded', app.init);
