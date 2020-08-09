class LocalStorage {

  get (key) {
    return localStorage && JSON.parse(localStorage.getItem(key));
  }

  set (key, value) {
    localStorage && localStorage.setItem(key, JSON.stringify(value));
  }

  remove (key, value) {
    // if remove func have a value, this method deletes the value from the object
    if (value) {
      const item = JSON.parse(localStorage.getItem(key));

      if (item) {
        delete item[value];
        localStorage.setItem(key, JSON.stringify(item));
      }
  
      // else, this method deletes the all object
    } else {
      localStorage && localStorage.removeItem(key);
    }
  }

  clear () {
    localStorage && localStorage.clear();
  }

}

export default new LocalStorage();