<section class="site-content">
	<div class="row">
		<div class="cols">
			<div class="col-4">
				<div class="box">
					<header>
						<?php print render($title_prefix); ?>
						<h2 class="einrichtungsbeispiel-title"><?php print $title; ?></h2>
						<?php print render($title_suffix); ?>
						<h1 class="einrichtungsbeispiel-keywords"><?php print render($content['field_keywords']); ?> </h1>
						<small class="einrichtungsbeispiel-details">
							<span class="einrichtungsbeispiel-nr"># <?php print render($content['field_beispielnummer']); ?> </span> |
							<span class="einrichtungsbeispiel-plz"><?php print render($content['field_plz']); ?> </span> 
							<span class="einrichtungsbeispiel-ort"><?php print render($content['field_ort']); ?> </span>
						</small>
					</header>
					
					<div class="einrichtungsbeispiel-content">
						<?php print render($content['field_spalte_1']); ?>
						<?php print render($content['field_spalte_2']); ?>
						<?php print render($content['field_spalte_3']); ?>
					</div>

					<div class="einrichtungsbeispiel-taxonomies">
						<h2>Informationen</h2>
						<h3>Wohnbereich:</h3>
						<?php print render($content['field_wohnbereich']); ?>
						<h3>Stil:</h3>
						<?php print render($content['field_stil']); ?> 
						<h3>Abgebildete Produkte:</h3>
                    	<?php print render($content['field_produkte']); ?>
						<h3>Abgebildete Materialien:</h3>
                    	<?php print render($content['field_materialien']); ?> 
						<h3>Technische Besonderheiten:</h3>
                    	<?php print render($content['field_besonderheiten']); ?> 
					</div>

				</div>
			</div>
			<div class="col-6">
				<div class="box">
					<div class="flexslider flexslider-hauptbild">
                    	<ul class="slides">
							<?php print render($content['field_hauptbild']); ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

