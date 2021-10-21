
let uuid = require('uuid/v1');
let customers = [];

customers.push(
    {
    id: uuid(),
    firstname: "Max",
    lastname: "Mustermann",
    address: "Musterstr. 12",
    birthday: new Date(1990, 9, 15).getTime()
    },
    {
        id: uuid(),
        firstname: "Klaus",
        lastname: "Müller",
        address: "Hauptstr. 2",
        birthday: new Date(1965, 3, 21).getTime()
    },
    {
        id: uuid(),
        "firstname": "May",
        "lastname": "De Souza",
        "address": "148 Homewood Alley",
        "birthday": 1613902719000
    }, {
    id: uuid(),
    "firstname": "Jeffy",
    "lastname": "Mobius",
    "address": "00475 Fair Oaks Crossing",
    "birthday": 1619492812000
    }, {
        id: uuid(),
        "firstname": "Dalia",
        "lastname": "Todaro",
        "address": "35 Upham Crossing",
        "birthday": 1611726298000
    }, {
        id: uuid(),
        "firstname": "Mitchel",
        "lastname": "Matteuzzi",
        "address": "85826 Lotheville Plaza",
        "birthday": 1627961448000
    }, {
        id: uuid(),
        "firstname": "Brittni",
        "lastname": "Muzzollo",
        "address": "127 Donald Avenue",
        "birthday": 1633779291000
    }
);

const addCustomer = (customer) => {
    const id = uuid();
    let newCustomer = { ...customer, id: id }
    customers.push(newCustomer);
    return newCustomer;
}

const updateCustomer = (customer) => {
    const index = customers.findIndex(element => element.id === customer.id);
    customers[index] = customer;
    return customers[index];
}

const removeCustomer = id => {
    const customerToRemove = customers.find(customer => customer.id === id);
    customers = customers.filter(customer => customer.id !== id);
    return customerToRemove;
}

const getAllCustomers = () => {
    return customers;
}

const getCustomerById = id => {
    return customers.find(customer => customer.id === id);
}

module.exports = {
    addCustomer,
    updateCustomer,
    removeCustomer,
    getAllCustomers,
    getCustomerById
}