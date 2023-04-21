import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EpargneSimulator from './App';

test('calculates and displays allocations and annual savings correctly', () => {
  render(<EpargneSimulator />);

  // Fill in input fields
  const incomeInput = screen.getByLabelText('Revenu mensuel:');
  fireEvent.change(incomeInput, { target: { value: '2000' } });
  const necessitiesInput = screen.getByLabelText('Pourcentage des dépenses essentielles:');
  fireEvent.change(necessitiesInput, { target: { value: '50' } });
  const savingsInput = screen.getByLabelText("Pourcentage de l'épargne:");
  fireEvent.change(savingsInput, { target: { value: '20' } });
  const discretionaryInput = screen.getByLabelText('Pourcentage des dépenses discrétionnaires:');
  fireEvent.change(discretionaryInput, { target: { value: '30' } });

  // Click on the calculate button
  const calculateButton = screen.getByRole('button', { name: 'Calculer' });
  fireEvent.click(calculateButton);

  // Check if the allocations and annual savings are displayed correctly
  const essentialsAllocation = screen.getByText(/Essentielles:/);
  expect(essentialsAllocation).toHaveTextContent('1000.00 €');
  const savingsAllocation = screen.getByText(/Épargne:/);
  expect(savingsAllocation).toHaveTextContent('400.00 €');
  const discretionaryAllocation = screen.getByText(/Discrétionnaires:/);
  expect(discretionaryAllocation).toHaveTextContent('600.00 €');
  const annualSavings = screen.getByText(/Épargne annuelle:/);
  expect(annualSavings).toHaveTextContent('4800.00 €');
});

test('resets all fields to initial values when reset button is clicked', () => {
  render(<EpargneSimulator />);

  // Fill in input fields
  const incomeInput = screen.getByLabelText('Revenu mensuel:');
  fireEvent.change(incomeInput, { target: { value: '2000' } });
  const necessitiesInput = screen.getByLabelText('Pourcentage des dépenses essentielles:');
  fireEvent.change(necessitiesInput, { target: { value: '50' } });
  const savingsInput = screen.getByLabelText("Pourcentage de l'épargne:");
  fireEvent.change(savingsInput, { target: { value: '20' } });
  const discretionaryInput = screen.getByLabelText('Pourcentage des dépenses discrétionnaires:');
  fireEvent.change(discretionaryInput, { target: { value: '30' } });

  // Click on the reset button
  const resetButton = screen.getByRole('button', { name: 'Réinitialiser' });
  fireEvent.click(resetButton);

  // Check if all fields are reset to initial values
  expect(incomeInput).toHaveValue('0');
  expect(necessitiesInput).toHaveValue('50');
  expect(savingsInput).toHaveValue('20');
  expect(discretionaryInput).toHaveValue('30');
});
