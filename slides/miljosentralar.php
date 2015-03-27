<section>
	<h2>Miljøsentralar</h2>

	<p>SIM har miljøsentral i alle eigarkommunane (7 stk). Ved SIM sine miljøsentralar kan innbyggjarane levera avfall dei ikkje har plass til, eller ikkje har lov til å kasta i behaldarane ein har fått utdelt av SIM. Innbyggjarane betalar om lag ein fjerdedel av kostnaden. Resten vert dekka gjennom renovasjonsgebyret. Næringslivet kan også nytta seg av miljøsentralen, men dei betalar faktiske kostnadar etter vekt/volum.</p>
</section>

<section>
	<div class="clear">
		<div class="grid50">
			<h3>Besøkande i 2014.</h3>
			<p>SIM sine miljøsentralar hadde ein auke på i besøkstalet på 16 % frå 2013 til 2014 på . Mengda avfall levert til miljøsentralen er nokon lunde stabil.</p>
		</div>

		<div class="grid50">
			<div class="info-graphic">
				<h4><i class="fa fa-users"></i> <span class="miljocount">59030</span></h4>
			</div>
		</div>
	</div>
</section>

<section>
	<h3>Besøk SIM sine miljøsentralar</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="visits-sentral" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Besøkande', 'color' => 'green')
					);
					addlegends($legends);
				?>
			</div>
		</div>

		<p>Besøk SIM sine miljøsentralar i 2014 var 59030 personar</p>
	</div>


</section>

<section>
	<h3>Mengder levert til SIM sine miljøsentralar</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="ammount-sentral" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
						array('title' => 'Mengder levert til miljøstasjonar', 'color' => 'green'),
						array('title' => 'Mengder levert til totalt', 'color' => 'orange')
					);
					addlegends($legends)
				?>
			</div>
		</div>

		<p>Mengder levert til SIM sine miljøsentralar i 2014 var 11521 tonn</p>
	</div>

</section>