<?php
    require_once("action/IndexAction.php");

    $action = new IndexAction();
    $action->execute();

    require_once("partial/header.php");
?>
<script src="js/sprite/humain.js"></script>
<script src="js/login.js"></script>
<canvas width="1980" height="1080">
    </canvas>
<div id="content-page">
    <form action="index.php" method="post">
            <input type="text" name="username" id="username" placeholder="Votre nom de compte">
            <input type="password" name="pwd" id="pwd" placeholder="Mot de passe">
            <input type="submit" value="Entrez">
    </form>
</div>
<?php
    require_once("partial/footer.php");
