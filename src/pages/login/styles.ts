import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LoginForm = styled.form`
  background-color: #fff;
  width: 500px;
  margin: 0 auto;
  padding: 3rem 1.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  & div {
    margin-bottom: 1rem;
  }

  & p {
    text-align: center;
    font-size: .8rem;
    color: #757575;
  }
`;


export const Button = styled.button`
  background-color: #2196F3;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: .5rem .7rem;
  width: 30%;
  margin: .5rem auto;
  cursor: pointer;

  &:hover {
    background-color: #1976D2;
  }
`;

export const RegisterLink = styled.a`
  text-decoration: none;
  color: #536DFE;
`;