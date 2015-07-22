(function() {
	var counter = document.getElementById('commits_tab_counter');
	var mergeArea = document.getElementById('partial-pull-merging');
	var buttonClass = 'js-merge-branch-action';
	var stillOpen = mergeArea.innerHTML.indexOf(buttonClass) !== -1;
	var multipleCommits = counter.innerHTML.trim() !== '1';

	if (stillOpen && multipleCommits) {
		var message = "Don’t forget to squash!";
		var style = "style='padding: 5px; border: 1px solid #95c97e;'";
		var strong = "<strong " + style + ">" + message + "</strong>";
		var div = "<div style='text-align: right;'>" + strong + "</div>";
		merge.innerHTML += div;
	}
})()
