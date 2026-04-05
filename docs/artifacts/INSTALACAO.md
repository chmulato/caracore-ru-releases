# RU Soberano - Instalacao (Windows)

> **Lancamento previsto: 18/06/2027.** Este guia sera atualizado quando o instalador for publicado.

Arquivos previstos para esta entrega:
- SoberaniaRU.exe
- checksum.sha256
- checksum.md5
- INSTALACAO.md (este arquivo)

## Validacao de integridade

No PowerShell, na pasta de artefatos:

```powershell
Get-FileHash -Path .\SoberaniaRU.exe -Algorithm SHA256
Get-FileHash -Path .\SoberaniaRU.exe -Algorithm MD5
```

Compare os valores com os arquivos `checksum.sha256` e `checksum.md5`.

## Requisitos

- Windows 10 ou superior (64 bits)
- 500 MB de espaco livre
- Conexao com internet: necessaria para ativacao de licenca

## Execucao

1. Execute `SoberaniaRU.exe` em duplo clique.
2. Conclua o assistente de instalacao.
3. Abra o atalho criado no Desktop para iniciar o simulador de reator.

## Licenca

- Ambientacao RETRO: gratuita
- Simulador de reator: R$ 29,90 (chave de licenca incluida no pacote)

## Desinstalacao

Painel de Controle > Programas > Programas e Recursos > desinstalar RU Soberano.

## Canal oficial

- Pagina de download: ../download.html
- Licenca: ../licenca-uso.html
- Suporte: https://caracore.com.br

---

> Versao: v1.0.0 (previsto)
> Cara Core Informatica — https://caracore.com.br
