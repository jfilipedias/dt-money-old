import { Container, Item } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionType } from '../NewTransactionModal';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === TransactionType.Deposit) {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  });

  return (
    <Container>
      <Item>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Ícone de entradas. Uma seta verde apontando para cima." />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(summary.deposit)}
        </strong>
      </Item>

      <Item>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Ícone de saídas. Uma seta vermelha apontando para baixo." />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(summary.withdraw)}
        </strong>
      </Item>

      <Item className='highlighted'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Ícone de total. Um cifrão branco." />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(summary.total)}
        </strong>
      </Item>
    </Container>
  );
};
