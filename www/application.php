<?php
	$device = "desktop";
	$ua = $_SERVER['HTTP_USER_AGENT'];
	if((strpos($ua,'iPhone') !== false) || (strpos($ua,'iPod')!==false)||(strpos($ua,'Android')!==false)) {
		$device = "sp";
	}

?>