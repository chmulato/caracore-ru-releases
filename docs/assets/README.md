# Assets da Loja Cara Core RU

Todas as páginas HTML da loja utilizam **apenas** os recursos desta pasta: `docs/assets/css`, `docs/assets/js`, `docs/assets/img`.

## Estrutura

```
assets/
├── css/
│   └── loja.css      # Estilos de todas as páginas (index, download, licenca-uso, canal-feedback, manual-tecnico)
├── js/
│   └── loja.js       # Script compartilhado (scroll suave para âncoras)
├── img/
│   └── caracore_ru.png   # Imagem do manual técnico (apêndice Antropologia Industrial)
└── README.md
```

## Uso nas páginas

- **CSS:** `<link rel="stylesheet" href="assets/css/loja.css">` (obrigatório em todas)
- **JS:** `<script src="assets/js/loja.js"></script>` (antes de `</body>`)
- **Imagens:** `<img src="assets/img/nome.png" alt="...">` (ex.: `assets/img/caracore_ru.png` no manual técnico)

Cada página define uma classe no `<body>` para escopo de estilos (ex.: `page-index`, `page-download`, `page-licenca`, `page-canal`, `page-manual`). Não se usam blocos `<style>` inline; todo o CSS está em `loja.css`.
