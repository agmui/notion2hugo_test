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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKXUES5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCID9JWWRC4Z%2FZu5zDYXCluq0H8PacEaQV5Ff8jm3nUv%2F2AiB%2FNB5Z9TEGC1BdhBGO1LZudQ4xuWS02OWcQ1EQTc%2F6%2BiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0aFQGCxnzw37I3lzKtwDustWFRp8KETLjnhw58dd0iijsjLDwoh3OhvCa8GryV2%2F6WKM2rQfb38um8lFXthYnWk0KLsEbvfP3FhcotPBy71pozyk%2BDqulzB5XSG9en%2FwnvCZh3Wif818caBVHK1GcJCxhHVnxJPk6IvMv0fbRfcKxK0HnRde6MGzE0aODBDQVJ6madMOlgIVBapMGejBbJzemXaL71Wr2pFjsGZ3BsmfoAJg1PvpV8Rn%2FGzT5vtY6vnfjUw0yX%2BuOkB29Cq%2FEcJ4Ajy1nthA6cy4jeKgluj4MPZhVnUKLySf4PTt0nDIzjIHiCaPEZiXKx8vSKqHPRT0%2BXGiHVPSCikm6ktLlCRkJjZnRD0Il9VvbV%2B%2BHQKQ0tbBFpZwzXH0bCAJZXGtjTzuZGGqwQOU20yGrq08C9hmqcBMY4I12Su7LKZi5vUQZGljmxvrZbB9kCicA%2FX4ERZUX9HKf65dn5YAIogZplJmycX7Atvp7pmnWuYY%2BWPIIulek70l%2Bsss406rNa1SBJkKDASnd6Sh76jMI2g%2Bd9%2Bzcr1wlYvRpHrCJV4ec5uoPfK%2FnNQ2mra%2FfpANkd4NTnkzqVd3wJV3gKEWs78oSmRSmjvP%2FzWrmkhWHKGy1%2FK00%2FRjsO0%2FmnWI92cwrY3BwQY6pgEELvD6Psj3L%2Flrl2uNTql5QRBquh4f0fSXMw6qJYMoEshUt9eN2uQ7zfRn%2F0LFXQL%2FEGiyCJYxdrg9kx7jMslVBbFuv%2FFBErIdz1i2r83GWQWwlez0yGIWmjVcuFwwQ1QQxxcdYo38UGpxKMkPUUKHdF%2FZhp8COtBMugfY3HgxBHDt78RNkUXFpSLpxOSZnz9sB1qAcEGHBEYtb8sOYjaHj1pTLJtM&X-Amz-Signature=62e3b3bb57bdf24f3be4a467766ea0ce99854a1e9c6259f5bfd5a384d17c0be1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPNUAEU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC9XX5rFgVoSPkQUtFn4jZNlxnT%2F0bQu5hqYeHFQ%2FHL9QIhAIYcqwVU1D1CiANY%2B2k8cdE4YMhoNhMi53SybED0kDo1KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT6FQt6oRPCvWUcV4q3ANz3ks8dK2M2fd%2FqiTUdgkEWWB2HLqRwgOV5UL8xJRyiQemCf3Kbn0OHZsjW8af1h3VXnPoCCo1IeTUK07b%2BBvegevV2RGwD2L2D1%2Bz51489tSnnQ7ZmPmF%2FVRI6d3BiW2hRC1IztBl77jHLttx9xQM3kQmVBXu1Hb3DNy%2Bj%2F05jN54eMvufuYJEZ8CybuXhUgqJadg0yl6dCBZLc%2FLYJoArDqvxF7zWzFaG4oRT3%2B8oGy3MfOz819H3V8%2Fm1gGd3AsVh8gPrtQl8CyW2xZ5MKC%2FB4m0m1OlcgZqXEdPjxRpGnWCbG0%2Be3qd01rDdMQNGQetm2RgX2jDtr6aoYohkUr3mFb2WsJoN2PacyPzC1z6Hnl1JBlE4bOlZOXFnD2iUpVs5U1NEMuK51LGZBvUxDQ8CfDTHzdCftG%2B5W%2B7h0q5vhjP81m2Hi6Vry1hXpXQAsKjvdA1LB4AErOtPnoqoXUfV22XC02TAT7KTmjkhAUKj0cBFvEX2G1PTiiDHU6KRkxBpNf36ei5XMm83GIJ%2F6PNzx38JIpiTXILDjJTaAvBJE6I4SmXeK64i%2Bu0YYCtsmwWa0GLyv9aSX3HV%2BvL80ndLHhY9%2Fw7g4JsTbL%2FSRUTgWL%2BDyxl0lYOzFT1jDVjcHBBjqkAeR7iiDAmFXnZIj%2FcWMbXaK4gzUKSSctXQ7SFk6EIa%2Fb79%2FRHfHE%2F208Dm3ZwUOu3LJ%2Bjzuj3Z84ZhmHhrbpNky3F4zpG96a6beONinwl4%2BFyBc00Hf%2FHHJ5OCUAWBh0BmCISFpYC7bnMS6SjaWKMo3UC8I7c66WyXjO8U2nNRJSiabvLXfDOSwsFbjC5zN7j6ge6nWTm%2FLEq%2FO%2BNU2n1HGPFGVt&X-Amz-Signature=bb5f182db41b62f3d174aaa3137ac09341e493d454c72d800053bb1e7fc75d39&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
