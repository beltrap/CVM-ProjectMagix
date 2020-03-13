<?php
    require_once("action/AjaxPlayAction.php");

    $action = new AjaxPlayAction();
    $data = $action->execute();

	echo json_encode($data["result"]);
?>