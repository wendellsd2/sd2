function chamarBombeiros() {
    document.querySelector('.story').innerHTML = '<p>Você chamou os bombeiros, mas eles estão demorando a chegar. O fogo está se espalhando rapidamente.</p>';
    document.querySelector('.image').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0gn90a00EunponThTF0r2Gw5SR6KDhYFS8LQfN-O4xUVOjLI83ZVxkMJmQ&s';
    document.querySelector('.actions').innerHTML = '<button class="button" onclick="esperarBombeiros()">Esperar pelos bombeiros</button>';
  }
  
  function procurarSaida() {
    document.querySelector('.story').innerHTML = '<p>Você decidiu procurar uma saída segura. A fumaça está densa e a visibilidade é baixa.</p>';
    document.querySelector('.image').src = 'https://s2-g1.glbimg.com/wjNUW0eqHVzc2GLEaUVeT9z3P0I=/0x0:957x1151/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/x/y/ieeBrVRrGHhP5mInFq0A/incendio-casa5.jpeg'
    document.querySelector('.actions').innerHTML = '<button class="button" onclick="tentarSaida()">Seguir para a saída mais próxima</button><button class="button" onclick="quebrarJanela()">Procurar por uma janela para escapar</button>';
  }
  
  function esperarBombeiros() {
    document.querySelector('.story').innerHTML = '<p>Você decide esperar pelos bombeiros. Enquanto aguarda, a fumaça fica cada vez mais densa...</p>';
    document.querySelector('.image').src = 'https://via.placeholder.com/400x300';
    document.querySelector('.actions').innerHTML = '<button class="button" onclick="gameOver()">Continuar esperando</button>';
  }
  
  function tentarSaida() {
    document.querySelector('.story').innerHTML = '<p>Você tenta seguir para a saída mais próxima, mas encontra o caminho bloqueado pelas chamas. É muito perigoso continuar.</p>';
    document.querySelector('.image').src = 'https://via.placeholder.com/400x300';
    document.querySelector('.actions').innerHTML = '<button class="button" onclick="gameOver()">Tentar outro caminho</button>';
  }
  
  function quebrarJanela() {
    document.querySelector('.story').innerHTML = '<p>Você encontra uma janela próxima. Ela está trancada, mas você consegue quebrá-la e escapar para o lado de fora.</p>';
    document.querySelector('.image').src = 'https://via.placeholder.com/400x300';
    document.querySelector('.actions').innerHTML = '<button class="button" onclick="gameOver()">Buscar ajuda do lado de fora</button>';
  }
  
  function gameOver() {
    document.querySelector('.story').innerHTML = '<p>Você não conseguiu escapar a tempo. O fogo consumiu a escola e você não sobreviveu.</p><p>Fim da história.</p>';
    document.querySelector('.image').src = 'https://via.placeholder.com/400x300';
    document.querySelector('.actions').innerHTML = '';
  }
  