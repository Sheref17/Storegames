let name = localStorage.getItem("sessionUsername");
let wel = document.getElementById("logo");
wel.innerHTML = `<h1>${name}</h1>`;
function logout() {
    localStorage.removeItem("sessionUsername");
    window.location.href = "/Storegames/signin.html";
}