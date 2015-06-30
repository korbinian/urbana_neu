<section class="site-content">
  <div class="row">



                <div class="cols">
                    <div class="col-6">
                        <div class="box">


<?php print $progressbar; ?>

<div class="webform-confirmation">
  <?php if ($confirmation_message): ?>
    <?php print $confirmation_message ?>
  <?php else: ?>
    <p><?php print t('Thank you, your submission has been received.'); ?></p>
  <?php endif; ?>
</div>
<!--
<div class="links">
  <a href="<?php print $url; ?>"><?php print t('Go back to the form') ?></a>
</div>-->

                        </div>
                    </div>

                    
                </div>





  </div>
</section>
