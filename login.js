const express = require('express'); 
const router = express.Router(); 
const db = require('../../db'); 
const { generateToken } = require('./auth'); 
 
router.post('/', (req, res) => { 
  const { id, password } = req.body; 


  const query = 'SELECT * FROM usuarios WHERE id = ? AND password = ?'; 
  db.query(query, [id, password], (err, results) => { 
    if (err) return res.status(500).json({ error: 'Error del servidor' }); 
    if (results.length === 0) return res.status(401).json({ error: 'Credenciales incorrectas' }); 
 
    const token = generateToken({ id }); 
    res.json({ token }); 
  }); 
}); 
 
module.exports = router; 