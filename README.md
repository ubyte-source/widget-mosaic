# Documentation widget-mosaic

Widget Javascript Mosaic is a library used to divide the page in different containers with other boxes as children.

## Usage

So the basic setup looks something like this for perform parallel delete actions:

```

let mosaic = new Mosaic();

```

Add on your mosaic as much zellige element as you want.
If you have a moore mosaic element in you web page it's recommended to use the "references" property to istantiate each zellige.

```

mosaic.reference.overview = mosaic.addColumn().addZellige();
mosaic.reference.overview.pushContent(<HTMLElement>);
mosaic.reference.overview.getNav().setTitle(window.page.getTranslate('mosaic.status', ''));
mosaic.reference.overview.getNav().setIcon('pie_chart');

```
Since the Zellige class load its elements in asyncronous mode, it's recommendend to use the Preloader class of Mosaic to help the user to know that the data are loading. Call the Preloader method 'hide()' at the end of a function to remove it.

```

mosaic.reference.issue = mosaic.addColumn().addZellige();
mosaic.reference.issue.pushContent(<HTMLElement>);
mosaic.reference.issue.getPreloader().show().showSpinner();
mosaic.reference.issue.getNav().setTitle(window.page.getTranslate('mosaic.issue'));
mosaic.reference.issue.getNav().setIcon('sync_problem');

let timer = setTimeout(function (issue) {
  issue.getPreloader().hide();
}, 5000, mosaic.reference.issue);

document.appendChild(mosaic.out());

```

## Structure

