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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7GFYME%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFoalbawtgL6SlramDzfJBheBqprN%2FJ7mBnCrUBsy%2B%2FgAiEA9Or5ZkKyOoqje%2FrDqj%2B0pwISOdh9eqQJzlRGS1izGtYqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUbR629PBFrE%2BS9hSrcA8EFRnFhJXivrI5qGfmgwLTxgI%2BcF%2BFdFKbYDrXv8ZEEvccCx33747a9yQp%2FO1QIe9DC9bTdH08UP84d3M9Hhq0VqmhY37zLokpyhr9Sv%2BgDFLF4pRrNcRtV9FjVoQrgDNx1qR%2ByKnG6wFmGl6ymPtfQWnYeS9fRXJ0cKps%2FjJT%2BFghqFph2VnNNyqQOyp1ncmVR%2FdbALiEJZ6iTA0wH2rFjRk0EC7sBSpXXd3MIRLtZsMYbnfHABQplAF4qFB9wnMpaZk4ZeRGysPPhrdlCiCqcsJJBa1vs8Th3mkkU1s8qSjdghBRGncpDNxRn0xphsw%2FmpMaJpmisISvhJ82fANNO8nMl9aN%2Bxi7cm1P6fV5HyBadq99NmAC2d4RIAr%2Fvp%2BoNsZKWHuptHsToZjByS914U3KSPNVwcBj%2BJInALBngadWOuQ2jbWtnAu%2FSHTY8M4NOZDcCRafHr%2FB41oF4cmGrhGVyz%2Fn8pOTBU8F0MlDKGDmCaXcszSDiuD0SF9kLODI4pLDW9mwi2WPrWAw01GRoA%2FBAcqqbXG7oKefyNTK40y1WKGzsLoJ5qBB2Qshq%2BFlfNqFQYg9YlhzACpKUXnFSQ0ralApjMf8ZrZI0YtiN%2F9K8weDa82m%2Fk2mNMP7WsL8GOqUBXZE3m4jPsNQZHetfb%2B%2BctDrHUML8ZwuU%2F0ZclYH1FxzdE%2Bllc3OR%2Fv6c5B7UVrhG8Xz2iQqzRWfaEnk76GP8XhRaie0kapnXjZ5dyDAZFWu8A1DAKqAgQtzwYMZyIU1rSrlk9e42pAwxP2J9mK342IWDK0KQ3EJjBCBib0KQNPKU31ceE5ue5RaXNuNEiq9Go0mrLZAYIo0vD86XH3ElgTQYVV4r&X-Amz-Signature=d27ec52fd1dcc8c400408cd6253147a5969f810cc2282cbf587b1df52da3dbd8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWYO7LL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIB0d8sPuPUv4VhJZn0%2Fj4Hr66qJTt8aQypwBj%2Buryep7AiB%2FEyrpuSVzAnUQ1iZJo%2FF7Y1i%2FWB%2B6JkPK1styLTYJmCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRO%2Fj3MkeqzuDSI4%2BKtwDjxI9G1LyNnd7SYQ%2Fk6yzTfPdfrUOYpnujvmyUNiqmAmQHqZQQnJllXJnDxFGejsDBmLBixgldfi6nuQ20UQmsCGAs19bPb2cH3mzhlX4Y65DdMrhJFHSzLuZfCVVP1N8fEPCf0wrj1%2BFpudzxtAL3wh%2FgjGqn3KrhQQWk8S0u6VensTwd05GvQ0T3euQ2KY3hnLgCbAMMyjIePYIJvDJ%2Fox1KZexfQXEQAqZFtYY8JZX%2BQKzZAFdLLkYXcDP1zy9aoR86BblhJMj%2BEScQIcDaHG%2FJ7Mg5Si%2Bkg%2BmWGqp7ZV7OJToOrPbyIza7aDgubNWPODom5p%2FlBuz5fN3Tr6rFE0EBN1wP%2BdEeYfHf%2FNUFzkLMVgKOEROREpF7PsqL%2B5iBzMPnFaUNta%2FqvbwBRaCFJqhBgc7BO8PnRWO1h2npVowlZmsxT6z1y6Xt8IXpNLAtDewNwtf7yC8G0OC8BUCRiHGQBj36jQJK6rldHcEMOPu6N7epKikViN8cWQkQPHAwplwF4Wn56qMrCtabZWXfdPxKdWxdYpCCU%2FpO5JU9nad%2FalejmdTvlGbq3xKOY2NF5g6wvv9YeACCTuv73osJSq3k7a%2FtHdoFoMIMYEGnV4%2BUzx%2FZL7xd3OHRKYwpNewvwY6pgG8WRO%2B1Ml0GSYH7DiUDDP6tw2kzUaRzsuTxsjCaTcp2lTxt%2FLzMZNs%2FC%2BBqNBpyFckg3tpx2OCzZltxryr8IjKIpJxTCTUE%2F6WYBWT8D1Zn%2FA%2B9d0AulNPZcNZA63bhaXLwqPchprJ8Xz6ooWcZXn1qqUeErkmAs4bnTKlK9E9%2Bha%2BxM9%2BaUClsuXc8MpT3acPC0eUw%2FDJRyInu5DLTKiojANZJKmL&X-Amz-Signature=9e05bbb396ef0fde5fc1eb283064a98b5c09a1a0924c72eb5dba11ac34c9dd60&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
