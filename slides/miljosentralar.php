<section>
	<h2>Miljøsentralar</h2>

	<p>SIM har miljøsentral i alle eigarkommunane (7 stk). Ved SIM sine miljøsentralar kan innbyggjarane levera avfall dei ikkje har plass til, eller ikkje har lov til å kasta i behaldarane ein har fått utdelt av SIM. Innbyggjarane betalar om lag ein fjerdedel av kostnaden. Resten vert dekka gjennom renovasjonsgebyret. Næringslivet kan også nytta seg av miljøsentralen, men dei betalar faktiske kostnadar etter vekt/volum.</p>
</section>

<section>
	<div class="info-graphic">
		<h4><i class="fa fa-users"></i> <span class="miljocount">59030</span></h4>
		<p>Besøkande i 2014.</p>
	</div>

	<p>SIM sine miljøsentralar hadde ein auke på i besøkstalet på 16 % frå 2013 til 2014 på . Mengda avfall levert til miljøsentralen er nokon lunde stabil.</p>
</section>

<section>
	<h3>Besøk SIM sine miljøsentralar</h3>

	<div class="canvas-holder">
		<canvas id="visits-sentral" width="800" height="400"></canvas>
	</div>

	<p class="aligncenter">Besøk SIM sine miljøsentralar i 2014 var 59030 personar</p>

</section>

<section>
	<h3>Mengder levert til SIM sine miljøsentralar</h3>

	<div class="canvas-holder">
		<canvas id="ammount-sentral" width="800" height="400"></canvas>
	</div>

	<?php
	$legends = array(
		array('title' => 'Mengder levert til miljøstasjonar', 'color' => 'green'),
		array('title' => 'Mengder levert til totalt', 'color' => 'orange')
	);
	addlegends($legends, "Mengder levert til SIM sine miljøsentralar i 2014 var 11521 tonn")
	?>
</section>