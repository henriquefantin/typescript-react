import { createContext, useState } from 'react'
import './App.css'

// Importar componentes
import SimpleComponent from './components/SimpleComponent';
import PropComponent from './components/PropComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

// Type
type textOrNull = string | null;
type fixed = "isso" | "ou" | "aquilo";

// Context
interface IAppContex {
  language: string;
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContex | null>(null);

function App() {

  // Variaveis
  const name: string = "Henrique";
  const age: number = 28;
  const isWork: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // Type
  const myText: textOrNull = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minima est aliquid quae, soluta, cum temporibus dolor nesciunt, eveniet architecto numquam dolore excepturi hic sequi repellat id culpa! Nostrum, in.";
  const mySecText: textOrNull = null;

  const textFixed: fixed = "isso";
  // const textFixed2:fixed = "teste"; // Não pode

  // Context
  const contextValue: IAppContex = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <h1>TypeScript com React</h1>
        <h2>{userGreeting(name)}</h2>
        <p>Idade: {age}</p>

        {
          isWork && (
            <p>Está trabalhando</p>
          )
        }

        <SimpleComponent />
        <PropComponent name="Nome Props" />
        <Destructuring
          title="Primeiro post"
          content="Conteúdo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {
          myText && <p>myText: {myText}</p>
        }
        {
          mySecText && <p>mySecText: {mySecText}</p>
        }
        <Context />
      </AppContext.Provider>
    </>
  )
}

export default App
