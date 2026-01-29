const categorias = [
    {
        id: "melhor-filme",
        titulo: "Melhor Filme",
        candidatos: [
            { id: "101", nome: "Bugonia", sinopse: "Yorgos Lanthimos dirige Emma Stone em uma trama onde dois conspiracionistas sequestram uma executiva acreditando que ela é uma alienígena.", imagem: "assets/img/bugonia.webp" },
            { id: "102", nome: "F1", sinopse: "Brad Pitt vive um piloto aposentado que retorna às pistas para ser mentor de um jovem prodígio na equipe APXGP.", imagem: "assets/img/f1.webp" },
            { id: "103", nome: "Frankenstein", sinopse: "A visão gótica de Guillermo del Toro sobre o clássico, onde o Dr. Pretorious busca o monstro original para continuar seus experimentos.", imagem: "assets/img/frankenstein.jpg" },
            { id: "104", nome: "Hamnet", sinopse: "Chloé Zhao adapta o best-seller sobre a esposa de Shakespeare, Agnes, lidando com a morte devastadora de seu filho único.", imagem: "assets/img/hamnet.jpg" },
            { id: "105", nome: "Marty Supreme", sinopse: "Josh Safdie dirige Timothée Chalamet em uma obra inspirada na vida do lendário jogador de ping-pong Marty Reisman.", imagem: "assets/img/martysupreme.jpg" },
        ]
    },
    {
        id: "direcao",
        titulo: "Melhor Direção",
        candidatos: [
            { id: "301", nome: "Chloé Zhao", sinopse: "Pela abordagem intimista e lírica em 'Hamnet'.", imagem: "assets/img/chloezao.jpg" },
            { id: "302", nome: "Josh Safdie", sinopse: "Pela energia frenética e direção de atores em 'Marty Supreme'.", imagem: "assets/img/joshsafdie.webp" },
            { id: "303", nome: "Paul Thomas Anderson", sinopse: "Pela grandiosidade técnica e narrativa de 'The Battle of Baktan Cross'.", imagem: "assets/img/paulthomasanderson.jpg" },
            { id: "304", nome: "Joachim Trier", sinopse: "Pelo estudo de personagens complexos em 'Valor Sentimental'.", imagem: "assets/img/joachimtrier.jpg" },
            { id: "305", nome: "Ryan Coogler", sinopse: "Pela reinvenção do gênero de terror em 'Pecadores'.", imagem: "assets/img/ryancoogler.jpg" },
        ]
    },
    {
        id: "atriz",
        titulo: "Melhor Atriz",
        candidatos: [
            { id: "401", nome: "Jessie Buckley", sinopse: "Como Agnes Shakespeare, o coração emocional de 'Hamnet'.", imagem: "assets/img/jessiebucley.jpg" },
            { id: "402", nome: "Rose Byrne", sinopse: "Protagonista no drama 'Se eu tivesse pernas, eu te chutaria'.", imagem: "assets/img/rosebyrne.jpg" },
            { id: "403", nome: "Kate Hudson", sinopse: "Como parte da dupla musical no drama 'Song Sung Blue'.", imagem: "assets/img/katehudson.jpg" },
            { id: "404", nome: "Renate Reinsve", sinopse: "Retorna com Joachim Trier vivendo uma atriz em crise familiar.", imagem: "assets/img/renatereinsve.jpg" },
            { id: "405", nome: "Emma Stone", sinopse: "Novamente com Lanthimos, interpretando uma executiva sequestrada em 'Bugonia'.", imagem: "assets/img/emmastone.jpg" },
        ]
    },
    {
        id: "ator",
        titulo: "Melhor Ator",
        candidatos: [
            { id: "501", nome: "Timothée Chalamet", sinopse: "Transformação física e estilo excêntrico como o jogador Marty Reisman.", imagem: "assets/img/timothéechalamet.jpg" },
            { id: "502", nome: "Leonardo DiCaprio", sinopse: "Protagonista do projeto misterioso e contemporâneo de Paul Thomas Anderson.", imagem: "assets/img/leonardodicaprio.jpg" },
            { id: "503", nome: "Ethan Hawke", sinopse: "Interpretando o letrista Lorenz Hart na cinebiografia 'Blue Moon'.", imagem: "assets/img/ethanhawke.jpg" },
            { id: "504", nome: "Michael B. Jordan", sinopse: "Desafio duplo interpretando irmãos gêmeos em 'Pecadores'.", imagem: "assets/img/michaelbjordan.jpg" },
            { id: "505", nome: "Wagner Moura", sinopse: "Como Marcelo, um professor fugindo de seu passado no thriller 'O Agente Secreto'.", imagem: "assets/img/wagnermoura.jpg" },
        ]
    },
    {
        id: "animacao",
        titulo: "Melhor Filme de Animação",
        candidatos: [
            { id: "701", nome: "K-Pop: Demon Hunters", sinopse: "Ação vibrante da Sony Animation sobre um grupo de K-Pop que caça demônios.", imagem: "assets/img/kpopdemonhunters.jpg" },
            { id: "702", nome: "Zootopia 2", sinopse: "O retorno de Judy e Nick investigando novos mistérios na metrópole animal.", imagem: "assets/img/zootopia2.jpg" },
            { id: "703", nome: "The Twits", sinopse: "Adaptação de Roald Dahl focada em um casal terrivelmente desagradável.", imagem: "assets/img/thetwits.jpeg" },
            { id: "704", nome: "Elio", sinopse: "Um garoto é confundido com o embaixador da Terra em uma organização interplanetária.", imagem: "assets/img/elio.jpg" },
            { id: "705", nome: "A Pequena Amélie", sinopse: "Possível produção europeia independente com estilo artístico único.", imagem: "assets/img/apequenamelie.jpg" },
        ]
    },
    {
        id: "filme-internacional",
        titulo: "Melhor Filme Internacional",
        candidatos: [
            { id: "1301", nome: "Foi apenas um acidente", sinopse: "França - Drama tenso sobre culpa e responsabilidade social.", imagem: "assets/img/foiapenasumacidente.jpg" },
            { id: "1302", nome: "O Agente Secreto", sinopse: "Brasil - Kleber Mendonça Filho retrata a paranoia da ditadura.", imagem: "assets/img/agentesecreto.jpg" },
            { id: "1303", nome: "Valor Sentimental", sinopse: "Noruega - Joachim Trier explora laços familiares e arte.", imagem: "assets/img/valorsentimental.jpg" },
            { id: "1304", nome: "A voz de Hind Rajab", sinopse: "Tunísia - Documentário impactante sobre conflitos recentes.", imagem: "assets/img/avozdehindrajab.jpg" },
            { id: "1305", nome: "Sirât", sinopse: "Espanha - A jornada de um imigrante através de realidades duras.", imagem: "assets/img/sirat.jpg" },
        ]
    },
];

export default categorias;