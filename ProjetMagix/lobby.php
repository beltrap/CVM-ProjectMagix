<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
<div id="lobbyMenu">
	<a href="lobby.php" class="btnMenu">Pratique</a>
	<a href="lobby.php" class="btnMenu">Jouer</a>
	<a href="lobby.php?logout=1" class="btnMenu">Quitter</a>
</div>
<div id="frame">
	<iframe style="width:700px;height:240px;"
		src="https://magix.apps-de-cours.com/server/#/chat/<?= $data["key"] ?>">
	</iframe>
</div>
<?php
	require_once("partial/footer.php");