/**
 * Categoria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_categoria: {
    type: 'integer',
    unique: true,
    autoIncrement: true
    },
    Nombre: {
      type: 'string',
      size:45,
      required: true
    }
  }
};

