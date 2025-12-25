# 🐾 CantinhoPet

Projeto estático demonstrativo para portfólio e uso acadêmico

## 💡 Descrição
Projeto front-end estático que simula o site de um pet shop ("CantinhoPet"). Inclui apresentação, serviços, produtos, depoimentos e um formulário de contato. O objetivo é demonstrar habilidades em HTML semântico, CSS responsivo (Bootstrap + estilos customizados) e JavaScript para melhorias de usabilidade e acessibilidade.

## ▶️ Demonstração / Visualização
- 🔗 Deploy: https://caroline-fraga.github.io/CantinhoPet/
- 🖥️ Para visualizar localmente, abra `index.html` no navegador.

Exemplo (PowerShell):
```powershell
# Abrir arquivo diretamente (modo desenvolvimento simples)
start .\index.html
```

## ✨ Funcionalidades
- ✅ Layout responsivo com Bootstrap e CSS personalizado.
- 📚 Seções: banner, sobre, serviços (carrossel), produtos (carrossel), depoimentos (carrossel), contato (formulário) e rodapé.
- 💳 Badges de preço posicionados nos cards (canto inferior), com estilo padronizado.
- 📨 Formulário de contato com validação HTML5 e feedback visual; o JS exibe mensagem de sucesso sem envio real (projeto estático).
- 🔧 Equalização de altura dos cards via JavaScript para manter alinhamento visual entre slides.
- ♿ Melhores práticas de acessibilidade: skip link, `role` / `aria-labelledby` em seções, labels vinculados a inputs, `alt` em imagens e `aria-live` para notificações.

Diferenciais implementados:
- 🧩 JS com responsabilidade única por função e comentários claros.
- 🎨 CSS organizado com variáveis (`:root`) e seções comentadas para facilitar manutenção.


## ⚙️ Tecnologias utilizadas
- **HTML5** — marcação semântica das seções e formulários.
- **CSS3** (Bootstrap 5 + `css/style.css`) — grid, componentes e estilos customizados.
- **JavaScript (vanilla)** — `js/main.js` para equalização de alturas, manipulação do formulário e ajustes de acessibilidade.
- **Font Awesome** — ícones (uso via CDN localizado em `index.html`).

Papel de cada tecnologia:
- Bootstrap: base responsiva e componentes (carrossel, grid, utilitários).
- CSS customizado: variáveis, badges de preço, estilos do formulário e ajustes de layout.
- JS: comportamentos dinâmicos não cobertos por Bootstrap (equalize, mensagens de formulário, marcação de cards sem imagem).


## 📁 Estrutura de pastas e arquivos
```
index.html
README.md
bootstrap/          # arquivos do Bootstrap (CSS/JS locais)
css/
	style.css          # estilos principais e organizados
img/                 # imagens usadas nos cards
js/
	main.js            # comportamento do site
```
Principais arquivos:
- `index.html`: marcação principal e inclusão dos recursos.
- `css/style.css`: estilos organizados (variáveis, componentes, media queries).
- `js/main.js`: inicialização e scripts específicos (igualar alturas, formulário).

## ✅ Boas práticas aplicadas
- **HTML semântico**: uso de `main`, `header`, `section` e `footer`, com `role`/`aria-*` onde necessário.
- **CSS organizado**: estrutura clara (variáveis → base → componentes → layout → media queries) e uso de variáveis para consistência.
- **Responsividade**: media queries e `object-fit` nas imagens para manter proporção.
- **JavaScript**: funções de responsabilidade única, IIFE, `const/let`, debounce e comentários em PT.
- **Acessibilidade**: skip link, labels, `aria-live` e atributos de apoio.

Essas práticas facilitam manutenção, leitura do código e avaliação técnica.

## 📱 Responsividade e ♿ Acessibilidade
- **Dispositivos:** o layout usa Bootstrap para adaptação de colunas; `--card-image-height` é ajustado via media queries para telas menores.
- **Acessibilidade:** foco visível no skip-link, labels vinculados a inputs, feedback de validação e atributos `aria`.

## 🔒 Segurança (observações)
- O formulário atualmente não envia dados a um backend (projeto estático).

## ▶️ Como executar o projeto localmente (passo a passo)
1. Clone ou copie a pasta do projeto para seu computador.
2. Navegue até a pasta do projeto no terminal (PowerShell no Windows):
```powershell
cd 'C:\Users\carol\Downloads\cantinho_pet'
```
3. Método rápido: abrir `index.html` no navegador (visualização simples): `start .\index.html`.
4. Método recomendado (servidor local):
```powershell
# Com Python 3 instalado
python -m http.server 8000
# Abra http://localhost:8000
```

## 🧪 Aprendizados e desafios
- **Aprendizados:**
	- Organização de CSS escalável com variáveis e seções comentadas.
	- Estratégias para equalizar visualmente cards em carrosséis mesmo com slides ocultos.
	- Boas práticas de acessibilidade aplicadas em um projeto real.
- **Desafios:**
	- Ajustar consistência visual entre tamanhos de tela; refinamento de media queries.

## 👩‍💻 Autoria
Desenvolvido por **Caroline Fraga da Silva**. Projetado para apresentação em portfólio e uso acadêmico.

- 🔗 LinkedIn: [caroline-fraga-da-silva](https://www.linkedin.com/in/caroline-fraga-da-silva/)
- 🐙 GitHub: [Caroline-Fraga](https://github.com/Caroline-Fraga)

