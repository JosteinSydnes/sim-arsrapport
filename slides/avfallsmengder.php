<section>
	<h2>Avfallsmengder</h2>

	<p>Mengda innsamla hushaldsavfall i SIM-kommunane auka med 1 % frå 2013 til 2014. Innsamla mengder i 2014 var 15 128 tonn. Totalt mottok SIM 24 948 tonn hushaldsavfall frå innbyggjarane i Sunnhordland. 98 % av det som vart samla inn vart sendt til attvinning.. Attvinningsprosenten har auka mykje sidan 2003, det året SIM starta med å senda avfall til attvinning. Det året var attvinningsprosenten på 48 %.</p>
</section>

<section>
	<h3>Avfall henta heime hos folk (medrekna hytteavfall)</h3>

	<div class="canvas-holder">
		<canvas id="chart-area" class="center-chart" width="400" height="400"></canvas>
		<p class="aligncenter">Til saman: 15 128 tonn</p>
	</div>

	<?php
	$legends = array(
					array('title' => 'Restavfall', 'color' => 'grey'),
					array('title' => 'Bio', 'color' => 'brown'),
					array('title' => 'Papir', 'color' => 'blue')
	);
	addlegends($legends);
	?>
</section>

<section>
	<h3>Mengder til deponi</h3>

	<div class="canvas-holder">
		<canvas id="bar-chart" width="600" height="400"></canvas>
	</div>

	<p class="aligncenter">Mengder i tonn</p>
</section>

<section>
	<h3>Samla avfallsmengder som SIM tek hand om</h3>

	<div class="canvas-holder">
		<canvas id="pie-avfallsmengder" width="400" height="400"></canvas>
	</div>
	<?php
	$legends = array(
			array('title' => 'Hushaldsavfall til attvinning', 'color' => 'green'),
			array('title' => 'Hushaldsavfall til deponi', 'color' => 'brown'),
			array('title' => 'Næringsavfall til deponi', 'color' => 'green-light'),
			array('title' => 'Næringsavfall til attvinning', 'color' => 'purple'),
			array('title' => 'Slam', 'color' => 'blue')
	);
	addlegends($legends, "Til saman 45 753 tonn");
	?>
</section>

<section>
	<h3>Husavfall</h3>

	<div class="canvas-holder">
		<canvas id="hushold-bar" width="800" height="400"></canvas>
	</div>

	<?php
	$legends = array(
		array('title' => 'Avfallsbrensel', 'color' => 'grey'),
		array('title' => 'Våtorganisk', 'color' => 'brown'),
		array('title' => 'Heimekompostering', 'color' => 'brown-light'),
		array('title' => 'Papir', 'color' => 'blue'),
		array('title' => 'Glas', 'color' => 'blue-light'),
		array('title' => 'Stål', 'color' => 'blue-grey'),
		array('title' => 'EE-avfall', 'color' => 'magenta'),
		array('title' => 'Hageavfall', 'color' => 'green'),
		array('title' => 'Gips', 'color' => 'yellow-light'),
		array('title' => 'Trevirke', 'color' => 'purple-light'),
		array('title' => 'Plast', 'color' => 'yellow'),
	);
	addlegends($legends, "Totalt 25 057 tonn")
	?>
</section>