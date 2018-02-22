# webpack static pages template

If you are building **simple** static pages, such as the activities page, this template can help to minify or organize static resources.

## Example

### You write HTML

```html
<!doctype html>
<html>
<head>
  <title>Home</title>
  <link href="css/global.less" type="text/css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <img src="imgs/webpack.png" />
    <hr>
    <p>The current time is a <time id="nowtime"></time></p>
  </div>
  <script src="js/time.js"></script>
</body>
</html>
```

### After build

```html
<!doctype html>
<html>
<head>
  <title>Home</title>
  <link href="assets/global.89c970.min.css" type="text/css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <img src="imgs/webpack.f78661.png" />
    <hr>
    <p>The current time is a <time id="nowtime"></time></p>
  </div>
  <script src="assets/time.208f6e.min.js"></script>
</body>
</html>
```

You can minimize any resource such as html/css/js/png

## Usage

Start with your project from this template, clone repository, or [download](https://github.com/joaner/webpack-static-pages-template/archive/master.zip).

```bash
git clone https://github.com/joaner/webpack-static-pages-template.git myapp
rm -rf .git

# edit package name, description
vi package.json
```

let's start:
```bash
npm install
npm run dev

# static assets in dist/
npm run build
```

## TODO

Behind will use [yeoman](http://yeoman.io/) generate templates, you can set the `package.json` with command line parameters.
