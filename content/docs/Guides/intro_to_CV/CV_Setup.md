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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYZ5KP5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFOT44Jmwb97ECEx7l14cBaN26XpO03qrbrXZJuqF2OyAiEA1%2FdRFcJ2%2F3P3G96TkQdFXwLWzSwG1i4udCiuOoLOQMcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGGhYPrmvnvbJWa7XircA6bcYByPR33ZDnKHrQAAh2QIP00z5mh0pY4xie3CKhJtdJmMdH77EvIEAtVuTMhmS55NMyABGCwoUrIyr2dCCwss43vhOEX52qKI0K7nT3FW%2Fckb2zm1wq8gWR52UsDiiOpcpb3%2FrNIXoPpNjvtJJiPBkoswsepZCnv7WtASBUSkYwNRAxyEOenPHPN%2FOhKnVn40Xy6xT6uPn0c3cd3GN9WTn2QEodi8Bc8Hfyi0szWfKaX8LpwrOmhsK5SoLW5nGTOBj6Bqc1kbaO0G9OQgqPmdpBtdx2wUhmVSkVL7xv3DAXvJr%2FcYNh%2FgypSFoxYYCC9R74n4MZE2bRdnhKRD7hPBzaBhzYPga2HCXOA1hSomNWeg3VWIrUM3XAH9Is7zh99ZBPK%2FAoxx8x3MdCBnNOtxjZR5YC4OZ1CY7%2Bhq39rSnVvjoRk40Nk41wvgjcTb4zsw1R1E5xGF%2BkVrc4wok6xOe31kKQCSk8Yr%2FcNSynMyofktt%2BspPViG2r6Z%2Fte8kDetNp%2BMQRBTd76D7dFRhgn0%2FuwoFk9l8zrVvBEKkVryUg5bw0urE3Q16CZ3Lqzgd4KwZqcLmTEnuPcnKorstfD8hcDKFQ5QVNkDNWcJm65Gm4LzsPDmy1d6T7%2B0MNi1n78GOqUBg9TskspNIRsPAQKTRLj1jafzCH56L3U8xgfDx4YtWR5rUJ8mvsO5I9BRzQTd5BFTjjZ9B7Adjt5oo2pW3WBG%2FRmkB5UDPehENCUtXzCMWC2Uhf4gBrJkZnkNsVUpuAqZsg09BqeJGL1MFoEUe4QEdhNl1zSd7LP9A2j4%2Fm2XSeaPtya6KnrmMxycjMC9r6luwwFU0uzucTrL9Snb1fU9k62fzmUO&X-Amz-Signature=aee5c33563312cb7949c94f9e6f367eed6321583f7771e47a050867dccd425f5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5JJMKS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE9MydIGtHPYZ8%2Fk%2Bc2yy8gCOZrCTiHGBgM2GRJsLlRRAiBnsYeyNmQWSwzoX9zYQQS8y4cVV%2F%2FrA%2B8OJAT31lrYEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIG4xvJH96YWb2eEcKtwDPgt%2FXcZ0JHdTd7UQaW%2F%2FDI2AJwtzfi1KvQOkgJjlznpkuRPDtGjoBNXRUgYLD1s9naEKU%2FyxX%2FP5iB8PxzcI6pRGaK%2BinWJqmiK1WPz9HyAXxMHMWiOCWtz7wMWM4rA7Yl%2FpgTvjsQO4jUzOHiR9n3s2TlCrxwtbmSANT38umiprw39eAbgg7XbIONUii8NxuU8uOjTD9IfE9iqI6S6IZKGaTITbwbBGr%2FeT5mkzl%2FHxqiP4aXnnVYed4ZrjOswE8wWYyMYEoaQWlk4L0chK8uCa9xsD8slYNPLIroGv5zqv3VR1ZoAAUVI6saLoIaIy6%2BthOkqk3OCXncMeA4Ji3zhizIQm5OzbP%2BJEx5CRkldZk%2B5TloG33nxI5UTZugjo72kkgMmTZ9IywIbw2yyKxB5SiAwFoR8zdGRXrlHpA5OAk5ShL2UnQyl7wNop6x0e%2B2%2FArZYjD1lYUVkKRKlhjwHeOfpIAP%2FsCSp2pVblRuY5Fzk7eUWO2Pa9QLlXLD5sE%2BCCKFCiBMkVXchtrBfdS2gkQRElMGDV215Q9P0w7FzrO5zmusw1DiozVV3%2BDGI7bK%2B%2FLIQqtEwTkL6RQcLWgxYC27d1kpVquH2pU3aSoaMQClFf5fyN%2BtNmFEUw9bSfvwY6pgHPGAKj9nINasiq6Zk7htVgWrQ2xDnugqnVe2apAWX2fsnVzN5JlvKaVpXdzu3QEVfRNY1PlI%2BkS58CeHRlq9B2%2B37HMqhezdfwmH6crqOPKHCvZnOE1pIWZtx2loMbZ8OpmQmWD%2Fo1Zp9i7Bstn3FM4lkDGD3bQBNJ1eCEpk185279wR8OvEkzDrpFeW%2BYh8IX%2F6%2F6AiRYeat8GucoGqglw%2Fmp5uwP&X-Amz-Signature=58663faeb6604072bc6a6b6ac58ef8f733805db143149b6aa08453094dab8de5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
