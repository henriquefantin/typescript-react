import { useState } from 'react'
import './App.css'

// Importar componentes
import TestComponent from './components/TestComponent';

function App() {

  // Variaveis
  const name: string = "Henrique";
  const age: number = 28;
  const isWork: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  return (
    <>
      <h1>TypeScript com React</h1>
      <h2>{userGreeting(name)}</h2>
      <p>Idade: {age}</p>

      {
        isWork && (
          <p>Está trabalhando</p>
        )
      }

      <TestComponent />
    </>
  )
}

export default App
