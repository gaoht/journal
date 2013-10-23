AngularJS-specific code

Most of the application files should be organized by feature. Scripts and
partials that are functionally related to each other should go together. Such
an arrangement is very convenient while working on vertical slices of an
application since all the files changing together are grouped together.

It is good idea to start a project with a very simple structure, and take small steps
toward the final directories' layout. For example, the sample application didn't
have any subfolders in the admin section at the beginning and contained all the
functionality for managing SCRUM projects and users in one directory. As the code
base evolved and files were growing bigger (and more numerous) new subfolders
were added. The folder structure can be refactored and evolved in several iterations,
exactly like source code.