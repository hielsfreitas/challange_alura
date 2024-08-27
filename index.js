function Codificar() {
  let texto = document.getElementById("texto").value;

  // codificando o texto
  let textoCodificado = texto.replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");

  document.getElementById("título-mensagem").innerText = "Mensagem Codificada:";
  document.getElementById("parágrafo").innerText = textoCodificado;
  if (texto.length != 0) {
    document.getElementById("título-mensagem").innerText = "Mensagem Codificada:";
    document.getElementById("parágrafo").innerText = textoCodificado;
    document.getElementById("boneco").src = "./assets/Codificada.jpg";
} else {
    document.getElementById("boneco").src = "./assets/boneco.png";
    document.getElementById("título-mensagem").innerText = "Nenhuma mensagem foi encontrada";
    document.getElementById("parágrafo").innerText = "Digite o texto que deseja criptografar ou descriptografar";
    alert("Você deve inserir algum texto");
}                  
}

function Decodificar() {
  let texto = document.getElementById("texto").value;

  // decodificação
  let textoDecodificado = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

  document.getElementById("título-mensagem").innerText = "Mensagem Decodificada:";
  document.getElementById("parágrafo").innerText = textoDecodificado;
  if (texto.length != 0) {
    document.getElementById("título-mensagem").innerText = "Mensagem Decodificada:";
    document.getElementById("parágrafo").innerText = textoDecodificado;
    document.getElementById("boneco").src = "./assets/Decodificada.jpg";
} else {
    document.getElementById("boneco").src = "./assets/boneco.png";
    document.getElementById("título-mensagem").innerText = "Nenhuma mensagem foi encontrada";
    document.getElementById("parágrafo").innerText = "Digite o texto que deseja criptografar ou descriptografar";
    alert("Você deve inserir algum texto");
}
}