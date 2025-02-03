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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XG7JFWC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFg1u5%2Bvm%2Bqy1uC79D5p9rXTFNM1p1pMyt%2Fc9mmRo2WRAiEA1%2F05FEvca9tS7xzh2Jad9Ob1NZic6LKS9qSUK%2BfpEPkq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHkw4Gnzqwt8BXBJ3ircA8N%2FTd0CbX%2FwcvCRHDcVYWc2qdahecLhZC2Jg12cKIIQPk5OP7qMCJwONRhE6F6sKaJJniX0wGqnr6Dke7zx5lRaOdSe6U35jNj1WIB8TUqom7WgbMBXPCs9azh7nbM%2B2OdIEgLZ7pIPKxEW3PNGdsoBTO2QD%2FINXfW4OSoBPgr2pc0BSsmxZ9TZNBer6InnoMp3rzfoIdamEVqNGbawiVglX2DIfPSFsysoQaKgtOXr6zC9pqR7msCU2yf9%2FkGzIKM04PulcYmiM137hQ5cbjKud7pCm9e5YfSkLq1M2skkBSvY1xjuXUQDkjFPi7fTTzxrDOlR0St3JpQcphCxLy0b08oxO6eM5567pTim6lXzRaYM56uMOZhKNOplXmbuOPDnxPInQ77s369XhmcBhIBbumJUBlex7vYKwq30uC2TFTEBL6HemPJQ8ZY%2Ftw2yGstPznPSdDerTRmhxu%2BgkICLMzav76M%2FRVCtotaqfAcBgqSMpfMR%2FztlrXC%2F8HH14QGJltQeLkL%2FQcBOf8OxweHFjiEobxiRdPqqOt64rRQLLZHI3cYT%2FWeFEESZoNirm56mBmlfChng1Mrrbwxw6NiG2XEb%2B3H38GE9ylYW1GdEWRbFZ01YtA4CZ6YgMI62gr0GOqUBNuH7tjbOnw6Dq6pR4M3q9ozFfcYWIZNgAzY0a2ZQWOkwQwyWARlS2nZXOfInUpGQdCZaYUioPufg8VS2zZwkRq1OVYElPQBueLaaHaAUNAonAOlleeqaYC3hIhf4O84FZP1Hlg4mz3k04t8MOWXATcnrlv14UJpaF1uH8Hpr34ME92gIzA%2Bk582XfmkJDm3XRm7IuSwX03%2BiXqOPlgpikyF97ZOn&X-Amz-Signature=ea287f9e884b5ec2712c3aef446cb1d4db27215d6b47c6b31a43aa86c30d3be8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQL5UY4X%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHfPL5rRmTNKYV2rBaToO4eUBN5m%2Bofhdi4PYkjV1f7AiEA1bzMJJxHnRHZ%2BcKH1vbaOEycJJXH8nQNsR2z5brfSvgq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDKjnYeO8cdmAIHI0iCrcA4MpqEZdRKiXz0QVowlQ%2FKAzBI8tJegEIXrwGeHEZiJS9v4i08MXmYcLOZOGT3tX8RDToYCufOsKttpNWz106tdFJ5EkOcdUAhgLAKFmZ8BW%2FAYF4aVZhiEBxg0WkMYncRni4YJFK4k%2FJbQG%2BggXu5SyzWRZy%2BtouXGn1cwaa55UKvdQ0BKul9qbGjTQHC8e4hlWDqRs5fJhILOItNdD82zyBd0B1oz3SQvM%2F74fTygxP4nj1iblWouLHyGugXGmJUbrCr1VZROKVbTwgcBp%2BhWj7v1qpaVSaAwVohYIHRwLbZHW29vlIJoAgAPuF9zhLqBan9sE41xGYeZAfzV2CaKqaNdDK8GTVoU5Ks0yWpXU5%2Br9FvBswIjGYd%2BGEDQEi1hlh2G0jhjlyBA6IArkTmzGO6XHwCJiYN%2Fi0p7i1nPFdOon6ybzTf4%2BLpFkL8165utilWzbCN8A%2BeFndj3wdXVekvbpEAvm6rwBwnTEXMosGGV00vofvOX5SJhy5A8vkKAnbsmy%2BhdpvyvKSNFPj1%2Fjv9cUDawqI7Cih%2BSo9G3oRsgdtpDfsbbY%2BeBG1QR4dmi28KcBSET6RAa3g60tS2ToBEhw3VYIJR8RT6LE0YABVmxw73AvOhLTK1INMOu1gr0GOqUB%2Bmcg3jJXrjtSC2eH8s47l0mYkzdmg3hu9tdN1HnKjeaIx6hVBpT6gqOfcyvnf2HoFv0BALJR3oLc9penbtMlbLks0L47ABBf6%2FKFSlwe3on121Wqr%2BTk3bzdhA3EhqHQOHvLPhZUYS3U1MoMqlf8Xe6y8BDGA0PnTdjZJU1rvvzZQ7TZF8UxkXZEu7UuAIvTKYv9jk7Q9lcjJu4OU%2FGUMNHe3DXD&X-Amz-Signature=699a3f5bb9cb9a6786254a2a7c2bbaedf2772cf2d51e5e31c973e5a7ea502f98&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
