function AdicionarJogador() {
  const posicaoJogador = document.getElementById("posicaoJogador").value;
  const nomeJogador = document.getElementById("nomeJogador").value;
  const numeroJogador = document.getElementById("numeroJogador").value;

  const listagemJogadores = document.getElementById("escalacao");

  const adicionar = confirm(
    posicaoJogador + "\n" + nomeJogador + "\n" + numeroJogador
  );

  if (adicionar) {
    const itemJogador = document.createElement("li");
    itemJogador.id = "jogador" + numeroJogador;
    itemJogador.innerText =
      posicaoJogador + ": " + nomeJogador + " (" + numeroJogador + ")";

    listagemJogadores.appendChild(itemJogador);

    document.getElementById("posicaoJogador").value = "";
    document.getElementById("nomeJogador").value = "";
    document.getElementById("numeroJogador").value = "";
  } else {
    document.getElementById("posicaoJogador").value = "";
    document.getElementById("nomeJogador").value = "";
    document.getElementById("numeroJogador").value = "";
  }
}

function RemoverJogador() {
  const numeroJogador = document.getElementById("jogadorRemovido").value;
  const jogadorRemovido = document.getElementById("jogador" + numeroJogador);

  const remover = confirm(
    "Remover o jogador: " + jogadorRemovido.innerText + "?"
  );

  if (remover) {
    document.getElementById("escalacao").removeChild(jogadorRemovido);
    document.getElementById("jogadorRemovido").value = "";
  } else {
    document.getElementById("jogadorRemovido").value = "";
  }
}
