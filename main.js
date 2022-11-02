const db = {
    methods: {
        find: (id) => {
            return db.items.find(item => item.id === id)
        },
            
        remove: (items) => {
            items.forEach(element => {
                const product = db.methods.find(item.id);
                product.qty = product.qty - item.qty;
            });


            console.log(db);
        },
    },
    items: [
        {
          id: 0,
          title: 'Apple Watch Serie 7',
          price: 7000,
          qty: 10,
        },
        {
            id: 1,
            title: 'Samsung Galaxy Watch4',
            price: 5500,
            qty: 10,
        },
        {
            id: 2,
            title: 'Xioami Band Mi3',
            price: 2850,
            qty: 10,
        },
        
    ] 
}

const shoppingCart = {
    items: [],
    methods: {
        add: (id, qty) => {},
        remove: (id, qty) => {},
        count: () => {},
        get: (id) => {},
        getTotal: () => {},
        hasInventory: (id, qty) => {},
        purchase: () => {}
    }
}