library:
- [window.Mosaic](https://github.com/energia-source/widget-mosaic#class-windowmosaic-usable-methods)
- [window.Mosaic.Column](https://github.com/energia-source/widget-mosaic#class-windowmosaiccolumn-usable-methods)
- [window.Mosaic.Column.Zellige](https://github.com/energia-source/widget-mosaic#class-windowmosaiccolumnzellige-usable-methods)
- [window.Mosaic.Column.Zellige.Nav](https://github.com/energia-source/widget-mosaic#class-windowmosaiccolumnzelligenav-usable-methods)
- [window.Mosaic.Column.Zellige.Preloade](https://github.com/energia-source/widget-mosaic#class-windowmosaiccolumnzelligepreloader-usable-methods)

<br>

#### ***Class window.Mosaic usable methods***

##### `constructor()`

The constructor function creates an object that has a property called elements. The elements property has a property called columns. The columns property is an array. The constructor function also creates a property called size. The size property is set to 24

##### `setDebug(status)`

Set the debug status of the class

 * **Parameters:** `status` — Boolean value indicating whether or not to turn on debug mode.
 * **Returns:** The debug status of the object.

##### `getDebug()`

Get the current debug status value of the session

 * **Returns:** The debug value.

##### `setSize(size)`

Set the size of the object

 * **Parameters:** `size` — The size to set to the object.
 * **Returns:** The object itself.

##### `getSize()`

Get the size of the object

 * **Returns:** The size of the linked object.

##### `getColumns()`

Get the columns of the current table

 * **Returns:** The columns of the table.

##### `getWrapper()`

Create a div wrapper for the mosaic

 * **Returns:** The wrapper element.

##### `addColumn()`

Create a new column and append it to the mosaic

 * **Returns:** The column that was just added to the mosaic.

##### `getColumn(index)`

Get the column at the specified index

 * **Parameters:** `index` — The index of the column to return.
 * **Returns:** The column object.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to start searching from.
   * `attribute` — The attribute to search for.
   * `html` — If true, the attribute is searched for in the HTML source code.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

##### `out()`

This function returns the HTML for the JavaScript output

 * **Returns:** The wrapper div.

##### `resize()`

* Resize the columns of the grid based on the number of columns

<br>

#### ***Class window.Mosaic.Column usable methods***

##### `constructor(mosaic)`

It creates a new instance of the class.

 * **Parameters:** `mosaic` — The mosaic object that this object belongs to.

##### `getMosaic()`

Get the mosaic object

 * **Returns:** The mosaic object.

##### `getZelliges()`

Get the zelliges property of this object

 * **Returns:** The elements of the zelliges array.

##### `getSection()`

Create a section element if it doesn't already exist

 * **Returns:** The section element.

##### `setClassName(style)`

Set the class name of the section element

 * **Parameters:** `style` — The CSS class name to apply to the section.
 * **Returns:** The object itself.

##### `addZellige()`

* Create a new Zellige object and add it to the list of Zelliges in the Column

 * **Returns:** The new zellige object.

##### `getZellige(index)`

Get the zellige at the given index

 * **Parameters:** `index` — The index of the zellige to return.
 * **Returns:** The zellige at the given index.

##### `out()`

Returns the section of the page that the current element is in

 * **Returns:** The getSection() method returns the section object.

<br>

#### ***Class window.Mosaic.Column.Zellige usable methods***

##### `constructor(column)`

The constructor function creates an object that contains the column and its elements

 * **Parameters:** `column` — The column object that this element is a part of.

##### `getColumn()`

Get the column number of the current cell

 * **Returns:** The column name.

##### `getNav()`

Get the navigation element

 * **Returns:** The nav element.

##### `getPreloader()`

Get the preloader element

 * **Returns:** The preloader element.

##### `getContent()`

Create a new paragraph element and return it

 * **Returns:** The content of the paragraph.

##### `pushContent(content)`

*This function pushes content to the end of the content div.*

 * **Parameters:** `content` — The content to be added to the dialog.
 * **Returns:** The current object.

##### `getDescription()`

* If the article already has a description, return it. * Otherwise, create a new description element and insert it before the content element.

 * **Returns:** The description element.

##### `setDescription(text)`

Set the description of the current node

 * **Parameters:** `text` — The text to be displayed in the description.
 * **Returns:** Nothing

##### `getArticle()`

Get the article element

 * **Returns:** The article element.

##### `out()`

Returns the article of the noun

 * **Returns:** The article that was created.

<br>

#### ***Class window.Mosaic.Column.Zellige.Nav usable methods***

##### `constructor(zellige)`

The constructor function creates a new object and assigns the value of the parameter to the new object

 * **Parameters:** `zellige` — The name of the class.

##### `getZellige()`

Get the value of the zellige property

 * **Returns:** The zellige property is being returned.

##### `getWrapper()`

* Create a wrapper element if it doesn't exist

 * **Returns:** The wrapper element.

##### `getIcon()`

* Create an icon element if it doesn't exist

 * **Returns:** The icon element.

##### `setIcon(material)`

Set the icon of the card to the specified material icon

 * **Parameters:** `material` — The material to set the icon to.
 * **Returns:** The object itself.

##### `getTitle()`

Create a new HTML element, and add it to the DOM

 * **Returns:** The title of the question.

##### `setTitle(text)`

Set the title of the page

 * **Parameters:** `text` — The text to be displayed in the title bar.
 * **Returns:** The object itself.

##### `out()`

Returns the JavaScript representation of the object

 * **Returns:** The getWrapper() method returns the wrapper element.

<br>

#### ***Class window.Mosaic.Column.Zellige.Preloader usable methods***

##### `constructor(zellige)`

The constructor function creates a new object and assigns the value of the parameter to the new object

 * **Parameters:** `zellige` — The element that will be used as the container for the modal.

##### `getZellige()`

Get the value of the zellige property

 * **Returns:** The zellige property is being returned.

##### `setEventShow(func)`

It sets the event handler for the opened event.

 * **Parameters:** `func` — A function that will be called when the event is triggered.
 * **Returns:** The object itself.

##### `getEventShow()`

Get the event that is currently showing

 * **Returns:** The event that was opened.

##### `setEventHide(func)`

It sets the function that will be called when the user clicks the close button.

 * **Parameters:** `func` — A function that will be called when the event is triggered.
 * **Returns:** The object itself.

##### `getEventHide()`

Get the event handler for the event that closes the dialog

 * **Returns:** The closer event.

##### `getPreloader()`

Create a div element with the class name "preloader" and return it

 * **Returns:** The preloader element.

##### `getSpinner()`

Create a spinner if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `showSpinner()`

Creates a spinner and appends it to the preloader

 * **Returns:** The object itself..

##### `hideSpinner()`

*Hide the spinner.*

 * **Returns:** The object itself..

##### `show()`

Show the preloader

 * **Returns:** The object itself..

##### `hide()`

Hide the preloader

 * **Returns:** The instance of the Mosaic object.

##### `status()`

Returns a boolean value indicating whether the preloader is currently visible

 * **Returns:** The status of the preloader.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-xkr/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-xkr/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details