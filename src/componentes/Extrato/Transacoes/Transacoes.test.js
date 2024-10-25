import { render, screen } from "@testing-library/react";
import Transacoes from './index';
import estilos from '../Extrato.module.css';

test('Deve renderizar o mesmo componente com props atualizados', () => {
  const transacao = {
    transacao: 'Depósito',
    valor: 100,
  };

  const { rerender } = render(<Transacoes estilos={estilos} transacao={transacao} />);

  const tipoTransacao = screen.getByTestId('tipoTransacao');
  expect(tipoTransacao).toHaveTextContent('Depósito');

  const valorTransacao = screen.getByTestId('valorTransacao');
  expect(valorTransacao).toHaveTextContent('R$ 100');
  
  const novaTransacao = {
    transacao: 'Transferência',
    valor: 50,
  };

  rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);
  
  const novoTipoTransacao = screen.getByTestId('tipoTransacao');
  expect(novoTipoTransacao).toHaveTextContent('Transferência');

  const novoValorTransacao = screen.getByTestId('valorTransacao');
  expect(novoValorTransacao).toHaveTextContent('- R$ 50');
});