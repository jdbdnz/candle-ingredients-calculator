$(function(){
  function setTitle(quantity8oz, quantity16oz) {
    var title = '';
    if(quantity8oz + quantity16oz == 0) {
      title += 'No ingredients are required to make no candles';
    } else {
        title += 'To create ';

        if(quantity8oz > 0) {
          title += quantity8oz+' x 8oz candles';

          if(quantity16oz > 0) {
            title += ' and ';
          }
        }

        if(quantity16oz > 0) {
          title += quantity16oz+' x 16oz candles';
        }

        title += ' you will need the follow ingredients...';
    }

    $('#title').text(title);
  };

  function rowForIngredient(quantity, description) {
    return "<tr><td>" + quantity + "</td><td>"+ description +"</td></tr>";
  }

  function displayIngredients(quantity8oz, quantity16oz) {
    var waxPounds = ((quantity8oz + quantity16oz * 2) / 3).toFixed(2);
    var fragranceOz = waxPounds;
    var wick10 = quantity8oz;
    var wick2 = quantity16oz * 2;
    var jar8oz = quantity8oz;
    var jar16oz = quantity16oz;

    var html = '';

    html += rowForIngredient(waxPounds, 'lbs of wax');
    html += rowForIngredient(fragranceOz, 'oz of fragrance oil');

    if(wick10 > 0) {
      html += rowForIngredient(wick10, 'eco 10 wicks');
    }

    if(wick2 > 0) {
      html += rowForIngredient(wick2, 'eco 10 wicks');
    }

    if(jar8oz > 0) {
      html += rowForIngredient(jar8oz, '8oz jars');
    }

    if(jar16oz > 0) {
      html += rowForIngredient(jar16oz, '16oz jars');
    }

    $('#ingredients_list').html(html);
  }

  $('#calculate_ingredients').click(function() {
    var quantity8oz = $('#quantity_8oz').val();
    var quantity16oz = $('#quantity_16oz').val();
    setTitle(quantity8oz, quantity16oz);
    displayIngredients(quantity8oz, quantity16oz);
  });


  $('body').css('padding-top', $('.navbar').height());
});
