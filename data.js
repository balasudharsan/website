let database = {
    'bala': ['audi', 'jack'],
    'black': ['bmw', 'jackure'],
    'suresh': ['rolce rayce']
};

let userdatabase = {
    'website@gmail.com': '12345'
};



export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, cars, authToken } = req.body;
        // Handle the data as needed (e.g., store it in a database, etc.)
        console.log(name, cars, authToken);
        res.status(200).json({ message: 'Data received successfully' });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

export default async function handler(req, res) {
    try {
        const inputvalue = req.body.inputValue;
        // Assuming you have logic here to fetch data based on inputvalue
        // For demo purposes, just returning a simple response
        res.status(200).json({ database: `Data for ${inputvalue}` });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default async function handler(req, res) {
    try {
        const inputValue = req.body.inputValue;
        // Assuming you have logic here to delete data based on inputValue
        // For demo purposes, just returning a simple response
        res.status(200).json({ message: `Data deleted for ${inputValue}` });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export default async function handler(req, res) {
    try {
        const { name, cars } = req.body;
        // Assuming you have logic here to update data based on name and cars
        // For demo purposes, just returning a simple response
        res.status(200).json({ message: `Data updated for ${name}` });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export default async function handler(req, res) {
    try {
        const { email, password } = req.body;
        // Assuming you have logic here to verify login credentials
        // For demo purposes, just returning a simple response
        if (email === 'example@example.com' && password === 'password') {
            res.status(200).json({ status: true, token: 'yourAuthToken' });
        } else {
            res.status(401).json({ status: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}





