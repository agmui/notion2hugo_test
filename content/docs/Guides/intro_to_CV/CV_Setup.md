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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBQNKU3H%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXvdOr2z6jC7I9%2B9GdO2IxXgDhOsj81laPdFj0wwJE7AiEA994%2BChdqbeezdHr8shLZOcMxles%2BCKQmpC2xqDjKv%2BgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhA1wk0v4DvTDPyhircAxcv4vjqVfGZTTh97s4iOyFobWCAhtKygfNoQyn2X5ypm8PFgwGd3wy8AzQP3Uym3QztJNOKEn3yXUf5a3pnx9mVjGPPAkwm71%2F9okE4g%2FZUPi3aC5wC426hufHTZhf60RirVIK4Aku%2BAU7zovioeMEmtv1aECppHMVJp42ASK6dDLYcWKSnrM2pldWRXhX0teuKO1wsocpU6zCZNMcJRzJc%2BkvoyHl22zMrCpu2LydT4%2FygfWs3f3taz1fKTs1n7JNgOipR6Vrys8fR8w17CDKTAksvzbLFsGEI0oojJuga6yU3nBMAqncDdINPKp8%2BzoYKfJfMdT9QhiywMNFI%2BEpAPjSesQdVqYVjbVJDZ%2BRfEPSFY2ZNTRP90Er7xtq0GptzQcTc%2BZ2G6A4xzX89jKrVhemf0k7fTT01W9uKKAJf6xQn5aHVvaUEiRzah4C9QtXgOv4LOyrmBQbf6Jk4%2F2Ap1y%2BDrw97%2F2oJ7qpRyIG9eThSG%2F0JFTQb0NNVyLuurETD2Dk9lnKw0CZC39UFnMym2F%2FWDjrg4JmcVD%2FdA7dbyLyq9WKIUcfCAvUanlBGRkrf%2Bpm9eKMMgWGyryQCLD8AmtptXfpyVl97%2FfbMLfRocVtaS2ddqGSKWvEUMNOxs8EGOqUB9XE809JY8yqfD%2FIjLV3gtDm3Z0MwnwYOypUsmuzWYEdzF5iDzxtbqmNs1NYwqsVjIN12W7xdMj6NTRumqu8%2FcdiEdzimqaJlR%2Fsx9YXMV42DSWREXsma2Yn8Z5zoVByEOCeX3DJIKO5dfw5eJHzddnhEYyQTj9dlpmvNzLxwi1bAPcQ87a%2FSVlJgHd%2B4Be7blfd0%2BMwREyckOGQkuWS6v%2F8lCeSa&X-Amz-Signature=aa9e3829c32dfefc24265fd597c13938f8a3b65d8e9aa44d03d0e15da6ea3496&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS6BWTJO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmO2ZRwchw5b79B0aIOQSSOmS9Fz8U%2BLSO3fAmpx19XAiAMohZknOTz0JSeecxenfTaQJGGogIrjI1k7D4%2F5vWBVCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMElsxUOSAIzOQZrASKtwDdaK1zlG5u1JvnDHQFDzb1TogeI4e18e39m%2FrTH%2F%2FSgkQMz%2BTaYqkzBggWiYUsWEJQ1zilTIXFU72W3%2BlNmmJhcmrCFCGBcXsN1eokKH5Da6rE6Jaz2nXKvS%2BfwfgweD8e1U3bTSxTzZh5WJYTk6oVCTNHdDhceM2og8CHws1LJ%2FIR3O8B1LvmQTvFaRevNnLE7BQ%2F5%2BYjYXBIkgi6jAWBCGWomYJVNZ09LJy6Mtyq5TzNW95PytGMs7AHp%2F%2FpMqrWInaaP3lIqr8nO7BCM4otLX5VMvs314LN9wZLgZdcwQCbfONhv%2F1FpAlvfxZFYF%2FgG%2B3XSlanu5UKmOrwEH9kbLJ8j%2BvB6atL2%2BIVKcrnZ65XsW%2FV%2FSdUnucrHssk10SmEV8oJRbRjf4iO1PEzGWZqpysRV9uHyxXWfeCmWKwQXgqk965AJYnDn6KmGlLeynnlB34BgVzcthL4WMa9ugQLknA5fqn1AzTXYRPwRF3V62lWqo3kx362oWTwI%2FjicQReP98YBnrkHoIob9t7S41iSJS6%2FybOYx5cB4dqKFvrRxsbrq3rMQ0m4I%2BqeoHfiLBcigY2JxmPyOtaYEPb%2FGK7tDchuWtW6RhBcJdveNme%2B6NNbYJkdSQsA9LCIw5rGzwQY6pgEA8Vh1pCs7cfJcCeODHlRLVUenwFpiabdIKWNC%2BCn9HyR3Xbwg8Lrn7V1scfZ46UP3ertAjM8YdVrwv0h26eyPawABhc54D%2BokdbFxR9sC9NX8IDnIPHeloiuwj8wAUsq6IF7%2BlYDM%2F4b6OryVW1%2BoFripHqwmB5eqMw1b48sdf1Gfa0logRCsELjaGJ1r8b6PfMc65WKMUvgDeQe4N8T3e4j43ehS&X-Amz-Signature=db37760f06360c7c5774e544a2a5a17ebbbc87fda945e6d4a8b4ecef3b90e9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
