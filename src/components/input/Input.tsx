import { InputHTMLAttributes, ReactNode, useId } from 'react';
import * as S from './styles'

type InputProps = {
  label?: string;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label = '',
  name = '',
  type = 'text',
  icon,
  ...rest
}: InputProps) => {
  const labelId = useId()

  return (
    <>
      {label && <S.label htmlFor={labelId}>{ label }</S.label>}
      
      <S.Container>
        {icon && <S.Icon>{icon}</S.Icon>}
        <S.Input id={labelId} name={name} type={type} {...rest} />
      </S.Container>
    </>
  )
}