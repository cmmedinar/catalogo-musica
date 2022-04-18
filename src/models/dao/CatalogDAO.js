class CatalogDAO {
  constructor (dbClient) {
    this.db = dbClient
    this.getAll = this.getAll.bind(this)
    this.getById = this.getById.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll () {
    const response = await this.db.query('SELECT id, artist, album, year_album FROM catalog')
    const rows = response[0]
    return rows
  }

  async getById (id) {
    const response = await this.db.query('SELECT id, artist, album, year_album FROM catalog WHERE id=?', [id])
    const rows = response[0]
    return rows[0]
  }

  async create (catalog) {
    const response = await this.db.query('INSERT INTO catalog (artist, album, year_album) VALUES (?, ?, ?)', [catalog.artist, catalog.album, catalog.year_album])
    const result = response[0]
    return result.insertId
  }

  async update (catalog) {
    const response = await this.db.query('UPDATE catalog SET artist = ?, album = ?, year_album = ? WHERE id = ?', [catalog.artist, catalog.album, catalog.year_album, catalog.id])
    const result = response[0]
    return result
  }

  async delete (id) {
    const response = await this.db.query('DELETE FROM catalog where id = ?', [id])
    const result = response[0]
    return result
  }
}

module.exports = CatalogDAO
