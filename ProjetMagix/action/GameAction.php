<?php
	require_once("action/CommonAction.php");

	class GameAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			
			$data = [];
			$data["key"] = $_SESSION["key"];
			$data["type"] = $_GET["type"];

			$result = parent::callAPI("games/auto-match", $data);

			if ($result !== "JOINED_PVP" ||
				$result !== "CREATED_PVP" ||
				$result !== "JOINED_TRAINING"){
					header("location:lobby.php");
					exit;
				}
			return [];
		}
	}