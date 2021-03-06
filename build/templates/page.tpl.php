<header class="site-header">
    <div class="row">

        <div class="site-branding">

            <?php if ($logo): ?>
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-logo-link">
                <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="site-logo">
            </a>
            <?php endif; ?>
            
            <?php if ($site_name || $site_slogan): ?>
            <div class="site-title-and-tagline">
                <?php if ($site_name): ?>
                <h1 class="site-title">
                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">
                        <?php print $title; ?> | <?php print $site_name; ?>
                    </a>
                    <?php if ($site_slogan): ?>
                    <div class="site-tagline">
                        <?php print $site_slogan; ?>
                    </div>
                    <?php endif; ?>
                </h1>
                <?php endif; ?>
            </div>
            <?php endif; ?>

        </div>

        <div class="site-contact">
            <?php print render($page['contact']); ?>
        </div>

        <div class="site-search">
            <?php print render($page['search']); ?>
        </div>

        <nav class="site-nav">
            <?php if ($main_menu): ?>
                <?php print theme('links__system_main_menu', array(
                    'links' => $main_menu,
                )); ?>
            <?php endif; ?>
        </nav>

        <aside class="site-sidebar">
            <?php print render($page['sidebar']); ?>

            

        </aside>
    </div>
</header>



<main class="site-main">

<?php print render($page['content']); ?>


<nav class="meta">

        <?php if ($action_links): ?>
    <ul class="action-links">
        <?php print render($action_links); ?>
    </ul>
    <?php endif; ?>

    <?php if ($tabs = render($tabs)): ?>
        <?php print $tabs; ?>
    <?php endif; ?>

</nav>
</main>




<div class="site-sub">
    <div class="row">
        <header class="col-full">
            <div class="box">
                <h2>Anfahrt</h2>
                <p>So finden Sie zu uns:</p>
            </div>
        </header>
    </div>
    <div id="map-canvas"></div>
</div>




<div class="site-subnav">
    <div class="row">
        <?php print render($page['subnav']); ?>
    </div>
</div>




<footer class="site-footer">
    <div class="row">
        <div class="site-footer-1 col-2">
            <?php print render($page['footer-1']); ?>
        </div>
        <div class="site-footer-2 col-2">
            <?php print render($page['footer-2']); ?>
        </div>
        <div class="site-footer-3 col-2">
            <?php print render($page['footer-3']); ?>
        </div>
        <div class="site-footer-contact col-6">
            <?php print render($page['footer-contact']); ?>
        </div>
    </div>
</footer>






















