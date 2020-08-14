var stages = {
    0:{
        descrição: "Boas vindas ", // Colocamos uma descrição apenas para guiar os estágios
        obj: require ('./stages/0')
    },

    1:{
        descrição: "Duvidas", 
        obj: require ('./stages/1')
        },

};

exports.step = stages;

/* Podemos colocar quantos stages for nescessário */