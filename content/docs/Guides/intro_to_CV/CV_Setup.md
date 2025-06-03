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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVXNLGU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD8YSSlr0cRb2lyC9S4Cdx23prONshUaqvH%2FNsO5pkJCgIhANLFq5NPAFuC1ekTGMbEgKu9qWWgim0QbM1cl3l79WbAKv8DCBMQABoMNjM3NDIzMTgzODA1IgzV1rBiW%2FB7QTS4bxkq3APx2PNhCI%2Fof6Pb6t0ndZrUpmnGfD%2FAG22EI9m97kzKREtjKW%2Bvr0Zog4fYsydKS2jsjjWp3c4uakEOc6YfS6bg0SZY6KDfqLbDMsMYcyEAw005Yt2zxG5qV2ttx5gWEUq%2BOK90H9SKJ%2Ffwz14CRCgkcxjELjS9%2FkF8%2FRb9xLVQFsgjff9aI6IJ0Txeg5cjpyAqxlPQ37KHu%2BGRluCymE4Mi1%2BhH8fa183FWIa8o76%2Fit1Jq37qrB55hqe9fBcvVmRW9lfoCLW9yr8xWFQ%2FDoayJb7%2FuFmkbxkwykDB9PvCdw0tx%2BF7vj%2F5o2zYC1uBjnVbTChCIhpxZ1B0kPrI2oUCH5zmonORyFLTnwV1usQNASXulFkpUToukPT9aFA28hFWBmgeoOo1qz3UDQ%2FZ6Qras4iYwroHrQ8vx74XLjmMhuMnbBh%2FuFExmbKXOkRKyzVy3paxXxf9CyHG5ELl2e3kea%2BWdC7BqTPOcTAlP1lDj09nG7lb60rds%2FMRKku6aCGNMNy0NKPGBoKA9k%2BlwQDUTg7IQ7QNu8BNxeYlOh3yVCtHJXF45jgDwTxKbTU%2FKabaErJzRdzn59%2FlcwsHK8%2FQXn6hxI7qxdjx1sZpXnk3mL2%2F8PIlx5xU3MypNzCTkvvBBjqkAf6aKfUFVatMKlXwXaO%2BND%2FG5xyU65%2BCRgSzzFexUpAWgGH4W%2B4YraYNuGSteaiWuaVJxjQJbrOpN7vtVyZwFBdYZZkx0aK52ne%2BepO99fOO0Eiz35lZPFZxRoZnKgCAMB%2Bk3bEhRZlMOqHXJ1GkaCT7gDFNxWINrR1kR%2BK1iE%2BmUGmH%2FXw0ocjaZvwNgfA3vO1jlkN%2F0y027YOTvpPdzqkibE6c&X-Amz-Signature=4be4823f8d366febf348143fc74a1b85c943dc6552a790daf86dec7b633672fa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYB4PJ3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAlzOPffPR%2B8jJNu9MPaOPgNEHsCV9BQdnujY2csBHEtAiACswQLNFo6kzdw9fpgLF2bDhwhH7byHmpFkeADF4nCmir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMUr7RQ3D%2BqDZVUkxrKtwDOtmY6IlxRGiQ4w3JU70gnYRLqKS6bkF%2FbCYug90g1URkYshmXDxqxu3kU3meaZy921F40lLCVH7Ex9zB7OYLyRFl7T%2B1lFlNgbcEtxZf8xXpl65pJawmmi1dwJaZoUGwuKx%2Bzlxb4C5dUC8n6UdartH8HWxIc6dfmKAJdqsYNlkX88QsKqxoxjw%2FR%2F3XJC2XMFcdWQrJtE93CoXrb8LnanEpShZsDzSKteHjTC1zIUVtvoSWcfT6fXNgcNz%2F%2BXr8qEzxCX8US%2FFJ%2BN2QLgNskcgVVBLgtSAju89cs%2F%2F61wkgu70Idzn8kXnETvby3zzYw3mJpRbPyG6ZtLxhEQHUrRC0L9THQVNQms3pH%2BJR05Z9q49NyxmsQskg3vktIi%2FsstW7hqqNDZK1aGTi1tJkr25kaRx1m6aZ2gFx4yMR24fEPMn2sMuxUL78b1BcjmS%2Fwx4zwlDUa0HXwisigkcnf%2FoIouL%2Bk%2FSexmryDyWZPow1Dtq4LJA457x2oa1sclm7ChdKJJXm842eA0eE236vRufJDAXyWDNGHUiQPHuPvv24cOXxkLtcdYNs1lcz8cwW1u6mtof8nf8shXRRbHRaH9Ik5qekwW7byQZfqZEscjf6UxoLuvqlOQnlubMwoPv6wQY6pgGFxqginQkR3nfrkwLp1tlQV%2Fo%2F2oPLPRaC7QIDpmqvCssJTuch5hn3s%2B5W71vkEIhdob0lQZNSwApPfWm5R0t3lPHG46rahk2EU4f5E0mSTLNMJ5q%2BgA5YoEPM5DvZvV%2BXRJY8T1sUn2Z%2FODu7ssx5JQse9VRsJRs74egOAKBlLowbioZeO2Cw7Kw0V11ADcGv6eIIbL2ykZeXbJraLUviz4LV%2BVNW&X-Amz-Signature=f7cce23c0e53852e5930304a6947269024f11fa206a94b39fc53a8b66d999e66&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
