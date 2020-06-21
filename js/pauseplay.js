function pauseVideo(past50Array) {
	var x50 = past50Array[0];
	var y50 = past50Array[1];
	window.alert("popup");
	for (x = 0; x < 50; x++) {
		if (x50[x] >= 250 && x50[x] <= 750) {
			if (x50[y] >= 300 && x50[y] <= 700) {
				webgazer.pause();
				stop_storing_points_variable();
			}
		}
	}
}

