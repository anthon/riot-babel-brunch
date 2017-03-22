exports.config =

	npm:
		globals:
			riot: 'riot'

	modules:
		autoRequire:
			'js/vendor.js': ['riot']
			'js/app.js': ['scripts/index']

	conventions:
		ignored: [
			/[\\/]_/,
			/\-test.js$/
		]

	files:
		javascripts:
			joinTo:
				'js/vendor.js': /^node_modules/
				'js/app.js': /^(app\/scripts)/
			order:
				after: [
					'app/scripts/index.js'
				]

		stylesheets:
			joinTo:
				'css/main.css': /^app\/styles/

	paths:
		public: '../../public'

	sourceMaps: false

	server:
		port: 1234

	plugins:
		on: ['riot']
		riot:
			pattern: /\.tag$/
			extension: 'tag'
			template: 'jade'
		babel:
			presets: ['latest','es2015-riot']
			pattern: /\.(js|jsx)$/
		autoReload:
			enabled:
				css: on
				js: on
				assets: on
		stylus:
			includeCss: true

	overrides:
		production:
			optimize: false
			sourceMaps: false
			paths:
				public: 'client-production'
			plugins:
				autoReload:
					enabled: false