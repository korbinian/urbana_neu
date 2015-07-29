<section class="site-content">
	<div class="row">
		<div class="cols">
			<div class="col-full">
				<div class="box">
					<?php print render($title_prefix); ?>
					<?php if ($title): ?>
					<h1 class="page-title">
					<?php print $title; ?>
					</h1>
					<?php endif; ?>
					<?php print render($title_suffix); ?>
				</div>
			</div>
			<div class="col-4">
				<div class="box">
					<?php print render($content['field_beschreibung']); ?>	
				</div>
			</div>
			<div class="col-6">
				<div class="box">
					<?php print render($content['field_bild']); ?>	
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