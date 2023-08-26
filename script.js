function encrypt() {
    const text = document.getElementById("text").value;
    const key = parseInt(document.getElementById("key").value, 10);
    const encryptedText = caesarCipher(text, key);
    document.getElementById("result").textContent = "Encrypted: " + encryptedText;
}

function decrypt() {
    const text = document.getElementById("text").value;
    const key = parseInt(document.getElementById("key").value, 10);
    const decryptedText = caesarCipher(text, -key); // Decrypt by shifting in the opposite direction
    document.getElementById("result").textContent = "Decrypted: " + decryptedText;
}

function caesarCipher(text, key) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        const code = char.charCodeAt(0);
        const isUpperCase = char === char.toUpperCase();
        const shiftedCode = ((code - (isUpperCase ? 65 : 97) + key) % 26 + 26) % 26;
        return String.fromCharCode(shiftedCode + (isUpperCase ? 65 : 97));
    });
}
