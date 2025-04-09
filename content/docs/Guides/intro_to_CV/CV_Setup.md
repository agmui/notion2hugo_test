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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UPOW7C%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBvJgkjNoaRGhJdgEBrxw7BKCokm4jjom3vwhN8hJCwdAiBZsVCYt4pzwuk5wKc9qECwUzYZDFgbPX%2BhkqOHwjT15CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxsdj%2Bo8vs0BPfSL6KtwDbNUpAak3G1jdJ71CZmAC%2BU3HWl1iS1PAzmwuI9wzC9rtGOdoZNX6S5T8zvE3Mmp%2BoZ7Omo0iibStldTnvskxU0TVVLHFaXNKVmjbuTAnKqjlhxoG3SllbuoXpnwyJeinmfLbxbV3sJJFWblVR%2FGw7YnMk4uORe%2FmrdaA9dnsRuNyXs%2FM2FczjR7kxpJq6xxGVZlyDFWiigMueSrnWDzJVsMuKe5q7DWPCDJ%2B8nxuYvH%2FbdoAD5ruXk2YumRoZRHDw%2B5xstrO1YESCHuLv0zoakAeuds%2F81AB1mfp8CNT0KVxaN6x0lK5VHaEhCezvhQhsmUPdmybKwrdtihh8BMeyO8ZWDtkHLZkZOm4oBN9zd%2BpDBaKT3wVnVa9p3xJ6U%2Fw7%2F7Dy7V6iqaqNRqf9p%2BmEtvkjVCnxspzERa94T9zzXOifYdH55cPRLFy0UUb8swveT2NZCFVE6DycFOEVOwilXxikj5G9MyncLVr1BUAS9TxPzKG1%2B6qWs5poACIzMid6Ad7PoahygpVwUxtX%2BeoDcru4eKdaOPnZgiAIbClDX0EZoqU4S8xurDIPlFFD1YDAMifWUZlGCqIerzpnfi1SkaXl%2FQqUHDP3lXizHDe%2FtTjb5WKKYUVTi%2FXKAowwP3ZvwY6pgEzx4ELo%2BXBn5UkgAG50y1Ie6IM%2Bx6CMFgMUYAJPetSYInxdQoO2s2jYG%2FFS30dSOs%2FMUJBVKnkXfz5ab6bGpjGl9Ln2qsH1Vd1ZGdulxdp7kZZ60CbN42PVC3QMD4efuQ%2F0FGKmAbzDJMuG8uOHcRlsQAghTiqMclAGa4jjX5y%2Bb5zUEGafrEbNAhcxUPGEqngwujvisJ%2FHmQ4hVENxzC9xj8xbvB%2B&X-Amz-Signature=f0fc3f9fe92e818dcca65cca30209061307396a83bdfac6d9b328f34d4d136ce&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCZH4GR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBaVkw6erh9kA1v2uRm7GUUPC2HdkOccbmX8%2FHLbpy%2BvAiB4zQLluXSBq8v295R0FO2PD16jP5YVkFIrP3jgNs5DyiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGhQZPFGX4rVGWArYKtwDhzt%2BFof1WZwC5cHvRaU00nW6EMwiiFVVoIFURJ6JJYNy6vCgoltmTnmsyr10MfeNVHKXLHCrksdWfag8rSArQ%2BWmKoOjjJ%2Fmn4OPQ1gixtqdDZ8tDhWJ7Rip6mQH0xT2l2IY3N%2FZltVtnQ9EYqL5d3ziPBk%2BcC8Md5lNkiB%2B8hsS3XTSECqr3YUHHElEk1TjtZ4dAILxBUPDmrTYuDOFIifRT5GB8wtm9ERlQPCiukIArgWmZOWIn%2FU8fIzCTmv%2Fqrj%2Fg16UKi2Xb9p7bEGCF1v5hND63L%2Flmgq2fRGU%2F%2BVvn%2FtwkBm0Cj%2FGtZUEvElyCx%2BYAG%2FT8G1qMyP2ZsVmH08uKTIjAgntd2cdZSGkAHfilW7Rf03jw8NhY2kPHUEkraovku01uyePJEpTpZ5j%2F41LMsNl5PM3G9d%2FnOpz%2Fq1INmhe%2BmaS418KOo%2FSUixB20dT6RGYqwkZcIjE3SUoIjjLP364RbosWVPzQz9V2rn6dRHHlUHxrXfiRgJMlJwMLQSEvASFGI%2FuJ5nmRmTl1mCkQ9bzJDHBW8DTV6JkEu6FOUgOPegsjKGCavUxGkKGLUlNTVXkywZymKUO78MmpJ7kLht7uNgNV8B40kum%2FgCUgnx%2FGlN9YbwgKPkwsf3ZvwY6pgHUESYO%2FKkwU9SV0kTkK7UkRjIUjH8PSsczB4Acx%2BZPuo78N2Qmt%2Faivil1X21DEdtL5B9LR52ZeyrXSIGOsNpZG0eQOzMk1W%2B8eimI6ctCfGDfC2MzDematFc6fR4WgkOq7N4wyY0ZtkdYrNOAUZMuC61XMx7ZzaQVytPWwq3HQ0WPX6P3bcwAnxDNKoo1uE%2FyM3f9zMill%2BQcw95%2Fqn3dv8nXGhrk&X-Amz-Signature=0e00e88cef6a94e279d99ee124c4c1811402ec9aa35db825e0cb3273043c96c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
