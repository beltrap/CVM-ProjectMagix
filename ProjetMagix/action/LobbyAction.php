<?php
	require_once("action/CommonAction.php");

	class LobbyAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$key = $_SESSION["key"];
			$data = [];
			$data["key"] = $key;
			if (!empty($_GET["logout"])){
				$result = parent::callAPI("signout", $data);
			}

			return compact("key");
		}
	}