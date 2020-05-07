This is my code base as I followed along with Cory House's PluralSight course on Building Applications with React and Redux. I've finished the course and I'm working through the 10 challenge problems.

<ul>
  <li>Uses Mocha test runner instead of Jest (though the Jest examples also work; there are npm scripts for them in the package.json file).  The reason is I'm on Windows (often) and Jest tests were taking 1000x longer than they should to run.  This is a known problem, so I went with Mocha.  Much faster tests.</li>
  <li>Challenge #1 complete: authors admin with no Delete button for assigned authors and also mockApi validation.</li>
  <li>Challenge #2 is working.  Filter courses by author implemented by saving selected authorId (not entire filtered courses array).</li>
  <li>Challenge #3 complete: don't show CourseList when no results.</li>
  <li>Challenge #4 complete: use Prompt component to prompt user before navigating away from CourseForm.</li>
</ul>
