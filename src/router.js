const express = require('express')
const CatalogController = require('./controllers/CatalogController')
const PageController = require('./controllers/PageController')
const SqlClient = require('./lib/SqlCliente')

const router = express.Router()

// Datrabase Client
const sqlClient = new SqlClient()

// Controllers
const pageController = new PageController()
const catalogController = new CatalogController(sqlClient)

// Routes
router.get('/', catalogController.renderHomeWithCatalog)
router.get('/about', pageController.renderAbout)

router.get('/catalog/create', catalogController.renderCatalogCreationForm)
router.post('/catalog/create', catalogController.insertAndRenderCatalog)

router.get('/catalog/:id', catalogController.renderSingleCatalog)

router.get('/catalog/:id/update', catalogController.renderCatalogUpdateForm)
router.post('/catalog/:id/update', catalogController.updateAndRenderCatalog)

router.post('/catalog/:id/delete', catalogController.deleteCatalogAndRenderResponse)

router.get('*', pageController.renderNotFound)

module.exports = router
