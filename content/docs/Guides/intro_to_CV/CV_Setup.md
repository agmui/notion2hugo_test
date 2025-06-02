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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IW2JP5G%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC%2F4cBdyyxgOgpRyqKLba2VVAKf97t8%2BNh8gXfHFCnkdAIhANzLgqLNoh6X%2BE%2BIb9tvDr35xU8eedhtORf26coIL0deKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwmt%2BXpcCmmfPpFfIYq3AO57ToXwBq0j%2FXG9HDCqK%2FrIjSgIbELGS66LrvR2fPDJOJREdM13YXnctTlh2Dq%2FKsRftjZxYK3ah1GOTrYjvPM5dKBtcuDaiu1nKjMQgMvZrw3aGC4OLSRo07NnM4MynlXFc3uPCGn6Lf0%2FqRBMdI8b090Rl4yEMx8bgkjq1bYczLe1HU2N6keukOCcKfV6FSBAsm29uEDXm8Rhaw06oLcJrPEYnJPcyQ9QbfjPPNJ0acac58Bb2um2nEO2XQTFfeHohX7erE90fNmeHw8Un9aP%2B7nL0GHpgEGomKJfhrRUkIsCXUa%2B3aAedmqKq7YyuLoc3%2F3PKHRLqAiAByH3y%2BiWaSu0P55RLfGtxHtK1Q7H3AcbhWQMfcSYQdn35cf8YkQ9kmiDoqSKdhwWKi0jn7CREGv0jqtojkEe9TEPl2CF8J%2BPpCBYOjnsCNP%2FoiHS2mdeEP%2BYQZDq4KOdTJJAIN6kFrWXPCcsJeOcOrPgncN85aLai5jGayEQRsxnXJGqpcB9ocElTrAhluVoBxkOSLxX7o53LdSCOgkGKydgl7R7NJ8W1zrtprCKH9BHraWkD5OBrLrfa%2FBuQ18Zc0uH1RALkK8IdgOopmKMBaPSvHhTvp4V8cToVhGDDfHZDCytPbBBjqkAbgCdPgQhoP7Du7%2B%2FGAZmbIH62u2pcfop3QPVT6Y5Inf5jzLjMBXF3lot1R1y%2Bn8O%2FSKog9DAUL2dlmY%2FAzzh5h9mfcnjGW32KZsz1ma2N3x%2BfuJF%2FzS4RYkn7wPDQOAJKrN833Nb4B5EVYg3dSmlEnKDBg%2FA9LdqNzQYOWZiryHSzVbmpvAu9XBAxFqKt35VH4IdrEb%2BwaH35qUQ25i9RfDD%2FcT&X-Amz-Signature=94ba1bc79f6238d52b897b7ab9bbc26d380b12abf8b2d6b1ebfb6cb95c796693&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQ5TMKI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCyTa4y0aoiD13h7gmFGN05dvT3Jp9M87tm9cVyj%2Fo6rgIgLqnE8ZMWlDAZKVh7JvDEZzXWl7mP2jgDUrmLSmanrMcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYX7lriqX4a5pLP2SrcA4S2osX1H7Xs4P%2B9pT%2BXUZ1XjDsZGbFgU33rU2eh7mrk9fcWU6iGi19ZlKRDBaf73ij7ML0nHUzAVmqdJY9BVFnlePjWVnoWPlr1z9GjjQYZzMXXVYKuLh1N9i347NMNp%2BQv3aa%2BBJAmmfu7Lbfax49MippPRYtf3MrTT7HG0yBud3pY56uhny%2BWVV6KkWVNfZ65Lqcb1dZTKbXRDNPb4a6Eo09S6TEsjlt%2F5iuwwiO6Vl4k8GrkrIoaGr%2FAF30HqoIU%2BmFTeRhGeo7FPF2jx%2Ff%2Bu9tcTMYbuxeXPz0k4siNIOyw2%2B%2Be0u6f3yfNn00%2FFZ%2FcPpifae5yAOPLZWAD6N9zbWC3ESGy3D6n%2BspVJGJdjbjFlAyQgZe8RXHhIvMK2R46ZJxmCd3ABdqKdv4WztLXtT%2BjJC7XWPmOWPRP%2Fn%2FwsTkSg%2F2QU8BETmtdXcfcIe6OKmuJPfhjuWXZCq36uBEtqD6r1mEHobCOjxJn94uk7eEpa2k2lIO1qsQptRFJSWCGFuRs2zhDd4oaxofUjKYq0jYbZ5rW%2BIo2pNwFeYBIchAcxaT%2F3HfPhcdlJiCUUhYwPMqBagcxytZMNXhfC0C%2FaUBpPE5X%2BBvLQknHDZ%2B34Jj0ALIufph%2BzVC2MMa19sEGOqUBMIEQaoGUbBVl00bW5x63ppxpE1pgm9cXeeTK6ZhfT77rHKBBeUzn3NTQk3vs9699%2FQ%2BY15M7XCRJKfFBEA7axnPi6UHj6Gy2V%2BKpl3DCx3und12N%2FGpYZXh3HcfdBn7QD01DjoQvQtAIXRiD9SLbMSSEWy1Ent5MCpsezcwZ6accTu7KQ0mEgEI2OpuZpGXJpu2OyMMCWOucuHGHl1PQ0vH9%2F6HT&X-Amz-Signature=2313c56bb8acc7d10f17704a2fb472a43cde02ecbf8a248fae62555d182f8792&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
