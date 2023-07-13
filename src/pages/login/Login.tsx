import { Input } from "../../components/input/Input"
import * as S from "./styles"
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";


export const Login = () => {
  return (
    <S.Wrapper>
      <S.Title>Faça seu Login</S.Title>
      <S.LoginForm>
        <div>
          <Input label="Email" type="email" name="email" icon={<BiUser/> } placeholder="Digite seu email"/>
        </div>
        <div>
          <Input label="Senha" type="password" name="password" icon={<RiLockPasswordLine/> } placeholder="Digite sua senha"/>
        </div>
        
        <S.Button>Entrar</S.Button>
        <p>Não tem uma conta <S.RegisterLink href="#">Cadastre-se</S.RegisterLink></p>
      </S.LoginForm>
    </S.Wrapper>
  )
}