import React from 'react'
import { useState } from 'react';
import './App.css';
import QuoteCard from './components/quoteCard';

function App() { 
  const [image, setImage] = useState(null) //setimage, c'est la fonction qui va permettre de changer sa valeur (d'image). 
  const [character, setCharactere] = useState (null)
  const [quote, setQuote] = useState (null) //Null c'est comme si c'était false. Il sont initialiser à null et après on peut leur donner ce qu'on veut comme valeur.

  const requettesApi = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data)
        setImage(data[0].image); setCharactere(data[0].character); setQuote(data[0].quote);
      })
  } 
  
  //fetch = on lui dit "Coucou, renvoies moi les données du serveur API" (ici, requette get)
  //then = le serveur répond ; (then=attendre la réponse) "je t'envoies tout en vrac mais j'ai pas eu le temps de trier" du coups fonction fléchée = tinquiète Ginette des que je recois tout je tries moi en json, d'ou le 'response.json' qui sert à reformater au format json
  //response c'est ce que l'API me renvoit. Qui est transformé avec le point Json pour que ce soit plus lisible. (comme un .filter pour filtrer les donner qu'on a reçu)
  // data = il sert à contenir tout ce qui a été reformarté par le Json 
  // => c'est ce que je veux en faire. Donc là, voir dans la console ce que ça peut faire avec le console.log
  
  return (
    <div className="App">
      <button onClick = {requettesApi}>Click</button>
      {quote && 
      <QuoteCard quoteUser={quote} characterUser={character} imageUser={image}/>} 
    </div>
  );
  }
//Le QuoteCard c'est pour appeler un composant. Dedans on lui donne des props(ce sont des clées qui contiennent des valeurs)
//C'est comme si j'avais des fiches, ex: une fiche quoteUser qui contient les valeurs de quote. 
export default App;
