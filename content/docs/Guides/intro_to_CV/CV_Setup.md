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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JMAUMW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC126JnLIeUMQi4qn8Fa8V4T32QA7qct7ipDJxXQBd8%2BAIhAK%2FA0HaC2hR%2BdmKC2Sff7wbyRmOtuQxeFA%2FuQTVHb6BiKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVpyrMq53wuSfJSuoq3AMpmK01qmUOJH1%2BkogTYwc97F6WQntYokDK86p1u7BFcyEqoN4LbC4y2a9o%2Bk5VM5FWL%2BvE0pCAdqLJM8ThJSC7l3KpHCZmEVWv5jjq9%2BsuvF0FaHtgqWlkoSsw%2FgYWKepxqLVpoz7H56hAMrHI0GkYzOkpVlTineKTrgk5dNWIWXvhAnurlJDtD448wBpRD4MvkDsLvT2Oy2y8s24ikFmqgWiNAr6z7gv9dYayUoGTG%2BejlbLUWwcF7cK6ErwJjjMF4Umjfe3nXC69eCvCGs%2FTS1lWXVWlfuWtJU8GdCYrhkz%2Fwvas8gsvn175e3nu1AKxon0x3ucud63MvpSmufgJJyXJ9SkTYeqaImZQnKYwZoPQwbXptyLAOQbO%2BD58bX7NN%2BZ7VIbHCID%2FJTeiKYlCClVnk2fd6gd%2FE%2FWZsUvIpfS6f5ruBummZg6%2Bor6NSvtXocFctaZje3f1D%2F6jRq7fviyMRFjKlZdz4is3HmP7PdrkuIWCHSzbMLwv%2FKdj6tJRFeBX9UAGZ%2B2yX4NzZB2zuYUFR%2BgfO%2B%2BEb9454vVpZ7kAG1WpL6pvCNhbsby2Tqq16iIVMBPVaEx%2FmxtAOXPkCtf6l9KAXfCzw5q1NY6Uq6KJoI00KX4EIrenhTCR%2B9a9BjqkAWbxurWCaYzuSx3JXjbnbC2oV63oSiElsxKfGBC4BjjOoh7FAw%2B%2BaMLyNCc22Y8Ey1TGESFMS2jGbbzavnYuQ4mT457dO5%2BGrF1Dmi1ukCrfNDM5YgiPI9%2FxhWxfzSBP%2Fq2sECEpFBkkudzBZ3sADDQ2xXlsWg9e%2FE1gW1yWVc8m8pnARvA6EkUteLY4FG0ezZ%2FXQzl%2FlsFVmZTrKsJKU7mt4%2BP3&X-Amz-Signature=13ebbed0e1a0e830315791049804e5bd351cf1dd82e73b8ca96577d8b3d182b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JGPORA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHjSrkaJNGt4scD84K2PeHGPybhpkvd3aVfQ6ATl7tp9AiEAyODus9jM%2BX0Lw7MwGn2tMnagMKRPGZRH9eBaY4MUgH0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENbgONnZyC0BG7uHyrcAzhe1ZfPjCK5j91CC%2FDwXvYHwGZRJHBiUZ99bfWikUh3cLVjZsnmCxy6pPgqa0KvOwmzdNRMMO8NYxlBjstM8pQYdX2V%2B9r7jg8YTaE9zlBvmeaQ3PA8rL8BQvHDITvXQ2ot3OkSfSsSkOVF3ueSU%2BbolFwVfdEWDwLjHuDmfOOc5wfwUw1H0%2FtsV%2FA%2BKAwm4AqltziKJPO5yHcGfrEvlDJ5SUU1E%2FCH0jE7NXKfk1UBywQJCtlxZvypDVH%2FxNLdy85Q32fDfSF7oYZFtelOkk3J1yWSB7XuVJ7l8XMPUT%2B1cAHttJXmpNNCcEyPnBQTqVAEOpNiAGzJWF2pK897LfT9MMPAb5zPa5ZSS7L6GEGWw9fenCnwB5HHxo8bJGFhUQ6RO8YNcFTNF%2BXbAJ6tYq0yrUKvhOknH80gpXhc8%2BanMXbEwQyhECavn8NZ1ptYX3Klu5cRs8%2BPGTZz6T9Wu0XcPe1XiPBWgG6hBg3NPKRjIaqxx5TwcY8g2qh%2F0IE1Cn%2F5xAgp%2B6GXUFKuLNRXuimyI2%2BiF8NPQQeDelcXBbtiVLMbd6t6h9Tm8ElxcXXGOhNail4bd6S0JpMwMpLbzQjL4OPgFlFMyZTfgMyyiQTGMluJyaWj6DLguu4hMOX61r0GOqUBJ0yPmBBinKAtpqefXAwIJt2LBX48NDWzes0QaTWyvFutRiOADuEEvs9ZTcGWTM0D05x28PEJwwJfszMoK7tEjryVMlLjpd7%2FcmXUaAF%2BYdFbsdMa6THe%2FZoJWLWA27j%2FtQYpeUu5mr%2Fu1DaKjAI0zmqIY1XjIqMLgUjrDp%2B9J4yjRtDIioj6bOiMBmSGFMbpEzB6jmQ9mvvovb5lOhKD51%2BpvZrG&X-Amz-Signature=bd0c37240c99f4097f596d00ea4f3de9932d4f38ffab70f84003f68c11c51fce&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
