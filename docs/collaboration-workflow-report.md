Collaboration Workflow Report

This project followed a GitHub-based collaboration workflow to simulate a real-world team development environment. The goal was to practice using issues, feature branches, pull requests, code reviews, merge conflicts, and proper merge strategies while working independently. Each feature began with planning through GitHub Issues, which helped clearly define the scope of work before any coding started.

Three separate issues were created, one for each feature: User Authentication, Database Connection, and API Endpoints. Each issue described the requested functionality and listed specific tasks to complete. Creating issues first helped organize the work and ensured that each feature had a clear purpose and measurable goals.

For each issue, a feature branch was created from the main branch. All development work was done inside these feature branches to keep changes isolated. Once a feature was completed, a Pull Request (PR) was opened and linked to its corresponding issue using the “Closes #X” syntax. This ensured traceability between issues and code changes. Each PR included a title, description, and summary of the changes made.

Code review was simulated by adding review comments directly on the Pull Requests. Since this was a solo repository, GitHub did not allow approving or requesting changes on my own PRs. Instead, review comments were used to suggest improvements and document feedback. One PR simulated a “request changes” scenario by leaving comments and then updating the code to address the feedback before merging.

A merge conflict was intentionally created by modifying the same file (src/app.js) in multiple branches. When the branches were merged, Git displayed conflict markers in the file. The conflict was resolved manually using Visual Studio Code, tested locally, committed, and pushed to the main branch.

All Pull Requests were merged using the Squash and Merge strategy. This approach keeps the commit history clean by combining multiple commits into a single commit, making the project easier to review and maintain. Overall, this workflow demonstrates effective collaboration practices using GitHub tools.
