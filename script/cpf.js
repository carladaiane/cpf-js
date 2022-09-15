function validar() {
  let lista = String(window.document.getElementById("cpf").value)
    .split("")
    .map((cpf) => {
      return Number(cpf);
    });

  if (lista.length == 0) {
    // window.alert("aaa");
    window.document.getElementById("alert").innerHTML =
      "Ops! O CPF não foi informado";
  } else {
    window.document.getElementById("alert").innerHTML = "";

    qtd = () => {
      if (lista.length === 11) {
        return true;
      } else {
        return false;
      }
    };

    valida1 = () => {
      let soma = 0;
      let cont = 11;
      for (let dig in lista.slice(0, 9)) {
        cont -= 1;
        soma += lista[dig] * cont;
      }
      let result = (soma * 10) % 11;

      if (result === 10) {
        result = 0;
      } else {
        result = result;
      }
      if (result === lista[9]) {
        return true;
      } else {
        return false;
      }
    };

    valida2 = () => {
      let soma = 0;
      let cont = 12;
      for (let dig in lista.slice(0, 10)) {
        cont -= 1;
        soma += lista[dig] * cont;
      }
      let result = (soma * 10) % 11;

      if (result === 10) {
        result = 0;
      } else {
        result = result;
      }
      if (result === lista[10]) {
        return true;
      } else {
        return false;
      }
    };

    if (valida1() && valida2() && qtd() === true) {
      window.document.getElementById("text").innerHTML = "CPF Válido";
    } else {
      window.document.getElementById("text").innerHTML = "CPF inválido";
    }
  }
}

function limpar() {
  window.document.getElementById("cpf").value = "";
  window.document.getElementById("text").innerHTML =
    "Um CPF só é valido se estiver cadastrado na base da Receita Federal. O CPF é composto de 11 algarismos, sendo os dois últimos dígitos verificadores. Através dos dígitos verificadores podemos saber se ele tem o formato correto sem precisar consultar a Receita Federal.";
}
