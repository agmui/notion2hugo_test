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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676U473CO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCFmZpbvP0iSgVQlZRD1J%2FSImIBvZwGgtQADTpqH8PE%2BgIhANEOqtnX5ub9VSwdPxwYAr0SKrbVkxSYyOmHfQfZP695KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPT2z25LL92H9DFX4q3AOWomQe8uy5CO2X4wpcBtxmH0Eb0JB7oy34EhY0gtTGKFdTlY%2FYkP2EVrPnIQNChS0riWR%2Bm4On99PyZ2TD5tO0Rze0Rns0%2Bth53LIjV0OavqY2TpMPKbaptbBL%2B99cmY%2FvhPE2Jwb0QvOgDHCwtVcptGL4Obo6FqmwJICoEM0fLwjzVfW1e%2FEny0zgn9bQDsZF1zuVyimUIQwUhzZx%2Fgv9UAcMTigAfXBpNbFKC9JtL6liIsM6MJ8jBSTbagoWdMAYsn9IIQv2HavtbyB1myO9dpouekmrNi%2FystbRJiWZGfX8F09JICUFc7WNXUylNvgMyXrdkZcAw61oL9wpACu%2BYOeT%2BQL2MzapjJxnmD10MWo3h5XZCdmPPzXNWrjIcpkfsNBOhYVExTDs57p5H8gOTOTsoRoNmsVPp4hPBBpuT9vcBt8EBQfCzoIFJ59nDGYZdSsnHix%2B83xWg4ulkbEIxgE7g6EoTwZTcYhgT5QL26LbzHYSGj%2FyDqlEfAtvGOmQlY3YW5A0aMl4RzFpgLE56SIHsm%2FhTjo328a8sntSkbYNeDMBC8XV2HEYVpmOwGujL78umBSx3Kj0YS0QE5LphO0%2FlzsKNOsTz6Ue4pWLStmFZAhSbJUkjpd%2BzTDNgau%2FBjqkAUsQ4c7fb8k7DUJkV9EekIKH%2FzHlEPTmJ7BZTmfnEGy1scRTNXft6iGDyUOaz8biUMG2%2FT0h4gclvwQUEhDmyBTYFK5gmbbOmak5QxTxMTL%2B%2B7GyJ6L7DZXLbgrVwBppxMlUT0BDdUpbMfdGKZFWMexDZZHq901MDzxtcvmbmCoq2Cyi9sN6fOkUHuH0YiiFtxuXfuwHkU5Vh0%2FzaE%2BCMqm5AaEH&X-Amz-Signature=73ebdb5ea808c642f44bf6c7349663063cbfdab54a8b36098c5085a4cec1b38a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7R64NTA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIA5rd97QU%2B0DLUkzrw8i0dV3Sq3iyHRjQbD0LSR8CDJjAiEA1BMvlqC%2B2FLGyqQQyFPV0m0suqEsYRszsEUsoP0o94EqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxZgrdSK37x6aEWLCrcA8%2Fp%2FkYm59jC71xmkUXsETVDvHu7jk4ZfvrwBVbCbuduJUB3FjAym1sDUvT2bxcPkpUyIa%2BUIDdZqDQUmSS5va8orUNWQbm7elRApW3XacucGAWh3h2PHVbvD3xXlT04YZwZBxqbkM6JI77Ai85PRnh64bOM453XBI6KxEODGPsCp3lyHLd9n7mCZRAmprRRgXPeLMWMJlYpjq%2BT7SCPtHp7SRXwXZo5GKaKPP6bsJqUsjJ7DRnvTRIhhO0Hz9i11Ky9qHfwsykP6NziT5p6Q%2Boojc2r%2BdxYb0SHLP7dw6JNMdz1O1Wb9gjgkPg%2B%2FSH8WU5cNbmDhYIENpsm5RrEd0lbveV1a8ioNWjPkzvjXUtjmAwUYPws9W1zyLDMW460OS%2BN8OVnPVK2KruIxHeplqs38xgHksecp%2FuQuR6up98Fgq6fFZKYq5FPfN53F5fdmTIIpjLBwcT6vSCfLhhu37ySttswTOaSepeWeqWLOocRYg63Vt7XA3MusXK8zo1WzW0XsBoJPSchBFg8gT6bsHkgkbOZF3lsRefchgpN016e4Coz8exDEhStEntSr%2B%2FfxfplqN2XvAl9c20dIlNLjE41kgidVVLs0TGHoFxFYSw%2FNdfjOzp1HLazyToDMM2Bq78GOqUBf6e2cfgp1EdpNBcEhsD6CsgvY0eeHvhSGftq1RY%2BNpr4xWr2M2gGClNYAPmToEQjgzErMhCEaZu%2BQ4OflPkLcjPgUIgx6TzQXrnSawBg%2BHXruW2cBCcCqzPGFKToXDy5fTAOeZCmzJ%2BWHc5KhFRkAJPdKk2it2gv9nw8kxYceShSS%2BE2mRPps8ezoe8U6WIINYx5dXIva9wmUbmAz383r0D%2FPpzm&X-Amz-Signature=7118eed1c8d80e866f8f6d57aa5ee6425c35b20d70705a61038fd68d73aff202&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
