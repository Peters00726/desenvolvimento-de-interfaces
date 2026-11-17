const form = document.getElementById("form");
const res = document.getElementById("res");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const op = document.getElementById("op").value;

    let r = op === "soma" ? n1 + n2 : n1 * n2;
    let status = r > 0 ? "Positivo" : r < 0 ? "Negativo" : "Zero";

    res.textContent = `Resultado: ${r} (${status})`;
});
