<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
<script src="js/lobby.js"></script>
<script src="js/sprite/reborn.js"></script>
<canvas id="lobbyC" width="1980" height="1080">
    </canvas>
<div id="lobbyMenu">
	<a href="game.php?type=TRAINING" class="btnMenu">Pratique</a>
	<a href="game.php?type=PVP" class="btnMenu">Jouer</a>
	<a href="lobby.php?logout=1" class="btnMenu">Quitter</a>
</div>
<div id="frame">
	<iframe style="width:700px;height:240px;"
		src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
	</iframe>
</div>
<?php
	require_once("partial/footer.php");