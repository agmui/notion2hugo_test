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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TME6QBLM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDPOWNv60CgSby2eQjAWrsId%2BkCfJEHv4%2BIeswkjb0iJAIgEb99iEqnWTjIVUsgCxpqHyCbx7WB4ltvRNWLYQ4gS9Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDANIRSiOb55OH9AgGSrcA6s9tf3PAQVw8dgVZAjEmmyB2dRmqKz860G%2BZ5kUZP8xvhCYxGhreE1HwtG4LncDVUae%2ByKlVb4IjNG9A%2BRvbWtxztQTVPZq6XgiPvkFu0sr2ZEkiN5v3x4GWEvcWK6ZG7Zed%2BDEYyQomeW5qzmzp2kjXgfEqN4XJVhDNffTs5T9d%2BHHSBMMmgcI3VjebrdNLpgi0wyq1RdI4fg8TmAK38jYuB0CTpG7xB9D1qKn8issX9%2FWq%2FzXrv92GgakyDujyScH1KQiXQlYr8nXN06WoVVN0wI8ofo4NCEjTwXqepUVnqaDij4xqVC2fZiqgEttxZlXg45kX6APyfoQaw0PunwMtBAOTX7KR7rDvs5xY66ZROaAKYE50Wzuh%2BZqj4N8hn6QgZ6PJfoRRUnZTHafrMmcNm2qtgNPu%2BJ%2FFoyWsB%2Bn%2F6wZp8BhDDrVa1rGgANr3d8WNUXKfe4zwGqjaUoCEqCbqHetlTPjXiJQaIJxoxcDOtYC3gvH8K0nsipBRKukhWZQkpM2SU%2FRDFa14S0QFLnIFVLY8d9bUbTE3ELGSF7Gelt1xPB9fE9Iw6UP2xEm%2B7Bk55Hg8CjrheePwSGASmY5gPuPSq1MJcO4xG3%2BG6NIaBKB%2BNplhpzlhVevMOHdrb4GOqUBpGNL3zb3OmgrKACEI5uo%2BYFUi8HMuTQxW9pWlWOCC5jHZ6gUx4xUIpCP8%2BluWr6xpNgc7j4gW%2BQjqyhxWO5vC5FVGPIAx03DbetbcW1br3eSf2VCm45tzjCJy6gO1SZzWyJ1I%2FA3KkrZ6kGoVdiS2DabK8p1IIEfgF6scudJvzNrBMPemkJSW7baZqfb06dWKpCuOG5Zf8c3OG7RBYGboFykFgij&X-Amz-Signature=59a09b2c0f0b2e07a2a6cd448df5133366fb9515450299448909fe8caa4b7f31&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FP6ILN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDIV1wbfxG6BjTZnl0z%2FTZ%2BF%2BJDCzxKpxtmWYfgxgvhtAiBHr1V1dWOHIS67wteI35FmD8l0pA8G3z57qHDjxSAk0Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEqKjguZKDpt9Jta6KtwDSLAkLqlQkTwClcaHmyTyQycl57Mef3rjTNyk97O0gVDfwXvnjZwjgWrs2kpO%2FJicpOdN3pPFFTkk5xT7QbwuHW1Zip1Tx12sKyfmynXDPquKTqsnZgXzzl02P%2BuXLtZQvDSxwU1xBcVDCSJ5gXR%2FFF9PQ5LlHS4v4e4Etn0GW7pMe0nWYCAVqAj3r7KIwqqd2PeQ7Mo29X5l22ROffff4PUDSALCy%2FVSAr0rNnDUR3Mzt3ojPtUyVXxFiyqF7L2x7b9%2FDBnbmzMZDq0%2FvbDd08iackBCQvrBVbIM03Vu8wDEkR%2BARd0aUad6C3pHOsxNm9W4HHQ9U4VpayaGPjTbkJTFJvZzozj6LPX59jFCBmqXailnlL4hSRkJ5q5Ryew0qw6ZMyTf2bVVxNGovGPTb2qEX5SyC1j%2Bl%2F07Mk32v4ZH8ATe6jRNKgIs8RQp9o0XkLL%2BbzSLfrQAUYenloDWAA53lA4K4jag9aZ3T8rb0%2BHdfCWwKON7ZhxhDuNyVswKdvuALJjUwvyLgvOtK08lEHPUMWvncnaRrlZJ005H8RXsteAxdgI%2Bmrs%2BR%2Fk8AZv4pXeX9x3GxdP2QAtCwUbA0K16TS0z0NJV%2FECITo2tqwAUMw7ItrX9QG6YoWcw%2F92tvgY6pgF8oR8FjOsN6fnxM4DGXRQjT54Xx1g1jGQI%2F0SL8XAkzQENbCKU7RFKejmGRbx0XBJiSS1HkXWIl9ZggnfAniJ4Dxh2Z4dPUwGsfv5556alFHC006AKiJY0OOPPEX8%2FlIPGjWD6X0YjoDCWuW9oHEFPySRWw96ZJinPFpnu2e%2FdlBfa%2Fr%2FxZfvfLqR%2FwtoMHLWAI55CqeTxkvePlDE2IfS8gRjoyS%2Bi&X-Amz-Signature=737b2eaa9a06eec386df4a81b2336ffdc6c35860cf76e6e06d4931e1515f85c3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
