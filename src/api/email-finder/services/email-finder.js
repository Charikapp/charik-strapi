'use strict';

/**
 * email-finder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-finder.email-finder');
