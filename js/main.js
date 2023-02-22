const tuoNome = prompt("Inserisci il tuo Nome");
const tuoCognome = prompt("Inserisci il tuo Cognome");
const colorePreferito = prompt(" CI SIAMO QUASI! Inserisci il tuo colore preferito");

const password = tuoNome + tuoCognome + colorePreferito;

document.getElementById("password").innerHTML = `CONGRATULAZIONE!! La tua nuova password è: ${password}23`;
