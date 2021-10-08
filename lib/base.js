(function (window) {

	'use strict';

	class Preloader {

		constructor(zellige) {
			this.zellige = zellige;
			this.elements = {};
			this.events = {
				// opened: (function)
				// closer: (function)
			};
		}

		getZellige() {
			return this.zellige;
		}
		setEventShow(func) {
			if (typeof func === 'function')
				this.events.opened = func.bind(this);
			return this;
		}
		getEventShow() {
			if (this.events.hasOwnProperty('opened')) return this.events.opened;
			return null;
		}
		setEventHide(func) {
			if (typeof func === 'function')
				this.events.closer = func.bind(this);
			return this;
		}
		getEventHide() {
			if (this.events.hasOwnProperty('closer')) return this.events.closer;
			return null;
		}
		getPreloader() {
			if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
			this.elements.preloader = document.createElement('div');
			this.elements.preloader.className = 'preloader';
			return this.elements.preloader;
		}
		getSpinner() {
			if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
			this.elements.spinner = document.createElement('div');
			this.elements.spinner.className = 'spinner';
			for (let item = 0; item < 3; item++) {
				let bounce = document.createElement('div');
				bounce.className = 'bounce-' + item;
				this.elements.spinner.appendChild(bounce);
			}
			return this.elements.spinner;
		}
		showSpinner() {
			let spinner = this.getSpinner();
			this.getPreloader().appendChild(spinner);
			return this;
		}
		hideSpinner() {
			let spinner = this.getSpinner();
			Form.removeElementDOM(spinner);
			return this;
		}
		show() {
			let zellige = this.getZellige().out(),
				preloader = this.getPreloader();

			if (false === (zellige instanceof HTMLElement)) return true;
			zellige.appendChild(preloader);
			let event = this.getEventShow();
			if (typeof event === 'function') event.call(this);

			return this;
		}
		hide() {
			let preloader = this.getPreloader(),
				event = this.getEventHide();

			Form.removeElementDOM(preloader);
			if (typeof event === 'function') event.call(this);

			return this;
		}
		status() {
			return this.getPreloader().parentNode !== null;
		}
	}

	class Nav {

		constructor(zellige) {
			this.zellige = zellige;
			this.elements = {};
		}

		getZellige() {
			return this.zellige;
		}
		getWrapper() {
			if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
			this.elements.wrapper = document.createElement('nav');
			this.elements.wrapper.className = 'pure-u-24-24';
			return this.elements.wrapper;
		}
		getIcon() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			let wrapper = this.getWrapper();
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'icon material-icons';
			wrapper.insertBefore(this.elements.icon, wrapper.firstChild);
			return this.elements.icon;
		}
		setIcon(material) {
			let icon = this.getIcon();
			icon.innerText = material;
			return this;
		}
		getTitle() {
			if (this.elements.hasOwnProperty('title')) return this.elements.title;
			this.elements.title = document.createElement('h2');
			this.getWrapper().appendChild(this.elements.title);
			return this.elements.title;
		}
		setTitle(text) {
			let title = this.getTitle(),
				node = document.createTextNode(text);

			title.innerHTML = '';
			title.appendChild(node);
			return this;
		}
		out() {
			return this.getWrapper();
		}
	}

	class Zellige {

		constructor(column) {
			this.column = column;
			this.elements = {};
			this.elements.nav = new Nav(this);
			this.elements.preloader = new Preloader(this);
		}

		getColumn() {
			return this.column;
		}
		getNav() {
			return this.elements.nav;
		}
		getPreloader() {
			return this.elements.preloader;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			this.elements.content = document.createElement('p');
			return this.elements.content;
		}
		pushContent(content) {
			this.getContent().appendChild(content);
			return this;
		}
		getDescription() {
			if (this.elements.hasOwnProperty('description')) return this.elements.description;
			this.elements.description = document.createElement('p');
			this.getArticle().insertBefore(this.elements.description, this.getContent());
			return this.elements.description;
		}
		setDescription(text) {
			let description = this.getDescription(),
				node = document.createTextNode(text);

			description.innerHTML = '';
			description.appendChild(node);
			return this;
		}
		getArticle() {
			if (this.elements.hasOwnProperty('article')) return this.elements.article;
			let content = this.getContent(),
				nav = this.getNav();

			this.elements.article = document.createElement('article');
			this.elements.article.appendChild(nav.out());
			this.elements.article.appendChild(content);
			this.elements.article.className = 'zellige';

			return this.elements.article;
		}
		out() {
			return this.getArticle();
		}
	}

	class Column {

		constructor(mosaic) {
			this.mosaic = mosaic;
			this.elements = {};
			this.elements.zelliges = [];
		}

		getMosaic() {
			return this.mosaic;
		}
		getZelliges() {
			return this.elements.zelliges;
		}
		getSection() {
			if (this.elements.hasOwnProperty('section')) return this.elements.section;
			this.elements.section = document.createElement('section');
			return this.elements.section;
		}
		setClassName(style) {
			this.getSection().className = style;
			return this;
		}
		addZellige() {
			let zellige = new Zellige(this);
			this.getZelliges().push(zellige);
			this.getSection().appendChild(zellige.out());
			return zellige;
		}
		getZellige(index) {
			let zelliges = this.getZelliges();
			if (zelliges.hasOwnProperty(index)) return zelliges[index];
			return null;
		}
		out() {
			return this.getSection();
		}
	}

	class Mosaic {

		constructor() {
			this.debug = true;
			this.elements = {};
			this.elements.columns = [];
			this.size = 24;
		}

		setDebug(status) {
			this.debug = status;
			return this;
		}
		getDebug() {
			return this.debug;
		}
		setSize(size) {
			this.size = size;
			return this;
		}
		getSize() {
			return this.size;
		}
		getColumns() {
			return this.elements.columns;
		}
		getWrapper() {
			if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
			let size = this.getSize();
			this.elements.wrapper = document.createElement('div');
			this.elements.wrapper.className = 'mosaic pure-u-' + size.toString() + '-24';
			return this.elements.wrapper;
		}
		addColumn() {
			let column = new Column(this);
			this.getColumns().push(column);
			this.getWrapper().appendChild(column.out());
			return column;
		}
		getColumn(index) {
			let columns = this.getColumns();
			if (columns.hasOwnProperty(index)) return columns[index];
			return null;
		}
		static closestAttribute(target, attribute, html) {
			if (typeof attribute === 'undefined'
				|| !attribute.length) return null;

			let result = null, element = target;

			do {
				let tagname = element.tagName.toLowerCase();
				if (tagname === 'body') return null;

				result = element.getAttribute(attribute);
				if (result !== null) {
					result = result.toString();
					if (result.length) break;
				}

				element = element.parentNode;
			} while (element !== null
				|| typeof element === 'undefined');

			if (typeof html === 'undefined'
				|| html !== true) return result;

			return element;
		}
		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}
		out() {
			this.resize();
			return this.getWrapper();
		}
		resize() {
			let columns = this.getColumns();
			try {
				if (columns.length > 24) throw 'You cannot have more than 24 columns';

				let length = columns.length - 1;
				while (24 % ++length != 0 && length < 24);

				let grid = 24 / length, difference = 24 - (grid * columns.length);

				for (let item = 0; item < columns.length; item++) {
					let add = item == 0 ? grid + difference : grid;
					columns[item].setClassName('pure-u-' + add.toString() + '-24');
				}
			}
			catch (message) {
				let debug = this.getDebug();
				if (debug === true) console.log(message);
			}
		}
	}

	window.Mosaic = Mosaic;
	window.Mosaic.Column = Column;
	window.Mosaic.Column.Zellige = Zellige;
	window.Mosaic.Column.Zellige.Nav = Nav;
	window.Mosaic.Column.Zellige.Preloader = Preloader;

})(window);