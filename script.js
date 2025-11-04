const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: "application/json" },
  });
  if (response.ok) {
    alert("Merci ! Votre message a bien été envoyé.");
    form.reset();
  } else {
    alert("Une erreur est survenue. Merci de réessayer.");
  }
});
