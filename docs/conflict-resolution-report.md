# Conflict Resolution Report
1) Conflict Scenario

During this project, a merge conflict occurred when merging the feature/database-connection branch into the main branch after the feature/user-authentication branch had already been merged. The conflict happened in the src/app.js file because both feature branches modified the same section of code responsible for configuring the server port.

In the feature/user-authentication branch, the application was configured to run on port 3001 for testing authentication-related features. Meanwhile, the feature/database-connection branch changed the port value to 5000 while implementing database-related functionality. Since both branches edited the same line in the same file, Git was unable to automatically determine which change should be applied, resulting in a merge conflict.

2) What I Observed

When attempting to merge the feature/database-connection branch into main, Git stopped the merge process and reported a conflict in src/app.js. The file was marked with Git conflict indicators showing the differences between the current branch and the incoming branch. These markers highlighted the conflicting port configurations and required manual intervention before the merge could be completed. A screenshot was taken at this stage showing the conflict markers as required.

3) Resolution Strategy

To resolve the conflict, I opened the conflicted src/app.js file in Visual Studio Code and carefully reviewed both versions of the changes. Instead of keeping one hardcoded port value, I implemented a more flexible solution by using an environment-based configuration with a fallback default. I replaced the conflicting lines with:

const PORT = process.env.PORT || 3000;


This approach allows the application to run on different ports depending on the environment while still providing a safe default for local development. After removing all conflict markers and verifying the code, I ran npm run dev and confirmed that the application started successfully at http://localhost:3000. I then staged and committed the resolved changes.

4) Conflict Prevention Methods

Teams can reduce merge conflicts by keeping feature branches short-lived, communicating changes early, and frequently merging updates from the main branch. Avoiding unnecessary edits to shared files, following consistent coding standards, and using pull requests with code reviews also help identify potential conflicts before they reach the main branch.