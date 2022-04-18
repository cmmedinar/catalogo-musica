const CatalogDAO = require('../models/dao/CatalogDAO')
class CatalogController {
  constructor (db) {
    this.catalogDao = new CatalogDAO(db)
    this.renderHomeWithCatalog = this.renderHomeWithCatalog.bind(this)
    this.renderSingleCatalog = this.renderSingleCatalog.bind(this)
    this.renderCatalogCreationForm = this.renderCatalogCreationForm.bind(this)
    this.renderCatalogUpdateForm = this.renderCatalogUpdateForm.bind(this)
    this.insertAndRenderCatalog = this.insertAndRenderCatalog.bind(this)
    this.updateAndRenderCatalog = this.updateAndRenderCatalog.bind(this)
    this.deleteCatalogAndRenderResponse = this.deleteCatalogAndRenderResponse.bind(this)
  }

  async renderHomeWithCatalog (req, res) {
    const catalog = await this.catalogDao.getAll()
    res.render('home', {
      catalog
    })
  }

  async renderSingleCatalog (req, res) {
    const id = req.params.id

    const catalog = await this.catalogDao.getById(id)

    res.render('catalog', {
      id,
      artist: catalog.artist,
      album: catalog.album,
      year_album: catalog.year_album
    })
  }

  renderCatalogCreationForm (req, res) {
    res.render('catalog-form')
  }

  async renderCatalogUpdateForm (req, res) {
    const id = req.params.id

    const catalog = await this.catalogDao.getById(id)

    res.render('catalog-form', {
      id,
      artist: catalog.artist,
      album: catalog.album,
      year_album: catalog.year_album
    })
  }

  async insertAndRenderCatalog (req, res) {
    const artist = req.body.artist
    const album = req.body.album
    // eslint-disable-next-line camelcase
    const year_album = req.body.year_album
    // eslint-disable-next-line camelcase
    const catalog = { artist, album, year_album }
    // eslint-disable-next-line camelcase
    // eslint-disable-next-line camelcase
    const id = await this.catalogDao.create(catalog)
    res.redirect(`/catalog/${id}`)
  }

  async updateAndRenderCatalog (req, res) {
    const id = req.params.id
    const artist = req.body.artist
    const album = req.body.album
    // eslint-disable-next-line camelcase
    const year_album = req.body.year_album

    // eslint-disable-next-line camelcase
    const catalog = { artist, album, year_album, id }
    await this.catalogDao.update(catalog)

    res.redirect(`/catalog/${id}`)
  }

  async deleteCatalogAndRenderResponse (req, res) {
    const id = req.params.id
    const catalog = await this.catalogDao.getById(id)
    await this.catalogDao.delete(id)

    res.render('catalog-deleted', {
      id,
      artist: catalog.artist,
      album: catalog.album
    })
  }
}

module.exports = CatalogController
