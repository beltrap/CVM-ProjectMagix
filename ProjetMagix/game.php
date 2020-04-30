<?php
	require_once("action/GameAction.php");

	$action = new GameAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
<script src="js/ajax.js"></script>
<script src="js/sprite/spanner.js"></script>
<template id="temCarte">
		<div class="nomCarte"></div>
		<div class="prixCarte"></div>
		<div class="imageCarte"></div>
		<div class="descCarte"></div>
		<div class="attackCarte"></div>
		<div class="vieCarte"></div>
</template>

<template id="temBord">
	<div class="hand"></div>
	<div class="vie"></div>
	<div class="deck"></div>
</template>

<template id="temBordT">
	<div class="energie"></div>
	<div class="zone"></div>
</template>

<div id="plateau">
		<div id="info"></div>
</div>
<?php
	require_once("partial/footer.php");