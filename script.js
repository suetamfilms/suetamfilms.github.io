/* SUETAM FILMS: comportamento do site. O conteúdo fica em conteudo.js. */
(function () {
  'use strict';
  const D = window.SUETAM;
  const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
  const criar = (tag, props = {}, ...filhos) => {
    const el = Object.assign(document.createElement(tag), props);
    el.append(...filhos);
    return el;
  };
  const movimentoReduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const economiaDados = !!(navigator.connection && navigator.connection.saveData);
  const comMouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
  // Campos vazios só aparecem como pendência na pré-visualização local, nunca no site publicado.
  const local = ['localhost', '127.0.0.1', ''].includes(location.hostname);
  const projetoPorId = id => D.projetos.find(p => p.id === id);

  /* ---------- Textos ---------- */
  $('#frase').textContent = D.frase;
  $('#ano').textContent = new Date().getFullYear();
  $('#contato-local').textContent = D.local;

  /* ---------- Primeira tela: parede de vídeos ---------- */
  const parede = $('#parede');
  const tocarNaParede = !movimentoReduzido && !economiaDados;
  const telas = D.parede.map(projetoPorId).filter(Boolean);
  for (let c = 0; c < 5; c++) {
    const coluna = criar('div', { className: 'coluna' });
    coluna.style.animationDelay = `${-c * 6}s`;
    // Quatro telas por coluna cobrem também celulares e tablets em pé; as duas últimas repetem outros trabalhos.
    [0, 1, 7, 8].map(passo => telas[(c * 2 + passo) % telas.length]).forEach((p, i) => {
      const tela = criar('div', { className: 'tela' });
      // Uma tela por coluna em movimento; a outra fica parada para manter o carregamento leve.
      if (i === 0 && p.previa && tocarNaParede) {
        tela.append(criar('video', { muted: true, loop: true, playsInline: true, preload: 'none', poster: p.miniatura, className: 'auto' }));
        tela.firstChild.dataset.src = `videos/previas/${p.previa}`;
      } else {
        tela.append(criar('img', { src: p.miniatura, alt: '', decoding: 'async' }));
      }
      coluna.append(tela);
    });
    parede.append(coluna);
  }
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(itens => itens.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) {
        if (!v.getAttribute('src')) v.src = v.dataset.src;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }), { threshold: .05 });
    document.querySelectorAll('video.auto').forEach(v => obs.observe(v));
  }

  /* ---------- Apresentação ---------- */
  const caixaFoto = $('#apresentacao-foto');
  caixaFoto.append(D.apresentacao.foto
    ? criar('img', { className: 'retrato', src: D.apresentacao.foto, alt: `Retrato de ${D.nome}`, loading: 'lazy' })
    : criar('img', { className: 'marca', src: 'assets/logo-suetam.png', alt: 'Logo SUETAM', loading: 'lazy' }));
  $('#apresentacao-texto').append(...D.apresentacao.texto.map(t => criar('p', { textContent: t })));

  /* ---------- Galeria ---------- */
  const galeria = $('#galeria');
  const filtros = $('#filtros');
  const categorias = D.categorias.filter(c => D.projetos.some(p => p.categoria === c));
  let visiveis = D.projetos.slice();

  D.projetos.forEach(p => {
    const miniatura = criar('span', { className: 'miniatura' },
      criar('img', { src: p.miniatura, alt: '', loading: 'lazy', decoding: 'async' }));
    const selo = p.tipo === 'album' ? `${p.fotos} fotos` : p.duracao && `▶ ${p.duracao}`;
    if (selo) miniatura.append(criar('span', { className: 'cartao-play', textContent: selo }));
    const classes = ['cartao', 'revelar'];
    if (p.formato === 'horizontal') classes.push('largo');
    if (p.tipo === 'foto') classes.push('foto-larga');
    const cartao = criar('button', {
      type: 'button',
      className: classes.join(' '),
      ariaLabel: `${p.tipo === 'album' ? 'Ver álbum' : p.tipo === 'foto' ? 'Ver' : 'Assistir'}: ${p.titulo}`
    }, miniatura, criar('span', { className: 'cartao-dados' },
      criar('strong', { textContent: p.titulo }),
      criar('span', { className: 'cat', textContent: p.categoria }),
      criar('span', { className: 'desc', textContent: p.descricao })));
    cartao.dataset.categoria = p.categoria;
    cartao.addEventListener('click', () => abrir(p));
    if (p.previa && comMouse && !movimentoReduzido) ligarPrevia(cartao, miniatura, p);
    galeria.append(cartao);
  });

  // A prévia só é baixada quando alguém para o mouse sobre o trabalho.
  function ligarPrevia(cartao, miniatura, p) {
    let video;
    const ligar = () => {
      if (!video) {
        video = criar('video', { muted: true, loop: true, playsInline: true, preload: 'auto', src: `videos/previas/${p.previa}` });
        video.setAttribute('aria-hidden', 'true');
        miniatura.querySelector('img').after(video);
      }
      video.play().then(() => cartao.classList.add('tocando')).catch(() => {});
    };
    const desligar = () => {
      cartao.classList.remove('tocando');
      if (video) video.pause();
    };
    cartao.addEventListener('mouseenter', ligar);
    cartao.addEventListener('mouseleave', desligar);
    cartao.addEventListener('focus', ligar);
    cartao.addEventListener('blur', desligar);
  }

  ['Todos', ...categorias].forEach((nome, i) => {
    const botao = criar('button', { type: 'button', textContent: nome });
    botao.setAttribute('aria-pressed', String(i === 0));
    botao.addEventListener('click', () => {
      filtros.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === botao)));
      galeria.querySelectorAll('.cartao').forEach(c => {
        c.hidden = nome !== 'Todos' && c.dataset.categoria !== nome;
      });
      visiveis = D.projetos.filter(p => nome === 'Todos' || p.categoria === nome);
    });
    filtros.append(botao);
  });

  /* ---------- Reprodutor: o vídeo completo só carrega aqui ---------- */
  const sala = $('#sala');
  const tela = $('#sala-tela');
  const corpo = $('#sala-corpo');
  let atual = null;
  let trocarFoto = null; // definida quando o trabalho aberto é um álbum

  function linkIncorporado(p) {
    if (p.tipo === 'youtube') {
      const m = p.origem.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/);
      return m && `https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0`;
    }
    if (p.tipo === 'vimeo') {
      const m = p.origem.match(/vimeo\.com\/(?:video\/)?(\d+)/);
      return m && `https://player.vimeo.com/video/${m[1]}?autoplay=1`;
    }
    return null;
  }

  // Álbum: fotos numeradas 01.jpg, 02.jpg... na pasta, com versões pequenas em mini/.
  function montarAlbum(p) {
    const n = Number(p.fotos);
    const arquivo = (i, mini) => `${p.pasta}/${mini ? 'mini/' : ''}${String(i + 1).padStart(2, '0')}.jpg`;
    const foto = criar('img', { alt: '' });
    const contador = criar('span', { className: 'album-contador' });
    const minis = criar('div', { className: 'album-mini' });
    let i = 0;
    const ir = novo => {
      i = (novo + n) % n;
      foto.src = arquivo(i);
      foto.alt = `${p.titulo}, foto ${i + 1} de ${n}`;
      contador.textContent = `${i + 1} / ${n}`;
      minis.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-current', String(j === i)));
      const ativo = minis.children[i];
      if (ativo) ativo.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };
    for (let j = 0; j < n; j++) {
      const b = criar('button', { type: 'button', ariaLabel: `Foto ${j + 1}` },
        criar('img', { src: arquivo(j, true), alt: '', loading: 'lazy' }));
      b.addEventListener('click', () => ir(j));
      minis.append(b);
    }
    const seta = (passo, rotulo, texto) => {
      const b = criar('button', { type: 'button', className: `album-seta ${passo < 0 ? 'anterior' : 'proxima'}`, ariaLabel: rotulo, textContent: texto });
      b.addEventListener('click', () => ir(i + passo));
      return b;
    };
    trocarFoto = passo => ir(i + passo);
    const caixa = criar('div', { className: 'album' },
      criar('div', { className: 'album-foto' }, foto, seta(-1, 'Foto anterior', '‹'), seta(1, 'Próxima foto', '›'), contador),
      minis);
    ir(0);
    return caixa;
  }

  function montarMidia(p) {
    trocarFoto = null;
    if (p.tipo === 'album') return montarAlbum(p);
    if (p.tipo === 'foto') return criar('img', { src: p.origem, alt: p.titulo });
    if (p.tipo === 'local') {
      return criar('video', { src: `videos/${p.origem}`, poster: p.miniatura, controls: true, autoplay: true, playsInline: true, preload: 'metadata' });
    }
    const src = linkIncorporado(p);
    if (!src) return criar('p', { textContent: 'Não foi possível abrir este vídeo. Confira o link em conteudo.js.' });
    return criar('iframe', {
      src, title: p.titulo, allow: 'autoplay; fullscreen; picture-in-picture; encrypted-media', allowFullscreen: true, loading: 'lazy'
    });
  }

  function mostrar(p) {
    atual = p;
    tela.replaceChildren(montarMidia(p));
    const album = p.tipo === 'album';
    const horizontal = p.formato === 'horizontal' || album;
    tela.className = `sala-tela ${album ? 'album' : p.tipo === 'foto' ? 'foto' : horizontal ? 'horizontal' : 'vertical'}`;
    corpo.classList.toggle('h', horizontal);
    $('#sala-categoria').textContent = p.categoria;
    $('#sala-titulo').textContent = p.titulo;
    $('#sala-descricao').textContent = p.descricao;
    const ficha = $('#sala-ficha');
    ficha.replaceChildren();
    [['Função', p.funcao], ['Cliente', p.cliente], ['Duração', p.duracao], ['Fotos', album && String(p.fotos)]].forEach(([rotulo, valor]) => {
      if (valor) ficha.append(criar('dt', { textContent: rotulo }), criar('dd', { textContent: valor }));
    });
    $('#sala-aviso').hidden = !p.maiores18;
    sala.scrollTop = 0;
  }

  function abrir(p) {
    mostrar(p);
    if (!sala.open) sala.showModal();
    document.documentElement.style.overflow = 'hidden';
  }

  function vizinho(passo) {
    const i = visiveis.indexOf(atual);
    mostrar(visiveis[(i + passo + visiveis.length) % visiveis.length]);
  }

  $('#sala-fechar').addEventListener('click', () => sala.close());
  $('#sala-anterior').addEventListener('click', () => vizinho(-1));
  $('#sala-proxima').addEventListener('click', () => vizinho(1));
  sala.addEventListener('close', () => {
    if (sala.open) return; // reaberto antes deste aviso chegar: não apaga o trabalho novo
    tela.replaceChildren(); // interrompe o vídeo e o download
    document.documentElement.style.overflow = '';
  });
  // Num álbum, as setas do teclado passam as fotos; nos vídeos, passam os trabalhos.
  sala.addEventListener('keydown', e => {
    const passo = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0;
    if (!passo) return;
    if (trocarFoto) trocarFoto(passo); else vizinho(passo);
  });

  /* ---------- Experiência ---------- */
  const listaExp = $('#lista-experiencia');
  const colunaExp = criar('div', { className: 'revelar' });
  D.experiencia.forEach(e => {
    const funcao = [e.funcao, e.periodo].filter(Boolean).join(' · ');
    const item = criar('article', { className: 'exp-item' },
      criar('h3', { textContent: e.titulo }),
      criar('p', { className: 'funcao', textContent: funcao }),
      criar('ul', { className: 'lista-marcada' }, ...e.atividades.map(a => criar('li', { textContent: a }))));
    if (!e.atividades.length) item.querySelector('ul').remove();
    if (!e.periodo && local) item.querySelector('.funcao').append(criar('span', { className: 'pendente', textContent: ' · período a preencher' }));
    colunaExp.append(item);
  });
  listaExp.append(colunaExp, criar('div', { className: 'exp-outros revelar' },
    criar('h3', { textContent: 'Outros projetos' }),
    criar('ul', { className: 'lista-marcada' }, ...D.outrosProjetos.map(t => criar('li', { textContent: t })))));

  /* ---------- Serviços ---------- */
  $('#lista-servicos').append(...D.servicos.map(s => criar('li', { className: 'revelar', textContent: s })));

  /* ---------- Equipamentos e softwares ---------- */
  const ferramentas = $('#lista-ferramentas');
  const bloco = (titulo, itens) => criar('div', { className: 'bloco revelar' },
    criar('h3', { textContent: titulo }),
    criar('ul', {}, ...itens.map(i => criar('li', { textContent: i }))));
  ferramentas.append(bloco('Softwares', D.softwares), bloco('Habilidades técnicas', D.habilidades));
  if (D.equipamentos.length) {
    const caixa = bloco('Equipamentos', D.equipamentos);
    if (D.equipamentosNota) caixa.append(criar('p', { className: 'bloco-nota', textContent: D.equipamentosNota }));
    ferramentas.append(caixa);
  }
  else if (local) ferramentas.append(criar('div', { className: 'bloco' }, criar('h3', { textContent: 'Equipamentos' }), criar('p', { className: 'pendente', textContent: 'A preencher em conteudo.js' })));

  /* ---------- Contato ---------- */
  const c = D.contato;
  const numero = (c.whatsapp || '').replace(/\D/g, '');
  const linkWhatsapp = numero && `https://wa.me/${numero}?text=${encodeURIComponent(c.whatsappMensagem)}`;
  if (linkWhatsapp) {
    $('#contato-acao').append(criar('a', { className: 'botao cheio', href: linkWhatsapp, target: '_blank', rel: 'noopener', textContent: 'CHAMAR NO WHATSAPP' }));
  } else if (local) {
    $('#contato-acao').append(criar('p', { className: 'pendente', textContent: 'O botão do WhatsApp aparece quando o número for preenchido em conteudo.js.' }));
  }
  const contatos = [
    ['WhatsApp', linkWhatsapp, c.whatsappTexto || c.whatsapp],
    ['E-mail', c.email && `mailto:${c.email}`, c.email],
    ['Instagram', c.instagram && `https://www.instagram.com/${c.instagram}/`, c.instagram && `@${c.instagram}`],
    ['LinkedIn', c.linkedin, c.linkedin && c.linkedin.replace(/^https?:\/\/(www\.)?/, '')]
  ];
  contatos.forEach(([rotulo, href, texto]) => {
    if (href) {
      const externo = !href.startsWith('mailto:');
      $('#lista-contatos').append(criar('li', {}, criar('span', { textContent: rotulo }),
        criar('a', { href, textContent: texto, ...(externo ? { target: '_blank', rel: 'noopener' } : {}) })));
    } else if (local) {
      $('#lista-contatos').append(criar('li', {}, criar('span', { textContent: rotulo }), criar('em', { className: 'pendente', textContent: 'A preencher' })));
    }
  });

  /* ---------- Menu ---------- */
  const topo = $('#topo');
  const menu = $('#menu');
  const botaoMenu = $('.menu-botao');
  const alternarMenu = abrirMenu => {
    menu.classList.toggle('aberto', abrirMenu);
    botaoMenu.setAttribute('aria-expanded', String(abrirMenu));
    $('.menu-rotulo').textContent = abrirMenu ? 'Fechar' : 'Menu';
    document.documentElement.style.overflow = abrirMenu ? 'hidden' : '';
  };
  botaoMenu.addEventListener('click', () => alternarMenu(!menu.classList.contains('aberto')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) alternarMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('aberto')) alternarMenu(false); });
  const aoRolar = () => topo.classList.toggle('solido', scrollY > 40);
  addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  /* ---------- Entradas discretas e item ativo do menu ---------- */
  const animar = document.querySelectorAll('.revelar');
  if ('IntersectionObserver' in window && !movimentoReduzido) {
    const obs = new IntersectionObserver(itens => itens.forEach(i => {
      if (i.isIntersecting) { i.target.classList.add('visivel'); obs.unobserve(i.target); }
    }), { rootMargin: '0px 0px -6% 0px' });
    animar.forEach(el => obs.observe(el));
  } else {
    animar.forEach(el => el.classList.add('visivel'));
  }
  if ('IntersectionObserver' in window) {
    const links = [...menu.querySelectorAll('a')];
    const obs = new IntersectionObserver(itens => itens.forEach(i => {
      if (!i.isIntersecting) return;
      links.forEach(l => l.setAttribute('aria-current', String(l.getAttribute('href') === `#${i.target.id}`)));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(s => obs.observe(s));
  }
})();
