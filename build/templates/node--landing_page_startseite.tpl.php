<section class="site-teaser">
	<div class="row">
		<div class="site-teaser-intro">
			<h1><?php print render($content['field_teaser_slogan_front']); ?></h1>
			<?php print render($content['field_teaser_text_front']); ?>
			<div class="call-to-action">
				<?php print render($content['field_teaser_cta_front']); ?>
				<?php print render($content['field_teaser_cta_sub_front']); ?>
			</div>
		</div>
		<div class="site-teaser-main">
			<?php print render($region['teaser_main_front']); ?>
		</div>
	</div>
</section>

<section class="site-content">
	<div class="row">
		<div class="cols">
			<div class="col-4">
				<div class="box">
					<?php print render($content['field_col_left_front']); ?>	
				</div>
			</div>
			<div class="col-6">
				<div class="box">
					<?php print render($content['field_col_right_front']); ?>
				</div>
			</div>
			<div class="col-2 content-sidebar">
				<nav class="nav-produkte">
					<?php print render($region['content_sidebar']); ?>
				</nav>
			</div>
			<div class="col-10">
				<div class="box">
					<?php print render($region['content_secondary']); ?>
				</div>
			</div>
		</div>
	</div>
</section>

	
	
