import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import LeftArrowImage from "./assets/leftarrow.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { Griditem } from "./components/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const handlCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Preencha todos o campos");
    }
  };
  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.70 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(event) => setHeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(event) => setWeightField(parseFloat(event.target.value))}
            disabled={toShow ? true : false}
          />
          <button
            onClick={handlCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <Griditem key={index} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={LeftArrowImage} alt="" width={25} />
              </div>
              <Griditem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
