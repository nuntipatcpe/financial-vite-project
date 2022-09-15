import { useState } from "react";
import { comma } from "number-magic";
import {
  BALANCE,
  LAVERAGE,
  RISK_OF_RUIN,
  RISK_REWARD_RATIO,
  ROUND,
  STOP_LOSS,
  WIN_RATE,
} from "../../../Constants";

type FuturesProps = {};

type Int = {
  balance: number;
  ror: number;
  sl: number;
  lr: number;
  round: number;
  rr: number;
  winrate: number;
};
type Str = {
  balance: string;
  ror: string;
  sl: string;
  lr: string;
  round: string;
  rr: string;
  winrate: string;
};

const Futures: React.FC<any> = () => {
  const [input, setInput] = useState<Str>({
    balance: "1,000",
    ror: "3",
    sl: "10",
    lr: "5",
    round: "33",
    rr: "5",
    winrate: "60",
  });
  const [valueSlider, setValueSlider] = useState<string>(
    comma(calculatr().maxRound)
  );

  function calculatr() {
    let conToInt: Int = {
      balance: parseFloat(input.balance.replaceAll(",", "")),
      ror: parseFloat(input.ror.replaceAll(",", "")) / 100,
      sl: parseFloat(input.sl.replaceAll(",", "")) / 100,
      lr: parseFloat(input.lr.replaceAll(",", "")),
      round: parseInt(input.round.replaceAll(",", "")),
      rr: parseFloat(input.rr.replaceAll(",", "")),
      winrate: parseFloat(input.winrate.replaceAll(",", "")) / 100,
    };
    let positionSize: number =
      (conToInt.balance * conToInt.ror) / (conToInt.sl * conToInt.lr);
    let lossRate: number = 100 - conToInt.winrate * 100;
    let roundProfit: number = Math.floor(conToInt.winrate * conToInt.round);
    let profit: number = Math.round(
      conToInt.sl * conToInt.lr * conToInt.rr * positionSize * roundProfit
    );
    let roundLoss: number = Math.floor((lossRate / 100) * conToInt.round);
    let loss: number = Math.round(
      conToInt.sl * conToInt.lr * positionSize * roundLoss
    );
    let summary: number = profit - loss;
    let profitPercen: number = (summary / conToInt.balance) * 100;
    return {
      positionSize,
      maxRound: Math.floor(
        conToInt.balance / (conToInt.balance * conToInt.ror)
      ),
      lossRate,
      summary,
      profitPercen,
      profit,
      roundProfit,
      loss,
      roundLoss,
    };
  }
  function onChangeNumberFormath(e: string, value: string) {
    let numb = e.replaceAll(",", "");
    if (
      numb.charAt(numb.length - 1) === "." ||
      numb.charAt(numb.length - 1) === "0"
    ) {
      updateInput(value, comma(numb));
    } else {
      updateInput(value, comma(parseFloat(numb)));
    }
  }
  function updateInput(value: string, newValue: string) {
    switch (value) {
      case BALANCE:
        setInput({ ...input, balance: newValue });
        break;
      case RISK_OF_RUIN:
        setInput({ ...input, ror: newValue });
        break;
      case STOP_LOSS:
        setInput({ ...input, sl: newValue });
        break;
      case LAVERAGE:
        setInput({ ...input, lr: newValue });
        break;
      case ROUND:
        setInput({ ...input, round: newValue });
        break;
      case RISK_REWARD_RATIO:
        setInput({ ...input, rr: newValue });
        break;
      case WIN_RATE:
        setInput({ ...input, winrate: newValue });
        break;
      default:
        break;
    }
  }

  return (
    <div className="futures">
      <div className="title">
        <span style={{ color: "#950101" }}>Futures</span>
        <span> market</span>
      </div>
      {/* box1___________________________________________________ */}
      <form action="" className="risk-of-ruin">
        <label htmlFor="">Balance</label>
        <input
          type="text"
          onChange={(e) => onChangeNumberFormath(e.target.value, BALANCE)}
          value={input.balance === "NaN" ? "0" : input.balance}
        />
        <label htmlFor="">USD</label>
        <label htmlFor="">Risk of Ruin</label>
        <input
          type="text"
          onChange={(e) => onChangeNumberFormath(e.target.value, RISK_OF_RUIN)}
          value={input.ror === "NaN" ? "0" : input.ror}
        />
        <label htmlFor="">%</label>
        <label htmlFor="">Stop loss</label>
        <input
          type="text"
          onChange={(e) => onChangeNumberFormath(e.target.value, STOP_LOSS)}
          value={input.sl === "NaN" ? "0" : input.sl}
        />
        <label htmlFor="">%</label>
        <label htmlFor="">Laverage</label>
        <input
          type="text"
          onChange={(e) => onChangeNumberFormath(e.target.value, LAVERAGE)}
          value={input.lr === "NaN" ? "0" : input.lr}
        />
        <label htmlFor="">X</label>
      </form>
      {/* box2___________________________________________________ */}
      <form action="">
        <label htmlFor="">Position size</label>
        <label htmlFor="">{comma(calculatr().positionSize)}</label>
        <label htmlFor="">USD</label>
        <label htmlFor="">Max round</label>
        <label htmlFor="">{comma(calculatr().maxRound)}</label>
        <label htmlFor="">*</label>
      </form>
      {/* box3___________________________________________________ */}
      <form action="">
        <label htmlFor="">Round</label>
        <div>
          <div className="cal-round container-winrate">
            <span></span>
            <input
              type="text"
              onChange={(e) => onChangeNumberFormath(e.target.value, ROUND)}
              value={input.round === "NaN" ? "0" : input.round}
            />
          </div>
          <div className="slider-con">
            <span>0</span>
            <input
              type="range"
              min="0"
              max={calculatr().maxRound}
              value={valueSlider}
              className="slider"
              onChange={(e) => {
                setValueSlider(e.target.value);
                setInput({ ...input, round: e.target.value });
              }}
            ></input>
            <span>{calculatr().maxRound}</span>
          </div>
        </div>
        <label htmlFor="">*</label>
        <label htmlFor="">Risk Reward Ratio</label>
        <div className="risk-reward-ratio container-winrate">
          <span>1 :</span>
          <input
            type="text"
            onChange={(e) =>
              onChangeNumberFormath(e.target.value, RISK_REWARD_RATIO)
            }
            value={input.rr === "NaN" ? "0" : input.rr}
          />
        </div>
        <label htmlFor="">*</label>
        <label htmlFor="">Win rate</label>
        <div className={"container-winrate"}>
          <div></div>
          <input
            type="text"
            onChange={(e) => onChangeNumberFormath(e.target.value, WIN_RATE)}
            value={input.winrate === "NaN" ? "0" : input.winrate}
          />
        </div>
        <label htmlFor="">%</label>
      </form>
      {/* card___________________________________________________ */}
      <div className="card">
        <p>Loss rate</p>
        <span>{calculatr().lossRate}</span>
        <p>%</p>
        <p>Summary</p>
        <span>{comma(calculatr().summary)}</span>
        <p>USD</p>
        <p>Profit</p>
        <span>{comma(calculatr().profitPercen)}</span>
        <p>%</p>
      </div>
      {/* card profit-Loss____________________________________________ */}
      <div className="profit-Loss">
        <div className="card">
          <p>Profit</p>
          <p>{comma(calculatr().profit)}</p>
          <p>USD</p>
          <p>Round</p>
          <p>{calculatr().roundProfit}</p>
        </div>
        <div className="card">
          <p>Loss</p>
          <p>{comma(calculatr().loss)}</p>
          <p>USD</p>
          <p>Round</p>
          <p>{calculatr().roundLoss}</p>
        </div>
      </div>
    </div>
  );
};
export default Futures;
