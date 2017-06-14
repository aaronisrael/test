const Joi = require(`joi`);

const schema = {

  userId: {
    type: Number,
    required: true,
    validation: Joi.number()
  },
  rating: {
    type: Object,
    required: true,
    validation: Joi.object()
  },
  name: {
    type: String,
    required: true,
    validation: Joi.string()
  },
  photo: {
    type: String,
    required: true,
    validation: Joi.string()
  }
};

module.exports = {schema};
