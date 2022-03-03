(function (window) {

	'use strict';

	class Preloader {

		/**
		 * The constructor function creates a new object and assigns the value of the parameter to the new
		 * object
		 * @param zellige - The element that will be used as the container for the modal.
		 */

		constructor(zellige) {
			this.zellige = zellige;
			this.elements = {};
			this.events = {
				// opened: (function)
				// closer: (function)
			};
		}

		/**
		 * Get the value of the zellige property
		 * @returns The zellige property is being returned.
		 */

		getZellige() {
			return this.zellige;
		}

		/**
		 * It sets the event handler for the opened event.
		 * @param func - A function that will be called when the event is triggered.
		 * @returns The object itself.
		 */

		setEventShow(func) {
			if (typeof func === 'function')
				this.events.opened = func.bind(this);
			return this;
		}

		/**
		 * Get the event that is currently showing
		 * @returns The event that was opened.
		 */

		getEventShow() {
			if (this.events.hasOwnProperty('opened')) return this.events.opened;
			return null;
		}

		/**
		 * It sets the function that will be called when the user clicks the close button.
		 * @param func - A function that will be called when the event is triggered.
		 * @returns The object itself.
		 */

		setEventHide(func) {
			if (typeof func === 'function')
				this.events.closer = func.bind(this);
			return this;
		}

		/**
		 * Get the event handler for the event that closes the dialog
		 * @returns The closer event.
		 */

		getEventHide() {
			if (this.events.hasOwnProperty('closer')) return this.events.closer;
			return null;
		}

		/**
		 * Create a div element with the class name "preloader" and return it
		 * @returns The preloader element.
		 */

		getPreloader() {
			if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
			this.elements.preloader = document.createElement('div');
			this.elements.preloader.className = 'preloader';
			return this.elements.preloader;
		}

		/**
		 * Create a spinner if it doesn't exist, and return it
		 * @returns The spinner element.
		 */

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

		/**
		 * Creates a spinner and appends it to the preloader
		 * @returns The object itself..
		 */

		showSpinner() {
			let spinner = this.getSpinner();
			this.getPreloader().appendChild(spinner);
			return this;
		}

		/**
		 * *Hide the spinner.*
		 * @returns The object itself..
		 */
		
		hideSpinner() {
			let spinner = this.getSpinner();
			window.Mosaic.removeElementDOM(spinner);
			return this;
		}

		/**
		 * Show the preloader
		 * @returns The object itself..
		 */

		show() {
			let zellige = this.getZellige().out(),
				preloader = this.getPreloader();

			if (false === (zellige instanceof HTMLElement)) return true;
			zellige.appendChild(preloader);
			let event = this.getEventShow();
			if (typeof event === 'function') event.call(this);

			return this;
		}

		/**
		 * Hide the preloader
		 * @returns The instance of the Mosaic object.
		 */
		
		hide() {
			let preloader = this.getPreloader(),
				event = this.getEventHide();

			window.Mosaic.removeElementDOM(preloader);
			if (typeof event === 'function') event.call(this);

			return this;
		}

		/**
		 * Returns a boolean value indicating whether the preloader is currently visible
		 * @returns The status of the preloader.
		 */

		status() {
			return this.getPreloader().parentNode !== null;
		}
	}

	class Nav {

		/**
		 * The constructor function creates a new object and assigns the value of the parameter to the new
		 * object
		 * @param zellige - The name of the class.
		 */

		constructor(zellige) {
			this.zellige = zellige;
			this.elements = {};
		}

		/**
		 * Get the value of the zellige property
		 * @returns The zellige property is being returned.
		 */

		getZellige() {
			return this.zellige;
		}

		/**
		 * * Create a wrapper element if it doesn't exist
		 * @returns The wrapper element.
		 */

		getWrapper() {
			if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
			this.elements.wrapper = document.createElement('nav');
			this.elements.wrapper.className = 'pure-u-24-24';
			return this.elements.wrapper;
		}

		/**
		 * * Create an icon element if it doesn't exist
		 * @returns The icon element.
		 */

		getIcon() {
			if (this.elements.hasOwnProperty('icon')) return this.elements.icon;
			let wrapper = this.getWrapper();
			this.elements.icon = document.createElement('i');
			this.elements.icon.className = 'icon material-icons';
			wrapper.insertBefore(this.elements.icon, wrapper.firstChild);
			return this.elements.icon;
		}

		/**
		 * Set the icon of the card to the specified material icon
		 * @param material - The material to set the icon to.
		 * @returns The object itself.
		 */

		setIcon(material) {
			let icon = this.getIcon();
			icon.innerText = material;
			return this;
		}

		/**
		 * Create a new HTML element, and add it to the DOM
		 * @returns The title of the question.
		 */

		getTitle() {
			if (this.elements.hasOwnProperty('title')) return this.elements.title;
			this.elements.title = document.createElement('h2');
			this.getWrapper().appendChild(this.elements.title);
			return this.elements.title;
		}

		/**
		 * Set the title of the page
		 * @param text - The text to be displayed in the title bar.
		 * @returns The object itself.
		 */

		setTitle(text) {
			let title = this.getTitle(),
				node = document.createTextNode(text);

			title.innerHTML = '';
			title.appendChild(node);
			return this;
		}

		/**
		 * Returns the JavaScript representation of the object
		 * @returns The getWrapper() method returns the wrapper element.
		 */

		out() {
			return this.getWrapper();
		}
	}

	class Zellige {

		/**
		 * The constructor function creates an object that contains the column and its elements
		 * @param column - The column object that this element is a part of.
		 */

		constructor(column) {
			this.column = column;
			this.elements = {};
			this.elements.nav = new window.Mosaic.Column.Zellige.Nav(this);
			this.elements.preloader = new window.Mosaic.Column.Zellige.Preloader(this);
		}

		/**
		 * Get the column number of the current cell
		 * @returns The column name.
		 */

		getColumn() {
			return this.column;
		}

		/**
		 * Get the navigation element
		 * @returns The nav element.
		 */

		getNav() {
			return this.elements.nav;
		}

		/**
		 * Get the preloader element
		 * @returns The preloader element.
		 */

		getPreloader() {
			return this.elements.preloader;
		}

		/**
		 * Create a new paragraph element and return it
		 * @returns The content of the paragraph.
		 */

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			this.elements.content = document.createElement('p');
			return this.elements.content;
		}
		
		/** 
		 * *This function pushes content to the end of the content div.*
		 * @param content - The content to be added to the dialog.
		 * @returns The current object.
		 */

		pushContent(content) {
			this.getContent().appendChild(content);
			return this;
		}

		/**
		 * * If the article already has a description, return it.
		 * * Otherwise, create a new description element and insert it before the content element.
		 * @returns The description element.
		 */

		getDescription() {
			if (this.elements.hasOwnProperty('description')) return this.elements.description;
			this.elements.description = document.createElement('p');
			this.getArticle().insertBefore(this.elements.description, this.getContent());
			return this.elements.description;
		}


		/**
		 * Set the description of the current node
		 * @param text - The text to be displayed in the description.
		 * @returns Nothing.
		 */

		setDescription(text) {
			let description = this.getDescription(),
				node = document.createTextNode(text);

			description.innerHTML = '';
			description.appendChild(node);
			return this;
		}

		/**
		 * Get the article element
		 * @returns The article element.
		 */

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

		/**
		 * Returns the article of the noun
		 * @returns The article that was created.
		 */
		out() {
			return this.getArticle();
		}
	}

	class Column {

		/**
		 * It creates a new instance of the class.
		 * @param mosaic - The mosaic object that this object belongs to.
		 */

		constructor(mosaic) {
			this.mosaic = mosaic;
			this.elements = {};
			this.elements.zelliges = [];
		}

		/**
		 * Get the mosaic object
		 * @returns The mosaic object.
		 */

		getMosaic() {
			return this.mosaic;
		}

		/**
		 * Get the zelliges property of this object
		 * @returns The elements of the zelliges array.
		 */

		getZelliges() {
			return this.elements.zelliges;
		}

		/**
		 * Create a section element if it doesn't already exist
		 * @returns The section element.
		 */

		getSection() {
			if (this.elements.hasOwnProperty('section')) return this.elements.section;
			this.elements.section = document.createElement('section');
			return this.elements.section;
		}

		/**
		 * Set the class name of the section element
		 * @param style - The CSS class name to apply to the section.
		 * @returns The object itself.
		 */

		setClassName(style) {
			this.getSection().className = style;
			return this;
		}

		/**
		 * * Create a new Zellige object and add it to the list of Zelliges in the Column
		 * @returns The new zellige object.
		 */

		addZellige() {
			let zellige = new window.Mosaic.Column.Zellige(this);
			this.getZelliges().push(zellige);
			this.getSection().appendChild(zellige.out());
			return zellige;
		}

		/**
		 * Get the zellige at the given index
		 * @param index - The index of the zellige to return.
		 * @returns The zellige at the given index.
		 */

		getZellige(index) {
			let zelliges = this.getZelliges();
			if (zelliges.hasOwnProperty(index)) return zelliges[index];
			return null;
		}
		
		/**
		 * Returns the section of the page that the current element is in
		 * @returns The getSection() method returns the section object.
		 */

		out() {
			return this.getSection();
		}
	}

	class Mosaic {

		/**
		 * The constructor function creates an object that has a property called elements. 
		 * The elements property has a property called columns. 
		 * The columns property is an array. 
		 * The constructor function also creates a property called size. 
		 * The size property is set to 24
		 */

		constructor() {
			this.debug = true;
			this.elements = {};
			this.elements.columns = [];
			this.references = {};
			this.size = 24;
		}

		/**
		 * Set the debug status of the class
		 * @param status - Boolean value indicating whether or not to turn on debug mode.
		 * @returns The debug status of the object.
		 */

		setDebug(status) {
			this.debug = status;
			return this;
		}

		/**
		 * Get the current debug status value of the session
		 * @returns The debug value.
		 */

		getDebug() {
			return this.debug;
		}

		/**
		 * Set the size of the object
		 * @param size - The size to set to the object.
		 * @returns The object itself.
		 */

		setSize(size) {
			this.size = size;
			return this;
		}

		/**
		 * Get the size of the object
		 * @returns The size of the linked object.
		 */

		getSize() {
			return this.size;
		}

		/**
		 * Get the columns of the current table
		 * @returns The columns of the table.
		 */

		getColumns() {
			return this.elements.columns;
		}

		/**
		 * Create a div wrapper for the mosaic
		 * @returns The wrapper element.
		 */

		getWrapper() {
			if (this.elements.hasOwnProperty('wrapper')) return this.elements.wrapper;
			let size = this.getSize();
			this.elements.wrapper = document.createElement('div');
			this.elements.wrapper.className = 'mosaic pure-u-' + size.toString() + '-24';
			return this.elements.wrapper;
		}

		/**
		 * Create a new column and append it to the mosaic
		 * @returns The column that was just added to the mosaic.
		 */

		addColumn() {
			let column = new window.Mosaic.Column(this);
			this.getColumns().push(column);
			this.getWrapper().appendChild(column.out());
			return column;
		}

		/**
		 * Get the column at the specified index
		 * @param index - The index of the column to return.
		 * @returns The column object.
		 */

		getColumn(index) {
			let columns = this.getColumns();
			if (columns.hasOwnProperty(index)) return columns[index];
			return null;
		}

		/**
		 * Find the closest attribute to the target element
		 * @param target - The element to start searching from.
		 * @param attribute - The attribute to search for.
		 * @param html - If true, the attribute is searched for in the HTML source code.
		 * @returns The closest attribute.
		 */

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

		/**
		 * Remove the element from the DOM
		 * @param element - The element to remove from the DOM.
		 * @returns The return value is a boolean value.
		 */

		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}

		/**
		 * This function returns the HTML for the JavaScript output
		 * @returns The wrapper div.
		 */

		out() {
			this.resize();
			return this.getWrapper();
		}

		/**
		 * * Resize the columns of the grid based on the number of columns
		 */
		
		resize() {
			let columns = this.getColumns();
			try {
				if (columns.length > 24) throw 'You cannot have more than 24 columns';

				let length = columns.length - 1;
				while (24 % ++length != 0 && length < 24);

				let grid = 24 / length, difference = 24 - (grid * columns.length);

				for (let item = 0; item < columns.length; item++) {
					let add = item == 0 ? grid + difference : grid;
					columns[item].setClassName('pure-u-24-24 pure-u-lg-' + add.toString() + '-24');
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