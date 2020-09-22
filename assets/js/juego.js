/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

 let deck    = [];
 const tipos = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];

 const crearDeck = () => {
     for(let i=2 ; i<=10 ; i++){
         for (let tipo of tipos){
            deck.push(i + tipo);
        }
        
     }

     for(let tipo of tipos){
         for (esp of especiales){
            deck.push(esp + tipo);
         }
     }
     console.log(deck);
     deck = _.shuffle( deck );
     console.log( deck );
     return deck;
     
    }

    crearDeck();

    //esta funcion me permite tomar una carta 

    const pedirCarta = () => {

        if(deck.length === 0){
            throw 'No hay mas cartas';
        }

        const carta = deck.pop();

        console.log(deck);
        console.log(carta);// carta debe de ser de la baraja
        return '2C';
    }


    
       // pedirCarta();
    

  
    

