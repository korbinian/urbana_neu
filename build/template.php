<?php 

function urbana_links__system_main_menu($variables) {
  $menu_name = variable_get('menu_main_links_source', 'main-menu');
  $menu_tree = menu_tree($menu_name);
  return drupal_render($menu_tree);
} 

function urbana_preprocess_node(&$variables) {

  // Get a list of all the regions for this theme
  foreach (system_region_list($GLOBALS['theme']) as $region_key => $region_name) {

    // Get the content for each region and add it to the $region variable
    if ($blocks = block_get_blocks_by_region($region_key)) {
      $variables['region'][$region_key] = $blocks;
    }
    else {
      $variables['region'][$region_key] = array();
    }
  }
}

function urbana_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibility
    $form['search_block_form']['#default_value'] = t(''); // Set a default value for the textfield
    $form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
    $form['actions']['submit']['#attributes']['alt'] = "Search Button"; //add alt tag
    unset($form['actions']['submit']['#value']); // Remove the value attribute from the input tag, since it is not valid when input type = image

    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search.svg');

// Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = '';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == '') {this.value = '';}";
  }
}

?>


