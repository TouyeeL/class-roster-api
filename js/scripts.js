// Scripting

// Data source
// https://assets.codepen.io/16425/Spring-2025-Roster.json

const dataSource = 'https://assets.codepen.io/16425/Spring-2025-Roster.json';

// GET elements
const container = document.querySelector('.gallery');

fetch(dataSource)
  .then( response  => response.json())
  .then( data  => {

  
    console.log(data);

    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.forEach( student => {
      
      // template
      const template = `
        <figure style=
        "border-color: ${student.favoriteColor};
          background: linear-gradient(white, ${student.favoriteColor}, white">
          <img src="${student.imageUrl}">
          <header> ${student.name} </header>
          <p>  Emoji: ${student.status} </p>
          <p>  Quote: ${student.funFact} </p>
          <p>  Superpower: ${student.team} </p>
          <p>  Favorite Character: ${student.motto} </p>
          <p>  Favorite Artist: ${student.favoriteSimpsonsCharacter} </p>
          <p>  Favorite Food: ${student.favoriteBand} </p>
          <p>  Superpower: ${student.talent} </p>
          <p>  Favorite Song:  ${student.favoriteFood} </p>
        </figure>
        `;

    
      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });



