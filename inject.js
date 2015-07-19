(function() {
	var counter = document.getElementById('commits_tab_counter');
	var merge = document.getElementById('partial-pull-merging');
	var canMerge = "This pull request can be automatically merged.";
	var stillOpen = merge.innerHTML.indexOf(canMerge) !== -1;
	var multipleCommits = counter.innerHTML.trim() !== '1';

	if (stillOpen && multipleCommits) {
		var message = "Don’t forget to squash!";
		var style = "style='padding: 5px; border: 1px solid #95c97e;'";
		var strong = "<strong " + style + ">" + message + "</strong>";
		var div = "<div style='text-align: right;'>" + strong + "</div>";
		merge.innerHTML += div;
	}
})()
