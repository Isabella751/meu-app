import './styles/theme.css'
import './styles/global.css'
export function App() {

  return (
    <>
      <main>
      <h1>Olá</h1>
      <p>Entre com seu nome e senha</p>
      
        <label>Nome:
            <input type="email" placeholder="Digite seu nome" required></input>
        </label>
      
        <label>Senha:
            <input type="password" placeholder="Digite sua senha" required></input>
        </label>
      
        <button type="submit">Enviar</button>
      </main>
    </>
  )
}

// export default App
