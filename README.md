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
