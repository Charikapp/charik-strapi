'use strict';

/**
 * chrome-extension controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chrome-extension.chrome-extension');
