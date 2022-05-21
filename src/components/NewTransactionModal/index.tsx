import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { TransactionContext } from '../../TransactionContext';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export enum TransactionType {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<TransactionType>(TransactionType.Deposit);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    resetModalState();
    onRequestClose();
  }

  function resetModalState() {
    setTitle('');
    setAmount(0);
    setType(TransactionType.Deposit);
    setCategory('');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Ícone de Fechar. X na cor cinza" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className="income"
            onClick={() => setType(TransactionType.Deposit)}
            isActive={type === TransactionType.Deposit}
            activeColor="green"
          >
            <img src={incomeImg} alt="Ícone de entradas. Uma seta verde apontando para cima." />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType(TransactionType.Withdraw)}
            isActive={type === TransactionType.Withdraw}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Ícone de saídas. Uma seta vermelha apontando para baixo." />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
