<section data-background="img/backgrounds/color/kompost.jpg" class="">
	<h2>Kompostanlegg</h2>

	<p>Komposteringsanlegget tok imot 3 359 tonn våtorganisk avfall frå SIM-kommunane og 3 282 tonn frå næringskundar. I tillegg tok ein i mot 3 870 tonn slam. Komposten som blir produsert i Svartasmoget kan kjøpast ved alle SIM sine miljøsentralar og er eit populært jordforbetringsprodukt. Prisen i 2014 var kr 300 per tonn og salet gav ei inntekt på kr. 787 000 eks. mva.</p>
	<p><br /></p>
	<p><br /></p>
	<p><br /></p>
	<p><br /></p>
	<p><br /></p>
	<p><br /></p>
</section>

<section>
	<h3>Mengder til kompostering</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="chart-kompost" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Mengder til kompostering', 'color' => 'brown')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>10 511 tonn i 2014</p>
	</div>
</section>

<section>
	<h3>Selde mengder kompost</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="selt-kompost" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Selde mengder kompost', 'color' => 'brown')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>2 623 tonn i 2014</p>
	</div>
</section>
