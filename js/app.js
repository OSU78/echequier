var app = {
  // Va contenir le tableau HTML
  table: null,
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  init: function() {

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
      app.createLine( line );
    }

    // On affiche le <table> dans la <div> "chess"
    var div = document.getElementById('chess');
    // var div = document.querySelector('#chess');

    div.appendChild( app.table );
  },

  createLine: function( lineIndex ) {

    // On utilise des boucles pour dessiner
    // les lignes et les colonnes du tableau
    var tr = document.createElement('tr');

    // On crée un interrupteur
    var interrupteur = (lineIndex % 2 === 0);

    for (var column = 0; column < 8; column++) {

      // On crée un <td>
      var td = document.createElement('td');

      // On applique une couleur de fond
      if (interrupteur) td.style.backgroundColor = '#efe0d1';
      else td.style.backgroundColor = '#70433c';

      // On affiche les positions de la case
      td.textContent = app.alphabet[ column ] + (8 - lineIndex);
      // test
      // td.className = 'trololo hyperspace';

      // On écoute le clic sur chacune des cases
      td.addEventListener('click', app.showBox);

      // On change la valeur de l'interrupteur
      interrupteur = !interrupteur;

      // On ajoute le <td> dans le <tr>
      tr.appendChild( td );
    }

    // On insère le <tr> dans <table>
    app.table.appendChild( tr );
  },
  // Affiche une case en rouge
  showBox: function( evt ) {

    // On récupère la case où se trouve déjà
    // la classe "active"
    var oldTarget = document.querySelector('.active');

    // On regarde si on a trouvé rouge ou pas
    // if ( oldTarget !== null ) {
    if ( oldTarget ) {

      // On a bien une case rouge dans le document
      // On supprime la classe "active" de la case
      oldTarget.classList.remove( 'active' );
    }

    // On ajoute la class "active" sur la
    // case sur laquelle on vient de cliquer
    evt.target.classList.add( 'active' );
  }
};

// On crée l'écoute qui va nous prévenir
// que la page est correctement chargée
document.addEventListener('DOMContentLoaded', app.init);
