import React, { useState } from 'react'

export const SignIn = () => {
  const [signin, setSignin] = useState({
    username:"",
    password:""
});

const handleSubmitin = (e) =>{
    e.preventDefault();
    console.log(`usuario: ${signin.username}\n` + `contraseña: ${signin.password}`)
}

const handleInOnChange = (value,atributte) =>{
    const copyState = {...signin};
    copyState[atributte] = value;
    setSignin(copyState);
    // console.log(signin);
};

return (
  <form action="" method="post" name="form1" onSubmit={handleSubmitin}>
    <div className="form-floating mb-3">
      <input className="form-control"
        type="text"
        id="username"
        name="username"
        placeholder=""
        value={signin.username}
        onChange={(ev) => handleInOnChange(ev.target.value, "username")}
        required />
        <label htmlFor="Usuario" >Usuario</label>
    </div>
    <div className="form-floating mb-3">
      <input className="form-control"
        type="password"
        id="password"
        name="password"
        placeholder=""
        value={signin.password}
        onChange={(ev) => handleInOnChange(ev.target.value, "password")}
        required />
        <label htmlFor="Contraseña">Contraseña</label>
    </div>
    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
      <br />
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </div>
  </form>
)
}


