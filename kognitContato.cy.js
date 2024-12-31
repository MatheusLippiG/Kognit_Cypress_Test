describe('Pagina contato da Kognit', () => {

  beforeEach(() => {
    cy.visit('https://www.kognit.com.br/contato');
    cy.title().should('eq', 'Contato – Kognit');
    cy.viewport(1920, 1080);
  })

  it('Ao clicar no botao HOME, deve levar para a pagina inicial', () => {
    cy.get('[style="color: #ffffff; line-height: 1.2; margin-top: 0;"] > a > span').click();
    cy.title().should('eq', 'Kognit – are you ready to make change?');
  })

  it('Ao clicar no botao ATUACAO GLOBAL, deve levar para a pagina inicial, na area da Atuacao Global', () => {
    cy.get('.avia-builder-el-19 > .av_textblock_section > .avia_textblock > :nth-child(2) > a > span').click();
    cy.url().should('eq', 'https://www.kognit.com.br/#atuacaoglobal');
    cy.get('.avia-builder-el-8 > .container > .template-page > .post-entry > .entry-content-wrapper > .flex_column > .av_textblock_section > .avia_textblock > p')
    .should('contain', 'Atuação global')
    .should('be.visible');
  })
  it('Ao clicar no botao SERVICOS, deve levar para a pagina inicial, na area de SERVICOS', () => {
    cy.get('.avia-builder-el-19 > .av_textblock_section > .avia_textblock > :nth-child(3) > a > span').click();
    cy.url().should('eq', 'https://www.kognit.com.br/#servicos');
    cy.get('#servicos > .container > .template-page > .post-entry > .entry-content-wrapper > .av-animated-generic > :nth-child(1) > .avia_textblock > p')
    .should('contain', 'Inteligência, Eficiência, Transformação.')
    .should('be.visible');
  })
  it('Ao clicar no botao CLIENTES, deve levar para a pagina inicial, para a area de dos clientes', () => {
    cy.url().should('eq', 'https://www.kognit.com.br/#clientes');
    cy.get('.avia-builder-el-19 > .av_textblock_section > .avia_textblock > :nth-child(4) > a > span').click();
    cy.get('.avia-builder-el-135 > .container > .template-page > .post-entry > .entry-content-wrapper > .av_one_full > .av_textblock_section > .avia_textblock > p > span')
    .should('contain', 'Nossos Clientes')
    .should('be.visible');
  })
  it('Ao clicar no botao CONTATO, deve redirecionar para a pagina de contato', () => {
    cy.get('.avia-builder-el-19 > .av_textblock_section > .avia_textblock > :nth-child(5) > a > span').click();
    cy.title().should('eq', 'Contato – Kognit');
  })




})