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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKK4WEG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAbEemyEJczRUMFHiiANd0mE7qfCdGc7YNwGeU32cgewAiEAwClkBU%2B1uZYF%2F%2BGVJq1M4fMvSE8L1EbkxJIg9aERTYQqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ3d8tylqy5Ld4gbircA6IUOR2KLj0jUB50JNRaIMPqrX%2Fb3%2Fdme0fVoOxhqRunHfSRs38zBOhowSVgEEzrrsW7Jm17SgLBsNNe4DcV8Nas6skgKI1vAdToy0PCzdyFPsousLVIP8pVhl3H42XyR5dQrQ6pwDZQZiiICfzSk%2FHv2x5qjOkUqReySkeATuroL%2BvpzVEPuEzf7Ccv9JzKUWAK8BtoAkh0zweLp2mOuwsoMnes8V72JkzdZxRZZJBJBah7M3tVugkiZvPNiRUGlPtIR7W535HcquLOB0a8NhSt4fPK8OVZ2L7LbvGipECcq3KeZhFOh3DhxMWynvwWCi5fxZ5A1rY%2BdAzWM8BjhNf6oi8cu9Cjq%2F7TDjNPdVmsLVF8MWUz1OJnX5MvgTdWk3w1rvSBeNH2zQ0%2B6jRktmy4njYz0DGDUWYOceta7ih%2B10gzQG5iJQ%2Bt%2BQ%2BeebwBjz5aguWkXEMiU5KdQLjyoT9H9OM5L7b%2FrIZ6lAEujpstSzw9yKt%2Fk5VnohtPo%2F61i4WmmAOveMPBvxQZ6r9c3P7SL0yVbHQJBUfD1ttbbJbcW%2BtzI%2FTI6X8vY92I7mqDvWaBJjTm1njnuY4jbRTBdB1KOcb%2BO4MAfF3A2oh8pBRMzEClgzwazGRl4RD7MI%2FKvsEGOqUBxxiJul9Gm%2FXqoLNWNGaiFubAsjonDZgAenYsXMefZTrR82RDYHJnZ97eSSutd%2FEoKTBpuRhSzD0z%2B2awSADjhUD0dUhn%2B0Jt06RwpTQwDhheDgOEpcsNw2BbA7WGzZDwWV6%2F777EgQJv9z062EgRQkBKDwmiw%2FngAUjDYFFo6tEvLb2uzNavGaw%2BAP3D9LR6g0BSGH%2F8cmChAJLe%2B5c%2FogL4CW4O&X-Amz-Signature=62b4c115a2f2f755fca19bbb35723671ff62d1f5cbb7948c0f685b8d49d832d6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FYH6QL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBDM6h5CZaKGJkOpqhbm9X7KVA%2FCzN3pXC0eC%2FCJshwqAiEAyQUvebiVKcO2iQCxySMozryYbBJSiCEhcgAW9zJEXigqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFP8awAiARfmMP1hircAzvMHN51%2BPjfzlEo4VQsEzGGbzfGgbNzkADeMhPOLqMn5urhwnuu89pmzknJtoEfFMG%2FqfNdvnwbDnAaKKQnWpD7zyxsKWbM33aso7hnf2WvLGXtuE9Pce3JoAUN7teeRLJ313Mm4%2FNCzo3cnDZY3HEHxagMFGWp%2FCJ5bije%2BwUdCKZLTLf2lSjN%2FTInGp%2FlqQi7ricoJwmawfLUsc5GkT5GDMaIh9oW9k5gtQfqUF4raNSzCa1eNYxqhGNO6SHZ%2B%2BtZmo95to%2Fl%2Fx4kr%2Bq7yCbWIJFg%2BH120xRX1gGP0099FbOvKe4vt%2BOJlnZNctBJKJZgvuV%2FoTR%2FiStHIxKOWg2sKzUcUEGqLe%2FO%2FFD5Wac3FwUPld6T47zgQsUAJnWMvJtcgy5RpHVi4vrLL1OIQwonnoiQN2Ez0dJNy%2BC3HcuRMM%2F7CAOqkVtQUa30Gx5QmCFWoLhzQOJr3HFMMER9QBuxJC0iGnN90lEI%2BsDTf7ct%2FvvyCLn8BRZJjES8VV8I3MgHJPA77jCvKnj%2FbpRH%2BbJpQl5cYrEt6H2MOFeMWQJbGubbZPnpnu7izcJdU7Ph1bsfaa9QGjIypX3wpfozx3%2FmwWBk4dglmNUb5cM9kRvOqi7YLYjzkl3Md5VnMOrJvsEGOqUBllzrAw5SzFfXsfW6xuWXfBsRzEVKvO1YQQVmYUjLekG1IR726%2F6QYP2I%2BoQpVpXqFgANquf5UWXAHUmchJ7OSSqhsUsx1yfOMfsgSH0PznKPG2087%2BsZivJwoaFzlAMXnexACJJTaftHlyNj3GRfBsnXfDJNRhatDKMqkXi3FbFN2DaAPilfEEuBydARLLWbtKRtO6mol1PaWF3xKUlnsErqSoas&X-Amz-Signature=c268434267a3b6b46166bd08a01862c5865c571643a9410372145ef3e039dcee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
