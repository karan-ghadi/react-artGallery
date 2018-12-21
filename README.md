This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##Hadron – react Js structure.
##Folder structure:
-	Public
	-	Index.html ## the file which runs on browser
	-	Manifest.json ## contains project's details

-	Source
	-	Assets
		-	Css ## contains all css files required for the project
		-	Scss ## contains all raw scss files to compile it into css
		-	Images	## contains images which are requrired for the project
		-	Js library ## contains js library which are required for the projects
		-	Scss-css.bat ## has script to compile scss into css (double to run the script)

	-	Components
		-	Buttons
			- Buttons.js

		-	Cards
			- DashboardSummaryCards.js
			- imageCards.js
			- textCards.js

		-	Footer
			- Footer.js

		-	Header
			- TopSection.js.
			- navigation.js.

		-	Hoc
			- Hoc.js
				## main container File, Its has header, footer and layout

		-	Layout
			- Layout.js
				## child elements are passed through it

		-	Tables
			- Tables.js ## has all the Ui components which can be reused.

		-	Titles
			- Titles.js ## has all the Ui components which can be reused.

	-	Containers
		** All the stateless files will contain only UI
		-	App
			- App.js
			- App.css

		-	Blockchain-operations
			- BlockchainOperation.js
			- stateless.js

		-	Dashboard
			- Dashboard.js
			- stateless.js

		-	Network-design
			- NetworkDesign.js
			- stateless.js

		-	Server-onboarding
			- ServerOnboarding.js
			- stateless.js

	-	Index.js
	-	Index.css
	-	ServiceWorker.js

-	.gitignore
-	build-production.bat
-	package.json
-	package-lock.json
-	README.md
-	start-project.bat

