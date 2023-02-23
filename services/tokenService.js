const jwt = require('jsonwebtoken');
const config = require('config');

function createToken(data) {
    const token = jwt.sign({ data }, config.get('jwtSecret'), { expiresIn: '5d' });

    return token;
}

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        return decoded.data;
    } catch (err) {
        throw new Error('Invalid token');
    }
};

module.exports = {
    createToken,
    verifyToken,
};
