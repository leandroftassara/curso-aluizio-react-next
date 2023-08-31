import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1; /* Ocupa todo o espaço disponível */
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border-right: 0; /* Remove a borda direita */

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s; /* Transição de cor de fundo */

    &:hover {
      background: ${shade(0.2, '#04d361')}; /* Escurece a cor em 20% */
    }
  }
`;
