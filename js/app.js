// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
	id: 'com.app',
	root: '#app',
	theme: 'md',
	view: {
		pushState: true
	},
	cache: false,
	cacheDuration: 0,
	modalTitle: 'Order',
	panel: {
		swipe: true,
	},
	routes: [
		{
			path: '/home/',
			url: 'index.html',
			name: 'home',
		},
		{
			path: '/sobrenosotros/',
			url: 'sobrenosotros.html',
			name: 'sobrenosotros',
		},
		{
			path: '/tienda/',
			url: 'tienda.html',
			name: 'tienda',
		},
		{
			path: '/servicios/',
			url: 'servicios.html',
			name: 'servicios',
		},
		{
			path: '/bienestar/',
			url: 'bienestar.html',
			name: 'bienestar',
		},

		{
			path: '/comunidad/',
			url: 'comunidad.html',
			name: 'comunidad',
		},
		{
			path: '/adopcion/',
			url: 'adopcion.html',
			name: 'adopcion',
		}
	],
	popup: {
		closeOnEscape: true,
		backdrop: false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});
