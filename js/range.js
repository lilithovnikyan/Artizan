$( function() {
    $( "#slider" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) );
  } );
  $( function() {
      var select = $( "#minbeds" );
      var slider = $( "<div id='slider1'></div>" ).insertAfter( select ).slider({
        min: 1,
        max: 6,
        range: "min",
        value: select[ 0 ].selectedIndex + 1,
        slide: function( event, ui ) {
          select[ 0 ].selectedIndex = ui.value - 1;
        }
      });
      $( "#minbeds" ).on( "change", function() {
        slider.slider( "value", this.selectedIndex + 1 );
      });
    } );
    $( function() {
        var select = $( "#minbeds2" );
        var slider = $( "<div id='slider2'></div>" ).insertAfter( select ).slider({
          min: 1,
          max: 6,
          range: "min",
          value: select[ 0 ].selectedIndex + 1,
          slide: function( event, ui ) {
            select[ 0 ].selectedIndex = ui.value - 1;
          }
        });
        $( "#minbeds2" ).on( "change", function() {
          slider.slider( "value", this.selectedIndex + 1 );
        });
      } );
