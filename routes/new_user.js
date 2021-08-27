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

	router.get('/new_user', (req, res, next) => {
		client.get('/new_user', (err, request, response, obj) => {
			try {
				res.status(200).render('new_user', {
					title: "Cadastre-se.",
					erro: null
				})
			} catch (error) {
				res.status(400).render('new_user', {
					title: "Cadastre-se.",
					erro: null
				})
			}
		})//client
	})//router

	router.use('/register', function (req, res, next) {
		const { name, email, password } = req.body
		if (!name, !email, !password)
			res.status(400)
				.render('new_user', {
					title: "Mude sua senha",
					erro: "Campos Vazios!"
				})
		else
			next()
	})

	router.post('/register', (req, res, next) => {

		client.post('/register', req.body, async (err, request, response, obj) => {
			try {
				res.status(200)
					.render('new_user', {
						title: "Mude sua senha",
						erro: "Cadastro finalizado com sucesso!"
					})
				// res.status(200).send(user)
			} catch (err) {
				res.status(400)
					.render('new_user', {
						title: "Mude sua senha",
						erro: err
					})
			}
		})//client

	})//router


}