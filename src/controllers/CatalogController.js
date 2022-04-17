class CatalogController {
  renderHomeWithCatalog (req, res) {
    const mockCatalog = [
      { id: 1, artist: 'AC/DC', album: 'BACK IN BLACK', year: '1970' },
      { id: 2, artist: 'NIRVANA', album: 'NEVERMIND', year: '1990' }
    ]
    res.render('home', {
      articles: mockCatalog
    })
  }

  renderSingleCatalog (req, res) {
    const id = req.params.id

    // TODO: Esta información debería venir de la base de datos

    res.render('catalog', {
      id,
      artist: 'Este es el artista',
      album: 'Este es el album',
      year: 'Este es el año de publicacion'
    })
  }

  renderCatalogCreationForm (req, res) {
    res.render('catalog-form')
  }

  renderCatalogUpdateForm (req, res) {
    const id = req.params.id

    // TODO: Esta información debería venir de la base de datos
    res.render('catalog-form', {
      id,
      artis: 'Nombre del artista a editar',
      album: 'Nombre del album a editar',
      year: 'Año de publicacion a editar'
    })
  }

  insertAndRenderCatalog (req, res) {
    const artist = req.body.artist
    const album = req.body.album
    const year = req.body.year

    console.log('Aquí se debería insertar el contenido en base de datos', { artist, album, year })

    // TODO: Este ID debería venir como respuesta de la inserción en la base de datos
    const id = 1

    res.redirect(`/catalog/${id}`)
  }

  updateAndRenderCatalog (req, res) {
    const id = req.params.id
    const artist = req.body.artist
    const album = req.body.album
    const year = req.body.year

    console.log('Aquí se debería actualizar el contenido en base de datos', { id, artist, album, year })

    res.redirect(`/catalog/${id}`)
  }

  deleteCatalogAndRenderResponse (req, res) {
    const id = req.params.id

    console.log('Esto debería eliminar', { id })

    // TODO: El título debe venir de la base de datos
    res.render('catalog-deleted', {
      id,
      artist: 'Artista '
    })
  }
}

module.exports = CatalogController
