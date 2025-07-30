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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3S2BIB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyAFsjtFB6cFjwjiS3PLBc%2BEeQJf4jNT%2BG0BEx07PJwQIhAPkOTtASKpsjOvXrsBQeRxfj3GbiVvYPJEDBVaa0QYUgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbrXAwAepjakYm17Aq3ANPTMXG%2Bu%2BysE%2FU7z7vS%2F3S7H%2Btjf9925FLjBD4NGQ1yKyBhm%2B6gPkfq2yAykNHQ%2BHmc3Kow9Dl2er11USDdKo2l8bdJsCu5cSiCYeQPi3bRJIgjTrdQZf21PBciIO8x5cMjTWcYwiqlhBzuqWRoccoAGvDcjyQDSMhmg6w1v8W7orX0LHBsJ8E6h8E8NOpLeC7aVHifm3jxSNTt%2BVazGVvu9pSN5lnU%2BMV%2B4ame2jzFxSImIim%2F3CLpo6xC40PEsYUMv3OxUO2Jhd6QdTkrbRAa%2FcAmSc%2FBWTWvAvN8kbl3sw4dPVzs02svrv46rXX7jCcsrowjwX1TVetlI2QTRQN6hbJ0jRKwCfSWJWRwFEyimDEzc10T34o%2BBXV5BB2nwipfQMPnB8Sb42tslsyqvzBP2jW6CdJg8cbor%2BFEk3ndEv0sw2IO1SvLzjErpnkKMI3Ff9pmuRnQHDQclzsVwSBolsNV4RIWQcJ9yZzeDRnYGu8N0G0Uw%2F7qMbndqOJgKK9g3npcwTF1DGVTVCQl0vhouf1IKREdOt9NADDeeqqxPEBH2SJqrazFFJq5KIVKdxMna%2BsLF4uv0q4oNyBrH6DmyCtEuAARmLQewZKepTnBooAkcHvLwmdscXb9TDsoqjEBjqkAakkC32z8LDTv880dErWOXoOd5110l0hOFgENxiN%2BN%2F2wGhQIvAradL6ix39negqUwfJUQ0Oz%2FIGuQAKQtwkwTVWYcmGNx%2F0HLiMeTprN4MMWDH1Tht5YtvOwydeV7coJwY%2BFVd94poop5NU%2FoHRyZbsqzpjivl%2BGybKL%2BBwA8T%2F4ORQGGvJhX6yFDq1OpFDT5Cc%2BNJ19wgi93uWVL%2Baep5rmb%2F8&X-Amz-Signature=68321c1e1247f45e48ed64d878bfc23e04e32f2260edcee90602b46d21bbd43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCA3JAK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3r9F%2BvBd%2FOu2RHNt7pc29mtrKiQrslgHpXsEZvfLMUAiBr%2B9tIuZOB%2BE3lqpd6vEH6x8yOY8DsC0QnW1tktqntuiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmU07E7ht4Q0fgdQZKtwDCdHRW05Q%2BgP5ZkaGHeB6XswOI%2BRWZTWwhlVAl%2F%2FbkpC8%2FNrPkSZIMseDZFW4aS%2Br60o7tgX%2B5XJBg1FOQefzlqAjAHAZRyXrGRuR6Q3tAOX67BfNjhpCgeGI8Ri0IlPe3hflEGV%2FDsNgjdAiVd9IpSqZschofQT%2FLOoSQtodvBY%2BEj5LvVgTpXKeALJ3xW4%2BfIEGJUOHFESCCrz2Q0Ho4TgFJ9X4vc3jazHBoI%2FTjG2%2Bxe56S2BnZcagJBndx6slNEX23QE%2F800UR8tr1xgzWuKOqCG3yG25c8FOguY1OoZDzeTqxsPiOt0A1wLI7PpAxoOAH8tOdRFQHEcSNv%2F54K5Bn3LqSXmq57B%2BAVnOQU79IPBfjxz91BQvGwYRrCSnuoa8HtBfx1dyl2p93a0xuen9ehbL%2Bvr5CDSwQWFq2JU8kzazCazEttl77beknxqnUTDMku1Ap7kqVH1djzoprVcP8I0S%2FvRuZxGlRie1I71vye%2FZzQAyWMGlLAX3Nxu5tNcP8yih%2Bib3LkthmuHbcPb74OOoSR%2FgGfk%2Buu0ZxVmwQ7VOPcXAubgQOWNHlq5TbqeyIyQGsjvl8o%2FGco1whwS%2FyaPBAauoAqt4Mt97Ta0NeaSmhE93HPzrHRUwj6KoxAY6pgHEzx32LfSD2hB4%2F%2F203X8f5BTlZI3moMkZKZ8yPWOr3F79ss3K4XyEEc92yfNhMZ9ul0yKjMBsMpjADfg%2BYkD5NiL01mR%2Bb%2B6W9FEsvnNRk606fsfqaMtvX09T4RGetQMtg66HEm54xJowrwkjUjORDL5h9kn0ZgzeXSCC%2BurUjn9%2FyfbkSVT4usd5Ik1QKIRXG5LjGpMzpLjEJydN0%2FYFpYIrOc62&X-Amz-Signature=6ded50b9595e2a6acdccaf93d8848546801231b2c018a7d721bb1f0df6252f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
