function biss() {
    const resp = window.document.getElementById("saida");
  
    let year = prompt("Qual é o ano que você quer verificar?");
  
    resultado = bissexto(year);
  
    resp.innerHTML = `<h1>Analisando o ano de ${year}...</h1><p>O ano de ${year} <b class=${resultado.class}>${resultado.text}</b><p>
    `;
  }
  
  function bissexto(year) {
    let result = (year / 4).toFixed(1);
  
    if (result[result.indexOf(".") + 1] == 0) {
      return {
        class: "aprovado", text: "É BISSEXTO",
      };
    } else {
      return {
        class: "reprovado", text: "NÃO É BISSEXTO",
      };
    }
  }