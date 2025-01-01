# Kognit_Cypress_Test

Teste para verificar se as funcionalidades dos menus do site da empresa KOGNIT estão funcionando corretamente, bem como uso de BDD para os casos de teste.

URLs testadas: [Link 1 - Home Page](https://www.kognit.com.br/) e [Link 2 - Contact Page](https://www.kognit.com.br/contato)






### Observações:

Como não é fornecido as informações dos requisitos do site para saber o que realmente deveria ser testado, foram realizadas algumas assertividades para garantir que as funções do menu estejam funcionando corretamente.

Nos testes realizados, foram identificadas três inconsistências no menu do FOOTER da página de contato. Ao clicar nas opções "Atuação Global", "Serviços" e "Clientes", não ocorre o redirecionamento esperado para a página correta devido a um erro na URL. Esses problemas foram reportados nos casos de teste, incluindo a possível correção sugerida.

Os elementos que apresentaram erro puderam ser localizados utilizando o comando CONTAINS do Cypress. Por ex: cy.contains('span', 'Serviços').click();
Porém, considerando que o clique não está funcionando, não faz sentido selecionar um elemento que está oculto, já que o cliente não consegue interagir com ele.
