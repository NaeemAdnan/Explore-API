// const user = {id: 02, name: 'Naeem', job: 'student'};

// console.log(user)


const shop = {
    owner: 'Naeem',
    address: {
        street: '51 , sheikhpara',
        city: 'khulna',
        country: 'BD',
    },
    product: ['laptop', 'mouse', 'mic', 'ram'],
    revenue: 45000,
    isOpen: true,
    isNaN: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)