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


    </div>
</header>



<main class="site-main">
<div class="row">
    <div class="cols">
        <div class="col-6">
            <div class="box">
                <?php print render($page['content']); ?>
            </div>
        </div>
    </div>
    
</div>


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

