<!doctype html>
<html class="no-js" lang="<?php print $language->language; ?>">
    <head profile="<?php print $grddl_profile; ?>">
        <?php print $head; ?>
        <title><?php print $head_title; ?></title>
        <meta name="viewport" content="width=device-width">
        <?php print $styles; ?>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
        <script> WebFont.load({ google: { families: ['Montserrat:bold, normal'] },  timeout: 1000 });</script>
        <?php print $scripts; ?>
    </head>
    <body class="<?php print $classes; ?>" <?php print $attributes;?>>
        <?php print $page_top; ?>
        <?php print $page; ?>
        <?php print $page_bottom; ?>
    </body>
</html>
