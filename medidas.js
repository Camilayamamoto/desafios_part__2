function medida() {
    const resp = window.document.getElementById("saida");
  
    let novaMedida = prompt("Digite uma distância em metros (m)");
  
    let converted = 
    {
         "quilômetros (Km)": (novaMedida / 1000),
         "hectômetros (Hm)": (novaMedida / 100),
         "decâmetros (Dam)": (novaMedida / 10),
         "decímetros (dm)": (novaMedida * 10),
         "centímetros (cm)": (novaMedida * 100),
         "milímetros (mm)": (novaMedida * 1000),
    };

    console.table(converted);
    
    resp.innerHTML = `A distância de ${Number(novaMedida)} metros corresponde a...`;
    Object.keys(converted).map((element) => {resp.innerHTML += `<p>${converted[element]} ${element}</p>`;
    });
  }
