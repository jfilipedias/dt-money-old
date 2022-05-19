import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td>R$12.000,00</td>
            <td>Trabalho</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
