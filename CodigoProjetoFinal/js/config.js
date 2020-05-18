$(function() {
	cart({

        // array representando o formato e as colunas do carrinho.
	    cartColumns: [
	        { attr: "nome" , label: "Nome" },
	        { attr: "preco" , label: "Preco", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantidade" , label: "Quantidade" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remove" , label: false }
	    ],

        // "div" ou "table" - constrói o carrinho como uma tabela ou coleção de divs
	    cartStyle: "div",

        // como fazer o checkout.
	    checkout: {
	        type: "PayPal" ,
	        email: "you@yours.com"
	    },

        // definir a moeda.
	    currency: "R$",

        // coleção de dados arbitrários.
        // como informações do cliente
	    data: {},


	    language: "portuguese-br",


	    excludeFromCheckout: [
	    	'quantidade',
	    	'thumb'
	    ],

        // função personalizada para adicionar custo de envio
	    shippingCustom: null,


	    shippingFlatRate: 0,

        // envio adicionado com base nesse valor multiplicado pela quantidade do carrinho
	    shippingQuantityRate: 0,

        // envio adicionado com base nesse valor multiplicado pelo subtotal do carrinho
	    shippingTotalRate: 0,

        // taxa de imposto aplicada ao subtotal do carrinho
	    taxRate: 0,

        // se houver imposto deve ser aplicado ao envio
	    taxShipping: false,


	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});

	store.init({

        // marca pode ser um URL de texto ou imagem
		brand : "Bifão Linguiça",

        // número de produtos por linha (aceita 1, 2 ou 3)
		numColumns : 3,

        // nome do arquivo JSON, localizado na raiz do diretório
		JSONFile : "products.json"

	});

});

$(function(){
	var operacao = "A"; //"A"=Adição
	var indice_selecionado = -1; //Índice do item selecionado na lista
	var tbAvaliacao = localStorage.getItem("tbAvaliacao");// Recupera os dados armazenados
	tbAvaliacao = JSON.parse(tbAvaliacao); // Converte string para objeto
	if(tbAvaliacao == null) // Caso não haja conteúdo, iniciamos um vetor vazio
		tbAvaliacao = [];
});

function Adicionar(){
	const nome = document.getElementById("nome");
	const nota = document.getElementById("nota");
	const contato = document.getElementById("contato");
	const sugestao = document.getElementById("sugestao");


	var avaliacao = JSON.stringify({
		// language=JQuery-CSS
		//Nome     : $('#nome').val(),
		//Nota   : $('#nota').val(),
		//Contato : $('#contato').val(),
		//Sugestao    : $('#sugestao').val()
	});
	const nomes = nome.value;
	const notas = nota.value;
	const contatos = contato.value;
	const sugestoes = sugestao.value;

	console.log(nomes);
	console.log(notas);
	console.log(contatos);
	console.log(sugestoes);

	alert('Avaliação enviada com Sucesso!\n'+'Nome: '+nomes+'\nNota: '+notas+'\nDeseja Contato: '+contatos+'\nSugestão: '+sugestoes+'');
	tbAvaliacao.push(avaliacao);
	localStorage.setItem("tbAvaliacao", JSON.stringify(tbAvaliacao));
}

//function Listar(){
	//for(var i in tbAvaliacao){
		//var cli = JSON.parse(tbAvaliacao[i]);
		//$("#formId tbody").append(['{"<tr>"+""+"<td>"+cli.Nome+"</td>"+""+"<td>"+cli.Nota+"</td>"+"<td>"+cli.Contato+"</td>"+"<td>"+cli.Sugestao+"</td>"+"</tr>"}']);
	//}
//}

$("#formId").on("submit",function(){
		if(operacao === "A")
		return Adicionar();
	else
		return Error();
})
