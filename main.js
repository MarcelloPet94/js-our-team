/*
genero un div da js (quanti?)
> in base alla lunghezza degli oggetti presenti nell'array (ciclo)

inserisco gli elementi dinamici in ogni punto
dell'html dove dovranno essere stampati (come?)
> ogni oggetto verrà richiamato con un valore numerico
a questo si aggiungerà la chiave (uguale per tutti) dell'oggetto

 appendo il div dentro al contenitore
*/ 
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


// localizzo contenitore
const teamContainer = document.querySelector('.team-container');

for (let x in team)
{
  teamContainer.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${team[x].image}"
        alt="${team[x].name}"
      />
    </div>
    <div class="card-text">
      <h3>${team[x].name}</h3>
      <p>${team[x].role}</p>
    </div>
  </div>
  `
}
