const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");

const greenFlag = document.getElementById("greenFlag");
const redFlag = document.getElementById("redFlag");

const greenHexText = document.getElementById("greenHex");
const redHexText = document.getElementById("redHex");

// Convertir número a HEX
function toHex(value) {
    let hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Actualizar Verde (#000000 → #00FF00)
greenRange.addEventListener("input", function () {
    const g = greenRange.value;
    const hexColor = `#00${toHex(g)}00`;

    greenFlag.style.backgroundColor = hexColor;
    greenHexText.textContent = hexColor.toUpperCase();
});

// Actualizar Rojo (#000000 → #FF0000)
redRange.addEventListener("input", function () {
    const r = redRange.value;
    const hexColor = `#${toHex(r)}0000`;

    redFlag.style.backgroundColor = hexColor;
    redHexText.textContent = hexColor.toUpperCase();
});
