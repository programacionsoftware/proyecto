import { Usuario } from "./Usuario";
import { Password } from "./Password";
import  { Profile } from "./Profile";
import './style/LoguinPrincipal.css';
import './style/Usuario.css';
import './style/Password.css';
import './style/Profile.css';
import './style/ButtonPrincipal.css';
import { ButtonPrincipal } from "./ButtonPrincipal";


function LoguinPrincipal(){
    return(
      
      
        <form className="form_principal">
            <div>
             <Profile />
             </div>
            <span className="Form-user">Usuario</span>
            <Usuario />
            <span className="Form-password">Password</span>
            <Password />
            <ButtonPrincipal />
            <ButtonPrincipal />
        </form>
    );
}

export { LoguinPrincipal };