<?php foreach ($items as $delta => $item): ?>
	<li data-thumb="<?php print ( file_create_url( image_style_path('hauptbild',$item['#item']['uri'] ) ) )?>">
    	<a href="<?php print file_create_url($item['#item']['uri']) ?>" class="lightbox">

       	<?php print render($item); ?> 
</a>
  	</li>
<?php endforeach; ?>

