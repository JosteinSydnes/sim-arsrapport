<!doctype html>
<!-- [ if lt IE 9]>
<html lang="nn_NO" class="oldie">
<![ Endif ] -->
<!-- [ if (gt IE 8) | !(IE) ]><!-->
<html lang="nn_NO">
<!--<![ endif ]-->
	<head>
		<meta charset="utf-8">

		<title>SIM - Årsmelding 2014</title>

		<meta name="description" content="SIM årsrapport 2015 for digitale media">
		<meta name="author" content="oktanstord.no">

		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">

		<link href="img/favicon.ico" rel="icon">
		<link href="img/touch.png" rel="apple-touch-icon-precomposed">

		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,700">

		<link rel="stylesheet" href="style.css" id="theme">

		<!-- Printing and PDF exports -->
		<script>
			var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );
		</script>

		<!--[if lt IE 9]>
			<script src="lib/js/html5shiv.js"></script>
		<![endif]-->

		<?php $url = 'http://sim.as/arsmelding/'; ?>
		<meta property="og:title" content="SIM - årsmelding 2014">
		<meta property="og:type" content="website">
		<meta property="og:image" content="<?php echo $url; ?>img/sim_arsmelding_2014.jpg">
		<meta property="og:url" content="<?php echo $url; ?>">
		<meta property="og:site_name" content="Årsmeldinga frå SIM 2014">
		<meta property="og:description" content="Sunnhordland interkommunale miljøverk leverar årsmeldinga for 2014 digitalt.">
		<meta name="twitter:card" content="summary">
		<meta name="twitter:creator" content="@oktanstord">

		<?php
		function addlegends($legends, $info = null) {
			$output = ''; // the return variable
			if(is_array($legends)) { // add legendlist to output if $legends is array
				$output .= '<div class="chart-legends">';
				$output .= '<ul class="legends">';
				foreach ($legends as $legend) {
					$output .= '<li class="'. $legend['color'] .'">'. $legend['title'] .'</li>';
				}
				$output .= '</ul>';
				$output .= '</div>';
			}
			else { // legends is not array
				$output .= '<p>Du må bruke legends parameter som array.</p>';
			}
			if($info) { // output chart if description is set
				$output .= '<p class="aligncenter">'. $info .'</p>';
			}

			echo $output; // return output
		}
		?>
	</head>

	<body>

		<div class="reveal">

			<div class="slides">

				<section data-background="img/start_bg_tile.png" data-background-size="188px" data-background-repeat="repeat" class="first-one">
					<a href="#"><img src="img/sim-logo.svg" alt="SIM logo"></a>
					<h1 class="color-green">Årsmelding 2014</h1>
				</section>

				<section data-background="img/backgrounds/hallen_heiane.jpg" class="color-white">

					<?php require_once('slides/om_oss.php'); ?>

				</section>


				<section>

					<?php require_once('slides/dagleg_leiar.php'); ?>

				</section>

				<section>

					<?php require_once('slides/tilsette.php'); ?>

				</section>

				<section>

					<?php require_once('slides/styrets_arsmelding.php'); ?>

				</section>

				<section>

					<?php require_once('slides/ditt_avfall.php'); ?>

				</section>

				<section>

					<?php require_once('slides/vart_samfunn.php'); ?>

				</section>

				<section>

					<?php require_once('slides/miljosentralar.php'); ?>

				</section>

				<section>

					<?php require_once('slides/kompost.php'); ?>

				</section>

				<section>

					<?php require_once('slides/attvinning.php'); ?>

				</section>

				<section>

					<?php require_once('slides/gebyr.php'); ?>

				</section>

				<section>

					<?php require_once('slides/etterkalkulasjon.php'); ?>

				</section>

			</div>

		</div>

		<video id="beachvid" autoplay loop poster="img/backgrounds/video/sponavik.jpg"><source src="img/backgrounds/video/sponavik.mp4" type="video/mp4"><source src="img/backgrounds/video/sponavik.webm" type="vid/webm"><p>Nettlesaren din støttar ikkje html5 video, ver venleg å oppdater.</p></video>

		<footer class="footer">

			<div class="nav-footer">
				<div class="clear">
					<nav class="grid50 grid-center">
						<ul class="grid50">
							<li><a href="#">Start</a></li>
							<li><a href="#/1">Om oss</a></li>
							<li><a href="#/2">Dagleg leiar</a></li>
							<li><a href="#/3">Tilsette</a></li>
							<li><a href="#/4">Styret si årsmelding</a></li>
							<li><a href="#/5">Ditt avfall</a></li>
							<li><a href="#/6">Vårt samfunn</a></li>
						</ul>

						<ul class="grid50">
							<li><a href="#/8">Miljøsentralen</a></li>
							<li><a href="#/9">Kompost</a></li>
							<li><a href="#/10">Attvinning</a></li>
							<li><a href="#/11">Gebyr</a></li>
							<li><a href="#/12">Etterkalkulasjon</a></li>
							<li><a href="#" class="open-accounts-link">Rekneskap</a></li>
							<li><a href="img/sim_revisor_rapport.pdf">Revisor rapport</a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="main-footer">
				<div class="grid33 main-item">
					<p><a href="http://sim.as/">SIM | Årsmelding 2014</a></p>
				</div>

				<div class="grid33 aligncenter main-item">
					<p><button type="button" class="footer-action"><i class="fa fa-bars"></i></button></p>
				</div>

				<div class="grid33 alignright main-item">
					<p><a href="#" id="showaccounts">VIS REKNESKAP <i class="fa fa-caret-right"></i></a></p>
				</div>
			</div>
		</footer>

		<script src="lib/js/head.min.js"></script>
		<script src="js/reveal.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="js/chart.min.js"></script>

		<script>
			Reveal.initialize({
				controls: true,
				progress: false,
				mouseWheel: true,
				history: true,
				center: true,
				maxScale: 1,
			    margin: 0,

				transition: 'slide', // none/fade/slide/convex/concave/zoom

				// Optional reveal.js plugins
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/notes/notes.js', async: true }
				]
			});
		</script>
		<script src="js/script.js"></script>
		<script src="js/custom-charts.js"></script>
		<script src="js/accounts.js"></script>
	</body>
</html>
