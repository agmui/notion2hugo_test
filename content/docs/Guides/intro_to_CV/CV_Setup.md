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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJGYVEK%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCc%2Fcd3gFLlTfyuwNyt%2F%2Fs2ctfFi5cejLbONKUKqT0oCgIhAN%2FbyTDaFQkGZaFFZvZKXuJ%2BqI1u18BPM2iacE9DsvwwKv8DCGMQABoMNjM3NDIzMTgzODA1IgyFeH4RkSh6zaW%2FovIq3APVzpjW11N6ZWS6kx9QBCpal0KbGU%2FrbrOXNR9amG1bPQhtW4SAE55mv3QSFqKrF0CpfUOuDPTiiup9%2Br3frrHr%2B1Ec9LXbhlpkO2lCEf0J%2FQEj62Mdjhn%2BRg0Oh5I9J%2F88Kz8ADdp8S%2FR9MO59pCEZr1hZJMmmW8jLTHZw1ezyyKRnjtS%2B3CFQBSkuyvUr2oXrTDnzxxbVxAdXjOT1PunJiBrYTMX0p%2BkQe2NgTN7z6lKMceYsIlBvZXQ4WN4hj6RnZT0XTrzYwbHkht%2B3zvf1q3Fan7EEvJ3h14OM90orIPn%2FJ1sMuqObP9BLnPd1qCfFuJAuDbn7qljYyCCeazCNdIwJh5tme4iplQLVX%2BjHo9%2B%2BPYyfC7QxGxZbXmfFMy2NaY40%2FBdGPTvvKzx%2BYVmzfqM5Pq7xZhgrPSgbo%2BqkMN9AXQ8EbfluYfsh2I%2BJLfZAyTrun7jMlGvhZXfr%2BfyJhr42s1%2BR2lRRe%2BV3oTRgQPUJy8LGNAq4NPlRU4Iqh35B2kmr7XBeBMjfOG%2BvOJxHbJCc1jMDD91mvFXKi%2FYbLZJOBlCd%2FGenPZD5l0P7Od8ClhWo2EQA1Y5cSVao2m2dZd4t1Eg3S1MjD7YLP9pEyAlftMijdsuNAVRD5jCKhPbCBjqkAXMkgiPatfzaaD9%2FpFId3Ttm0MZUNfOtJwMLCv01pnfetzG8l1Xamz5Y3WMY22CTf3%2F6mDA5QTcSGc7BEWeoSb10Hl5uCFj3xWsFFIGsdWngyXoreyNi6aMDu%2BCx6Rf8phWS%2F1566laV42S4GUjc34VTCPyinxSPK004MNQUqJBuFq2NfUkwBvmqnYek02RMqil53LZZRoSFkB0D9IwGrcPApfmD&X-Amz-Signature=cb642b531ed41777434994c31fd33ac6401f2dddd58b2738fdb2c096380aedd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKTE2SN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIA0a2f0qzBIQDtgIp9Y446OTVT0zoYBHwJw2KrQ%2Frh45AiBLCH90ZeBAqzaPn4hUxNQC0BDlSpYt1cXXvw6YY89%2FGSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMzhPSXxiS7tOGGUYGKtwDBiuIZfnjGRDdx2H%2FSCPP4Y4rXSaw%2FxJkx3S2ZBZoFzKgiUH%2B5b5XZ%2BsQ1gUy7EKeqwjoAM3M0KBUT24JitFeR6tcRt%2FxmbgVilpcd16mijHt1%2BE53ojVFe9S%2B7%2FjIPRWkhQvzGo17euXWukrCHtc0pSEEx0qT%2BE%2B2VBYJOszaYQPWD%2BJXMv2LFBuzNM9C6xby2hXl4rKboXT4MJnk5ZEH8PJsSH%2BGgPZGwLAxWdAkLsIcL%2FWdyr0jXGYCzHKaKIbS5T8F91P9%2BhJAw%2F5wRLpv8nPoqfz1HR1fRjzXRbIr93%2Fg55Zvx19AHgH2F8DUK7%2Bs%2FBK8a5EHkXlDwhB5qeE%2FrGtH0Z%2FS6%2BLpE7gQ4kIBm17b7s8jeMA7fBIsqRlDZshhecW1L8VHJWN4ANr%2Fv9XA%2BRYC5%2FE0aZ8%2FjqiRmWSfua8QEqbWu8EB6ENgmDw5PfqFtcLmdlzj51cJpaH6xI8%2BytRZDDdTOkuauGxjIN9jNf4xPe0rjNIPo6ZxWUzl46VGGTNABFINHfsgyUHmJxPY5h39Os8TsYaVQ1aFOW5mJ74AwXlt%2Brhj6U2XLksA22VW3kuE%2BuyUHkGyn1Oc8t48E7JN1kO4p3myyrPSBevVsBFs8sTgeYbIybZEJAw%2FYP2wgY6pgGB6wFjkfNNKAAt2U%2BFsj7Mqw8%2B8Auxs2fGN9u4PCcqG2PtAi8evFstOJs35JeylfGlWZnlgjtMeZPv7cP5fBFS%2B%2B7RT1Qhtc2I3Ln4TS8BCgAM1pc8RqbbVvHQCSTA8dNOFc%2B4EUofXwqp1ZuYCP6XpAH1y%2BHlyyLQiijApgIZ5JpoepczfEi4srDYxcs4hPVCDeYoa0EGQhuTvn2VxhsJWhIh9u0f&X-Amz-Signature=f0830ae206150af77549dad36e0705297ebcb20ddfb15278443fd7e5e1af4217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
