# Assets da Loja Cara Core RU

Estrutura usada por todas as páginas da loja (index, download, licenca-uso, canal-feedback, manual-tecnico).

## Estrutura

```
assets/
├── css/
│   └── loja.css      # Variáveis CSS (:root), logo, breadcrumb, footer, utilitários
├── js/
│   └── loja.js       # Script compartilhado (ex.: scroll suave para âncoras)
├── img/
│   └── caracore_ru.png   # Logo/marca da loja
└── README.md         # Este ficheiro
```

## Uso nas páginas

- **CSS:** `<link rel="stylesheet" href="assets/css/loja.css">`
- **JS:** `<script src="assets/js/loja.js"></script>` (antes de `</body>`)
- **Imagem:** `<img src="assets/img/caracore_ru.png" alt="Cara Core RU" class="loja-logo" width="160" height="48">`

As páginas continuam a poder definir estilos inline ou em `<style>` para layout específico; `loja.css` garante variáveis e elementos comuns.
