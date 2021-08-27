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

	router.get('/change_password', (req, res, next) => {
		client.get('/change_password', (err, request, response, obj) => {
			try {
				res.status(200).render('change_password', { 
					title: "Mude sua senha",
					erro: null 
				})
			} catch (err) {
				res.status(400).render('index', { empresa })
			}
		})//client
	})//router

	router.post('/forgot_password', (req, res, next) => {
		client.post('/forgot_password', req.body, async (err, request, response, obj) => {
			try {
				const { email } = req.body
				res.status(200).render('change_password', { 
					title: "Mude sua senha",
					erro: null 
				})
				res.status(200).send({ email })
			} catch (err) {
				res.status(400).render('index', { empresa })
			}
		})//client
	})//router

	router.post('/reset_password', (req, res, next) => {
		client.post('/reset_password', req.body, async (err, request, response, obj) => {
			try {
				const { email, token, password } = req.body
				res.status(200).render('change_password', { 
					title: "Mude sua senha",
					erro: null 
				})
				res.status(200).send({ email, token, password })
			} catch (err) {
				res.status(400).render('change_password', { 
					title: "Mude sua senha",
					erro: err 
				})
			}
		})//client
	})//router

}