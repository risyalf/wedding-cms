window.showLoading = () => {
  document.getElementById('global-loading')?.classList.remove('hidden');
};

window.hideLoading = () => {
  document.getElementById('global-loading')?.classList.add('hidden');
};
  