'use strict';

/**
 * chrome-extension service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chrome-extension.chrome-extension');
