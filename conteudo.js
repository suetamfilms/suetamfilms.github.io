/*
  SUETAM FILMS: conteúdo do site e do currículo.
  Este é o único arquivo que você precisa editar no dia a dia.
  Campo vazio ("") não aparece no site publicado. O currículo mostra um aviso [a preencher] até receber o dado.
  O passo a passo está em DOCUMENTOS/README.md.
*/
window.SUETAM = {

  /* ---------- Dados gerais ---------- */
  nome: "Mateus Duarte",
  marca: "SUETAM FILMS",
  funcoes: "Videomaker | Editor | Fotógrafo",
  area: "Videomaker, editor de vídeos e fotógrafo",
  local: "Recife, Pernambuco, Brasil",
  frase: "Transformo ideias em imagens que ficam.",

  /* Resumo profissional do currículo */
  resumo: "Videomaker, editor de vídeos e fotógrafo em Recife, Pernambuco, à frente da marca SUETAM FILMS, e diretor de marketing do Real Guararapes. Experiência em captação, edição e pós-produção, vídeos publicitários, conteúdo para redes sociais, cobertura de eventos e conteúdo esportivo, com produção em formatos vertical e horizontal.",

  /* Endereço público do site, com https://. Com ele preenchido, o currículo ganha o link e o QR Code. */
  site: "https://suetamfilms.github.io/",

  /* ---------- Contato ---------- */
  contato: {
    whatsapp: "5581997646190",   // só números, com país e DDD
    whatsappTexto: "(81) 99764-6190",   // como o número aparece na tela
    whatsappMensagem: "Olá, Mateus! Vi o portfólio da SUETAM FILMS e gostaria de conversar sobre um projeto.",
    email: "matteusfmk@gmail.com",
    instagram: "suetamfilms",
    linkedin: "https://www.linkedin.com/in/mateus-duarte-2216b4447"    // link completo do perfil
  },

  /* ---------- Apresentação ---------- */
  apresentacao: {
    foto: "assets/retrato.jpg",       // vazio: a logo ocupa o espaço da foto
    texto: [
      "Sou Mateus Duarte, videomaker, editor de vídeos e fotógrafo em Recife, Pernambuco. Com a SUETAM FILMS, transformo ideias em imagens para empresas, agências, eventos e clientes particulares.",
      "Fui videomaker da BETesporte de fevereiro de 2024 a outubro de 2026, com experiência em captação, edição e pós-produção, vídeos publicitários, conteúdo para redes sociais, cobertura de eventos e conteúdo esportivo.",
      "Hoje sou diretor de marketing do Real Guararapes e também realizo produções independentes, trabalhos freelancers de fotografia e vídeo, além de projetos esportivos e institucionais."
    ]
  },

  /* ---------- Categorias da galeria ----------
     Categoria sem nenhum projeto fica oculta automaticamente. */
  categorias: [
    "Publicidade e marketing",
    "Esportes e futebol",
    "Eventos",
    "Conteúdo para redes sociais",
    "Projetos institucionais",
    "Fotografia"
  ],

  /* ---------- Trabalhos ----------
     A ordem aqui é a ordem da galeria.
     tipo:     "local" (arquivo em videos/), "youtube", "vimeo" ou "foto"
     origem:   local: nome do arquivo | youtube/vimeo: link do vídeo | foto: caminho da imagem
     previa:   vídeo curto e sem som que toca ao passar o mouse (opcional)
     formato:  "vertical" ou "horizontal"
     funcao:   sua função na peça, por exemplo "Captação e edição" (opcional)
     cliente:  aparece no reprodutor (opcional)
     maiores18: true mostra o aviso de conteúdo para maiores de 18 anos */
  projetos: [
    {
      id: "treino-filipe", titulo: "Treino: Filipe", categoria: "Esportes e futebol",
      descricao: "Filme horizontal do treino de beach soccer de Filipe Silva.",
      tipo: "local", origem: "treino-filipe.mp4", previa: "treino-filipe.mp4",
      miniatura: "thumbnails/treino-filipe.jpg", formato: "horizontal", duracao: "0:41",
      funcao: "Captação e edição", cliente: "", destaque: true
    },
    {
      id: "filipe-selecao", titulo: "Filipe: Seleção", categoria: "Esportes e futebol",
      descricao: "Competição na Paraíba pela Seleção Brasileira de beach soccer, com jogo, comemoração e torcida.",
      tipo: "local", origem: "filipe-selecao.mp4", previa: "filipe-selecao.mp4",
      miniatura: "thumbnails/filipe-selecao.jpg", formato: "vertical", duracao: "0:48",
      funcao: "Captação e edição", cliente: "", destaque: true
    },
    {
      id: "real-guararapes-treino", titulo: "Real Guararapes: Treino", categoria: "Esportes e futebol",
      descricao: "Vídeo vertical de um treino do Real Guararapes, com depoimentos dos atletas.",
      tipo: "local", origem: "real-guararapes-treino.mp4", previa: "real-guararapes-treino.mp4",
      miniatura: "thumbnails/real-guararapes-treino.jpg", formato: "vertical", duracao: "1:14",
      funcao: "Captação e edição", cliente: "Real Guararapes"
    },
    {
      id: "real-guararapes-acao-social", titulo: "Real Guararapes: Ação social", categoria: "Projetos institucionais",
      descricao: "Registro da ação social no 2º Torneio Filipe Silva, com depoimento e momentos do evento.",
      tipo: "local", origem: "real-guararapes-acao-social.mp4", previa: "real-guararapes-acao-social.mp4",
      miniatura: "thumbnails/real-guararapes-acao-social.jpg", formato: "vertical", duracao: "0:32",
      funcao: "Captação e edição", cliente: "Real Guararapes"
    },
    {
      id: "macae-champions", titulo: "Macaé: Champions", categoria: "Publicidade e marketing",
      descricao: "Peça publicitária vertical com apresentador e grafismos sobre a Champions.",
      tipo: "local", origem: "macae-champions.mp4", previa: "macae-champions.mp4",
      miniatura: "thumbnails/macae-champions.jpg", formato: "vertical", duracao: "0:17",
      funcao: "Edição", cliente: "BETesporte", destaque: true, maiores18: true
    },
    {
      id: "sofia-cs", titulo: "Sofia: CS", categoria: "Publicidade e marketing",
      descricao: "Peça de estúdio em formato vertical, com iluminação colorida e grafismos em movimento.",
      tipo: "local", origem: "sofia-cs.mp4", previa: "sofia-cs.mp4",
      miniatura: "thumbnails/sofia-cs.jpg", formato: "vertical", duracao: "0:53",
      funcao: "Captação e edição", cliente: "BETesporte", destaque: true, maiores18: true
    },
    {
      id: "neymar-selecao", titulo: "Neymar jogaria em qualquer seleção", categoria: "Esportes e futebol",
      descricao: "Conversa sobre futebol gravada em estúdio, com legendas e grafismos.",
      tipo: "local", origem: "neymar-selecao.mp4", previa: "neymar-selecao.mp4",
      miniatura: "thumbnails/neymar-selecao.jpg", formato: "vertical", duracao: "1:04",
      funcao: "Edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "kim-nba-playoffs", titulo: "Kim: NBA Playoffs", categoria: "Publicidade e marketing",
      descricao: "Peça publicitária gravada em quadra aberta, com grafismos sobre os playoffs da NBA.",
      tipo: "local", origem: "kim-nba-playoffs.mp4", previa: "kim-nba-playoffs.mp4",
      miniatura: "thumbnails/kim-nba-playoffs.jpg", formato: "vertical", duracao: "0:27",
      funcao: "Captação e edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "penalti-do-gordinho", titulo: "Pênalti do Gordinho", categoria: "Esportes e futebol",
      descricao: "Desafio de pênaltis em campo aberto, com placar em grafismo.",
      tipo: "local", origem: "penalti-do-gordinho.mp4", previa: "penalti-do-gordinho.mp4",
      miniatura: "thumbnails/penalti-do-gordinho.jpg", formato: "vertical", duracao: "1:30",
      funcao: "Edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "vampeta-e-kim", titulo: "Vampeta e Kim: Titular, reserva ou vende", categoria: "Esportes e futebol",
      descricao: "Quadro de conversa sobre futebol gravado em estúdio, com escolhas em grafismo.",
      tipo: "local", origem: "vampeta-e-kim.mp4", previa: "vampeta-e-kim.mp4",
      miniatura: "thumbnails/vampeta-e-kim.jpg", formato: "vertical", duracao: "1:55",
      funcao: "Edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "fa-iguinho-e-lulinha", titulo: "Fã Iguinho e Lulinha", categoria: "Eventos",
      descricao: "Cobertura vertical de um evento noturno, com público e bastidores.",
      tipo: "local", origem: "fa-iguinho-e-lulinha.mp4", previa: "fa-iguinho-e-lulinha.mp4",
      miniatura: "thumbnails/fa-iguinho-e-lulinha.jpg", formato: "vertical", duracao: "2:34",
      funcao: "Captação e edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "meme-tiru", titulo: "Meme Tiru", categoria: "Conteúdo para redes sociais",
      descricao: "Vídeo curto em tom de humor, feito para redes sociais.",
      tipo: "local", origem: "meme-tiru.mp4", previa: "meme-tiru.mp4",
      miniatura: "thumbnails/meme-tiru.jpg", formato: "vertical", duracao: "0:20",
      funcao: "Captação e edição", cliente: "BETesporte", maiores18: true
    },
    {
      id: "vinheta-g4tv", titulo: "Vinheta G4TV", categoria: "Conteúdo para redes sociais",
      descricao: "Vinheta animada da marca G4TV em formato vertical.",
      tipo: "local", origem: "vinheta-g4tv.mp4", previa: "vinheta-g4tv.mp4",
      miniatura: "thumbnails/vinheta-g4tv.jpg", formato: "vertical", duracao: "0:09",
      funcao: "Criação", cliente: "G4TV"
    },
    {
      id: "fotografia-treino", titulo: "Treino na areia", categoria: "Fotografia",
      descricao: "Fotografia de um treino físico na praia.",
      tipo: "foto", origem: "assets/fotografia-treino.jpg", previa: "",
      miniatura: "thumbnails/fotografia-treino.jpg", formato: "vertical", duracao: "",
      funcao: "Fotografia", cliente: ""
    }
  ],

  /* Vídeos da parede da primeira tela (use os ids acima, com pelo menos 10). */
  parede: [
    "filipe-selecao", "macae-champions", "kim-nba-playoffs", "sofia-cs", "penalti-do-gordinho",
    "vampeta-e-kim", "neymar-selecao", "fa-iguinho-e-lulinha", "meme-tiru", "fotografia-treino"
  ],

  /* ---------- Experiência ---------- */
  experiencia: [
    {
      titulo: "Real Guararapes", funcao: "Diretor de marketing",
      periodo: "Atual",
      atividades: []
    },
    {
      titulo: "BETesporte", funcao: "Videomaker",
      periodo: "Fevereiro de 2024 a outubro de 2026",
      atividades: [
        "Captação de vídeos",
        "Edição e pós-produção audiovisual",
        "Produção de conteúdo para redes sociais",
        "Produção de vídeos publicitários",
        "Cobertura de eventos",
        "Criação de conteúdo esportivo",
        "Desenvolvimento de materiais audiovisuais para campanhas"
      ]
    }
  ],
  outrosProjetos: [
    "Produções audiovisuais independentes",
    "Trabalhos freelancers de fotografia e vídeo",
    "Projetos esportivos e institucionais"
  ],

  /* ---------- Serviços ---------- */
  servicos: [
    "Produção de vídeos publicitários",
    "Vídeos para empresas",
    "Cobertura de eventos",
    "Produção de conteúdo para redes sociais",
    "Vídeos esportivos",
    "Fotografia profissional",
    "Edição e pós-produção"
  ],

  /* ---------- Equipamentos e softwares ---------- */
  softwares: ["Adobe Premiere Pro", "Adobe Lightroom Classic"],
  habilidades: [
    "Captação com câmeras profissionais",
    "Fotografia",
    "Iluminação",
    "Edição de vídeos verticais e horizontais",
    "Conteúdo para Instagram, YouTube e outras plataformas"
  ],
  equipamentos: [
    "Câmera Sony A7 III",
    "Lente Tamron 35-150 mm"
  ],
  equipamentosNota: "Disponibilidade para usar outros equipamentos, conforme o projeto.",

  /* ---------- Formação e cursos (usado no currículo) ---------- */
  formacao: [
    "Cursos online"
  ]
};
