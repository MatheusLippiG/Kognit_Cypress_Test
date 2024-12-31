Feature: Menu do FOOTER (Rodape) da pagina de contato

Given que estou na pagina de contato
When eu clico no botao HOME, no footer 
Then sou redirecionado para a pagina inicial, com URL https://www.kognit.com.br/

Expected Result: Ser redirecionado para a pagina inicial
Result: Redirecionado para a pagina inicial

Status: Passou

Given que estou na pagina de contato
When eu clico no botao Atuação Global, no footer
Then sou redirecionado para a pagina inicial, com URL https://www.kognit.com.br/#atuacaoglobal

Expected Result: Ser redirecionado para a pagina inicial
Result: Continuou na pagina de contato, e inseriu a URL https://www.kognit.com.br/contato#atuacaoglobal

Status: Nao passou
Causa: Possivel erro no redirecionamento da URL quando deveria ser https://www.kognit.com.br/#atuacaoglobal e nao ter o CONTATO na frente


Given que estou na pagina de contato
When eu clico no botao Serviços, no footer 
Then sou redirecionado para a pagina inicial, com URL https://www.kognit.com.br/#servicos

Expected Result: Ser redirecionado para a pagina inicial
Result: Continuou na pagina de contato, e inseriu a URL https://www.kognit.com.br/contato#servicos

Status: Nao passou
Causa: Possivel erro no redirecionamento da URL, quando deveria ser https://www.kognit.com.br/#servicos e nao ter o CONTATO na frente 

Given que estou na pagina de contato
When eu clico no botao Clientes, no footer 
Then sou redirecionado para a pagina inicial, com URL https://www.kognit.com.br/#clientes

Expected Result: Ser redirecionado para a pagina inicial
Result: Continuou na pagina de contato, e inseriu a URL https://www.kognit.com.br/contato#clientes

Status: Nao passou
Causa: Possivel erro no redirecionamento da URL, quando deveria ser https://www.kognit.com.br/#clientes e nao ter o CONTATO na frente


Given que estou na pagina de contato
When eu clico no botao Contato, no footer
Then sou redirecionado para a pagina de contato, com URL https://www.kognit.com.br/contato

Expected Result: Ser redirecionado para a pagina de contato
Result: Redirecionado para a pagina de contato

Status: Passou