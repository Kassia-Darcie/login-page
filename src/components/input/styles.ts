import styled from 'styled-components';



export const Input = styled.input`
  flex: 1;
  border: none;
  outline:none;

  &::placeholder {
    color:#BDBDBD;
    font-size: .8rem;
  }
`;

export const label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: .3rem;
  color: #212121;
`;

export const Icon = styled.span`
  margin-right: .6rem;
  color: #BDBDBD;
  font-size: 1.5rem;
  line-height: 50%;

  
  
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0 .5rem;
  border: 1px solid #BDBDBD;
  border-radius: 5px;

  &:focus-within {
    border-color: #2196F3;

    ${Icon} {
      color: #2196F3;
    }
  }
`;