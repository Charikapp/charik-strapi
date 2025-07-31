import type { Schema, Struct } from '@strapi/strapi';

export interface AiAgentGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiAgentHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_how_it_works';
  info: {
    displayName: 'how_it_works';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AiAgentSwiper extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_swipers';
  info: {
    displayName: 'swiper';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AiAgentSwiperHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_swiper_how_it_works';
  info: {
    displayName: 'swiper_how_it_works';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AiAgentTop extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slogon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AiAgentWhatAiAgent extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_what_ai_agents';
  info: {
    displayName: 'what_AI_agent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AiAgentWhatAiAgentSwiper extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_what_ai_agent_swipers';
  info: {
    displayName: 'what_ai_agent_swiper';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AiAgentWhyUseAiAgents extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_why_use_ai_agents';
  info: {
    displayName: 'why_use_AI_agents';
  };
  attributes: {
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogArticle extends Struct.ComponentSchema {
  collectionName: 'components_blog_articles';
  info: {
    displayName: 'article';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    keep_reading: Schema.Attribute.String;
    ready_to_build: Schema.Attribute.String;
    share_text: Schema.Attribute.String;
  };
}

export interface BlogGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_blog_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface BlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_blog_grids';
  info: {
    displayName: 'grid';
  };
  attributes: {
    all_topics: Schema.Attribute.String;
    load_more_stories: Schema.Attribute.String;
    search: Schema.Attribute.String;
  };
}

export interface BlogTop extends Struct.ComponentSchema {
  collectionName: 'components_blog_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ChromeExtensionCards extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ChromeExtensionGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ChromeExtensionGridChromeExtension
  extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_grid_chrome_extensions';
  info: {
    displayName: 'grid_chrome_extension';
  };
  attributes: {
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    feature: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ChromeExtensionTools extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_tools';
  info: {
    displayName: 'tools';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ChromeExtensionToolsItems extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_tools_items';
  info: {
    displayName: 'Tools items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ChromeExtensionTop extends Struct.ComponentSchema {
  collectionName: 'components_chrome_extension_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsFormContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_form_contact_uses';
  info: {
    displayName: 'form_contact_us';
  };
  attributes: {
    contact_us_tag: Schema.Attribute.String;
    email: Schema.Attribute.String;
    firstname: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
    message: Schema.Attribute.String;
    submit: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type_your_message: Schema.Attribute.String;
  };
}

export interface ContactUsGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsLocationContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_location_contact_uses';
  info: {
    displayName: 'location_contact_us';
  };
  attributes: {
    location: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsLocationContactUsItems
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_location_contact_us_items';
  info: {
    displayName: 'location_contact_us_items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsService extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsTop extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentCollaboration extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_collaborations';
  info: {
    displayName: 'collaboration';
  };
  attributes: {
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentCollaborationItems extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_collaboration_items';
  info: {
    displayName: 'collaboration items';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_get_starteds';
  info: {
    displayName: 'Get started';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary_button: Schema.Attribute.String;
    primary_button_link: Schema.Attribute.String;
    secondary_button: Schema.Attribute.String;
    secondary_button_link: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_how_it_works';
  info: {
    displayName: 'How it works';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    point1: Schema.Attribute.String;
    point2: Schema.Attribute.String;
    point3: Schema.Attribute.String;
    point4: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    text: Schema.Attribute.String;
    text_bottom: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentTop extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentUseCases extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_use_cases';
  info: {
    displayName: 'Use cases';
    icon: 'bold';
  };
  attributes: {
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentUseCasesItems extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_use_cases_items';
  info: {
    displayName: 'Use cases items';
  };
  attributes: {
    badge: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentWhatSACustomAgent extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_what_s_a_custom_agents';
  info: {
    displayName: 'What s a custom agent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    text_bottom: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CustomAgentWhatSACustomAgentItems
  extends Struct.ComponentSchema {
  collectionName: 'components_custom_agent_what_s_a_custom_agent_items';
  info: {
    displayName: 'What s a custom agent items';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface EmailFinderGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_email_finder_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EmailFinderGridEmailFinder extends Struct.ComponentSchema {
  collectionName: 'components_email_finder_grid_email_finders';
  info: {
    displayName: 'grid_email_finder';
  };
  attributes: {
    card_1_description: Schema.Attribute.Text;
    card_1_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_1_title: Schema.Attribute.String;
    card_2_description: Schema.Attribute.Text;
    card_2_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card_2_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface EmailFinderTop extends Struct.ComponentSchema {
  collectionName: 'components_email_finder_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pricing_button: Schema.Attribute.String;
    pricing_button_link: Schema.Attribute.String;
    start_free: Schema.Attribute.String;
    start_free_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'faq_items';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface FooterAction extends Struct.ComponentSchema {
  collectionName: 'components_footer_actions';
  info: {
    displayName: 'action';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface FooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    section: Schema.Attribute.String;
  };
}

export interface FooterSocials extends Struct.ComponentSchema {
  collectionName: 'components_footer_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface HomeAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_home_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    advantages_tag: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeFeatures extends Struct.ComponentSchema {
  collectionName: 'components_home_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features_tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_home_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHighlights extends Struct.ComponentSchema {
  collectionName: 'components_home_highlights';
  info: {
    displayName: 'highlights';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlights: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_how_it_works';
  info: {
    displayName: 'how_it_works';
  };
  attributes: {
    description: Schema.Attribute.Text;
    How_it_works: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomeSponsors extends Struct.ComponentSchema {
  collectionName: 'components_home_sponsors';
  info: {
    displayName: 'sponsors';
  };
  attributes: {
    description: Schema.Attribute.Text;
    our_sponsors: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeSwiperAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_home_swiper_advantages';
  info: {
    displayName: 'swiper_advantages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeSwiperFeatures extends Struct.ComponentSchema {
  collectionName: 'components_home_swiper_features';
  info: {
    displayName: 'swiper_features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeSwiperHighlights extends Struct.ComponentSchema {
  collectionName: 'components_home_swiper_highlights';
  info: {
    displayName: 'swiper_highlights';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeSwiperHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_swiper_how_it_works';
  info: {
    displayName: 'swiper_how_it_works';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    countries_served: Schema.Attribute.Text;
    fresh_company_records_available: Schema.Attribute.Text;
    hours_freed_up: Schema.Attribute.Text;
    testimonials: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTools extends Struct.ComponentSchema {
  collectionName: 'components_home_tools';
  info: {
    displayName: 'tools';
  };
  attributes: {
    credit_system: Schema.Attribute.String;
    custom_agents: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    hubspot_integration: Schema.Attribute.String;
    title: Schema.Attribute.String;
    user_limits: Schema.Attribute.String;
  };
}

export interface HomeTop extends Struct.ComponentSchema {
  collectionName: 'components_home_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    pricing_button: Schema.Attribute.String;
    start_free: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    trusted_by_companies_and_agencies: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    about_us: Schema.Attribute.String;
    become_a_partner: Schema.Attribute.String;
    blog: Schema.Attribute.String;
    changelog: Schema.Attribute.String;
    company: Schema.Attribute.String;
    contact: Schema.Attribute.String;
    guide: Schema.Attribute.String;
    newsletter: Schema.Attribute.String;
    pricing: Schema.Attribute.String;
    privacy_policy: Schema.Attribute.String;
    product: Schema.Attribute.String;
    resources: Schema.Attribute.String;
    rights: Schema.Attribute.String;
    terms_of_service: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    ai_agents: Schema.Attribute.String;
    pricing: Schema.Attribute.String;
    resources: Schema.Attribute.String;
    sign_in: Schema.Attribute.String;
    start_now: Schema.Attribute.String;
  };
}

export interface NavbarActions extends Struct.ComponentSchema {
  collectionName: 'components_navbar_actions';
  info: {
    displayName: 'actions';
  };
  attributes: {
    connected: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface NavbarLang extends Struct.ComponentSchema {
  collectionName: 'components_navbar_langs';
  info: {
    displayName: 'lang';
  };
  attributes: {
    label: Schema.Attribute.String;
    lang: Schema.Attribute.String;
  };
}

export interface NavbarMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    submenu: Schema.Attribute.JSON;
  };
}

export interface PricingAddOns extends Struct.ComponentSchema {
  collectionName: 'components_pricing_add_ons';
  info: {
    displayName: 'add_ons';
  };
  attributes: {
    addons: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PricingAddOnsItems extends Struct.ComponentSchema {
  collectionName: 'components_pricing_add_ons_items';
  info: {
    displayName: 'add_ons_items';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    price_descrition: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PricingCompare extends Struct.ComponentSchema {
  collectionName: 'components_pricing_compares';
  info: {
    displayName: 'compare';
  };
  attributes: {
    Compare: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PricingFeaturesPlans extends Struct.ComponentSchema {
  collectionName: 'components_pricing_features_plans';
  info: {
    displayName: 'features_plans';
  };
  attributes: {
    enterprise: Schema.Attribute.String;
    feature: Schema.Attribute.String;
    free: Schema.Attribute.String;
    pro: Schema.Attribute.String;
    starter: Schema.Attribute.String;
  };
}

export interface PricingGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_pricing_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PricingPlans extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plans';
  info: {
    displayName: 'plans';
  };
  attributes: {
    benefits: Schema.Attribute.JSON;
    credits: Schema.Attribute.String;
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    level: Schema.Attribute.String;
    monthly: Schema.Attribute.String;
    name: Schema.Attribute.String;
    optional_benefit: Schema.Attribute.String;
    yearly: Schema.Attribute.String;
  };
}

export interface PricingSwicthOffers extends Struct.ComponentSchema {
  collectionName: 'components_pricing_swicth_offers';
  info: {
    displayName: 'swicth_offers';
  };
  attributes: {
    credits_month: Schema.Attribute.String;
    get_started_free: Schema.Attribute.String;
    month: Schema.Attribute.String;
    monthly: Schema.Attribute.String;
    no_card_required: Schema.Attribute.String;
    subscribe_now: Schema.Attribute.String;
    user: Schema.Attribute.String;
    year: Schema.Attribute.String;
    yearly: Schema.Attribute.String;
  };
}

export interface PricingTop extends Struct.ComponentSchema {
  collectionName: 'components_pricing_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    trusted_by_companies_and_agencies: Schema.Attribute.Text;
  };
}

export interface PrivacyPolicyAbout extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    part1: Schema.Attribute.Text;
    part2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyChangesPrivacyPolicy
  extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_changes_privacy_policies';
  info: {
    displayName: 'changes_privacy_policy';
  };
  attributes: {
    last_updated: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyChildrenPrivacy extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_children_privacies';
  info: {
    displayName: 'children_privacy';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyContactUs extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_contact_uses';
  info: {
    displayName: 'contact_us';
  };
  attributes: {
    data_protection_officer: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyCookiesTracking extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_cookies_trackings';
  info: {
    displayName: 'cookies_tracking';
  };
  attributes: {
    analyze_audience_and_improve_user_experience: Schema.Attribute.String;
    ensure_proper_functioning_of_our_website: Schema.Attribute.Text;
    offer_relevant_content: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    text_2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyHowLongKeepData extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_how_long_keep_data';
  info: {
    displayName: 'how_long_keep_data';
  };
  attributes: {
    cookies: Schema.Attribute.String;
    cookies_period: Schema.Attribute.Text;
    crm_data: Schema.Attribute.String;
    crm_data_period: Schema.Attribute.Text;
    customer_account_data: Schema.Attribute.String;
    customer_account_data_period: Schema.Attribute.Text;
    data_type: Schema.Attribute.String;
    marketing_data: Schema.Attribute.String;
    marketing_data_period: Schema.Attribute.String;
    retention_period: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    text_2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyInternationalDataTransfers
  extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_international_data_transfers';
  info: {
    displayName: 'international_data_transfers';
  };
  attributes: {
    data_privacy_framework: Schema.Attribute.String;
    equivalent_mechanisms_recognized_by_the_European_Commission: Schema.Attribute.String;
    standard_contractual_clauses: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicySecurityData extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_security_data';
  info: {
    displayName: 'security_data';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyWhatWeCollect extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_what_we_collects';
  info: {
    displayName: 'what_we_collect';
  };
  attributes: {
    account_information: Schema.Attribute.String;
    account_information_example: Schema.Attribute.Text;
    billing_information: Schema.Attribute.String;
    billing_information_example: Schema.Attribute.Text;
    crm_data: Schema.Attribute.String;
    crm_data_example: Schema.Attribute.Text;
    data_category: Schema.Attribute.String;
    examples: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    usage_data: Schema.Attribute.String;
    usage_data_example: Schema.Attribute.Text;
    website_data: Schema.Attribute.String;
    website_data_example: Schema.Attribute.Text;
  };
}

export interface PrivacyPolicyWhoIsResponsible extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_who_is_responsibles';
  info: {
    displayName: 'who_is_responsible';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyWhoShareData extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_who_share_data';
  info: {
    displayName: 'who_share_data';
  };
  attributes: {
    crm_integrations: Schema.Attribute.String;
    legal_authorities: Schema.Attribute.String;
    service_providers: Schema.Attribute.String;
    text: Schema.Attribute.String;
    text_2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyWhyUseData extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_why_use_data';
  info: {
    displayName: 'why_use_data';
  };
  attributes: {
    comply_with_legal_obligations: Schema.Attribute.String;
    comply_with_legal_obligations_legal: Schema.Attribute.String;
    customer_support_and_communication: Schema.Attribute.String;
    customer_support_and_communication_legal: Schema.Attribute.String;
    improve_and_personalize_our_services: Schema.Attribute.String;
    improve_and_personalize_our_services_legal: Schema.Attribute.String;
    legal_basis: Schema.Attribute.String;
    marketing_communications: Schema.Attribute.String;
    marketing_communications_legal: Schema.Attribute.String;
    protect_our_rights_and_prevent_fraud: Schema.Attribute.String;
    protect_our_rights_and_prevent_fraud_legal: Schema.Attribute.String;
    provide_and_operate_our_services: Schema.Attribute.String;
    provide_and_operate_our_services_legal: Schema.Attribute.String;
    purpose: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PrivacyPolicyYourRights extends Struct.ComponentSchema {
  collectionName: 'components_privacy_policy_your_rights';
  info: {
    displayName: 'your_rights';
  };
  attributes: {
    access_your_data: Schema.Attribute.String;
    request_correction_of_inaccurate_data: Schema.Attribute.Text;
    request_data_portability: Schema.Attribute.Text;
    request_deletion_of_your_data: Schema.Attribute.Text;
    restrict_or_object_to_data_processing: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    text_2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    withdraw_consent_at_any_time: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTrustedCompanies extends Struct.ComponentSchema {
  collectionName: 'components_shared_trusted_companies';
  info: {
    displayName: 'trusted companies';
  };
  attributes: {
    companies: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ai-agent.get-started': AiAgentGetStarted;
      'ai-agent.how-it-works': AiAgentHowItWorks;
      'ai-agent.swiper': AiAgentSwiper;
      'ai-agent.swiper-how-it-works': AiAgentSwiperHowItWorks;
      'ai-agent.top': AiAgentTop;
      'ai-agent.what-ai-agent': AiAgentWhatAiAgent;
      'ai-agent.what-ai-agent-swiper': AiAgentWhatAiAgentSwiper;
      'ai-agent.why-use-ai-agents': AiAgentWhyUseAiAgents;
      'blog.article': BlogArticle;
      'blog.get-started': BlogGetStarted;
      'blog.grid': BlogGrid;
      'blog.top': BlogTop;
      'chrome-extension.cards': ChromeExtensionCards;
      'chrome-extension.get-started': ChromeExtensionGetStarted;
      'chrome-extension.grid-chrome-extension': ChromeExtensionGridChromeExtension;
      'chrome-extension.tools': ChromeExtensionTools;
      'chrome-extension.tools-items': ChromeExtensionToolsItems;
      'chrome-extension.top': ChromeExtensionTop;
      'contact-us.form-contact-us': ContactUsFormContactUs;
      'contact-us.get-started': ContactUsGetStarted;
      'contact-us.location-contact-us': ContactUsLocationContactUs;
      'contact-us.location-contact-us-items': ContactUsLocationContactUsItems;
      'contact-us.service': ContactUsService;
      'contact-us.top': ContactUsTop;
      'custom-agent.collaboration': CustomAgentCollaboration;
      'custom-agent.collaboration-items': CustomAgentCollaborationItems;
      'custom-agent.get-started': CustomAgentGetStarted;
      'custom-agent.how-it-works': CustomAgentHowItWorks;
      'custom-agent.top': CustomAgentTop;
      'custom-agent.use-cases': CustomAgentUseCases;
      'custom-agent.use-cases-items': CustomAgentUseCasesItems;
      'custom-agent.what-s-a-custom-agent': CustomAgentWhatSACustomAgent;
      'custom-agent.what-s-a-custom-agent-items': CustomAgentWhatSACustomAgentItems;
      'email-finder.get-started': EmailFinderGetStarted;
      'email-finder.grid-email-finder': EmailFinderGridEmailFinder;
      'email-finder.top': EmailFinderTop;
      'faq.faq-items': FaqFaqItems;
      'footer.action': FooterAction;
      'footer.menu': FooterMenu;
      'footer.socials': FooterSocials;
      'home.advantages': HomeAdvantages;
      'home.features': HomeFeatures;
      'home.get-started': HomeGetStarted;
      'home.highlights': HomeHighlights;
      'home.how-it-works': HomeHowItWorks;
      'home.sponsors': HomeSponsors;
      'home.swiper-advantages': HomeSwiperAdvantages;
      'home.swiper-features': HomeSwiperFeatures;
      'home.swiper-highlights': HomeSwiperHighlights;
      'home.swiper-how-it-works': HomeSwiperHowItWorks;
      'home.testimonials': HomeTestimonials;
      'home.tools': HomeTools;
      'home.top': HomeTop;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'navbar.actions': NavbarActions;
      'navbar.lang': NavbarLang;
      'navbar.menu': NavbarMenu;
      'pricing.add-ons': PricingAddOns;
      'pricing.add-ons-items': PricingAddOnsItems;
      'pricing.compare': PricingCompare;
      'pricing.features-plans': PricingFeaturesPlans;
      'pricing.get-started': PricingGetStarted;
      'pricing.plans': PricingPlans;
      'pricing.swicth-offers': PricingSwicthOffers;
      'pricing.top': PricingTop;
      'privacy-policy.about': PrivacyPolicyAbout;
      'privacy-policy.changes-privacy-policy': PrivacyPolicyChangesPrivacyPolicy;
      'privacy-policy.children-privacy': PrivacyPolicyChildrenPrivacy;
      'privacy-policy.contact-us': PrivacyPolicyContactUs;
      'privacy-policy.cookies-tracking': PrivacyPolicyCookiesTracking;
      'privacy-policy.how-long-keep-data': PrivacyPolicyHowLongKeepData;
      'privacy-policy.international-data-transfers': PrivacyPolicyInternationalDataTransfers;
      'privacy-policy.security-data': PrivacyPolicySecurityData;
      'privacy-policy.what-we-collect': PrivacyPolicyWhatWeCollect;
      'privacy-policy.who-is-responsible': PrivacyPolicyWhoIsResponsible;
      'privacy-policy.who-share-data': PrivacyPolicyWhoShareData;
      'privacy-policy.why-use-data': PrivacyPolicyWhyUseData;
      'privacy-policy.your-rights': PrivacyPolicyYourRights;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.trusted-companies': SharedTrustedCompanies;
    }
  }
}
