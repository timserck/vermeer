<?php $allTableaux = getTableaux($connexion); ?>
<section class="gallery section">
	<h1>gallery</h1>
	<form class='gallery__form' action="">
		<label for="tableauFilter">type a title</label>
		<input type="text" id='tableauFilter'>

	</form>
	<ul class='gallery__ul' id="gallery__content">
	<?php foreach ($allTableaux as $tableau) {

		echo "<li class='gallery__ul__li'>
			<a class='gallery__ul__li--a' href={$tableau['titre']} >
        <img src={$tableau['img']} alt={$tableau['titre']}>
          <span>{$tableau['titre']}</span>
			</a>
		</li> 

		<div class='tableau_detail' id={$tableau['titre']}>
		
		<img src={$tableau['img']} alt={$tableau['img']}>
		<div class='tableau_detail__description'>
		<button  class='tableau_detail__description--close'>close</button>

			<div class='tableau_detail__description--txt'>

			<h2>{$tableau['titre']}</h2>
			<p>{$tableau['description']}</p>
			</div>
		</div>
		

			
		</div>"

		;
		
	} ?>
		
		
		
		
		
		
	</ul>
</section>