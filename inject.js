(function() {
	var counter = document.getElementById('commits_tab_counter');
	var buttonClass = 'js-merge-branch-action';
	var stillOpen = document.getElementById('partial-pull-merging').innerHTML.indexOf(buttonClass) !== -1;
	var mergeDetails = document.getElementsByClassName('mergeability-details');
	var mergeArea = mergeDetails[0];
	if (!mergeArea) {
	  console.log("WTF");
	}
	var multipleCommits = counter.innerHTML.trim() !== '1';

	if (/*stillOpen &&*/ multipleCommits) {
	  var out =
	    "<div class='branch-action-item'>" +
		"<div class='branch-action-item-icon completeness-indicator completeness-indicator-error'>" +
		"<span class='octicon octicon-x'></span>" +
	      "</div>" +
	      "<h4 class='status-heading'>Don't forget to squash your commits</h4>" +
		"<span class='status-meta'><code>git rebase -i</code> on the commandline</span>" +
	    "</div>";
	  mergeArea.innerHTML = out + mergeArea.innerHTML;
	}
})()
