function calcularSalario() {
    const horasNormales = parseInt(document.getElementById('horasNormales').value);
    const horasExtras = parseInt(document.getElementById('horasExtras').value);
    const valorHoraNormal = 1800;
    const valorHoraExtra = valorHoraNormal * 1.5;
  
    const salarioBruto = (horasNormales * valorHoraNormal) + (horasExtras * valorHoraExtra);
  
    let deducciones;
    if (salarioBruto <= 250000) {
      deducciones = salarioBruto * 0.09;
    } else if (salarioBruto <= 380000) {
      deducciones = salarioBruto * 0.12;
    } else {
      deducciones = salarioBruto * 0.15;
    }
  
    const salarioNeto = salarioBruto - deducciones;
  
    const resultado = `
      <h2>Boucher de Salario</h2>
      <p>Horas Normales: ${horasNormales}</p>
      <p>Horas Extras: ${horasExtras}</p>
      <p>Salario Bruto: ¢${salarioBruto}</p>
      <p>Deducciones: ¢${deducciones}</p>
      <p>Salario Neto: ¢${salarioNeto}</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  
  function imprimirBoucher() {
    var contenido = document.getElementById('resultado').innerHTML;
    var ventanaImpresion = window.open('', '', 'width=600,height=600');
    ventanaImpresion.document.open();
    ventanaImpresion.document.write(`
      <html>
      <head>
        <title>Boucher de Salario</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        ${contenido}
      </body>
      </html>
    `);
    ventanaImpresion.document.close();
    ventanaImpresion.print();
  }
  