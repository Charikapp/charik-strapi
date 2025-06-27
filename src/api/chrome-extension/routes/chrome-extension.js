'use strict';

/**
 * chrome-extension router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chrome-extension.chrome-extension');
