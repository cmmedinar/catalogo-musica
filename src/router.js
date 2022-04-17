const express = require('express')
const CatalogController = require('./controllers/CatalogController')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const catalogController = new CatalogController()

// Routes
router.get('/', catalogController.renderHomeWithCatalog)
router.get('/about', pageController.renderAbout)

router.get('/catalog/create', catalogController.renderArticleCreationForm)
router.post('/catalog/create', catalogController.insertAndRenderArticle)

router.get('/catalog/:id', catalogController.renderSingleArticle)

router.get('/catalog/:id/update', catalogController.renderArticleUpdateForm)
router.post('/catalog/:id/update', catalogController.updateAndRenderArticle)

router.post('/catalog/:id/delete', catalogController.deleteArticleAndRenderResponse)

router.get('*', pageController.renderNotFound)

module.exports = router
