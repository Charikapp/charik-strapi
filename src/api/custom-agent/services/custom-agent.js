'use strict';

/**
 * custom-agent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-agent.custom-agent');
