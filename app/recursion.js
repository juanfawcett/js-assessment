recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {

    var res = data.files;

    if(data.subDirs.length == 0) return data.files;
    if(dirName !== undefined){
      if(dirName == data.dirName){
        for(let i=0; i<data.subDirs.length; i++){
          res = res.concat(listFiles(data.subDirs[i]));
        }
        return res;
      }else{
        if(data.subDirs.length == 0) return [];
        for(let i=0; i<data.subDirs.length; i++){
          res = listFiles(data.subDirs[i], dirName);
          if(res) break;
        }
        return res;
      }
    }else{
      for(let i=0; i<data.subDirs.length; i++){
        res = res.concat(listFiles(data.subDirs[i]));
      }
      return res;
    }
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
