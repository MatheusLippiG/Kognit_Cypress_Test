# Kognit_Cypress_Test

Projeto criado para testar o site principal de empresas que estejam contratando QAs para o seu time.

Este teste automatizado foi criado para verificar se as funcionalidades do site da empresa KOGNIT estão funcionando normalmente.

URLs testadas:

https://www.kognit.com.br/
https://www.kognit.com.br/contato

Foram realizados testes básicos, clicando nas funcionalidades do menu do site da empresa KOGNIT, utilizando CYPRESS.

Como não possuímos acesso aos requisitos do site para saber o que realmente deveria ser testado, foram realizadas algumas assertividades para garantir que as funções do menu estejam funcionando corretamente.

Ainda, utilizei BDD para escrever os cenarios de testes, tambem no intuito de praticar a tecnica.

Nos testes realizados, foram identificadas três inconsistências no menu do FOOTER da página de contato. Ao clicar nas opções "Atuação Global", "Serviços" e "Clientes", não ocorre o redirecionamento esperado para a página correta devido a um erro na URL. Esses problemas foram reportados nos casos de teste, incluindo a possível correção sugerida.
