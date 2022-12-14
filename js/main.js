// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


"use strict";

const team = [

    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: '../img/wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: '../img/angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: '../img/walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: '../img/angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: '../img/scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: '../img/barbara-ramos-graphic-designer.jpg'
    },

];

const memberList = document.getElementById("list-item");

for(let key in team) {

    const member = `
        <li>
            Name<br><br>
            ${team[key].nome}
        </li>
        <li>
            Role<br><br>
            ${team[key].ruolo}
        </li>
        <li>
            <img src="${team[key].foto}">
        </li> 

    `;
    memberList.innerHTML += member;

    // team[key]
}

