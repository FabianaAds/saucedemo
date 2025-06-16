import { faker } from '@faker-js/faker';

export const generateUser = () => {
  return {
    fullname: faker.person.fullName(),
    lastname: faker.person.lastName(),
    firstname: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    postalcode: faker.location.zipCode()
  };
};
