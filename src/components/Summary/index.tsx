import { Container, Item } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <Item>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de entradas. Uma seta verde apontando para cima." />
        </header>
        <strong>R$1000,00</strong>
      </Item>

      <Item>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de saídas. Uma seta vermelha apontando para baixo." />
        </header>
        <strong>R$500,00</strong>
      </Item>

      <Item className='highlighted'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone de total. Um cifrão branco." />
        </header>
        <strong>R$500,00</strong>
      </Item>
    </Container>
  );
};
