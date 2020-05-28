export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

export const setLocalStorageItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageItem = key => {
  const data = localStorage.getItem(key) || null;
  return JSON.parse(data);
};