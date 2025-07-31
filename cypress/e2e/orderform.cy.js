describe('checking homepage', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it('buton yazısı kontrol ediliyor', () => {
    cy.get('.hero-btn').should('contain.text', 'ACIKTIM');

  });
    it('categoryBar kontol', () => {
    cy.get('.category-item').should('contain.text',"YENİ! Kore")
    cy.get('.category-item').should('contain.text', 'Pizza');
    cy.get('.category-item').should('contain.text', 'Burger');
    cy.get('.category-item').should('contain.text',"Kızartmalar")
    cy.get('.category-item').should('contain.text', 'Fast Food');
    cy.get('.category-item').should('contain.text', 'Gazlı İçecek')
  });
});

describe('Footer', () => {
  it('Footer bileşeni kontrolu', () => {
    cy.visit("http://localhost:5173");
    cy.get('footer, .footer-container').within(() => {
      cy.contains('Sıccacık Menüler')
      cy.contains('Instagram')
      cy.get('img[alt="Twitter"]')
      cy.contains('© 2025 Teknolojik Yemekler')
    });
  });


});

describe('Sipariş Formu', () => {
  it('sipariş verme', () => {
    cy.visit('http://localhost:5173');
 cy.get(".hero-btn").should("contain", "ACIKTIM").click();

  cy.visit("http://localhost:5173/siparis");


cy.get('input[type="text"]').type("Senih");


cy.get('input[value="M"]').check({ force: true });


cy.get("select").select("Normal");


cy.get('label').contains('Mısır').click();
cy.get(".order-btn").should("not.be.disabled").click();

  });
});
describe('Sipariş fiyat güncelleme testi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/siparis'); 
  });

  it('Ürün sayısı artınca fiyat doğru güncelleniyor mu?', () => {
    
   cy.visit("http://localhost:5173/siparis");


cy.get('input[type="text"]').type("Senih");

cy.get('label').contains('Mısır').click();
cy.get('input[value="M"]').check({ force: true });
;
    cy.get('.order-summary .red span:last-child')
      .invoke('text')
      .then((priceText1) => {
        const initialPrice = parseFloat(priceText1.replace('₺', ''));

        
        cy.get('.quantity-control button:last-child').click(); 
        cy.wait(500); 

       
        cy.get('.order-summary .red span:last-child')
          .invoke('text')
          .then((priceText2) => {
            const updatedPrice = parseFloat(priceText2.replace('₺', ''));
            expect(updatedPrice).to.be.greaterThan(initialPrice);
          });
      });
  });
});


describe("Form validasyon ve Toastify testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis");
  });

  it("Eksik form gönderildiğinde toast uyarısı verir", () => {
    
    cy.get('input[type="text"]').clear(); 
    
    cy.get("form").submit();

  
    cy.get(".Toastify__toast--error")
      .should("exist")
      .and("contain", "Lütfen tüm zorunlu alanları doldurun!");
  });
});