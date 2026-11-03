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
  resumo: "Videomaker, editor de vídeos e fotógrafo em Recife, Pernambuco, à frente da marca SUETAM FILMS, e diretor de marketing do projeto social Real Guararapes. Experiência em captação, edição e pós-produção, vídeos publicitários, conteúdo para redes sociais, cobertura de eventos e conteúdo esportivo, com produção em formatos vertical e horizontal.",

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
      "Produzo vídeos publicitários, conteúdo para redes sociais, coberturas de eventos e conteúdo esportivo, da captação à edição.",
      "Também realizo produções independentes, trabalhos de fotografia e vídeo e projetos esportivos, sociais e institucionais."
    ]
  },

  /* ---------- Categorias da galeria ----------
     Categoria sem nenhum projeto fica oculta automaticamente. */
  categorias: [
    "Publicidade e marketing",
    "Esportes e futebol",
    "Eventos",
    "Aniversários e chás",   // aniversários, chá revelação, chá de fraldas e similares
    "Shows",
    "Ensaios e casamentos",
    "Documentários",
    "Conteúdo para redes sociais",
    "Projetos institucionais",
    "Campanhas políticas",
    "Fotografia"
  ],

  /* ---------- Trabalhos ----------
     A ordem aqui é a ordem da galeria.
     tipo:     "local" (arquivo em videos/), "youtube", "vimeo", "foto" ou "album"
     album:    pasta com as fotos 01.jpg, 02.jpg... e as versões pequenas em mini/; fotos: quantidade
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
      id: "cha-revelacao-agata-sophia", titulo: "Chá revelação: Ágata Sophia", categoria: "Aniversários e chás",
      descricao: "Filme horizontal do chá revelação, da decoração ao momento da revelação.",
      tipo: "local", origem: "cha-revelacao-agata-sophia.mp4", previa: "cha-revelacao-agata-sophia.mp4",
      miniatura: "thumbnails/cha-revelacao-agata-sophia.jpg", formato: "horizontal", duracao: "2:33",
      funcao: "Captação e edição", cliente: ""
    },
    {
      id: "aniversario-sara-liz", titulo: "Aniversário de 1 ano: Sara Liz", categoria: "Aniversários e chás",
      descricao: "Cobertura fotográfica do primeiro aniversário, com decoração, família e os momentos da aniversariante.",
      tipo: "album", pasta: "assets/albuns/aniversario-sara-liz", fotos: 12,
      miniatura: "thumbnails/aniversario-sara-liz.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "cha-revelacao-agata-sophia-fotos", titulo: "Chá revelação: Ágata Sophia (fotos)", categoria: "Aniversários e chás",
      descricao: "Fotos do chá revelação, com a decoração, o casal, a família e a revelação.",
      tipo: "album", pasta: "assets/albuns/cha-revelacao-agata-sophia-fotos", fotos: 12,
      miniatura: "thumbnails/cha-revelacao-agata-sophia-fotos.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
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
      id: "mini-documentario-filipe", titulo: "Mini documentário: Filipe", categoria: "Documentários",
      descricao: "Mini documentário vertical com depoimentos de familiares e amigos sobre a história de Filipe.",
      tipo: "local", origem: "mini-documentario-filipe.mp4", previa: "mini-documentario-filipe.mp4",
      miniatura: "thumbnails/mini-documentario-filipe.jpg", formato: "vertical", duracao: "1:49",
      funcao: "Captação e edição", cliente: ""
    },
    {
      id: "show-filipe-ret", titulo: "Show: Filipe Ret", categoria: "Shows",
      descricao: "Fotos de palco do show de Filipe Ret.",
      tipo: "album", pasta: "assets/albuns/show-filipe-ret", fotos: 12,
      miniatura: "thumbnails/show-filipe-ret.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "pre-wedding-marcio-e-iara", titulo: "Pré-wedding: Marcio e Iara", categoria: "Ensaios e casamentos",
      descricao: "Ensaio do casal na praia, com a luz dourada do sol baixo.",
      tipo: "album", pasta: "assets/albuns/pre-wedding-marcio-e-iara", fotos: 12,
      miniatura: "thumbnails/pre-wedding-marcio-e-iara.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
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
      id: "torneio-geracao-4", titulo: "Torneio Geração 4", categoria: "Esportes e futebol",
      descricao: "Vídeo vertical do torneio de futebol de areia da Geração 4.",
      tipo: "local", origem: "torneio-geracao-4.mp4", previa: "torneio-geracao-4.mp4",
      miniatura: "thumbnails/torneio-geracao-4.jpg", formato: "vertical", duracao: "1:00",
      funcao: "Captação e edição", cliente: ""
    },
    {
      id: "torneio-geracao-4-fotos", titulo: "Torneio Geração 4 (fotos)", categoria: "Esportes e futebol",
      descricao: "Fotos do torneio de futebol de areia, com jogos, equipes e premiação.",
      tipo: "album", pasta: "assets/albuns/torneio-geracao-4-fotos", fotos: 12,
      miniatura: "thumbnails/torneio-geracao-4-fotos.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "bloco-badlove", titulo: "Bloco Badlove", categoria: "Eventos",
      descricao: "Cobertura fotográfica do bloco de carnaval Badlove, com palco, atrações e público.",
      tipo: "album", pasta: "assets/albuns/bloco-badlove", fotos: 12,
      miniatura: "thumbnails/bloco-badlove.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "campanha-junior-comprido", titulo: "Campanha: Junior Comprido", categoria: "Campanhas políticas",
      descricao: "Cobertura fotográfica de caminhada e carreata da campanha de Junior Comprido a vereador.",
      tipo: "album", pasta: "assets/albuns/campanha-junior-comprido", fotos: 12,
      miniatura: "thumbnails/campanha-junior-comprido.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "neymar-selecao", titulo: "Bate-bola entre Zico e Pilhado", categoria: "Esportes e futebol",
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
      id: "geracao-4-camela", titulo: "Geração 4: Camela", categoria: "Projetos institucionais",
      descricao: "Fotos de alunos e professores em evento esportivo da Geração 4 em Camela, Ipojuca.",
      tipo: "album", pasta: "assets/albuns/geracao-4-camela", fotos: 12,
      miniatura: "thumbnails/geracao-4-camela.jpg", formato: "vertical",
      funcao: "Fotografia", cliente: ""
    },
    {
      id: "geracao-4-camela-video", titulo: "Geração 4: Camela (vídeo)", categoria: "Projetos institucionais",
      descricao: "Vídeo curto dos alunos de mãos dadas em roda no campo.",
      tipo: "local", origem: "geracao-4-camela-video.mp4", previa: "geracao-4-camela-video.mp4",
      miniatura: "thumbnails/geracao-4-camela-video.jpg", formato: "vertical", duracao: "0:09",
      funcao: "Captação e edição", cliente: ""
    },
    {
      id: "pre-festa-barchef", titulo: "Pré-festa Barchef", categoria: "Publicidade e marketing",
      descricao: "Vídeo vertical de pré-festa na praia, com drinks e público.",
      tipo: "local", origem: "pre-festa-barchef.mp4", previa: "pre-festa-barchef.mp4",
      miniatura: "thumbnails/pre-festa-barchef.jpg", formato: "vertical", duracao: "0:37",
      funcao: "Captação e edição", cliente: "", maiores18: true
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
      tipo: "Projeto social",   // opcional: aparece ao lado da função
      periodo: "Atual",   // aparece só no currículo, por exemplo "Fev 2024 – Out 2026"
      atividades: []
    },
    {
      titulo: "BETesporte", funcao: "Videomaker",
      periodo: "Fev 2024 – Out 2026",
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
    "Aniversários, chá revelação e chá de fraldas",
    "Produção de conteúdo para redes sociais",
    "Vídeos esportivos",
    "Fotografia profissional",
    "Edição e pós-produção"
  ],

  /* ---------- Equipamentos e softwares ---------- */
  softwares: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Adobe Lightroom Classic", "CapCut"],
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
