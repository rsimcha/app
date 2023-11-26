export interface Dictionary {
  welcome: string;
  yes: string;
  no: string;
  some: string;
  cancel: string;
  continue: string;

  tabs_wallet: string;
  auth_login: string;
  auth_logout: string;
  auth_register: string;
  auth_to_login: string;
  auth_to_register: string;
  auth_phone_number: string;
  auth_first_name: string;
  auth_last_name: string;
  tabs_market: string;
  tabs_events: string;
  home_lira_shapira_currency_you_have: string;
  home_lira_shapira_currency_shorthand: string;
  dashboard_dashboard_buttons_send: string;
  dashboard_dashboard_buttons_request: string;
  dashboard_dashboard_buttons_scan: string;
  home_transactions_title: string;
  transactions_list_no_activities: string;

  deposit: string;
  deposit_title: string;
  deposit_form_bin_status: string;
  deposit_form_bin_status_full: string;
  deposit_form_bin_status_empty: string;
  deposit_form_bin_status_smell: string;
  deposit_form_dry_matter: string;
  deposit_form_skip: string;
  deposit_form_send: string;
  deposit_form_notes: string;
  deposit_form_amount: string;
  deposit_compost_stand_cafe_shapira: string;
  deposit_compost_stand_masalant: string;
  deposit_compost_stand_hizkiyahu_hamelech: string;
  deposit_compost_stand_kerem_hazeitim: string;
  deposit_compost_stand_park_sonya: string;
  deposit_compost_stand_hakaveret: string;
  deposit_compost_stand_food_forest_park_hahurshot: string;
  deposit_compost_stand_tel_hubez: string;
  deposit_compost_stand_ginat_hahistadrut: string;
  deposit_compost_stand_alexander_zaid: string;
  deposit_compost_stand_shiffer: string;
  deposit_compost_stand_de_modina: string;
  deposit_compost_stand_burma: string;

  compost_report_title: string;
  compost_report_bin_full: string;
  compost_report_bin_smells: string;
  compost_report_missing_dry_matter: string,

  send_search_title: string;
  send_search_searching_for: string;
  send_search_placeholder: string;
  sendamount_how_much: string;
  sendamount_why: string;
  sendamount_continue: string;
  sendamount_back: string;
  send_search_no_results: string;
  send_search_no_results_send_to_number: string;
  sendamount_validate_amount: string;

  month_january: string;
  month_february: string;
  month_march: string;
  month_april: string;
  month_may: string;
  month_june: string;
  month_july: string;
  month_august: string;
  month_september: string;
  month_october: string;
  month_november: string;
  month_december: string;
  month_january_MMM: string;
  month_february_MMM: string;
  month_march_MMM: string;
  month_april_MMM: string;
  month_may_MMM: string;
  month_june_MMM: string;
  month_july_MMM: string;
  month_august_MMM: string;
  month_september_MMM: string;
  month_october_MMM: string;
  month_november_MMM: string;
  month_december_MMM: string;
}

export type DictionaryWord = keyof Dictionary; 
