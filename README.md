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
- [window.Mosaic](https://github.com/energia-source/widget-mosaic/tree/main/lib)
- [window.Mosaic.Column](https://github.com/energia-source/widget-mosaic/tree/main/lib)
- [window.Mosaic.Column.Zellige](https://github.com/energia-source/widget-mosaic/tree/main/lib)
- [window.Mosaic.Column.Zellige.Nav](https://github.com/energia-source/widget-mosaic/tree/main/lib)
- [window.Mosaic.Column.Zellige.Preloade](https://github.com/energia-source/widget-mosaic/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-xkr/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-xkr/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details