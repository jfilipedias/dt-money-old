import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="Logo do dt money. Imagem de um circulo verde contendo em seu interior o simbolo cifrão e ao lado o nome do web app"
        />

        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

