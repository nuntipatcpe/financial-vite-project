import { useEffect, useState } from "react";

import {
  comma,
  toFixed,
  percentage,
  idxList,
  randomInt,
  capital,
  precise,
  isNumber,
} from "number-magic";

type FuturesProps = {};

type Input = {
  balance: string;
  ror: string;
  sl: string;
  lr: string;
  round: string;
  rr: string;
  winrate: string;
};

const Futures: React.FC<any> = () => {
  const [input, setInput] = useState<Input>({
    balance: "10,000",
    ror: "4",
    sl: "3",
    lr: "5",
    round: "0",
    rr: "5",
    winrate: "60",
  });

  useEffect(() => {
    console.log(calculatr().maxRound);
    // console.log(calculatr().positionSize);
  }, [input]);

  function calculatr() {
    console.log(parseFloat(input.ror.replaceAll(",", "")));

    let balance = parseFloat(input.balance.replaceAll(",", ""));
    let ror = parseFloat(input.ror.replaceAll(",", "")) / 100;
    let sl = parseFloat(input.sl.replaceAll(",", "")) / 100;
    let lr = parseFloat(input.lr.replaceAll(",", ""));
    let round = parseInt(input.round.replaceAll(",", ""));
    let rr = parseFloat(input.rr.replaceAll(",", ""));
    let winrate = parseFloat(input.winrate.replaceAll(",", "")) / 100;
    // console.log(ror);

    let bXror = balance * ror;
    let slXlr = sl * lr;
    let positionSize = bXror / slXlr;

    let x = balance * ror;
    let maxRound = Math.floor(balance / x);

    let lossRate = 100 - winrate * 100;

    let roundProfit = Math.floor(winrate * round);

    let profit = Math.round(sl * lr * rr * positionSize * roundProfit);

    let roundLoss = Math.floor((lossRate / 100) * round);

    let loss = Math.round(sl * lr * positionSize * roundLoss);

    let summary = profit - loss;

    let profitPercen = (summary / balance) * 100;
    return {
      positionSize,
      maxRound,
      lossRate,
      summary,
      profitPercen,
      profit,
      roundProfit,
      loss,
      roundLoss,
    };
  }

  function onChengNumber(e: any, value: string) {
    let numb = e.target.value;
    let valueConToSting: string = numb.replaceAll(",", "");

    if (
      numb.charAt(numb.length - 1) === "." ||
      numb.charAt(numb.length - 1) === "0"
    ) {
      updateCasePoint(value, comma(valueConToSting));
    } else {
      updateCasePoint(
        value,

        comma(parseFloat(valueConToSting))
      );
    }
    if (e.target.value === "") {
      updateCasePoint(value, "0");
    }
  }

  function calLosstRate() {
    let winrate = parseInt(input.winrate.replaceAll(",", ""));
    let sum = 100 - winrate;

    return sum;
  }

  function updateCasePoint(value: string, check: string) {
    switch (value) {
      case "balance":
        setInput({ ...input, balance: check });
        break;
      case "ror":
        setInput({ ...input, ror: check });
        break;
      case "sl":
        setInput({ ...input, sl: check });
        break;
      case "lr":
        setInput({ ...input, lr: check });
        break;
      case "round":
        setInput({ ...input, round: check });
        break;
      case "rr":
        setInput({ ...input, rr: check });
        break;
      case "winrate":
        setInput({ ...input, winrate: check });
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
      <form action="" className="risk-of-ruin">
        <label htmlFor="">Balance</label>
        <input
          type="text"
          onChange={(e) => onChengNumber(e, "balance")}
          value={input.balance === "NaN" ? "0" : input.balance}
          // defaultValue={"0"}
        />
        {/* <InputNumberCommas defaultValue={1} /> */}
        <label htmlFor="">USD</label>

        <label htmlFor="">Risk of Ruin</label>
        {/* <input type="number" defaultValue={10000} /> */}
        <input
          type="text"
          onChange={(e) => onChengNumber(e, "ror")}
          value={input.ror === "NaN" ? "0" : input.ror}
          // defaultValue={"0"}
        />
        <label htmlFor="">%</label>

        <label htmlFor="">Stop loss</label>
        {/* <input type="number" defaultValue={10000} /> */}
        <input
          type="text"
          onChange={(e) => onChengNumber(e, "sl")}
          value={input.sl === "NaN" ? "0" : input.sl}
          // defaultValue={"0"}
        />
        <label htmlFor="">%</label>

        <label htmlFor="">Laverage</label>
        <input
          type="text"
          onChange={(e) => onChengNumber(e, "lr")}
          value={input.lr === "NaN" ? "0" : input.lr}
          // defaultValue={"0"}
        />
        <label htmlFor="">X</label>
      </form>
      <form action="">
        <label htmlFor="">Position size</label>
        <label htmlFor="">{comma(calculatr().positionSize)}</label>
        <label htmlFor="">USD</label>

        <label htmlFor="">Max round</label>
        <label htmlFor="">{comma(calculatr().maxRound)}</label>
        <label htmlFor="">*</label>
      </form>
      <form action="">
        <label htmlFor="">Round</label>
        <div>
          <div className="cal-round container-winrate">
            <span>0</span>
            {/* <input type="number" defaultValue={calMaxRound()} /> */}
            <input
              type="text"
              onChange={(e) => onChengNumber(e, "round")}
              value={input.round === "NaN" ? "0" : input.round}
              // defaultValue={"0"}
            />
            <span>{calculatr().maxRound}</span>
          </div>
        </div>
        <label htmlFor="">*</label>

        <label htmlFor="">Risk Reward Ratio</label>

        <div className="risk-reward-ratio container-winrate">
          <span>1 :</span>
          {/* <input type="number" defaultValue={"10,000"} /> */}
          <input
            type="text"
            onChange={(e) => onChengNumber(e, "rr")}
            value={input.rr === "NaN" ? "0" : input.rr}
            // defaultValue={"0"}
          />
          <span></span>
        </div>
        <label htmlFor="">*</label>

        <label htmlFor="">Win rate</label>
        <div className={"container-winrate"}>
          <div></div>
          {/* <input type="number" defaultValue={"60"} /> */}

          <input
            type="text"
            onChange={(e) => onChengNumber(e, "winrate")}
            value={input.winrate === "NaN" ? "0" : input.winrate}
            // defaultValue={"0"}
          />
          <div></div>
        </div>
        <label htmlFor="">%</label>
      </form>
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
      <div className="profit-Loss">
        <div className="card">
          <p>Profit</p>
          <p>{comma(calculatr().profit)}</p>
          <p>usd</p>

          <p>Round</p>
          <p>{calculatr().roundProfit}</p>
        </div>
        <div className="card">
          <p>Loss</p>
          <p>{comma(calculatr().loss)}</p>
          <p>usd</p>

          <p>Round</p>
          <p>{calculatr().roundLoss}</p>
        </div>
      </div>
    </div>
  );
};

export default Futures;
