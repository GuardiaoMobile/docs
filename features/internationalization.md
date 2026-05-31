# Feature — Internationalization (i18n)

## Objetivo

Adicionar suporte multilíngue à documentação do projeto Guardião.

Inicialmente:

- PT-BR como idioma padrão
- infraestrutura preparada para EN
- persistência local da escolha do usuário.

---

## Motivação

Atualmente a documentação foi escrita em português.

Entretanto:

- o projeto possui vocabulário técnico internacional;
- futuras apresentações acadêmicas podem exigir versão em inglês;
- internacionalização precoce reduz retrabalho.

---

## Estratégia adotada

Implementação client-side usando:

- HTML puro
- JavaScript
- arquivos JSON de tradução.

Sem dependência de frameworks.

---

## Arquitetura

### Translation Source

```text
assets/i18n/
```

Arquivos:

- pt-BR.json
- en.json

---

### Runtime Loader

```text
assets/js/i18n.js
```

Responsável por:

- carregar idioma ativo;
- atualizar DOM;
- persistir preferência.

---

### DOM Binding

Uso de:

```html
data-i18n=""
```

Exemplo:

```html
<h1 data-i18n="hero_title"></h1>
```

---

## Roadmap

### Fase 1

✔ Infraestrutura pronta  
✔ PT-BR default  
✔ suporte EN preparado

### Fase 2

Tradução gradual das páginas.
