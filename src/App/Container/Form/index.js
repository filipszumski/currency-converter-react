import React, { useState } from "react";
import "./style.css";
import {currencies} from "../../currencies";

const Form = () => {
  const [possessedCurrency, setPossessedCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [wantedCurrency, setWantedCurrency] = useState(currencies[0].short);

  console.log(possessedCurrency);

  return (
    <form className="form" action="" method="GET">
      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Wymieniasz z (wybierz walutę):</span>
          <select
            className="form__input"
            value={possessedCurrency}
            onChange={event => setPossessedCurrency(event.target.value)}
          >
            <option name="currency" value="pln">PLN</option>
            <option name="currency" value="eur">EUR</option>
            <option name="currency" value="usd">USD</option>
            <option name="currency" value="gbp">GBP</option>
            <option name="currency" value="chf">CHF</option>
          </select>
        </label>
      </p>

      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Kwota:</span>
          <input
            type="number"
            name="amount"
            step="0.01"
            placeholder="Wpisz kwotę"
            className="form__input" min="0"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
        </label>
      </p>

      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Wymieniasz na (wybierz walutę):</span>
          <select 
          className="form__input"
          value={wantedCurrency}
          onChange={event => setWantedCurrency(event.target.value)}
          >
            <option name="currency" value="pln">PLN</option>
            <option name="currency" value="eur">EUR</option>
            <option name="currency" value="usd">USD</option>
            <option name="currency" value="gbp">GBP</option>
            <option name="currency" value="chf">CHF</option>
          </select>
        </label>
      </p>

      <p className="form__paragraph">
        <button className="form__button">Przelicz</button>
      </p>
      <p className="form__paragraph form__paragraph--info">
        *Wartości kursów walut aktualne na dzień 01.07.2020 r. według danych
        pochodzących ze strony Narodowego Banku Polskiego
            </p>
      <p className="form__paragraph form__paragraph--result">
      </p>
    </form>
  );
};

export { Form };