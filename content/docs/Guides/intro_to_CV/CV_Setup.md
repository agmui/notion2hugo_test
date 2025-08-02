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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOOIUMV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgRpEdWoRD1C25ZA%2FQiL7ny2k5E9v4QJLdmh6VGv19mAiEA3nsEC%2BIEWdGm8FjMUoQusk%2FQjjtNKJowac0iCsytgogq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDILO6ZYg%2FfvZ%2BmYrtSrcA4AU4O1wlnBOBPxdoFN6fqeGphT2mwxilxiGRRbVn2A5ZpPbRGeiAE6l9EZK1LtqJqxOib18jm4uvvQUkrZ7M5jr2KHH7aIKSCfVcgIk8SC%2FKPoVZQQFU%2F767e3oXwhcywq5HbXntBeA1DdSrLdFcn6HIKUUHJ318k7lpoxNIdg92B35EvyK1L8oOWhq7IV7VQcct9qLbxCI1s752cJVIGwAE8fA5vMjWLnAUKK55%2FrGSnoXgJ2dIgKKemeoJX2fKHjh7gGjjLbg%2FdQvcGJ496tDOf8iVwGi7fCds4qAFQCJnk%2F%2BWDHupMzkU7cFWSt07SzUeD%2BcCMgAuUQTFGyncSFQGHaewzrG5TSNoavPQCV5SXOA5kz7ERRVFMiCgWTjaUVvWTr8fJWqbG3vr8%2F6%2BmP3sqTKhwYiJXakmubzECMsxPFdMRLFKlhDfFcintVqoQxXo%2Bog9MfbIdGi0z1HqvQdr4pVNnexdAOruNCk6WL36RuHCs4u44m9rMwYZCHyG3ZeG9nBQP%2BzdOjWRpmNdE4jFSz2nDKlvLpL5Rhw%2FNnv%2BnmDKkfDAouFd%2FIWnyCONbJ5N%2BrUGI%2B1id8xPWv%2F9Gp2yT2utVI7z2P7bSxPAoVBzKFUGYbqd6BkLAv%2BMOeOuMQGOqUBszjDc1eMgUaWlpK8x7uZBOmii%2B%2Fwef5luTQmBE9lpw%2F9KNhKhZFeIX4Jwy8vNdhzLPz6YfQJWMcRB2LHx5Be62vZI%2BBSx95cwG%2F5GY7Gcjv5WKBrbCUOxGcHWKVBaVPyF4%2FhtQWGiglAGZGDT%2BNIP0jFAHjO%2BV26oHizqBHInfZkfb4JiCa80qVraQ1JRNe5JpIHak9F0NlmKac%2Fezm45Pcdeg08&X-Amz-Signature=e46c7f75db5606d4ba2b447fe153ed7bb97d477d958feae5650a0fb6714b99d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QENR4YBH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZ5mqO7VLUY%2FF1B3fR6KjNf6bMBY%2Bf6Ma7A5RGfPTUIAiEA%2FtYr7Jw2IC7IX%2FpdofTUcEaJycMEvQ4g0lmQm2Z8Yigq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDETJg%2B7BGyQ8JbBGsCrcAxYpNU8N7Ss%2FhQw%2FaJERnXLrNHLQVDKwiKUOuI3rHuCzlpUlDXdGwuWtKug9tyw%2FOnZhlcIhjzH12dC9nXWRxe3svT7dD0fOV%2F2TEmiRCZ7HxKD4Drk55u61uRFdkH6Kimw3zLK1o%2B346qAj1bbRWVcDHPaQTPUm7X1S557D27nZiDVxEKuMkdz3u%2B1oDKc6r8FwW%2FI0djsbE6GxEFouO1H0yoILD%2Fur%2FBYA4nMICkb89956qQkC2yBDhvLNFaOKl19T7Uc6lfVHsgsrabYzhh3Q%2F%2F9XHtxrK8iW1TqEoD0NnIYiGSud56o46bM9JYkdXjr2W9CbYbM%2FMH%2FSb0zRzQ8iqpYgkXrPSPNDJZQ0Gw02BMnp7pMU3z4a3Zc3Vui4GKu21Kvztmttkityu6xhTclYxg4KVP%2B0PZL2dFU4fbIXhKJedfEGheVQtbcKdW3940IDwyeIF6Qf7ghBWXd13qLWTvfVUEBC0JOuIL%2BDinF03XfkxmWNPGJ7OPdKYjw6Aw9H%2B%2BOXHpInG9lj%2Fq2VTUuiXaS2fNBZ%2BXNQuxNXvIWxpGSBYOrSHwmkIYjy75omnY2xbOQp5g%2FJgDU5Uo%2FHY78nfe7GrjX3N0%2FMJxqemuU4uyI2pWfAskTYx6QoMKeVuMQGOqUB4tlW0JioL%2FOPEtm8psibK3EpAHGAo2Cb%2FkMn3MWfJouj397tFiXA9niJvO71s0MdzqctCm3Sgi%2FNnC6aEyKklxo%2BMmqoGe0ozSzV%2Fr8cO6X2LI1YHtfkwCAbfdL2FzbdbbhoBM3lb%2BhHkgx%2FsbDVVjt2D4V09T0JAtwnR%2FXpNUwExWi0t7gcC8qcpxLI28KBso8lqTJgPQuBs6O6SxBTd98oEar3&X-Amz-Signature=0b695edfb0824ad503121e8e0b98ae060c3803277d5c95c22688bc3ee3ea4292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
