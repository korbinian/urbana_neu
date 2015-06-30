<section class="site-content">
  <div class="row">

            <article class="article">

                <div class="cols">
                    <div class="col-full">
                        <div class="box">
                            <header>
                                <?php print render($title_prefix); ?>
                                <h1><?php print $title; ?></h1>
                                <?php print render($title_suffix); ?>
                            </header>
                        </div>
                    </div>
                    <div class="article-content">
                        <div class="col-4">
                            <div class="box">
                                <?php print render($content['body']); ?> 
                            </div>
                            
                        </div>
                        <div class="col-6">
                            <div class="box">
                                <?php print render($content['field_col_right_article']); ?>  
                            </div>
                            
                        </div>
                    </div>
                    
                </div>


            </article>


  </div>
</section>
