<section data-background="img/backgrounds/samfunn.jpg" class="color-white text-shadow">
	<h2>Ditt avfall</h2>
	<p>Mengda av innsamla hushaldsavfall på renovasjonsrutene hadde ein liten auke frå 2013 til 2014, medan mengda innsamla hytteavfall var nokonlunde den same. Innsamla næringsavfall på renovasjonsrutene hadde ein nedgong i 2014. Medan besøka på miljøsentralane auka kraftig i fjoråret.</p>

	<p>Samanlikna med talet på kundar vart det i 2014 registrert svært få klager.</p>
</section>

<section>
	<div class="info-graphic large-icon">
		<h4><i class="fa fa-trash-o"></i> <span class="counttonn">45 753</span> tonn</h4>
		<p>Totale avfallsmengder i 2014.</p>
	</div>
</section>

<section>
	<div class="clear">
		<div class="grid50">
			<h2>Avfallsmengder</h2>

			<p>Mengda innsamla hushaldsavfall i SIM-kommunane auka med 1 % frå 2013 til 2014. Innsamla mengder i 2014 var 15 128 tonn. Totalt mottok SIM 24 948 tonn hushaldsavfall frå innbyggjarane i Sunnhordland. 98 % av det som vart samla inn vart sendt til attvinning. Attvinningsprosenten har auka mykje sidan 2003, det året SIM starta med å senda avfall til attvinning. Det året var attvinningsprosenten på 48 %.</p>
		</div>

		<div class="grid50">
			<div class="info-graphic large-icon">
				<h4>&nbsp;</h4>
				<h4><span class="avfallcount">98</span> %</h4>
				<h4>&nbsp;</h4>
			</div>
		</div>
	</div>
</section>

<section>
	<h3>Samla avfallsmengder som SIM tek hand om</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="pie-avfallsmengder" width="400" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
				$legends = array(
						array('title' => 'Hushaldsavfall til attvinning', 'color' => 'green'),
						array('title' => 'Hushaldsavfall til deponi', 'color' => 'brown'),
						array('title' => 'Næringsavfall til deponi', 'color' => 'green-light'),
						array('title' => 'Næringsavfall til attvinning', 'color' => 'purple'),
						array('title' => 'Slam', 'color' => 'blue')
				);
				addlegends($legends);
				?>
			</div>
		</div>

		<p>Til saman 45 753 tonn</p>
	</div>
</section>

<section>
	<h3>Hushaldsavfall</h3>

	<p>Hentefraksjonane (rest, bio og papir) hadde ein liten auke på 1 % frå 2013 til 2014. Totalt hadde innsamla mengder av hushaldsavfall, både henteordning og bringeordning, ein liten nedgong.</p>

	<p>Kvar innbyggjar leverte 415 kg avfall i 2014. Totalt tok SIM hand om 24 948 tonn frå hushaldningane. Størstedelen av desse var utsorterte mengder som kunne gå til attvinning.</p>
</section>

<section>
	<h3>Mengder hushaldsavfall</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="chart-hushaldsamla" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
							array('title' => 'Mengder i tonn', 'color' => 'green')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>Samla mengde hushaldsavfall i tonn</p>
	</div>
</section>

<section>
	<h3>Avfall henta heime hos folk (medrekna hytteavfall)</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="chart-area" class="center-chart" width="400" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Restavfall', 'color' => 'grey'),
									array('title' => 'Bio', 'color' => 'brown'),
									array('title' => 'Papir', 'color' => 'blue')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>Til saman: 14 623 tonn</p>
	</div>
</section>

<section>
	<h3>Hushaldsavfall til attvinning</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="hushold-bar" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
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
					addlegends($legends)
				?>
			</div>
		</div>

		<p>Totalt 25 057 tonn</p>
	</div>

</section>

<section>
	<h3>Mengder til deponi</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="bar-chart" width="600" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
							array('title' => 'Mengder i tusen', 'color' => 'green')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>Mengder levert til deponi</p>
	</div>
</section>

<section>
	<h3>Hytterenovasjon</h3>

	<p>Det vert stadig bygd nye hytter i SIM-kommunane, og ordninga for hytterenovasjon er under kontinuerleg utvikling. Nye konteinarstader kjem til og kapasiteten på eksisterande lokalitetar vert auka. I hyttekommunane var det i 2014 tøming to gonger per. veke i heile juli og halve august, mot normalt éin gong i veka i sommarhalvåret.</p>

	<h3>Deponi</h3>

	<p>I 2014 vart det levert 8 075 tonn avfall til deponiet i Svartasmoget, ein reduksjon på 29,8 % frå året før. Årsaka til nedgongen er ein i 2013 tok i mot større mengder frå næringslivet. Den som leverer avfall til deponi skal kontrollera og gå god for at avfallet kan leverast til deponiet, SIM kontrollerer avfallet visuelt før og etter lossing, og sjekkar kvart 100. lass nøgnare. Ved behov vert det teke prøvar av avfallet.</p>
</section>

<section>
	<h3>Slamtømming</h3>

	<p>I 2014 var det tøming av slamavskiljarar for heilårsbustader i Austevoll og både heilårsbustader og fritidshus i Fitjar, Kvinnherad, Stord og Tysnes. SIM har tilbod om tøming av minireinseanlegg og tette tankar som ikkje har nok med ordinær tøming. Selskapet nyttar eit system for sanntidskommunikasjon mellom kontoret i Svartasmoget og slambilane.</p>

	<h3>To transportørar</h3>

	<p>To firma hentar inn avfall for SIM. Renovasjon Øst AS hentar bos i Austevoll, Kvinnherad og Tysnes, medan SIM Næring AS/Ragn- Sells AS hentar i Bømlo, Fitjar, Stord og Sveio.</p>

	<h3>Prøveprosjekt på tekstil og emballasjeplast</h3>

	<p>SIM starta i mars 2014 å hente plastemballasje og tekstilar frå hushald i Fitjar. Målet med prosjektet var å finna ut om ei slik ordning kan innførast i alle SIM- kommunane. Ein ynskte å teste løysingar, kostnadar og korleis dei ulike avfallsfraksjonane påverkar kvarandre. Emballasjeplast og tekstilar vert henta saman med papiret. I tillegg tok ein vekk 2- tals ordninga, ordninga der abonnentane kan få henta restavfallet annakvar veke mot ekstra betaling.</p>
</section>