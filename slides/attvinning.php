<section>
	<h2>Attvinning</h2>
	<p>Avfall vert attvunne på tre måtar: Ombruk, materialattvinning og energiutnytting. Avfallshierarkiet viser kva som gjev best effekt med tanke på miljøet.</p>
</section>

<section>
	<h3>Ombruk</h3>

	<p>Me kallar det ombruk når folk tek i bruk gjenstandar andre har kvitta seg med. Døme er syklar, møblar, sportsutstyr, kvite- og brunevarer og klede.</p>
</section>

<section>
	<h3>Materialattvinning</h3>

	<p>Når avfall vert brukt som råstoff i nye produkt, vert det kalla materialattvinning. Døme er papir (de-ink) som blir til nytt papir til bruk i aviser/magasin.</p>
</section>

<section>
	<h3>Energiutnytting</h3>

	<p>Når avfall vert brukt som energikjelde, kallar ein det energiutnytting. Døme er når restavfall vert brent og nytta til oppvarming. I 2014 vart 98 % av hushaldsavfallet som SIM mottok frå medlemskommunane attvunne. I tillegg kom avfall som vart samla inn gjennom dei landsomfattande returordningane. SIM har ikkje tilgjengeleg statistikk for desse ordningane, som m.a. femner om pant på boksar og flasker, bilar og EE-avfall som blir levert direkte til forhandlar av slike produkt.</p>
</section>

<section>
	<h3>Heimekompostering</h3>

	<p>12 prosent av abonnentane komposterer bioavfallet sitt heime, om lag som i 2014. Totalt er det 2 987 registrerte bingar. I tillegg kjem 457 kundar som deler binge med andre. Abonnentar som komposterer heime, slepp å betala for biodunk og bioposar, dei produserer sitt eige jordforbetringsmiddel, og dei treng ikkje reingjera og setja ut biodunken. Om kvar innbyggjar produserer 90 kilo bioavfall i året, vart det i 2014 heimekompostert 775 tonn avfall.</p>
</section>

<section>
	<h3>Renovasjonsgebyr</h3>

	<p>Renovasjonsgebyret som kundane betalar er ein kombinasjon av dunkgebyr (ca. 70 %) og abonnementsgebyr (ca. 30 %). Abonnementsgebyret ut frå SIM er likt. Likevel betalar kundane ulikt for renovasjonstenestene. Årsaka til dette er at kommunane legg på gebyret for å dekka sine utgifter med renovasjonsordninga. Påslaget varierer frå kommune til kommune. Også for hyttekundar er renovasjonsgebyret i utgangspunktet likt. Årsaka til at betalingssatsane likevel varierer, er den same som over. Alt i alt er det SIM, og ikkje kommunane, som tek den økonomiske risikoen med endringar i avfallsmengda.</p>
</section>

<section>
	<h3>Renovasjonsabonnement og kommunaltgebyr i 2014</h3>

	<div class="canvas-holder">
		<canvas id="fee-subscription" width="800" height="400"></canvas>
	</div>

	<?php
		$legends = array(
						array('title' => 'Renovasjonsabonnement', 'color' => 'green'),
						array('title' => 'Abonnementsgebyr Kommune', 'color' => 'orange')
		);

		addlegends($legends);
	?>
</section>

<section>
	<h3>Dette går gebyret til</h3>

	<div class="canvas-holder">
		<canvas id="fee-used" width="400" height="400"></canvas>
	</div>

	<?php
		$legends = array(
						array('title' => 'Innsamling', 'color' => 'green'),
						array('title' => 'Eigenkostnad', 'color' => 'orange'),
						array('title' => 'Miljøsentralar', 'color' => 'green-light'),
						array('title' => 'Sluttbehandling brensel', 'color' => 'blue'),
						array('title' => 'Eigenkostnad kommunar', 'color' => 'brown-light'),
						array('title' => 'Meirverdiavgift', 'color' => 'brown')
		);

		addlegends($legends, "Rekna ut frå eit snittgebyr på 2049 kroner i 2014");
	?>
</section>