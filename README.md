# Minhas Finanças

Aplicativo pessoal de controle financeiro em React/Vite, com autenticação e sincronização em nuvem via Supabase.

## Versão atual

**V7.3.2**

Módulos principais:
- painel financeiro mensal e próximos 30 dias;
- recebimentos;
- contas a pagar;
- cartões e faturas;
- dívidas e financiamentos;
- saldos;
- metas;
- calendário financeiro;
- histórico e relatórios;
- perfis financeiros e sincronização em nuvem.

### Atualização visual — V7.3.2
- nova linguagem de ícones vetoriais em toda a navegação;
- hierarquia visual refinada no painel;
- cards e KPIs com menos ruído e melhor leitura;
- ações rápidas mais compactas e consistentes;
- sidebar, campos, tabelas, modais e estados vazios revisados;
- espaçamento e responsividade ajustados para desktop e telas menores.

### Dívidas e financiamentos — V7.3
- cards enxutos com dívida, parcela e próximo vencimento;
- filtros por status, tipo, perfil, vencimento e faixa de parcela;
- ordenação persistente;
- detalhe em Resumo, Parcelas e Amortizações;
- cronograma automático a partir do primeiro vencimento;
- frequências mensal, quinzenal, semanal, bimestral, trimestral, semestral, anual e personalizada;
- pagamento de parcela com valor real e motivo da diferença;
- renegociação de uma parcela ou dela em diante;
- amortização reduzindo prazo ou valor das parcelas no cronograma interno;
- saldo devedor bancário informado manualmente;
- dívidas quitadas e arquivadas ocultas por padrão;
- exclusão definitiva com confirmação.

> O cronograma de dívida é um controle operacional do aplicativo e não substitui o saldo devedor oficial informado pela instituição financeira.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O `src/App.jsx` é montado automaticamente antes do desenvolvimento/build a partir dos arquivos versionados em `src/app.parts/`.
