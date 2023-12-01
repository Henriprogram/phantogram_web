function showSongs(album) {
    const songs = album.querySelector('.songs');
    songs.style.display = (songs.style.display === 'none') ? 'block' : 'none';
  }
  
  // Adicionar a lógica para reproduzir as músicas ao clicar
  const musicas = document.querySelectorAll('.songs p');
  musicas.forEach((musica, index) => {
    musica.setAttribute('id', `musica-${index + 1}`);
    musica.addEventListener('click', () => {
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.src = `/caminho/para/audio-${index + 1}.mp3`; // Defina o caminho para cada áudio
      audioPlayer.play(); // Inicia a reprodução do áudio
    });
  });
  // Adicione o efeito de escala ao passar o mouse sobre os álbuns
const albumItems = document.querySelectorAll('.album-item');

albumItems.forEach(album => {
  album.addEventListener('mouseenter', () => {
    album.style.transform = 'scale(1.1)';
  });

  album.addEventListener('mouseleave', () => {
    album.style.transform = 'scale(1)';
  });
});
