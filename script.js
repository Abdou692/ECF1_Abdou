
// script ppour le formulaire

function validateForm() {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    const errorNom = document.getElementById('error-nom');
    const errorEmail = document.getElementById('error-email');
    const errorSujet = document.getElementById('error-sujet');
    const errorMessage = document.getElementById('error-message');

    errorNom.innerHTML = "";
    errorEmail.innerHTML = "";
    errorSujet.innerHTML = "";
    errorMessage.innerHTML = "";

    let isValid = true;

    if (nom === "") {
        errorNom.innerHTML = "Le champ 'Nom' est obligatoire.";
        isValid = false;
    }
    if (email === "") {
        errorEmail.innerHTML = "Le champ 'Email' est obligatoire.";
        isValid = false;
        
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorEmail.innerHTML = "Veuillez entrer une adresse email valide.";
        isValid = false;
    }
    
    if (sujet === "") {
        errorSujet.innerHTML = "Le champ 'Sujet' est obligatoire.";
        isValid = false;
    }
    if (message === "") {
        errorMessage.innerHTML = "Le champ 'Message' est obligatoire.";
        isValid = false;
    }

    if (isValid) {
        alert("Formulaire envoyé avec succès!");
    }

    return isValid;
}


    
// Menu burger

document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        document.querySelector('.burger-navigation').classList.toggle('active');
        document.querySelector('.menu-burger').classList.toggle('active');
    }

    document.querySelector('.menu-burger').addEventListener("click", toggleMenu);


// Partie Don

const optionsDon = document.querySelectorAll(".option-don");
const boutonsFreq = document.querySelectorAll(".bouton-freq-don");
const boutonDonnerMaintenant = document.querySelector(".donner-maintenant");
let montantSelectionne = 50;
let frequenceSelectionnee = "Mensuel";

    // Sélection des montants

optionsDon.forEach(option => {
       
 option.addEventListener("click", function () {
 optionsDon.forEach(opt => opt.classList.remove("actif"));
    this.classList.add("actif");
            
    montantSelectionne = this.getAttribute("data-montant");
    mettreAJourBoutonDon();

        });
    });

    boutonsFreq.forEach(button => {
        button.addEventListener("click", function () {
            boutonsFreq.forEach(btn => btn.classList.remove("actif"));
            this.classList.add("actif");
            frequenceSelectionnee = this.innerText;
            mettreAJourBoutonDon();
        });
    });

    function mettreAJourBoutonDon() {
        boutonDonnerMaintenant.innerHTML = `<img src="images/Icone2.png" alt="Icône" style="height:1em; vertical-align:middle;"> Faire un don de ${montantSelectionne}€/${frequenceSelectionnee.toLowerCase()}`;
    }


    // Histoires de Réussite

    const boutonsHistoire = document.querySelectorAll(".bouton-histoire");
    const imagePrincipaleHistoire = document.querySelector(".histoire-principale img");
    const titreHistoire = document.querySelector(".texte-histoire h3");
    const texteHistoire = document.querySelector(".texte-histoire p");
    

    boutonsHistoire.forEach(button => {
      button.addEventListener("click", function () {
      boutonsHistoire.forEach(btn => btn.classList.remove("actif"));
       this.classList.add("actif");

            const nouvelleImage = this.getAttribute("data-image");
            const nouveauTitre = this.getAttribute("data-title");
            const nouveauTexte = this.getAttribute("data-text");
            const nouvelledate = this.getAttribute("data-histoire");


            imagePrincipaleHistoire.src = nouvelleImage;
            titreHistoire.textContent = nouveauTitre;
            texteHistoire.textContent = nouveauTexte;
        });
    });



    // Quizz

    document.querySelectorAll(".element-quiz").forEach(quizItem => {
        const boutons = quizItem.querySelectorAll(".bouton-quiz");
        const reponseDiv = quizItem.querySelector(".reponse-quiz");
        boutons.forEach(button => {
            button.addEventListener("click", function () {
               
                boutons.forEach(btn => {
                    btn.style.backgroundColor = "#ddd";
                    btn.style.color = "black";
                });
              
                const estCorrect = this.getAttribute("data-answer") === "true";
                const message = this.getAttribute("data-message");
              
                if (estCorrect) {
                    this.style.backgroundColor = "#4CAF50"; // Vert ✅
                    this.style.color = "white";
                    reponseDiv.className = "reponse-quiz correct";
                } else {
                    this.style.backgroundColor = "#f44336"; // Rouge ❌
                    this.style.color = "white";
                    reponseDiv.className = "reponse-quiz wrong";
                }
               
                reponseDiv.innerHTML = message;
                reponseDiv.style.display = "block";
              
                boutons.forEach(btn => {
                    btn.disabled = true;
                });
            });
        });
    });
});

