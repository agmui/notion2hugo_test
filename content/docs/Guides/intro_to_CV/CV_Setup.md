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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77X33PW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDmDSawmGW%2F1celJDuGUHpNO%2FK7K%2Bb1PZOs2IaYUly9TQIgLp7GkM7bJb46N83zhfmw%2FrgBWBvc9ThN%2FJWsjGjGwgkqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDdy2aYxgpXQCMPCyrcA4Rv6SfkaRoj1oHBx49vxFjVj3COqQBmYUrFxwutQPQNiKM54rEsJnh0QxCkfvruwB0DZF7uSIUBxHwHQIo1APQVaDKSU2eu608jEruhrkaoEwFT0uhMlIsWoVLr7E5DkjKjsrXj7npWSz9jHuLzPEZlGIFFnye5naS8lP5ExfCigiKQ6jpuk2nIJAJpILV7xRlGdSfeRuKjgGQjmMKDYqGjRR%2BX%2FFqkyUlYvgJHispz0Z3Db4khyTZt%2F%2FOIgKhJiAASAscLxRag9EMoDXcVZVxhuNcBQC1HB56tNG%2FeEhVtF%2BOFPR70th1SYu6cgnYpi75MwqJD8%2FZ1PaoTUdFhvYMp%2FnNJa1Ar%2BHPJ8lWBSfl%2BLgcUa3DHYQfx9YI%2FwXGFhIwgIqGjFwNAC4p1E8x%2FkDHFq0m15hHnzYWKnBSv8b46f%2FPtA7n2El9UurifjyjkGxxYvoi%2BStUwOKqxJ4PLUaa4ADcvCdyB9HbVa73c%2FhzkRHqdFe%2Bfuvq%2FmuhwTpMhKauPTs4ruzs8ICHpe2kvC0w4i4uEOTjKuw3Q4LMVXh%2F1ZQ%2F3OTiiw38o1mXT6SsQQmm4xOFUBdXsrhLBVtamFr0hNSIvZrx8xCP6TQMjwN77xGMdQVR5Edu5yjeeMJya2sAGOqUBhvviMoH8MaRhD3L72RZjV1UKqwCzixrg2iYAVcbOzTewXgR%2Bu7hyDIH%2Bw1IC9qNHBQO7Q084r3nU%2FPZFwzf1P6oUhWANZCefLU%2BBJrRd8HIaM%2FL5U7HQzzWQ3HVTRxMG9Jc8QMFcMKm9W2PfvhQ03KLgiS4Jns4Td6hqCkcd4mrd8xYdzCUW5G%2Fe6e2WAXHAnDuQm%2FgS%2FgD4%2BNGT2zekxy54%2F%2FT%2F&X-Amz-Signature=eb73dc8e354a62b2e8b4226ed197340f0db957de81d713c29379f976c20d1e5f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARJSK23%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF0hhh%2FfFeshHfKcxZkqKWssM2cgpet386UedPi6Ti5AAiBtRsvqTdCeBXSZpoGl%2BBv2%2B0hEkHnO%2FYgJjKBgKSGqgiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYbUICzwH9cqhMIJVKtwDamBI04fqSkpSzu5UVpIR8Hdn8p%2BNs81aJ2yTw8mA9Tu6DSN%2BgDSWEXD3ksc5eAZCq8OAOBKz8Hi9gnxCHxb%2F42Da0jpwGYn8%2F4%2BMHh09bioKp15rkzcHC2X4vNoDcMm7SYsjBWdx5KJmoL1JY%2Fj24RZHjY4Yrwn3Rjt2eE1%2F1DcuahIb0YQ30yXQ%2Fm%2BfFU7%2BNOMMqX95gfju4yhiHXczd74BddBKljjcOAzCpfgu8jRDmpQ5GAaiTovzHKxBW0ol76JybkzNvmX4DIWkT7rQjGUQo2FogAUTSz2iIZ2pBUULmKsC7YPSrLZKngKM7p6fBNxdscTVZPpNNJbOHrcg9cLKySudqcYY4dFdwPCxKg%2F7RODgphoZd6qgzG7Zc0xptqdO0bVSyW%2BFPqWExBdCeDKG7kXUDO%2FKJprTZvmFxT9e%2BlCOlsVLOWPfjKd5A%2F9MP%2BP5M44C%2Fee%2BB1htaCc7IgYa2p6oZ%2BIMQCkKBp%2FdNPhyT9FzC4uapLeToJuRHioE%2Bu9GE9r92xm3FK3qyio5J0vtA%2BHjTh9B0YERUNt%2FrZV7I5ciQm%2Fuwd1GIT1vza8pinlJJguikZ59MBBz5I9qCc7nInotmcyfWiby4I3HPkiQIKrKaX2TkMTgG%2Fswt5rawAY6pgEbjCPWKjKaZwieTCYFiJcrzuXDaAmL%2FTowK39ySK3%2Ff%2Bd6VGNBPUNtE6Pc%2B3BHN%2BQC3OtMs1cochhgSsSsfhexbolvVEyEau2iZuVFdU08iTUgf58VsQzkO78o9LmxpeCTS1j9wf%2F78Nl2FnttwE6WsKkzQFd5uPQT5nbnJCKrHs2z3EVe8%2Bb8iLTqKJQGMBEebaSN57idduxVqtwbYlkvoyQYNRIa&X-Amz-Signature=002dace74647a2a5d34c274924a3be880265e596984701368d4b4abf6198274a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
