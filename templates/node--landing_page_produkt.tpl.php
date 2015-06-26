
<section class="site-content">
	<div class="row">
		<div class="cols">
			<div class="col-4">
				<div class="box">
					<h1><?php print render($content['field_teaser_slogan_produkt']); ?></h1>
					<?php print render($content['field_teaser_text_produkt']); ?>
					<div class="call-to-action">
						<?php print render($content['field_teaser_cta_produkt']); ?>
						<?php print render($content['field_teaser_cta_sub_produkt']); ?>
					</div>
					<?php print render($content['field_col_left_produkt']); ?>	
				</div>
			</div>
			<div class="site-teaser-main-produkt">
				<figure>
					<?php print render($content['field_teaser_image_produkt']); ?>
					<figcaption>

						<?php print render($content['field_teaser_caption_produkt']); ?>
					</figcaption>
				</figure>
			</div>
			
			<div class="col-6 content-right">
				<div class="box">
					<?php print render($content['field_col_right_produkt']); ?>
					<!--<?php print render($region['content_secondary']); ?>-->
				</div>
			</div>
			<div class="col-2 content-sidebar">
				<nav class="nav-produkte">
					<?php print render($region['content_sidebar']); ?>
				</nav>
				
			</div>
		</div>
	</div>
</section>

	
	
	
	

