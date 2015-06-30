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

?>