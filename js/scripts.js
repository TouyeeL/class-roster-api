// Scripting

// Data source
// https://assets.codepen.io/16425/Spring-2025-Roster.json

const dataSource = 'https://assets.codepen.io/16425/Spring-2025-Roster.json';

// GET elements
const container = document.querySelector('.card');

// fetch
fetch( dataSource )
.then( res => res.json() )
.then( students => {
  
  // checkcheck: Data ok? 
  // console.log( students[3].name );
  
  students.forEach( student => {
    
  // template
  const template = `
    <figure style=
    "border-color: ${student.favoriteColor};
    background: linear-gradient(white, ${student.favoriteColor})
    ">
        <img src="${student.imageUrl}" />
      
        <h2>
          ${student.name}
          ${student.status}
        </h2>
        
        <p>
         Fun Fact: ${student.funFact}
        </p>
        
        <p>
        Program: ${student.team}
        </p>
        
        <p>
        Quote: ${student.motto}
        </p>
     
        <p>
        Favorite Character: ${student.favoriteSimpsonsCharacter}
        </p>
        
        <p>
        Favorite Artist: ${student.favoriteBand}
        </p>
        
        <p>
        Favorite Food: ${student.favoriteFood}
        </p>
        
        <p>
        Super Power: ${student.talent}
        </p>
        
        <em> 
         Favorite Song: ${student.favoriteSong}
        </em>
        
        
    </g>
    `;
  
  // SET it. rendering
  container.insertAdjacentHTML( 'afterbegin', template);

    
  });  
  
  
});

