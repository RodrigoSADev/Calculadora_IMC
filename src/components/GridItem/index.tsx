import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import { idText } from "typescript";

type Props = {
  item: Level;
};

export const Griditem = (props: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: props.item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={props.item.icon === "up" ? upImage : downImage}
          alt=""
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>{props.item.title}</div>
      {props.item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é de {props.item.yourImc} kg/m²
        </div>
      )}

      <div className={styles.gridInfo}>
        {
          <>
            IMC está entre <strong>{props.item.imc[0]}</strong> e{" "}
            <strong>{props.item.imc[1]}</strong>
          </>
        }
      </div>
    </div>
  );
};
