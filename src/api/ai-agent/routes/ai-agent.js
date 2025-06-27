'use strict';

/**
 * ai-agent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ai-agent.ai-agent');
