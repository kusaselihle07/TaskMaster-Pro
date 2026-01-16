const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token, access denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // replace with a secure env secret
        req.user = decoded; // { id, name }
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token invalid' });
    }
};

module.exports = protect;
