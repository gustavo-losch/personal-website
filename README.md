# My Personal Website

- Built using Docusaurus
- Personal information (CV, Social Media, Projects)

---

## Instalação

### 1. Instalar o Node.js
- Instalar o node.js pelo site oficial 

### 2. Instalar o Docusaurus
- Executar os seguintes comandos para o Docusaurus criar a pasta raíz do website

``` bash
npx create-docusaurus@latest my-website classic
```



## Utilização

### 1. Para fazer o deploy:
_Necessário criar o diretório .github/workflows/deploy.yml e colar o [script](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) existente na documentação do Docusaurus. Tmabém será necessário ajustar as variáveis do arquivo [docusaurus.config.js](https://github.com/gustavo-losch/personal-website/blob/main/docusaurus.config.js) e colocar seus dados do GitHub._


``` bash
npx docusaurus deploy
```
- Irá criar um commit na branch gh-pages que e o deploy será feito no [Github Pages](https://gustavo-losch.github.io/personal-website/).

__ou__

- Fazer a build e push para a branch remota gh-pages (trigger do GitHub Actions)
``` bash
npx docusaurus build
git push gh-pages
```

### 2. Real-time preview

```bash
npx docusarus start
```
- Irá criar uma build preview local do site no [localhost](localhost:3000) porta 3000.