const form = document.querySelector(".signup-form");
const note = document.querySelector(".form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const interest = String(data.get("interest") || "").trim();

  if (!name || !email) {
    note.textContent = "Completa nombre y correo para solicitar la cotizacion.";
    return;
  }

  note.textContent = name
    ? `Gracias, ${name}. Recibimos tu solicitud de ${interest.toLowerCase()}.`
    : "Gracias. Recibimos tu solicitud de cotizacion.";
  form.reset();
});
