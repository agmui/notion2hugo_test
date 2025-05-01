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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632S7ZULX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCeQOaqID3nUdGPo2SAM7gA2VQLgdSAdiKFoe1vAHlYtwIgIs6jrcWy9ApgPRZMcIX9mI2hJn5%2FzqzShc3M17OpYcUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL03EQA0jmmHD1jSircA8yoAd13Rj91w1jUW73iOmsSepgViiKJvs6CmI%2BW6DPJ2CFhHNRVDWxvffh306yRab8AIK95SWmqWhPNR13JlIT3pWrX4QLtpGNcUf7woE8bJYfd2WaHoOtPeRKGcILrMxKuWXbWsxWbi8AnY9r49HlkMFcy4zm29WTnK3CVaRPr6kE5l9IJhCBd1CAdPQfEnF%2B5pNPXthS5%2BcgvZ%2B95%2Bc%2BcFLB%2FAzQzpYVxhwLU5ve6IhJl7I6B8azoCieYcp%2FcTfyRNv35tfidv5G0IyjrU1E2xOKzLF5uUQUa%2Fm%2FHnxHvJesK%2FfgORQQIWat7KJPcszh2gSwAlfXowfRaCmEXtdFqTmykTP6QbPYJcoB73HsOQPM8%2Fxk%2FxWy%2FIxR7zfOssEFS98CIE4UTGGlBsRGJ5uxR5oVeE2LyfsVrlRPg1pxPE5zBTX2tLr6S0z%2Bjfl%2Bia%2Bi26B0rmH1B8%2FS2kz7HWNIRJOJF6lKYNH0XLCXrRgtlBu%2FiwngvWo6D9VstKFNqBURUVSzKD6vJGL0UO%2F6oeFHfP05vt85HjJW%2B9Z47vsAxpfHJVF%2Bj%2FB3LV7mPmOR5yItl5OB%2B77dUYfjHz0cjv%2BGD%2BDiyg7V%2BO3yO1CZpCOJxZq%2FKHpqwSCNddpAxMOO9y8AGOqUBUVNLf%2BxHyOuHitdrjB43%2BpPs1P1GOWQcTUKqksyiY5AOdYzqtyJ7rKgqEIOxknEq9hVKVJ%2Fvlo6RAtYip0vA%2BGco0twl7FMazl6Xg332k5RCzAt5JUlABjO%2Barxg1Jhg26%2Fr7vcEXOiLKH%2BpgTKmL3JNR127IyVtWniVu5Re84ElxNmPOjqIcaNJIUwYKiATLzRClWKbWpJWQi7vay%2FBBGPP8lRI&X-Amz-Signature=ecf474d9a311835d2a9f7632d8ca9a396acb725dd921dbf109476a040116b51d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYYSSDFN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAYLO%2FaKDeVFOp2JMz4aEWuD3UtBtAhaNuKojEPOAGS1AiEAxvdH2%2B%2BG8utJSEJXkAxk3bY%2FLve0PgASedjNLG4OIdUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7cltN5GdKKM6Wl8SrcA545pudgFLpJK%2FtCA%2Fkz1sMvivJeoald1SbO%2B%2FCfs%2BR86ATPDQcDqFBTCV%2BARyEUDufaGWSWedX5D9YMG%2FQtDemyzf%2B4%2FAFhZOsUT7yJyTIVE%2BbXClx0q1TWUdR7xqySbjc%2BFs3XpyCMCpbP3I83xLWnSVffWGMqpA2FB9O4SqU%2Bm%2BZdCqg4qSLl2s0kuuDzWTADYYsdjrmAm9zJT0JACMFuqdHjsGB0w4Y2Svob0at01H7bhY%2FOs%2FTtKuEOD9721FcluFYb2d2j2arBFIog9lq01XqV%2BWoPV1st0I7PU67jysD3DojI5oOgfx1pPizZwggnB3owFD5vb%2F%2FmywUOkTXeCvVUdOWr2WRVl%2BZ7DFOeJginJ%2FvYr9CY76%2Bk8SYbaPEllkGecWH8I%2FUFRi6%2FlDx40aaAi1%2FxCxjWGNdp0I2LAB4qkjdwIVGe4xiIcF1G%2FTgTS1nBYgWr2gwRcqgqLDqHO%2FD63xhaoyLH9J7ZhLsCLSpozbR5hh5rUEXmqa7aTyP6bQcmm%2BKq3Iel8%2F1vP%2BFB%2FkXI2lnhA6uvowPZmupflFfd6ZwBZHE%2BdYCgSghEgb6%2FVW%2BR5K%2B2LK%2BCJHOMC0aO2pxTxSBEU35O7y%2B56fCAIJdg%2BL6Ca%2B%2FvxcqkMJ2%2By8AGOqUBrjM8RZYDsPFdOhTdikRXrQSlSmsraZk%2Bfd%2BvPe8vRtfPd3R2f%2BYQLc%2BI%2FAEtD5j7hDP9pAZo49vLwr72yNcju4vn0MegeWCRpmx6cXqJAkb%2BXqeRdHY9xSoWwAbHh%2BBgpf6GbjvmWC1hu6m7EaMnqIPomE9Qvs8jKysmmz5EvIFjJu31INs7CD5V0g%2F9rVwh4ndn6dopWWqDRyik9OHQYkP7g4dZ&X-Amz-Signature=245a42600cc8605606864b030dc9fbc4340b077edbea77cabace141be0b6f036&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
