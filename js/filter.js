boysen
  .filter('replace', [function () {
    return function (input, from, to) {
      if(input === undefined) {
        return;
      }

      var regex = new RegExp(from, 'g');
      return input.replace(regex, to);
    };
  }])

  .filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
  })

  .filter('removeSpacesThenUppercase', function () {
    return function (text) {
      return text.replace(/\W+(.)/g, function(match, chr){
          return chr.toUpperCase();
      });
    };
  })

  .filter('splitCamelCase', [function () {
    return function (input) {
      if (typeof input !== "string") {
        return input;
      }
      return input.split(/(?=[A-Z])/).join(' ');
    };
  }])

  .filter('join', function () {
    return function join(array, separator, prop) {
        if (!Array.isArray(array)) {
			return array; // if not array return original - can also throw error
        }

        return (!!prop ? array.map(function (item) {
            return item[prop];
        }) : array).join(separator);
    };
  })
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  })
  .filter('genderFilter', function() {
    return function(text) {
      if(text != null){
        var allowedGender = ['male', 'female'];
        if(allowedGender.indexOf(text.toLowerCase()) == -1){
          return "Not Given";
        }
        return text;
      }
      else{
        return "Not Given";
      }
    };
  })
  .filter('birthyearFilter', function() {
    return function(text) {
      if(text % 1 === 0){
        return text;
      }
      return "Not Given";
    };
  })
  .filter('genericServices',function(){
    return function(sec){
      return moment().startOf('day')
      .seconds(sec)
      .format('H:mm:ss');
    }
  });