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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBL6JUJT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FU%2F5Jpm5p1C8gOwBV6qvsghpLq4eghycF%2BNbzokVe4AIhANnIWhYMyR07Vjx1ofMcWUa5UeiYRULHDF5Zra1zL%2FXlKv8DCBAQABoMNjM3NDIzMTgzODA1IgzO9eckB3sx8%2FhTnDcq3ANZrhVomFy3%2BAl6WF1o7CNTqYkzmcnSEuo6RbeAkmWzRkT%2Fl6Ta8QJKVXP9ug6y7bi81yUQNLx%2BkaX63kxp7iWDd0%2FT6KF4PXZUvci9PIESt5yDMW0fiy4nOp33ux5L5FM9UyghtvRiPg%2Fkh5aAQdiS%2B%2B5yl6IbApKXPubLHEf1nWd8eP6hKP0sBNaPb7VYBptaiTn%2FL10M%2FKPSfV19U7Ub8fAnG80Fb%2BwUP3PIUrHPlFfqS3%2FHmuSvQlZsMZdL%2BRZhhf9IbpHfbLiRo%2BkFhW6icjo4sfdkpoWU0jswklKT56vnqg3%2F03ULDznJrJaFHX0PTwmCNAsJmlB%2BdPXv%2BKADxgmblz91vNNUQ6hzqmIWESutsvVGT%2FodMqSVoKFA55utD3kJfT0Y1W1devcSv6UMNi9ApFkfq4f8v5UPaG0xiJJaXWyGptxDbSKCOTtmMyU3x4HtW1pSAC55leoW6dClun%2BlmcjTNFMJSWvDsFwz7s5TGhODoq9nd1C2auZrBVuh4siADezdu%2FJmtFaUePeNt34lZpLyELDy9Ddo%2FJJd6gmn8XjEby66oCAHkIeZLriWG6C7LHNXgeZ5eHLSlupVSM92lzkbquB0x0w5JpfW9og5sfGHvIbyWrFzLzCipM3DBjqkAXbWmTyHBiy0juia7CBtDDBT6v%2FQuAFNtTqZpLmzTf4J65DVMLm3WLQhDYFQ%2FMie3IE29XPXtriW4862dzk0k1YgeBbi96VHqBj6nJjds8mqu5m4KVubM19umd7UjuGRtD68frfkJqUM1gPAmx3ujufTkefAiL92jAD5j7d0ZmlbPhNbtiLbLoRmgSKoufBSbLDSYgfbvUPJAXjnFlqojt9%2Ft4FP&X-Amz-Signature=e1b201808efc7c59ae77b75ad717ab88a0569cf7e8853c22d94fded0992c334b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLGGVVR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNZRu4eUHylQCQ24MMsJexkKaBxBVkzVTWq056PnebLgIgcB5fvoUTNzhFho4uqnBWtvcAwf4%2BUMGoWsq573iloVoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKHicvBhVtPzZpcP2ircA2S2hXXRQKzwOaTmGZzhlbyOas%2FMr6XOqOBD7w5p8nbACrwlqZZ2YqCYRy00DKwA1wYvGA3UPz3Mf7CCjQlpgNcmN%2F%2BfbCd0x6Aus3nN8sSvbLq%2FWiY19%2BDNf2OlZF9Tdr%2B92TXfkjHqQlx1p5GUNlEZulpuK55FcYJTCY0SSjbY4jKU6xf9SDwTMGGRCyIsvJME%2FwFegblUIHy8UWLl%2Fj%2FiudXnmj1%2FoK6xDA5MagqFO4cIN7mHvak381MBTpIsRIoQ57fKc5KFVUzBGpry3hdKSsRtLt9ecLVYLdid7u53sKPZrWe%2BNaj6WvKW8R8sLD8oKCdFSlo9Qmu%2BtjTjib4Cyk1TR%2Bnvtg0bx%2Fdfi8X5MPbW3c%2FYucMl62d6dWwa5OSCRNW2f7knQM9i385O4Y1d0Ht%2F5amgnsRkp7Wt4sYGtsIVTxsQaV8iHMlrvjEJdKOgRN%2B75OFKkHziDWI%2FpujsNqnjgE%2FLbn0fcfEo%2FlkJaZ2n2hIVxjpHOSufUwF0Bg%2Bb1eH9IWYl46CwHVfRVrpYRAa7rjv0xtwXNCDURLnfmPr64Q1Q2V7k3c%2Bm%2FIDHo3rmgn1uT1cuur1QurD4LeZEJL6V0NsOmRv%2FH7o3etQiPrivQShEz45bj0miMOajzcMGOqUB9GbUsOsEIpN6Uy1eQCYd1fCLCt4WT3sR0EVCVPgnjbRuKUQUIRskct2hYPylpCIsZ3V4dEkN5E10umQ2RBMQ7TvGI2Hd3XZOB2Ve5TaXGZlUIPtCHzUCEIKnF6UhLo%2F7bzLm1gduB7PiR5PPxXvkCucVIRqx7J5e8Pk27SEOdyMp9O1nIpFutzN2stZ9z0yO2pvBuRtS7NKDacTgiLMulXob2ciP&X-Amz-Signature=099046eaf7232ee7a951e9bf9045d4bd1a245147edf20f90b238244f652f173c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
