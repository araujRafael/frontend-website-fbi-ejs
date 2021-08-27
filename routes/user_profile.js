//Baixar o Restify
const restify = require('restify-clients');
// const assert = require('assert')

// Creates a JSON client
const client = restify.createJsonClient({
  url: 'http://localhost:1138'
});

const empresa = "FBI"
/* GET users listing. */
module.exports = router => {
  
  router.use('/user_profile',function isValidFilds(req, res, next){
    const {email,password} = req.body

    if(!email,!password)
      res.status(400).render('index',{
        empresa,
        erro:"Preencha os campos acima!"
      })
    if(email,password)
      next()

  })
  
  router.post('/user_profile',function(req, res, next) {
    
    client.post('/authenticate',req.body, function(err, request, response, obj) {

      try{
        const {name} = obj.user
        res.status(200).render('user_profile',{name})

      }catch(error){
        res.status(400).render('index',{
          empresa,
          erro:"Acesso negado! Autenticação invalida."
        })
        
      }

    });

  })//router

}
