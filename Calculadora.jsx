import { useState } from "react";

function Calculadora() {
  const [display, setDisplay] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);

  const adicionarNumero = (numero) => {
    if (display === "0") {
      setDisplay(numero);
    } else {
      setDisplay(display + numero);
    }
  };

  const escolherOperacao = (op) => {
    setPrimeiroNumero(Number(display));
    setOperacao(op);
    setDisplay("0");
  };

  const calcular = () => {
    const segundoNumero = Number(display);
    let resultado;

    if (operacao === "+") {
      resultado = primeiroNumero + segundoNumero;
    } else if (operacao === "-") {
      resultado = primeiroNumero - segundoNumero;
    } else if (operacao === "*") {
      resultado = primeiroNumero * segundoNumero;
    } else if (operacao === "/") {
      if (segundoNumero === 0) {
        setDisplay("Erro");
        return;
      }

      resultado = primeiroNumero / segundoNumero;
    } else {
      return;
    }

    setDisplay(String(resultado));
    setPrimeiroNumero(null);
    setOperacao(null);
  };

  const limpar = () => {
    setDisplay("0");
    setPrimeiroNumero(null);
    setOperacao(null);
  };

  return (
    <div>
      <h1>Calculadora</h1>

      <div>
        {display}
      </div>

      <div>
        <button onClick={limpar}>C</button>

        <button onClick={() => escolherOperacao("/")}>
          ÷
        </button>

        <button onClick={() => escolherOperacao("*")}>
          ×
        </button>

        <button onClick={() => escolherOperacao("-")}>
          -
        </button>

        <br />

        <button onClick={() => adicionarNumero("7")}>7</button>
        <button onClick={() => adicionarNumero("8")}>8</button>
        <button onClick={() => adicionarNumero("9")}>9</button>

        <button onClick={() => escolherOperacao("+")}>
          +
        </button>

        <br />

        <button onClick={() => adicionarNumero("4")}>4</button>
        <button onClick={() => adicionarNumero("5")}>5</button>
        <button onClick={() => adicionarNumero("6")}>6</button>

        <button onClick={calcular}>=</button>

        <br />

        <button onClick={() => adicionarNumero("1")}>1</button>
        <button onClick={() => adicionarNumero("2")}>2</button>
        <button onClick={() => adicionarNumero("3")}>3</button>

        <br />

        <button onClick={() => adicionarNumero("0")}>0</button>
      </div>
    </div>
  );
}

export default Calculadora;
