import { useState } from 'react'

export const Login = () => { 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () => { 

    }

    return (
        <div>
            <form>
                <label>Login:</label>
                <input
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <br />
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}