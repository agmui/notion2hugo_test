---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSHMCEU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgsVZX%2ByR9V7gzvNktOVHvUD%2BQ4GvHU1qHJ5lDsbYNBAiBDtNMMC73gHOHIKihBHVIBMLLVU7xlX11oVUeByShVjSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ9Mp4noF0Gq3P4U7KtwDBmvFocu0CTYNjeM5e993D7Vgu9l2PVx%2BnILKirxDrrsaSbnOMfNPYWJ76GKcld1eGYKbLPLWAYWCyQCoqHivPF2Ca4DGqt%2B04%2FJM7PCyEyo2pqpgpILUNViwa3CuyAiWKN5BxGDz%2FV2ndQOxlh7nPeUkCiK2HhaF9pVnkFWfXTTvmlWaBFjXYHhxVXLV9jQhR21pZE9YjDnbq6kzpz1H2qd8P%2FMaG2zgQRTzL4vt1CWSzRUtyZCZ0R3vnPN6%2F8WuoV%2FV%2FWFGj68SWQ3shSDzkqLYX3BDbMq21w3V6n52F8ICRmPc%2FPt8WNQPn%2F4%2Fk0cbdjCLLrGBw%2F%2Fq58tFebI3mCpFNptRSG87taJaqILzpcqu4tFvurbgSWfP%2BGL6pCj7qJgYAHIUzGy1X3vJXhk2Re0n6GYWoIjL94Nw9PItuOoIqDAPPSj7dh03SdZTxQiDjhLwwZJNH3pChGhRQlNlFXxSf7Lc%2FPDOabDg%2BTPEPhv%2BvcDs4jKNcqYmIAs1B41O9%2Fkgs4pnuB%2FzEQmTcpWq7uPaeNtyBAuMVhG9eqNBGwj%2BzGt3kgZoEa1pWNeCPTM6iERn4UBSO9xQUe8PLietlRkx5T4eoClZEtkEA6gB6g6ekTEHRiko6a46%2BzEwpMHDwgY6pgE4A2gJWRaT2JOnj8jC7oyw8bwnC44HYWyH2iSaNv7HzScBHRaUjx8y4XXQ4kTeTXkq%2BfhPI8RNsMrLsjlIzBBYDTAKLuiGv1EwCQ5FM19oav0kWTFiDqBomxTtKN4aWo1Jxdq4ghnPyK0Dm1jQvj3J8jy4P88Ul8Ew2xaeygcctrqTKiqUFF9yHcceNFImbg7w8JWj%2BzSn%2F6mGtwDb62TVPyfvmOcN&X-Amz-Signature=544ebd0e0bc9bc4be5f1a3c18949b7979f487307f10df575f0a89a1f9e88be80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSXTYMLV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHR5UwJ5baqT9W7xPDaJWUpCURVBnctOD8Zh6RJ9uRasAiEAy2tSAcCLRGrsd3j20%2BpI7PZeqi8CgIZZweBtF4RyEtYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ4Nu1OaPpViHAsbMCrcA%2BqmfFYu%2BRWdFXCoH9UsziQiqUiKv%2FnZxJ8922GEkV1puopHdRndoxJBKtxuf42U5VU8jBz6u181jDHMc6ciiSCEhbgFnDtjXTAqLSz7O6JTTwya%2BnOJPZEROg5jEWj0yBl1BKIEEWbjm8Q0xxgkMTNTakOQpRk%2F6MZuwu1Bh%2BWSzt95NrI3WwzKtXXxLM8FJ6N0kyCjV3ydUPusseoGFDkXaT0O3PkKgEinVp6RlchQ8dSYA0RJXF1Uj8hRFJROQpg3wbpta74ko7rphrQU%2FJ4MCB0Tx6UTMX60m5zg2Ax780NewU09qOlJ%2FRMrjFd25%2BxcYZGyhoX6SaQFip9kIM7qxz07UjNg%2BQghHlONj5gmXRt5RYAYZSIQG5HqASyL6ijAZaOWP8XWf79xwsXDjhw19ShEaLAl6J%2FhhRPOmMNf79YxFCXWb2nn2%2BvfFU%2Ff8x5gsQ3QcMexRvyhuXUp%2BAw%2Fg9QEUKXtIdkBP1IFBOezgFHm%2FLkWJ1ke3fDgCfcTqAtXKYDiHdUfC%2BgfXTxUF5TK5HAkDfVfJawwZfDhD9JA9nUPdKSjjN0PXJfqm5S7bfP4y0yPgsKBeTz%2BitD6abmfWQByWEZZWeof3n7NavvodxHq2y9SAXklZIoUMJzBw8IGOqUBiP40AHQVK1EPSeFpNGPAWhu79%2FYTHChLKD8MMW%2BmA0NOwrJBFP2JmXYRK6mcx3K0kULJmmb0cZdjrRjj0NEUME%2FJNMgu7fXO05Oe317Y%2F%2BWDSLufhDgcxmLHZBolISat3N8IayJQKd3ZnWBx%2F%2FEybFBqjIcVd2M9AjpgdDOrcvzBHPmXUUTnXp7Qq0Ql6ih7u%2BRQgs0BbG%2F1V96SmAXiRcafvJxl&X-Amz-Signature=91b1fc5a798ff4fdee424eb0673c3f8524c5c8f57468991d14ee9a150e31cee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
