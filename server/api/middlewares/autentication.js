const jwt = require('jsonwebtoken');

//Verificar Token
const verificaToken = (req, res, next) => {

  let token = req.get('Authorization');

  //Eliminar 'Bearer' del token
  if (token.startsWith('Bearer ')) token = token.slice(7, token.length);

  //Comprobar que el token es valido
  if (token) {
    jwt.verify(token, process.env.SEED , (error, decoded) => {

      if (error) res.status(401).json({
        ok: false,
        message: 'Token no válido.'
      }); 

      req.user = decoded.user;
      next(); 

    });
  }
}

module.exports = { verificaToken }
