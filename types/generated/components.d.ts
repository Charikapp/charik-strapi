import type { Schema, Struct } from '@strapi/strapi';

export interface AiAgentGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
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
    How_it_works: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AiAgentSwiperHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_swiper_how_it_works';
  info: {
    displayName: 'swiper_how_it_works';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    The_Smartest_Way_to_Generate_Leads: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Trusted_by_companies_and_agencies: Schema.Attribute.Text;
  };
}

export interface AiAgentWhatAiAgent extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_what_ai_agents';
  info: {
    displayName: 'what_AI_agent';
  };
  attributes: {
    description: Schema.Attribute.Text;
    swiper1: Schema.Attribute.Text;
    swiper2: Schema.Attribute.Text;
    swiper3: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AiAgentWhyUseAiAgents extends Struct.ComponentSchema {
  collectionName: 'components_ai_agent_why_use_ai_agents';
  info: {
    displayName: 'why_use_AI_agents';
  };
  attributes: {
    swiper1: Schema.Attribute.Text;
    swiper2: Schema.Attribute.Text;
    swiper3: Schema.Attribute.Text;
    swiper4: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    Why_Use_AI_Agents: Schema.Attribute.String;
  };
}

export interface ContactUsFormContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_form_contact_uses';
  info: {
    displayName: 'form_contact_us';
  };
  attributes: {
    Contact_us: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Firstname: Schema.Attribute.String;
    Lastname: Schema.Attribute.String;
    Message: Schema.Attribute.String;
    Submit: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Type_your_message: Schema.Attribute.String;
  };
}

export interface ContactUsGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContactUsLocationContactUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_location_contact_uses';
  info: {
    displayName: 'location_contact_us';
  };
  attributes: {
    Location: Schema.Attribute.String;
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
    title: Schema.Attribute.String;
  };
}

export interface ContactUsService extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_services';
  info: {
    displayName: 'service';
  };
  attributes: {
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

export interface HomeAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_home_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    Advantages: Schema.Attribute.String;
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
    Features: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_home_get_starteds';
  info: {
    displayName: 'get_started';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
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
    Highlights: Schema.Attribute.String;
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
    Testimonials: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTools extends Struct.ComponentSchema {
  collectionName: 'components_home_tools';
  info: {
    displayName: 'tools';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Flexible_credit_system: Schema.Attribute.String;
    Native_HubSpot_integration: Schema.Attribute.String;
    No_user_limits: Schema.Attribute.String;
    On_demand_Custom_Agents: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTop extends Struct.ComponentSchema {
  collectionName: 'components_home_tops';
  info: {
    displayName: 'top';
  };
  attributes: {
    description: Schema.Attribute.Text;
    See_pricing: Schema.Attribute.String;
    Start_free: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    Trusted_by_companies_and_agencies: Schema.Attribute.Text;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    About_us: Schema.Attribute.String;
    Become_a_Partner: Schema.Attribute.String;
    Blog: Schema.Attribute.String;
    Changelog: Schema.Attribute.String;
    Company: Schema.Attribute.String;
    Contact: Schema.Attribute.String;
    Guide: Schema.Attribute.String;
    Newsletter: Schema.Attribute.String;
    Pricing: Schema.Attribute.String;
    Privacy_Policy: Schema.Attribute.String;
    Product: Schema.Attribute.String;
    Resources: Schema.Attribute.String;
    Rights: Schema.Attribute.String;
    Terms_of_Service: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    AI_Agents: Schema.Attribute.String;
    Pricing: Schema.Attribute.String;
    Resources: Schema.Attribute.String;
    Sign_in: Schema.Attribute.String;
    Start_now: Schema.Attribute.String;
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
    Last_updated: Schema.Attribute.String;
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
    Data_Protection_Officer: Schema.Attribute.Text;
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
    Analyze_audience_and_improve_user_experience: Schema.Attribute.String;
    Ensure_proper_functioning_of_our_website: Schema.Attribute.Text;
    Offer_relevant_content: Schema.Attribute.String;
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
    Cookies: Schema.Attribute.String;
    Cookies_period: Schema.Attribute.Text;
    CRM_data: Schema.Attribute.String;
    CRM_data_period: Schema.Attribute.Text;
    Customer_account_data: Schema.Attribute.String;
    Customer_account_data_period: Schema.Attribute.Text;
    Data_Type: Schema.Attribute.String;
    Marketing_data: Schema.Attribute.String;
    Marketing_data_period: Schema.Attribute.String;
    Retention_Period: Schema.Attribute.String;
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
    Data_Privacy_Framework: Schema.Attribute.String;
    Equivalent_mechanisms_recognized_by_the_European_Commission: Schema.Attribute.String;
    Standard_Contractual_Clauses: Schema.Attribute.String;
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
    Account_Information: Schema.Attribute.String;
    Account_Information_example: Schema.Attribute.Text;
    Billing_Information: Schema.Attribute.String;
    Billing_Information_example: Schema.Attribute.Text;
    CRM_Data: Schema.Attribute.String;
    CRM_Data_example: Schema.Attribute.Text;
    Data_Category: Schema.Attribute.String;
    Examples: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    Usage_Data: Schema.Attribute.String;
    Usage_Data_example: Schema.Attribute.Text;
    Website_Data: Schema.Attribute.String;
    Website_Data_example: Schema.Attribute.Text;
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
    CRM_integrations: Schema.Attribute.String;
    Legal_authorities: Schema.Attribute.String;
    Service_providers: Schema.Attribute.String;
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
    Comply_with_legal_obligations: Schema.Attribute.String;
    Comply_with_legal_obligations_legal: Schema.Attribute.String;
    Customer_support_and_communication: Schema.Attribute.String;
    Customer_support_and_communication_legal: Schema.Attribute.String;
    Improve_and_personalize_our_services: Schema.Attribute.String;
    Improve_and_personalize_our_services_legal: Schema.Attribute.String;
    Legal_Basis: Schema.Attribute.String;
    Marketing_communications: Schema.Attribute.String;
    Marketing_communications_legal: Schema.Attribute.String;
    Protect_our_rights_and_prevent_fraud: Schema.Attribute.String;
    Protect_our_rights_and_prevent_fraud_legal: Schema.Attribute.String;
    Provide_and_operate_our_services: Schema.Attribute.String;
    Provide_and_operate_our_services_legal: Schema.Attribute.String;
    Purpose: Schema.Attribute.String;
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
    Access_your_data: Schema.Attribute.String;
    Request_correction_of_inaccurate_data: Schema.Attribute.Text;
    Request_data_portability: Schema.Attribute.Text;
    Request_deletion_of_your_data: Schema.Attribute.Text;
    Restrict_or_object_to_data_processing: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    text_2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    Withdraw_consent_at_any_time: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ai-agent.get-started': AiAgentGetStarted;
      'ai-agent.how-it-works': AiAgentHowItWorks;
      'ai-agent.swiper-how-it-works': AiAgentSwiperHowItWorks;
      'ai-agent.top': AiAgentTop;
      'ai-agent.what-ai-agent': AiAgentWhatAiAgent;
      'ai-agent.why-use-ai-agents': AiAgentWhyUseAiAgents;
      'contact-us.form-contact-us': ContactUsFormContactUs;
      'contact-us.get-started': ContactUsGetStarted;
      'contact-us.location-contact-us': ContactUsLocationContactUs;
      'contact-us.location-contact-us-items': ContactUsLocationContactUsItems;
      'contact-us.service': ContactUsService;
      'contact-us.top': ContactUsTop;
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
    }
  }
}
