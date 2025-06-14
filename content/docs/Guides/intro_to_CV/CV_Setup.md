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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGXLFMCG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDz0acWxO3s9cJzKPgheM3MO%2FPHN%2B0yPovrjOL3%2BJyMVAIgDZWBURr35VZV52jsT4oRUK%2BHDw6gmHp9ugQ6dYaFBTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKyFFHg9tX3O41HkuyrcA%2FHMnMzNcXUoH76CyHneb2KDlXCbVpnJULnkGjub3IGCec8kvDB%2FMVz%2Bf9ar8KDIoSaloraQ7zvro0y8mlkHE49LZpfPGp3oMnppSevYF0YFaVPXuijMb8NXAAqkozz9VwDO9XlEt%2BbxgbGhgKcKBsZplxtFHAO04wF0CyS71e66frSrOHA4%2F3%2F7stYfLlD%2Bfmx5v7kiXMRCbiR54UUA%2BbCaqRXeQEzCu2Rf2inimFXM7v%2FN%2BsPaGI1xgITiWj%2Bina07ffkhWbFCJpetMZtRikxDYOyDa4uMYOEjNtbm57Cbmu9ole7hByTJlqb3l0dsE165pCwXqCeIph%2Becc9AvToHaqQ8PVR9YWh7K6%2FPl32CzkFJZktKtbJC5R2Qz00LonWaYpGxlgUTCFVLmOFG%2BQGD0ku1OgoVNlZPvNCvMBW8VlBUsnuuR7LRrpdC%2F352K%2FSe8JlT8dU%2F%2FHvGGxgRi2ieFIflScIHGQ0L7QH7KXxXLdFExK4gLGErSbI0MzBY%2Ff3ay4Sk3yDiFHQOgiKaDH6PUpNp3iBlqnCm0oNejB9O72Usr%2BsEXK%2Fy5GcRQxhilft%2FVKGIE8%2Bh7rnEHSQGspnJ9Q9XsAVAAfb4Ltt%2FXw2wi0Y7SEUFWaiIXSINMMH6tsIGOqUBWTRBoAM%2Fyl%2BeMggxZX3ih8UO1q3AQlYYclGRbOYGIYK4u%2BW%2FmSUiE2CMJnqr%2F8mWutqXrO3jeDfyOvSm7iRojFWp2XA%2FFttAkvr4vQiq6BzS%2F6WlcuNJaXufw4TvYKYNaASgPhpBJtzul1fz6VPRvrhSo9dNmEdByAP9lcHhr2Dih9Irvkm4IfTgy228970CBRmjEIH1KkGbv28yVydVnsFZnl5e&X-Amz-Signature=d2882d6efe8aaabe4cabffd83ea0ddd69c065fd4089fbd53a983e4000bdb00cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75FOC25%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDbBk33B%2BzobW5BLz9cL11U5OnyENG9qlEPkohiwkC9HAiBD%2B59lJZNKHBaAnk3Ln0wbhn6CJToWoKovVECCEP5YlCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMM2Fjh5s6i86mAcD7KtwDjMW9VqYsfx38RFcv07BBDEvUJBYw7Yk5Rrvh5COSnfZUF0zJasq5YCe%2FNiq8WMYz5fmA0CPnkfpn2%2B%2Fuy%2F4CWfy%2FTytTitQkIMWavblew4fbN0ZL%2BOW99B%2BUsLfCR9Kg0huyuhqOUh1HAGpJcXap7RW5NilBRDiIYkxzQf1FFkXCbwz2VLMFdbTtUDqiWS9PsOieYhjIPt1Xz6pl5Szax0qpXHuPa5wGHqlOdfDZd1%2Frmu43HLnrALHFjvDSB5axwHcDn0zBH27X1IrSqvlWC2u3XAE8UK%2FlUMhpGMz1gXwbXrcQDOMLeTD5CZgNPsGfgHfLjAkWQt8vQw3vfpBER1XjjX1P7Dtp9z%2BIxOyiQXutzPq2It41q0ISVHLYW7pGyJ1Vuht4UtX%2B4omaTxapVZgdFngyxdQhvaVRJljRMSsEa4LQZ1vLYDlbxqxnsCs%2Fx37T1%2BU3J84CMp4X7kGqN7Fb7GXDG8Mu6Lh1806uU2kfO753HqzgwPGpnLD4BY74e8ukB5LSjrdmm8eXLZWd7q32YaXCaj5n094zXIV%2BM0vTeixG6KiDtFXvxmrHgrhv6D8t2Wa83PxFah03mqIwmJbI33t81PNtDzy%2BrSlRRcZkkICg5MEF7UuN94sw1vq2wgY6pgERlgJAZWogZRkEW%2FEnzAYOiu3Y3U0yOJUeKuiL7AFBkUf2z1xbCF2jPbNorsWSH1amnN4qp0WY%2BpXTXRXmWikFV7xtFEKTpHWGlNe3yluadwc4N5o60%2FSxL5i93gfSgpDJYaDdL1VyPW0yi3y4ETbz0fBiz5EUt0RMSjpdzLXwwg14E%2FcYJ5m%2FYXJK3iFw%2BWExbQBhfTaNwmQtxscuPaajGpk0qtM5&X-Amz-Signature=32962004d26209c811e458d837df780ae73ffc79c5f66d179cd351bbd1db0ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
