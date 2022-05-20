import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

enum TransactionType {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  const [
    transactionType,
    setTransactionType
  ] = useState<TransactionType>(TransactionType.Deposit);

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

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className="income"
            onClick={() => setTransactionType(TransactionType.Deposit)}
            isActive={transactionType === TransactionType.Deposit}
            activeColor="green"
          >
            <img src={incomeImg} alt="Ícone de entradas. Uma seta verde apontando para cima." />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setTransactionType(TransactionType.Withdraw)}
            isActive={transactionType === TransactionType.Withdraw}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Ícone de saídas. Uma seta vermelha apontando para baixo." />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
