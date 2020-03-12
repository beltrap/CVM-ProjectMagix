<?php
	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			if (!empty($_POST["username"])){
				$data = [];
				$data["username"] = $_POST["username"];
				$data["password"] = $_POST["pwd"];

				$result = parent::callAPI("signin", $data);

				if ($result == "INVALID_USERNAME_PASSWORD") {
					// err
				}
				else {
					var_dump($result);
					// Pour voir les informations retournées : var_dump($result);exit;
					$key = $result->key;
					var_dump($key);
					$_SESSION["key"] = $key;
					$_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
					header("location:lobby.php");
					exit;
				}
			}


			return [];
		}

	}