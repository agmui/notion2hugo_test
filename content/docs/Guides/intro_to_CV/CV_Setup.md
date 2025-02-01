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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHHW6EG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BvTkenxUumGy%2F1vz8gXeqTSU11B11ZzA50u0a9129FAiEAlnbFs6orbeWhGJ1b5Nuk6qZHSf72mYSxG1jWREH2LZMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfrzfEKBYGlMhtFOircA379CzOHg36bYwiAg%2FYwg%2BBYjsT4EULWin%2BPYjfddGbEU%2B7Gk98OSCOmdv%2BX3%2BUMstJ1lnpjnNBREIAHqcHGLAyN%2FHQZyGFlQRUn06Wi3YdSNCTxnzMkgGSPW2jNEeEO6x6LYZSlSksuYhiwO6gxff6AB90PBtFmfC7H1thDcGjiWsIPPoB5zEw9QC7VNZRP2AYLuJX6vBaPBcNvxDFs9YXstjjHjiEKxNbmGjfkj4caLlWYwhH4xaN12FQqcghM1gFQ%2FOAG6LKTnny7ntF3Jl04YfHyQm0UKTJvViV4VihpjDiQbD718AjHM9hM76Y2hyJbbq43YrrJRANvlI1XNl4kGhjhXe%2Fp44BMh%2F0t%2FatxN2D%2FBPQ2Bhq2LXdzmHEH10gQMfejBJXiAhmATFLEAZSqHqmXxYSlSsuGIH09cFe7i0W743Skuf3JPXHZS3MrYKUQU9y5XK90txBweiLoXqyg4Iyppq3gpP1phfZ5ERaocgEhP9sg%2FdCqctYMSoClEEEZOxMTOHPnNSh4BEadXUM1LYQver%2F%2F5qs6LfH%2FmEnLWrp9cYQPYERJI9gGalPYAfNc2ZQuV%2FeGuAMh5zDTvDhtHDe%2BKGrRS3URuJ7YEwVVERDAA8HXKz51J8lvMKXf9rwGOqUB%2BmLtktbsbvNTcVzw0DeGLm0nkjLFvCdrz3cyGgscv1Qab8JWTv47UHOW687CKnfxDkJUcww67v5IoV5yKBaVEJ0rvuQhjceHi8A8N3UN8%2BkrYtjxONbtTPg1EEdaVJShBmiRHkJTH7u0WbmUsm6CYAwjd1l13MpQqEzSySCsVgbe93BEIaJGrAnr0ncaltKHasN%2Bnh9rgd8YTizzI%2F2%2FuX52L57c&X-Amz-Signature=083bab2fbfdcc18cd58af5daa2a076f4a16edfc7b58db974ef927cdf9c9b76b2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGV7LX2F%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSWKH5vBE03kyfr1rf%2BnEHHT39m9QFRrxoE7A6hbTHwIhALGqCxxJ04GcLvEZNJSky7MEB7al2HKvtDbaX5hOkDuUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkNYPBXe1JDO2Qidoq3AMVTkDI5jVbo%2FW873R2OH7T2hauMn2NP9j80vkxFvdvNMJDlOFu9zIhTBmDEcm8rb0228I%2FLsMDrUfFVC6pyMTyGouTKJCd11RwrpituwNwbd4SzFomV%2F6Mv%2BOPG%2FruhSuPpnHMHO2rtFB7zrwPg0%2B8O51x9WSisiWxKF6wmdCbwNs%2F%2BvCORKFm7kSkIQW6p5qG0mg4vNxBIfKgIT71cFOwBiyoz9vrm4kcEseCXHjqfQERH%2FL9CmVEGDzOoijsTjA%2F3LH6mGIKte9W%2BIeIfGDdGNuGxtOtlmhCPG%2Bvi8ZUhoLNvOpPCcJmVVyYCispSebc2H9s8TE2mB2CsekopEZSIdoEJxyOEv2iBKu15jw0%2Fk9UU5q4dNdSpkA0I09rGkezTMy8VHEJRCtrr7InTUDuLx5ZcGhKRvnxKzQ9cO8l2hobN8nkSTb2z1TxwzBra6Du3r6mxcpbN1nJg1j2ROgtRp%2BnHImkT3lGFaUj4PYKHwU9mCVBNNIdJ%2Bzlg2n%2FQWghmUH0HTD2Ic1wV6RSfUgOIneZ%2BJZnHekFB5HW8tCGPBpLxpH3DzYaOWFAp%2B81uH63uaE0Trv0SeMo2Y2ZrSCqu%2FtswwHuTv1ctvl8Aa59zMfHBtFIeM4gbPyLkzCw3%2Fa8BjqkASJz3wYTH5Hijp855RaHw1f1Pq0du2etdSdSZkcqAyQLWzORxSiYd337Zvb8OO1OTA8IZlbfT7J3fW8nLA2dW%2B4DK0csZFETW6encw7%2B3p6ic2xDIVtYOmunR0XOV4cw8TjojsMh3maDGTiiTbp5X3nRwRh%2FO7hIb40iOnaTg9Slq59XdQvfL5zpw%2Bctv%2FwmiZntl5ECltd3vchr8bv78QlPb3la&X-Amz-Signature=e16615b0142fb9d16cf74c8d1b142dd268a57941b1a4999c749375993939f963&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
