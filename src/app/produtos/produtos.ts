export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    qtdEst: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    qtd: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Taco", preco: 123.00, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Taco.jpg", qtdEst: 10 },
    { id: 2, descricao: "Burrito", preco: 456.50, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Burrito.jpg", qtdEst: 100 },
    { id: 3, descricao: "Chilli", preco: 789.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Chilli.jpg", qtdEst: 190 },
    { id: 4, descricao: "Chilli Fries", preco: 1011.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Chilli Fries.jpg", qtdEst: 15 },
    { id: 5, descricao: "Guacamole", preco: 1213.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Guacamole.jpg", qtdEst: 46 },
    { id: 6, descricao: "Pizza", preco: 1415.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Pizza.jpg", qtdEst: 18 },
    { id: 7, descricao: "Calzone", preco: 1617.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Calzone.jpg", qtdEst: 27 },
    { id: 8, descricao: "Spaghetti Bolognesa", preco: 1819.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Spaghetti Bolognesa.jpg", qtdEst: 59 },
    { id: 9, descricao: "Fettuccini", preco: 2021.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Fettuccine.jpg", qtdEst: 46 },
    { id: 10, descricao: "Hamburguer", preco: 2223.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Hamburger.jpg", qtdEst: 20 },
    { id: 11, descricao: "Hot Dog", preco: 2425.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Hot Dog.jpg", qtdEst: 30 },
    { id: 12, descricao: "Feijoada", preco: 147.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Feijoada.jpg", qtdEst: 37 },
    { id: 13, descricao: "Bife Parmeggiana", preco: 258.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Bife Parmegiana.jpg", qtdEst: 147 },
    { id: 14, descricao: "Frango Empanado", preco: 369.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Frango Empanado.jpg", qtdEst: 159 },
    { id: 15, descricao: "Mac 'n Cheese", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "../../assets/imagens/Mac 'n Cheese.jpg", qtdEst: 162 }
]
