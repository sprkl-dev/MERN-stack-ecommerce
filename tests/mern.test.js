const axios = require('axios');

beforeAll(async () => {
    // console.log("Polling server at 8080")
    for (let i=0; i < 10; i++) {
    // console.log("Polling server at 8080")
        try {
            await axios.get('http://localhost:8080');
            return ; 
        } catch(ex) {
            if (ex.response && ex.response.status == 404) { 
                // console.log("Backend ready")
                return ;
            }
            // console.log("Sleeping ")
            await new Promise(r => setTimeout(r, 2000));
        }
    }
}, 20000);

beforeEach(async () => {
    await sleep(900);
});

async function sleep(millis) {
    return new Promise((resolve) => { setTimeout(resolve, millis); } );
}

test('TestGetProducts', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
});

test('TestProducts', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
    for(const prod of products) {
        await sleep(500);
        await axios.get('http://localhost:8080/api/products/' + prod._id); 
    }
});

test('TestProducts1', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
    for(const prod of products) {
        await sleep(200);
        axios.get('http://localhost:8080/api/products/' + prod._id + "a"); 
    }
});
test('TestProducts2', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
    for(const prod of products) {
        await sleep(200);
        await axios.get('http://localhost:8080/api/products/' + prod._id); 
    }
});
test('TestProducts3', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
    for(const prod of products) {
        await sleep(200);
        await axios.get('http://localhost:8080/api/products/' + prod._id); 
    }
});
test('TestProducts1a', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
    for(const prod of products) {
        await sleep(200);
        axios.get('http://localhost:8080/api/products/' + prod._id + "a"); 
    }
});
let config = {
    headers: {
    // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
        Authorization: null 
    }
};

const userDetails = {
    name: 'Erez',
    email: 'erez@sprkl.dev',
    password: '1234',
    _id: null
};

test('ClearUsers', async () => {
    const res = await axios.get('http://localhost:8080/api/users/seed');
});

test('RegisterUser', async () => {
    const res = await axios.post('http://localhost:8080/api/users/register', userDetails, config );
    userDetails.token = res.data.token;
});

test('Signin', async () => {
    const res = await axios.post('http://localhost:8080/api/users/signin', userDetails, config );
  
    config.headers.Authorization = `Bearer ${res.data.token}`;
    userDetails._id = res.data._id;
});

test('TestMine', async () => {
    //console.log("EDEBUG using token" + config.headers.Authorization)
    const res = await axios.get('http://localhost:8080/api/orders/mine', config);
});

test('TestPaypal', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
});

test('TestMastercard', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
});

test('TestMetrics', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
});

test('GetUsers', async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    const products = res.data;
});
