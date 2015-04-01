<section data-background="img/backgrounds/miljosentral.jpg">
	<h2>Miljøsentralar</h2>

	<p>SIM har miljøsentral i alle eigarkommunane (7 stk). Ved SIM sine miljøsentralar kan innbyggjarane levera avfall dei ikkje har plass til, eller ikkje har lov til å kasta i behaldarane ein har fått utdelt av SIM. Innbyggjarane betalar om lag ein fjerdedel av kostnaden. Resten vert dekka gjennom renovasjonsgebyret. Næringslivet kan også nytta seg av miljøsentralen, men dei betalar faktiske kostnadar etter vekt/volum.</p>

	<p>I 2014 var det 59 030 vitjingar ved dei sju miljøsentralane i 2014. Kundane leverte 9 820 tonn avfall på miljøsentralane. Alt i alt kom 39 % av hushaldsavfallet inn via miljøsentralane. Privatkundar som leverer avfall til miljøsentralen betalar om lag ein fjerdepart av det det kostar å driva tilbodet, næringsdrivande skal betala fulle kostnader.</p>
</section>

<section>
	<div class="clear">
		<div class="grid50">
			<h3>Kundar i 2014</h3>
			<p>SIM sine miljøsentralar hadde ein auke i kundetalet på 16 %. Mengda avfall levert til miljøsentralen nokonlunde den same som i 2013.</p>
		</div>

		<div class="grid50">
			<div class="info-graphic">
				<h4><i class="fa fa-users"></i> <span class="miljocount">59030</span></h4>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="info-graphic large-icon">
		<h4><i class="fa fa-recycle"></i> <span class="countmeup">16</span> %</h4>
		<p>fleire vitjingar ved miljøsentralane i 2014.</p>
	</div>
</section>

<section>
	<h3>Kundar SIM sine miljøsentralar</h3>

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
									array('title' => 'Kundevitjingar ved miljøsentralar', 'color' => 'green')
					);
					addlegends($legends);
				?>
			</div>
		</div>

		<p>Kundar ved SIM sine miljøsentralar i 2014 var 59 030 personar</p>
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
						array('title' => 'Mengder levert til miljøsentralar', 'color' => 'green'),
						array('title' => 'Totale mengder hushaldsavfall', 'color' => 'orange')
					);
					addlegends($legends)
				?>
			</div>
		</div>

		<p>Mengder levert til SIM sine miljøsentralar i 2014 var 11 521 tonn</p>
	</div>

</section>