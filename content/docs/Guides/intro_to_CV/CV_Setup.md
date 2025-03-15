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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56LOLFD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPt%2BL5GXbXQO01Dv3sgOLB2Xg2fR4dQ5B0lEGqEFt%2FSAiA4a0iWhYJCshUvTazULoU32XLPXEiLoNlEDr7Pqhb15CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTcp7XGW5UMcDVis0KtwDrslVltdrWDRLBst63X6b%2FukyUUsZie2fytkRU9vUEXdWBt8f4ZdXaVLzUUYaadY371K9bMfUIrEXPDAcDF7q78o95yCHtK454c8m303L1uWrS%2BX%2BY%2FHRfu3OAWVv6kANAuy8S5xuAnem0HCh14w7AzrIz8GKGmHatbhEmudsQoiLnKZgkhIstbWdXsWqI%2F3JE3qv6hc9f4h%2FWMUTqMxj4nfaVDVQtIbYT%2F3fYD2F0tl3qhxRZZr046w4CwKS0ZT6S63YfZyfop03SBrH0cr6r3KzS3FVKmD2yd7P9PbqjtmHCe5D2Js2yccBDiZBEXNlKwJpFI4QBa%2BBQNNyrRD0zyOHnkAvK1SesOxPTTlGJVxCJAv3IbdxoLyywcJnu5v6TvEk0ikRrIgQ%2FWdHPLvZEOvXPhrNFJlM%2Baddlca9AM%2FqmaLici8HJ9SGsQu6dyPQ%2F0fXqRvRbjYL%2Bib5L3Nxzsri088LMhgXq1n3ANzIRRdtNQvuZ%2BsmseYsIlzYhfE8wxr%2FFzlATMDogTStGgLkvNCWD1urTd46eg28pMesmHK6MGIijuleTcP9M%2B7AqpibT4tvv%2Fh1JZhQ0AFuMNCfnmtqJgHnW%2FkLUIlRTGwwWNZe4RrBC7fgPVoCFVswx%2BjTvgY6pgE358O4WGopwvb2jHJoYStlXivkVLkUr3UJ1cWI7HMPXl175jAY42F2arV01SKvNnpDJ8Gh1uOL%2FS%2BTNVo94ZdFxiL14bl86dImOQcgUOF%2ByK6Fziv7R48rLksl7ggzicjMiptF6N0SRldjAsecZ7D%2BoG8E0ZskMigflfs7JnETIxZB4Xmvg1CLfjkjsWUX47csTz8AH1AARDBGydDmdCUxXuTQ2Xsw&X-Amz-Signature=476a38ab5d445e61361b76ea63094f18375d89ba4911b386d4488145faf6ff99&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMFXUVEA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIei2iUioQSoR579OK0WInmfqGaUP0LI%2FOH8wW6mXnwAiEArjhePWNPYsfPu96RPVd2mbxb23eF87wyWSl1QsdApccqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmfRtWxRzVoAjk0CrcA%2FOn6QuOe9KvE6QQxyE4QheIajv%2BcVIu8cwURjItQwLaSYKOtW8%2BWgVIT4eO8oPHiio1wdIfDo2x0ZvzoiL6Y35cHNAhnDsgtt0HINYmnNzs3GwInkUfTgX%2FQuCbQRjm1ImyHWvq7DDZ1KVioLOpb9aqkjbbAUHM35kPUnIejSHHFHlT4qTFK7qEAMOiTClEbyidHxgLqsO16BD84YYo7FCAEMBYVNWljNP8hZVhxDpS%2FI5X%2Fk%2FqhBczho7I0RkXmRXrcftx8LB54BuMEt%2BFenDO%2F3enNpQqFLjkgN1jpsV1ctOcGBxHH02OZ%2FWieXYwZmXBqtz9t%2BlQ4mg8isGGVyOax7FQPLoGLB1y%2By6YJLbTzAlpoYXi8CNmE0sxwn46%2FJDWcfP8uuV1HOYo8cCm5CNVtb1I6tS9p4%2FTvfwuU6mGU3hkkfAAwgORERpUv0q0%2FOdVN7mukpFTZJlOgGfeYcjHNTFk7SNnBCuA3%2B7v3u4OCJCEfFhEmHo%2FAOmuJmtjXat5JGb1lv8%2Bul%2BzVPAaB9JcQIK3%2FGe6YSSIv0SgzXTFD48fgCw52E2xsIJ9QJvG1h%2BwFyqkXKHbrmt8MmvKa8pwxvH0Eug8fdzBFlaVxIkbgVwjWh2S1X8hnYt8MNvo074GOqUBLVRKHQRKibKEduYeuYK0NpjjhVTQa6HlDjf%2BdstpSxYZfPSUr%2BOjTkdSLVOOK%2FlQzxkuBcwvh1hi0Jg17m0iu3%2FScnEtpB%2Fr%2FoCaalL6NOVKs7dOMKW9q3o1acMdNN%2F1sULXm%2FygNahDeNFHJ%2BvyiLZcllglzgkiVTZMxLHcO5ZxA6xkk1YRHIMxl%2BZyxbwCutkoBHcirETRL%2Fw1%2BzEQZAEi1J3v&X-Amz-Signature=eb1a2cdd66252e4400717ba0f23848d19cc57430b25cdba1ac2c998eddfa269a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
