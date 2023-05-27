//const consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/")
  // Essa linha serve para tratar os dados que vem como binário para colocar em JSON
//  .then((reposta) => reposta.json()) 
  // Arraw function que pega a resposta e faz uma condicional com ela
//  .then((r) => {
  // r.erro retorna true ou false dependendo se tiver erro ou não diretamente da API  
//    if(r.erro){
//      console.log(r.erro)
//        throw Error('Esse CEP não existe!')
//    } else {
//      console.log(r)
//   }
//    })
  // catch é para pegar o erro e dar um console.log caso exista o erro  
//  .catch(erro => console.log(erro))
  // finally é o finalmente, ou seja quando acabar a promessa retorna o que estiver ai denro
//  .finally(mensagem => console.log("Processameto concluído"));

const cep = document.getElementById("cep")
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
async function buscaEndereco(cep) {
  let mensagemErro = document.getElementById('erro')
  mensagemErro.innerHTML = ""

  try {
      const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const consultaCEPConvertida = await consultaCEP.json();
      if (consultaCEPConvertida.erro) {
          throw Error('CEP não existente!');
      }

      preencherCampos(consultaCEPConvertida);
  } catch (erro) {
    mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`
      console.log(erro);
  }
}

function preencherCampos(respostaCep) {
  const enderecoInput = document.getElementById('endereco');
  const bairroInput = document.getElementById('bairro')
  const cidadeInput = document.getElementById('cidade')
  const estadoInput = document.getElementById('estado')

  enderecoInput.value = respostaCep.logradouro;
  bairroInput.value = respostaCep.bairro;
  cidadeInput.value = respostaCep.localidade;
  estadoInput.value = respostaCep.uf;
}




