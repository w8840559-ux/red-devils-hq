function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

function vote(button) {
  const message = document.getElementById("vote-message");

  message.textContent =
    "Thanks for voting! Your fan vote has been counted.";

  document.querySelectorAll(".poll-options button").forEach(btn => {
    btn.disabled = true;
  });

  button.style.background = "#d71920";
}