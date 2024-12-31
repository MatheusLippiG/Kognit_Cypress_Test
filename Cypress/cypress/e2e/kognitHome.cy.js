describe('Home Page do Kognit', () => {

  beforeEach(() => {
    cy.visit('https://www.kognit.com.br/');
    cy.wait(1500);
    cy.viewport(1920, 1080);
  })
  it('Ao clicar no botao "Kognit" deve recarregar a home page', () => {   
    cy.wait(1000);
    cy.get('a[href="/"] img[alt="Kognit"]').click();
    cy.title().should('eq', 'Kognit – are you ready to make change?');
  })

  it('Ao clicar nos botoes Atuacao Global, Servicos e Clientes, deve ser direcionado a cada painel correspondente', () => {
    cy.get('#menu-item-1988 > a > .avia-menu-text').click();
    cy.get('.avia-builder-el-8 > .container > .template-page > .post-entry > .entry-content-wrapper > .flex_column > .av_textblock_section > .avia_textblock > p')
    .should('contain', 'Atuação global')
    .should('be.visible');
    cy.wait(1500);
    cy.get('#menu-item-1989 > a > .avia-menu-text').click();
    cy.get('#servicos > .container > .template-page > .post-entry > .entry-content-wrapper > .av-animated-generic > :nth-child(1) > .avia_textblock > p')
    .should('contain', 'Inteligência, Eficiência, Transformação.')
    .should('be.visible');
    cy.wait(1500);
    cy.get('#menu-item-1990 > a > .avia-menu-text').click();
    cy.get('.avia-builder-el-135 > .container > .template-page > .post-entry > .entry-content-wrapper > .av_one_full > .av_textblock_section > .avia_textblock > p > span')
    .should('contain', 'Nossos Clientes')
    .should('be.visible');
  })

  it('Ao clicar no botao CONTATO, deve ser direcionado para a pagina de contato',  () => {
    cy.get('#menu-item-343 > a > .avia-menu-text').click();
    cy.title().should('eq', 'Contato – Kognit');
    cy.get('[style="text-align: center; font-size: 30px; color: #145098; line-height: 1.5;"]').should('contain', 'Entre em contato conosco!');
  })

  it('Ao clicar nas setas de proximo e anterior, na primeira imagem do site, deve mudar o painel para frente e para tras', () => {
    cy.get('.next-slide').eq(0).click();
    cy.wait(1500);
    cy.get('.next-slide').eq(0).click();
    cy.wait(1500);
    cy.get('.prev-slide').eq(0).click();
    cy.wait(1500);
    cy.get('.prev-slide').eq(0).click();
  })

  it('Ao clicar no botao ENTRE EM CONTATO, deve ser direcionado para a pagina de contato', () => {
    cy.get('#av_section_24 > .container > .template-page > .post-entry > .entry-content-wrapper > .flex_column > .avia-button-wrap > .avia-button > .avia_iconbox_title').click();
    cy.title().should('eq', 'Contato – Kognit');
    cy.get('[style="text-align: center; font-size: 30px; color: #145098; line-height: 1.5;"]').should('contain', 'Entre em contato conosco!');
  })

  it('Ao clicar nos botoes HOME, ATUACAO GLOBAL, SERVIOS e CLIENTES no menu do rodape, deve ser direcionado para seu painel correspondente', () => {
    cy.get('.avia-builder-el-214 > .av_textblock_section > .avia_textblock > :nth-child(1) > a > span').click();
    cy.wait(1200);
    cy.get('.avia-builder-el-214 > .av_textblock_section > .avia_textblock > :nth-child(2) > a > span').click();
    cy.get('.avia-builder-el-8 > .container > .template-page > .post-entry > .entry-content-wrapper > .flex_column > .av_textblock_section > .avia_textblock > p')
    .should('contain', 'Atuação global')
    .should('be.visible');
    cy.wait(1200);
    cy.get('.avia-builder-el-214 > .av_textblock_section > .avia_textblock > :nth-child(3) > a > span').click();
    cy.get('#servicos > .container > .template-page > .post-entry > .entry-content-wrapper > .av-animated-generic > :nth-child(1) > .avia_textblock > p')
    .should('contain', 'Inteligência, Eficiência, Transformação.')
    .should('be.visible');
    cy.wait(1200);
    cy.get('.avia-builder-el-214 > .av_textblock_section > .avia_textblock > :nth-child(4) > a > span').click();
    cy.get('.avia-builder-el-135 > .container > .template-page > .post-entry > .entry-content-wrapper > .av_one_full > .av_textblock_section > .avia_textblock > p > span')
    .should('contain', 'Nossos Clientes')
    .should('be.visible');
  })
})