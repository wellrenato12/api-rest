import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {

  async index(req, res) {
    const result = await SelecaoRepository.findAll()
    res.json(result)
  }

  async show(req, res) {
    const { id } = req.params
    const row = await SelecaoRepository.findById(id)
    res.json(row)
  }

  async store(req, res) {
    const selecao = req.body
    const row = await SelecaoRepository.create(selecao)
    res.json(row)
  }

  async update(req, res) {
    const { id } = req.params
    const selecao = req.body
    const row = await SelecaoRepository.update(selecao, id)
    res.json(row)
  }

  async delete(req, res) {
    const { id } = req.params
    const row = await SelecaoRepository.delete(id)
    res.json(row)
  }

}

export default new SelecaoController()