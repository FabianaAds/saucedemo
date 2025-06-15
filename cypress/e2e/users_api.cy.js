describe('API Test - Users', () => {
  it('Should get a list of users', () => {
    cy.request('https://reqres.in/api/users?page=2')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
  });
});
