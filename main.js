
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

// ELEMENTI DEL DOM
// container cards
const teamContainer = document.querySelector('.team-container');
// elementi input
let nameUtente = document.getElementById("name").value;
let roleUtente = document.getElementById("role").value;
let imageUtente = document.getElementById("image").value;
const addMemberButton = document.getElementById("addMemberButton");
//

// aggiunge un membro del team
addMemberButton.addEventListener('click' , function ()
{
  let nuovoUtente = 
  {
    name : nameUtente,
    role : roleUtente,
    image : imageUtente,
  } 

  team.push(nuovoUtente);
});


// stampa i singoli membri del team
for (let x in team)
{
  console.log(team[x]);
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