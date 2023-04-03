function sortPlaylistsAlphabetically() {
    const playlists = document.querySelector('#playlists');
    if (playlists) {
      const playlistItems = Array.from(playlists.querySelectorAll('ytd-playlist-add-to-option-renderer'));
      const sortedPlaylistItems = playlistItems.sort((a, b) => {
        const playlistNameA = a.querySelector('#checkbox-label').innerText.toLowerCase();
        const playlistNameB = b.querySelector('#checkbox-label').innerText.toLowerCase();
        return playlistNameA.localeCompare(playlistNameB);
      });
  
      sortedPlaylistItems.forEach(item => {
        playlists.appendChild(item);
      });
    }
  }
  
  function initObserver() {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };
  
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.target.id === 'playlists') {
          sortPlaylistsAlphabetically();
        }
      }
    };
  
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  
  window.addEventListener('yt-navigate-finish', function () {
    initObserver();
  });