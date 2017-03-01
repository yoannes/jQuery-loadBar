# loadBar
Small loading bar on top of screen

![alt tag](http://ingate.cc/img/bar.png)


# How to use
Add `<script src="jquery.loadBar.min.js"></script>` before `</body>`


## Custom settings
Custom settings can be defined on `$(document).ready()`

Background and strip color of the bar(default main = red, strip = green):
```
loadBar.mainColor = 'COLOR';   // Set the main color of the bar
loadBar.stripColor = 'COLOR';  // Set the color of the strip
loadBar.barSpeed = 5;          // Set the speed of the bar
loadBar.barHeight = 5;         // Set the height of the bar in px
```


## How to use
```
loadBar.trigger('show'); // Show the bar
loadBar.trigger('hide'); // Hide the bar
```


## Example
```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>loadBar</title>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>

<br /><br />
<p>Click the buttons below to see it working:</p>
<button onclick="showBar()">on</button>
<button onclick="hideBar()">off</button>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="jquery.loadBar.min.js"></script>
<script>
   function showBar() {
      loadBar.trigger('show');
   }
   function hideBar() {
      loadBar.trigger('hide')
   }
</script>
</body>
</html>

```
