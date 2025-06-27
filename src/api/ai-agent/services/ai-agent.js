'use strict';

/**
 * ai-agent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai-agent.ai-agent');
