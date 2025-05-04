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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FJLMAX%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHIAjLtflNVa%2B%2BpwgpMyRnuqm2pHh4tK22m%2BvbW87kwCAiEA%2FxtwOzMtIT6BM8YC8U0FNngsWeSXXpC1NZhgJ7Fjx%2FIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsOpnMcA20HzAPotSrcA2NJRcADDohnJPjauh%2BMXxreC2XIlb2Dhc8h3KnBPiIbSm%2BUGbwBHHcWEdaTwa%2B5qoSqHB6PN9ckoB%2BQTfEb2Wvgbg3TSzG5uUNK2BAbowVQBKWSujk259yMVVzXm9Z3unjbNCM9AVcwAYVKjVyvLjW06A7z2VmMoqKPqvuhD4X3HbYlun4mxPntacMzyX1r%2FTVanqnn6epOiOWB%2FVg5mLJSuP7hgY7Ak86%2FCWG5OSj7pHs4PDaNQMwPmfaIIlOtbVCKeGDpDiDq6p17ILQh2c0%2FdJeyGIA5uxuzbbqQWJGl5HMgUfkXM2IahmgkaJtmXIOpha%2FyPTyPdljj6T5xkvzAdNzjnuQCLXoVI5QQdHBz80Cni81Po6aQY3V%2FhwoUdbFSo89tbzrH%2B5WIFJODbRtNijPXN%2FlWxQS71fcrFYGChS2DoKT7v30xOr3RX7PIRk0awjjski53HE%2FvU22X090D%2BosdPUZoUWGv6YIbon%2FmIi0fY8ZXX%2FCJxyGIR664KZ3d0newCgzgvKs3lYGA068Z85S2KrdWsQGRldZQUyAKJudtzEcu5GuRSSE1xwZz3KNL0aW24GiZp201iQmZ%2FymT6IFOoO8wd1KAivfE5AofWO0rBZOep%2B9UIi4DMLDr28AGOqUBNRTaA02uY6wPib7jB4BGF4pEav8uNSwOG5jlyRfiNvCcddY9N33VsBplQIm7aPEAxMBfYJ6DmwpOGbA5aILNUzTw%2BJ0NogWyM6KDquY6vBULX9SKPp4wPbuuy1sBthd08vzNeUapzvpxhQH3QjdLV9KX9xJcGNtRgVDxPY8Nyg1or1MbZAyW%2FFKCTY%2Be6Gf6vpnNirOTG9Kf%2BWgBgaNKFm5JjiF4&X-Amz-Signature=32b06df6b0a022bd3d25172903bd2cae5570b4b22f6099c3778ee39b18ff930e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZBANJG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDEFQ8WRT8ivsNkKz9n4qyTUYPGd8tijMji7pM%2FfnaMIAiEAjqPew62ber5Wwn0bXFzkaZ9JZ6e8iDtF2QWvp%2FDn2M8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRpST2Itu1Bog41qCrcA3T3DoxdTRur4kCVpnfkbjI0hF0nN1bPyRj0c04v2M721E0SMA%2BTQqmDo2w6cX%2Fti5oY4ffACU7P9oYE18GGEHHP3bdeDP2DtOssgN7T026zHYcbx5dLY6i95oZiIQhWwjRt96H4tEVrFDx9mvTtVcpqSgc13F3MdJ6hvhCOGm67NmwxUY%2FcH7UYE1eINHuk8AzF6ubEFDv3Ul%2FlSxveL3KLDA9w5wQy7O%2B9uPmA1ObH9XCRvzIEdeRHQUm%2F7oKuZP606x5pLLff%2FY836iWVI9wxRtA%2FktFK2sYxN%2BnUYaQzGQrDKNE0HUAQCy4G8W3HbN1aJN2RwD1jNGsmMxa%2F3fCFOVdBrP77vStK7us12dt%2B5Ql4S5e2D5l1ZRIwv036SiPSicflPFwEaVOCfw%2BnN2u0j%2F0DBnVBh7mLcQwJ1sjb9fS0tLq3O0QzXXvgH7502xR4lnrcrAu%2Fy7RM7DTQFNfoeHyr15AyTRuxXD8EJ%2BoZ47iwlIanSEWBbNRizoYb%2FE6ykUcwqpryZr4jWgq%2FxtsAm6Zu8Y%2BKNs8CJKKsag0pD5ZPjWPskiUt2LivDCCUFyvASJBdYOUhUwPICphVLlliPc5sjmswaoU4z1CI9pRmdgRTeqmZQr43Ex1sMKXr28AGOqUBXP4cMBj17tTBjkyYfemSW%2FYLdt8cO2q0xPpNTvhTEzShCDHoy7nrJBdjbb6UBg0qzko3VOk4AwYwmm8e3tU00azOJ0dKHp39vr7iG9ucZZhG3Ywy%2B%2FeODN6ma4deMlXJnGxClOvpCYtNzxVkZXjDSUqb5vrZjYhPUtaYqhRxJUA%2BF1UZWz6lXWPbZLPyQeY0Srpvyq0mA4VXIDmhKqKAWNCWUW0d&X-Amz-Signature=70231fd4f4e9fb42410e49b8b0e3e487340a793107b047197bafecd4cad51b75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
