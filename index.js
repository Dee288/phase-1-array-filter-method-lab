// Code your solution here
    function findMatching(drivers, names){
      return drivers.filter(function(nameString){
       return nameString.toLowerCase() === names.toLowerCase()
      })
  }
  
  function fuzzyMatch(drivers, string){
      return drivers.filter(function(newString){
       return newString.toLowerCase().indexOf(string.toLowerCase()) === 0
      })
    }
        
  function matchName(drivers, string){
      return drivers.filter(function(record){
          return record.name === string;
      })
  }