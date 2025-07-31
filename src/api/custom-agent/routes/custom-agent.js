'use strict';

/**
 * custom-agent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-agent.custom-agent');
