import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());         
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server Running 🚀');
});


app.listen(PORT, () => {
    console.log(`✅ Server is listening on PORT ${PORT}`);
});
