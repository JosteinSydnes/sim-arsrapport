<section>
	<h2>Renovasjonsgebyr</h2>

	<p>Renovasjonsgebyret som kundane betalar er ein kombinasjon av dunkgebyr (ca. 70 %) og abonnementsgebyr (ca. 30 %). Abonnementsgebyret ut frå SIM er likt. Likevel betalar kundane ulikt for renovasjonstenestene. Årsaka til dette er at kommunane legg på gebyret for å dekka sine utgifter med renovasjonsordninga. Påslaget varierer frå kommune til kommune. Også for hyttekundar er renovasjonsgebyret i utgangspunktet likt. Årsaka til at betalingssatsane likevel varierer, er den same som over. Alt i alt er det SIM, og ikkje kommunane, som tek den økonomiske risikoen med endringar i avfallsmengda.</p>
</section>

<section>
	<h3>Gjennomsnittleg renovasjonsabonnement i 2013 2014</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="gjennomsnitt-renovasjon" width="650" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Gjennomsnittleg renovasjonsabonnement', 'color' => 'green')
					);

					addlegends($legends);
				?>
			</div>
		</div>

		<p>I KR, INKL. MVA</p>
	</div>
</section>

<section>
	<h3>Renovasjonsgebyr fritidsbustad i 2014 </h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="renovasjon-fritid" width="650" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Renovasjonsgebyr fritidsbustad', 'color' => 'green')
					);

					addlegends($legends);
				?>
			</div>
		</div>

		<p>I KR, INKL. MVA</p>
	</div>
</section>

<section>
	<h3>Slamtømmegebyr for heilårshus i 2014</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="slam-gebyr" width="650" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Slamtømmegebyr', 'color' => 'brown')
					);

					addlegends($legends);
				?>
			</div>
		</div>

		<p>I KR, INKL. MVA</p>
	</div>
</section>

<section>
	<h3>Kommunalt abonnementsgebyr for hus i 2014 </h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="fee-subscription" width="650" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Kommunalt abonnementsgebyr', 'color' => 'orange')
					);

					addlegends($legends);
				?>
			</div>
		</div>
		<p>I KR, INKL. MVA</p>
	</div>
</section>

<section>
	<h3>Dette går gebyret til</h3>

	<div class="chart">
		<div class="clear">
			<div class="grid70">
				<div class="canvas-holder">
					<canvas id="fee-used" width="400" height="400"></canvas>
				</div>
			</div>

			<div class="grid30">
				<?php
					$legends = array(
									array('title' => 'Innsamling', 'color' => 'green'),
									array('title' => 'Eigenkostnad', 'color' => 'orange'),
									array('title' => 'Miljøsentralar', 'color' => 'green-light'),
									array('title' => 'Sluttbehandling brensel', 'color' => 'blue'),
									array('title' => 'Eigenkostnad kommunar', 'color' => 'brown-light'),
									array('title' => 'Meirverdiavgift', 'color' => 'brown')
					);

					addlegends($legends);
				?>
			</div>
		</div>
		<p>Rekna ut frå eit snittgebyr på 2049 kroner i 2014</p>
	</div>
</section>