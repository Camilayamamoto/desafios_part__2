function calc() {
    const resp = window.document.getElementById("saida");
      let a = prompt("Qual é o valor de a?"); // insert value of "a"
      let b = prompt("Qual é o valor de b?"); // insert value of "b"
      let c = prompt("Qual é o valor de c?"); // insert value of "c"
    //formula for the equation Bhaskara 
      let equacao = `${a}x² + ${b}x + ${c} = 0`;
      let soma = `${b}² - 4 . ${a} . ${c}`;
      let delta = b ** 2 - 4 * a * c;
  
      resp.innerHTML = `<h3>Resolvendo Bhaskara</h3><p>A equação atual é <b>${equacao}</b></p>
    <p>O cálculo realizado será <b>𝚫 = ${soma}</b></p><p>O valor calculado foi <b class="recuperacao">𝚫 = ${delta}</b></p>  
    `;
  }