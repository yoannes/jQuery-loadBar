/**
 *
 * jquery.loadBar.js
 * @version: v1.0.2
 * @author: Yoannes Geissler
 *
 * Created by Yoannes Geissler on 2017-03-01. Bugs please mail me at yoannes@gmail.com
 *
 * Copyright 2017 Yoannes
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */


var loadBar = {
   init: function () {
      $('body').append(
         $("<canvas></canvas>", {
            "id": "canvasBar",
            "style": "position: absolute; top: 0; width: 100%; height: "+ this.barHeight +"px; z-index: 9999;"
         })
      );

      this.context = document.getElementById("canvasBar").getContext("2d");
      this.docReady = 1;
   },
   trigger: function (action) {
      if (!this.docReady){ return; }

      if (action == "show") {
         if (this.barOn){ return; }
         this.barOn = 1;

         // SHOW CANVAS
         $("#canvasBar").css("display", "block");

         // BELOW IS OPTIONAL TO DISABLE ALL BUTTONS ON DOCUMENT. COMMENT IF UNNEEDED
         $(".btn").prop("disabled", true);

         this.run();
      }
      else if (action == "hide") {
         this.barOn = null;
         $("#canvasBar").css("display", "none");

         // BELOW IS OPTIONAL TO DISABLE ALL BUTTONS ON DOCUMENT. COMMENT IF UNNEEDED
         $(".btn").prop("disabled", false);
      }
   },
   run: function () {
      var grd = loadBar.context.createLinearGradient(loadBar.gradientStartCnt, 0, loadBar.gradientEndCnt, 0);
      grd.addColorStop(0, loadBar.mainColor);
      grd.addColorStop(0.5, loadBar.stripColor);
      grd.addColorStop(1, loadBar.mainColor);
      loadBar.context.fillStyle = grd;
      loadBar.context.fillRect(0, 0, 300, 300);

      if (loadBar.gradientStartCnt > 300) {
         loadBar.gradientEndCnt += loadBar.barSpeed;

         if (loadBar.gradientEndCnt > 300) {
            loadBar.gradientStartCnt = 0;
            loadBar.gradientEndCnt = 0;
         }
      }else{
         loadBar.gradientStartCnt += loadBar.barSpeed;
      }

      if (loadBar.barOn) {
         setTimeout(loadBar.run, 20);
      }
   },
   context: null,
   docReady: null,
   barOn: null,
   colorStopCnt: 0,
   gradientStartCnt: 0,
   gradientEndCnt: 0,
   mainColor: "red",
   stripColor: "green",
   barSpeed: 5,
   barHeight: 5
};

$(document).ready(function () {
   loadBar.init();
});
