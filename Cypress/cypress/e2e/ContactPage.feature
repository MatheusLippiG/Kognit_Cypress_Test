Feature: Menu do FOOTER (Rodapé) da página de contato
Scenario 1: Botão HOME no footer
Given que estou na página de contato
When eu clico no botão "HOME", no footer
Then sou redirecionado para a página inicial, com URL https://www.kognit.com.br/

Expected Result: Ser redirecionado para a página inicial
Result: Redirecionado para a página inicial

Status: Passou

Scenario 2: Botão Atuação Global no footer
Given que estou na página de contato
When eu clico no botão "Atuação Global", no footer
Then sou redirecionado para a página inicial, com URL https://www.kognit.com.br/#atuacaoglobal

Expected Result: Ser redirecionado para a página inicial
Result: Continuou na página de contato e inseriu a URL https://www.kognit.com.br/contato#atuacaoglobal

Status: Não passou
Causa: Possível erro no redirecionamento da URL, quando deveria ser https://www.kognit.com.br/#atuacaoglobal e não incluir "CONTATO" no caminho.

Scenario 3: Botão Serviços no footer
Given que estou na página de contato
When eu clico no botão "Serviços", no footer
Then sou redirecionado para a página inicial, com URL https://www.kognit.com.br/#servicos

Expected Result: Ser redirecionado para a página inicial
Result: Continuou na página de contato e inseriu a URL https://www.kognit.com.br/contato#servicos

Status: Não passou
Causa: Possível erro no redirecionamento da URL, quando deveria ser https://www.kognit.com.br/#servicos e não incluir "CONTATO" no caminho.

Scenario 4: Botão Clientes no footer
Given que estou na página de contato
When eu clico no botão "Clientes", no footer
Then sou redirecionado para a página inicial, com URL https://www.kognit.com.br/#clientes

Expected Result: Ser redirecionado para a página inicial
Result: Continuou na página de contato e inseriu a URL https://www.kognit.com.br/contato#clientes

Status: Não passou
Causa: Possível erro no redirecionamento da URL, quando deveria ser https://www.kognit.com.br/#clientes e não incluir "CONTATO" no caminho.

Scenario 5: Botão Contato no footer
Given que estou na página de contato
When eu clico no botão "Contato", no footer
Then sou redirecionado para a página de contato, com URL https://www.kognit.com.br/contato

Expected Result: Ser redirecionado para a página de contato
Result: Redirecionado para a página de contato

Status: Passou
