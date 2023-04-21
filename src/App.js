import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = {
  income: 0,
  necessitiesPercentage: 50,
  savingsPercentage: 20,
  discretionaryPercentage: 30,
  necessities: 0,
  savings: 0,
  discretionary: 0,
  annualSavings: 0,
};

function EpargneSimulator() {
  const [state, setState] = useState(INITIAL_STATE);

  const resetValues = () => setState(INITIAL_STATE);

  const calculateEpargne = () => {
    const {
      income,
      necessitiesPercentage,
      savingsPercentage,
      discretionaryPercentage,
    } = state;

    const necessitiesAmount = income * (necessitiesPercentage / 100);
    const savingsAmount = income * (savingsPercentage / 100);
    const discretionaryAmount = income * (discretionaryPercentage / 100);

    setState((prevState) => ({
      ...prevState,
      necessities: necessitiesAmount,
      savings: savingsAmount,
      discretionary: discretionaryAmount,
      annualSavings: savingsAmount * 12,
    }));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({ ...prevState, [id]: parseInt(value) }));
  };

  const {
    income,
    necessitiesPercentage,
    savingsPercentage,
    discretionaryPercentage,
    necessities,
    savings,
    discretionary,
    annualSavings,
  } = state;

  const isCalculated = necessities !== 0 || savings !== 0 || discretionary !== 0 || annualSavings !== 0;

  return (
    <div className="epargne-simulator">
      <h1>Simulateur d'épargne personnalisé</h1>
      <div className="input-container">
        <label htmlFor="income-input">Revenu mensuel:</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleInputChange}
        />
      </div>
      <div className="percentage-container">
        <div className="percentage-input">
          <label htmlFor="necessities-percentage-input">
            Pourcentage des dépenses essentielles:
          </label>
          <input
            type="number"
            id="necessitiesPercentage"
            value={necessitiesPercentage}
            onChange={handleInputChange}
          />
        </div>
        <div className="percentage-input">
          <label htmlFor="savings-percentage-input">
            Pourcentage de l'épargne:
          </label>
          <input
            type="number"
            id="savingsPercentage"
            value={savingsPercentage}
            onChange={handleInputChange}
          />
        </div>
        <div className="percentage-input">
          <label htmlFor="discretionary-percentage-input">
            Pourcentage des dépenses discrétionnaires:
          </label>
          <input
            type="number"
            id="discretionaryPercentage"
            value={discretionaryPercentage}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="input-container">
        <button onClick={calculateEpargne}>Calculer</button>
        <button onClick={resetValues}>Réinitialiser</button>
      </div>
      {isCalculated && (
        <>
          <div className="allocations-container">
            <h2>Allocation des dépenses:</h2>
            <div className="allocation">
              <p>Essentielles:</p>
              <p>{necessities.toFixed(2)} €</p>
            </div>
            <div className="allocation">
              <p>Épargne:</p>
              <p>{savings.toFixed(2)} €</p>
            </div>
            <div className="allocation">
              <p>Discrétionnaires:</p>
              <p>{discretionary.toFixed(2)} €</p>
            </div>
          </div>
          <div className="allocations-container">
            <h2>Épargne annuelle:</h2>
            <div className="allocation">
              <p>Épargne:</p>
              <p>{annualSavings.toFixed(2)} €</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default EpargneSimulator;
