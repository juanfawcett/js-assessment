asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return new Promise((resolve, reject)=>{
        if(value === true){
          resolve(true);
        }else if(value === 'success'){
          resolve('success');
        }else{
          reject('error');
        }
    });
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {

    return new Promise((resolve, reject)=>{

      var request = new XMLHttpRequest();
 
      request.open('Get', url);
      request.send();

      request.onreadystatechange = ()=>{
        if(request.readyState == 4){
          if(request.responseText){
            let res = [],
            arr = JSON.parse(request.responseText).people.sort((a,b)=>{
              if(a.name > b.name){
                return 1;
              }else if(a.name < b.name){
                return -1;
              }else{
                return 0;
              }
            });
            arr.forEach((item)=>{
              res.push(item.name);
            });
            resolve(res);
          }else{
            reject(request.status);
          }
        } 
      }
    });
  },
};
