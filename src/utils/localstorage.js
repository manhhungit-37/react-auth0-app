function setLocalStorageContent(key, value) {
  window.localStorage.setItem(key, value);
}

function getItem(key) {
  return window.localStorage.getItem(key);
}

function removeItem(key) {
  return window.localStorage.removeItem(key);
}

export {
  getItem,
  removeItem,
  setLocalStorageContent
};
