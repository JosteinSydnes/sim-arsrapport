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
	<h3>Avfallsmengda</h3>

	<p>Hentefraksjonane (rest, bio og papir) hadde ein liten auke på 1 % frå 2013 til 2014. Totalt hadde innsamla mengder av hushaldsavfall, både henteordning og bringeordning, ein liten nedgong.</p>

	<p>Kvar innbyggjar leverte 415 kg avfall i 2014. Totalt tok SIM hand om 24 948 tonn frå hushaldningane. Størstedelen av desse var utsorterte mengder som kunne gå til attvinning.</p>
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
							array('title' => 'Mengder i tonn', 'color' => 'green')
					);
					addlegends($legends);
				?>
			</div>
		</div>
		<p>Mengder levert til deponi</p>
	</div>
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