/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    ID_U: {
      type: 'integer',
       unique: true,
        autoIncrement: true,
        notNull: true
    },
    Nombre: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },
    Apellido: {
      type: 'string',
      size: 45,
      notNull: true
    },
    Fecha_de_nacimiento: {
      type: 'date',
      notNull:true
    },
    Fecha_de_consulta: {
      type: 'date',
      notNull:true
    },
    Edad: {
      type: 'integer',
      notNull:true
    },
    Indentificador: {
      type: 'boolean'
    },
    Correo: {
      type: 'email',
      email:true,
      unique: true,
      notNull:true
    },
    Alias: {
      type: 'string',
      size:45,
      unique: true
    },
      clave: {
      type: 'string',
      size:20,
      required: true
    },
        pet: {
      collection:'Usuario_Natural',
      via: 'owner'
    }
  } 
};