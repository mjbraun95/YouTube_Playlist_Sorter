const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.target.id === 'playlists') {
        sortPlaylistsAlphabetically();
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
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
  