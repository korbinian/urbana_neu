<section class="site-teaser">
	<div class="row">
		<div class="site-teaser-intro">
			<h1><?php print render($content['field_teaser_slogan']); ?></h1>
			<?php print render($content['field_teaser_text']); ?>
			<div class="call-to-action">
				<?php print render($content['field_teaser_call_to_action']); ?>
				<?php print render($content['field_teaser_call_to_action_sub']); ?>
			</div>
		</div>
		<div class="site-teaser-main">
			<figure>
				<?php print render($content['field_teaser_image']); ?>
				<figcaption>

					<?php print render($content['field_teaser_image_caption']); ?>
				</figcaption>
			</figure>
		</div>
	</div>
</section>

<section class="site-content">
	<div class="row">
		<div class="cols">
			<div class="col-4">
				<div class="box">
					<?php print render($content['field_col_left']); ?>
					<?php print render($content['field_details']); ?>
				</div>
			</div>
			<div class="col-6">
				<div class="box">
					<h2 class="page-title">
						Einrichtungsbeispiele und Wohnideen für den Wohnbereich 
						<span >
							<?php print render($title_prefix); ?>
							<?php if ($title): ?>

							<?php print $title; ?>

							<?php endif; ?>
							<?php print render($title_suffix); ?>
						</span>
					</h2>
					<?php print render($content['field_col_right']); ?>
					<?php print render($region['content_secondary']); ?>
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

	
	
	
	

