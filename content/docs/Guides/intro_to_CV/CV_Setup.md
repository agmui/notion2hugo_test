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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLBXCEA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2F4Dk81dvWA%2B%2FHuWqQd0TqwuGDXBVex7kqC%2B32Es9gwIhAJNNqKH2EmhDN8BivePpgi3NpiHVFlAu6llyrCm9s9feKv8DCEcQABoMNjM3NDIzMTgzODA1IgxTyWnlkp7tGv%2FPm6Yq3AMs2comiBYgoV6zI%2Fd7UaBG2Bgahf6rcqEmbmdbgKgOFDNrf4pENf9wgjmUntmSl62ee3k8bhdirVSYJPEJ1mbigXpIJ8xB8UMn5UtX7vEc4BDjQ6AR8JU7fKHLEPCVvqUubnkx0eQglvDWaxgFgR4pYEh5aezzy9j1AFdFjgkgNLoPaOD57bP2MmVNCr5ddGrffxgQP5vlc2tHloU6MLOQgvY4FEMFcNjw%2FBwuR%2Bf97mngYb1A1PMDxksSWdXv3VzqWUZ2s0BkYauk1TFy9QBJEldTLeSXQoH9SdJ1wdn11jAcDGgNaT%2BkGkoJcvQJlkO1ALJ28ZiGXVHh41doAQl%2Fiii1ZtaIe3RPE6EuHenuAw9Y0zZ2we4rEyO2EVxUbYzDxWo4NK5Yj2WXNpQAqV5Xmr%2Fj5lXVuRezjTeHXhv50Kr%2FFHG2ikgBdRN9U8OpmEEr9THQEqOa5jHeWPYgEF1VeYpnr2peOm2X2KBvS2SROMRBikxVKtPjIT9R08SJb9HeY0dtvL4krNnTPqsVsLbME2d7Es4dwWd6kbmecvdL3ZDYbsTZB1lv%2FJg1gi3Z4q5QdeyuvjzeTOY2he6t29eUKgwiXp987p1mhRVEyhfSZ%2BinNILHhMxMzP2NYzCp3%2F6%2FBjqkAYqHar7NBy2FHZgS5gieD3AnbfsaAa%2BfvH3EMTXalrbAwSH3glQCwMrc2rs%2BXJc%2BxrqG66%2BDrddTozY3%2BEF3cZy0paiNQc%2BBT6mRvtQKLakmCVzUqKYAZMswPLPyrhU2htR%2FKZcohxylDtIyW834ryYVmTla3a4BrQWf8rjFrvh16kWbR1t8j2BCZA3XAkTH6DY%2B90ylYPe5bcgpvx%2BxmmcYozs3&X-Amz-Signature=be3b3289f6de525f20da550b7fb4073bbc31fd6d014c03d54a7115f7ef30d738&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YUPTMC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1QEpuKS8oBQWaBVOFlirx38rhNq90oh%2B0ZKNafbcaSAiEAhA4r82hOwp5WdUsa8jivaais9htkTdBklXOe6NjS8loq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNzCFDTpMfffWJPCAircAwLnMqWwP4pIq2vmMn8Zdcb1Ei9kRPkOd4%2B41r2O6huiOl%2FxJOycaUE13RWW5rPOWFF2y65%2BJivrxk8TByEsYilEVOoOQegwkyAYWFYrPfcPLgSz9FZW7Sfiv69VoAnlveJW7ogHPZfY%2F4dOqKlum1TxMyajHF%2FWWzO9SRkKHyUXwquTeKe4vQx3CnX76A1UxFKrtpY%2FbBpp1K1B1PyL1bhMkbHmzD9CfR8cpilQETwdNMyC5E8SxkOF7Wtgh1qD40J2uApQct9c9csaIGueB4JvhetZ4yu0QSj4TQ8InftOTFE7%2FKYcC3Mni1AiFJHL5vI7fcU2zNJjkgviPa2CLXuD%2Bni4vBCEZQMUHV6EM%2BfpZb5NnbO8%2BQbuuPPwEboMn9vJAo%2FP%2FqbWcBEO6cJb9LgudWZwclBA2Sfwmgrh6y19hz3h5kcK1fDlCHdkWSiaBrcUn1%2FOy8Az4nVOEof1cMy1s4TkeTwxe%2F6X1DMfnJil9MsxGjbIgXkHXzNlCguZdA6bCdnJUzmBODBKQE11pxE63fXsnIimEBBtjHWjbrcACxZ4lBGgV8ZyU7xo24yaf0f%2B9%2F%2FRZEfp4GLQQYBYGAJRnHA2ROUkmW1zu3Yj8txz%2FkF6hMPfKGytKjpwMITf%2Fr8GOqUBryBhgFKxnt3HSWI1Mz8fzQ1Vh%2FGo435TRJOUA%2BcUmlcz%2Fu35a%2BB36TJcL0vVxwHI7l5yQwqQk1dzUuqHJcE5w%2BLb7yNKjtNbvZ2Knmgd%2FNsoAcqlv7Ibim5bMCP%2BusYlk783TQep%2BGbhSe88ZRa%2Byb9aYxrR8ZCZSb7tUIkG%2FLV8m7UTLWZnJpE8GPyv47cV6A%2B1QQJwhHaC3uXtuiRYPWg%2FfdGy&X-Amz-Signature=2e8374feed62aa5ab36e4bd88f17124db29fceb923a7278a5e0f484f87aef364&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
