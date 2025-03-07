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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISZMGRE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFfjfjHbK4ciyG3oJ73sIMIVtcMKZOdJJdcovtSdJjoAAiASsB2kJB7cGo5yD0yZ58VEwRdYynUKwCIx1yDkgjuKEyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxR5lDJ0IXc%2Bg7ooZKtwDZ%2FNHC60EsgpwWa6UMZTE1hnu5d2%2FT3zlmhx6uJcugPgYGyRydATLMXOlIoXBuKIQH8iMvfA1u9%2F54L3qb5zQD7l%2Fd4qsbOXE4CD5MKRuWB%2F37pOydB%2FkAt6Ci4mpGP%2FoT6S%2BY0YhgT5JD9bWTsTcBkE7wwrrLJ8J08v%2B1RWdKzvt0KoEXadhSK1OqPacEAJQ7NVYgBhXfG0P2ymBEEMyRr21iha8YO2kbH1WmwKN8WNA1U4HYDsCQxzkgAsBHgYOES6LkwnHgGu0rYvQuTIEP1g8xgBp6M76h1vNrfs2ZAHu4MaSwKFsA0gDM1EBqgUU2f9SATU0WZjeJ0hxvwlsUwMp4idhPftdVcg8fxB8zoNaNPJX6zZfk5fsViO2az8ZLPbNVQCD%2B%2FDwQA7q9P4y%2FBDILCx4uNwA9gTsOUZAmEvnL6D1XHYm0yFN91jKRP1AmMCM9xdZKyf1MoOodyTD%2B8ZsxJryompN6N5v4c%2BbJ49Y7cIzQvf%2BeXrnRzxC6lTcdoBw%2FfF0eApdpl81i2aACIKcR1KnG2v8oQFImlaLV7umt1r2zHOnbB6RZj5H2iGM2d5fmzsyeYej0WQp6NV2Xlx8lgGC%2FIYfOBUHll92THy1YiSXpD%2FTtpBrpyswyf%2BsvgY6pgG3OPgFCk7DdmMXTX3yJhWV8EfnczYs49vcaaFQ%2FjB9M9nLOHJjJpMOF475CdmcA1HmJpCGs1XUYKbjZghQwR2x%2BL2lpvhWzeLpDEfJwMDZD3Zi%2B5GF5tF5zehqkHi1kTMl%2BbpkkP6Q%2BMfnKo%2FO%2BTv5QygSoR1CZx8TgezHM62Gdr76cwlADYUr7EtpwI06S%2F%2BbLpk9H0SQRlvv0%2F2UwO%2B66%2BAMB3%2BY&X-Amz-Signature=676b5502b875197a937aef69f32e64bd4401d284913f70b6139bec7ea992eb09&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D73DNFG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICSZfNkZ%2FHO%2BVKShOyLRdP6HjxSgO6MJaredazvLtRfBAiBt8QR%2Bkz44GrcPF%2Fc4U927%2BCgzqTfcvvklxRHZp142Dyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMWjWxAbDf3nf9V%2F9PKtwDbUgvFoH4xeBag34lHjAGEyLcOOfiQ1folrow8Rvgnx%2BEPEzbRF5TiUKGUr7CWu3fsmEnKblCT0M5FtRk9XZ8jIYyU78KKEneSVPYkqVH7c9OUjbdAbnoGx4KedlbO%2F%2B4VRInltZH35X8viBCfDzZepGlUI8JFfupz4wQSEqQG2Ex8M1lSqa20kzndgQr6VsZJco0HWf0dEca44WtFTjJHaa8LSi2h16wI3ES3nMtyDKYD4IdXuc%2FJzwKfM%2Fv%2FkUtvt%2FRMyVYQc%2F9aaVXy8CaD6ss5lgUHkdegQtZtlVcyFQn8sx%2BdV7EdtxBYOlDbPZmk%2FVSoh7%2BQWN5eLJzosmmkr1o1KT4CgLrTSKL9n0Lj%2BWyj6CSAfPJOKUoU%2FNaZP7mTqPPQhFOCRoXDsV4ItBcO2eBhAs712vGBLuQdlPGdWuYi6GbKwWsvbWIOUi0YCQzQ5QBrR4vT3dTm8AqAPFxGLVyXZ25chJrSfh37lRFQY5%2Fnv9wmcrd%2BSAdcyYAeufW6FK3MfwlT1a8HH2I7jQ7%2BFr7r9k4b87zmaxJ8r0iYfTF7YG937FTdFWcnC%2B1Oq6kq2S9wn1lrmqCcUrlsILNlZo8I7cbWdYLGXWEYd%2FtIhhDY8GLvuR4UhIpjh4ww%2F%2BsvgY6pgHiIIoX80UloW8mvvjWw%2FUO58AE%2Bd9OJmIIRAFm8YFzINjvJx2Kcr0V8Z5LYsEns3499xTjIdngNTdqspKuC%2FGVnde%2BTtzf698B1AzeJWuXsYHvR0ZWdGJxOi6RdLw%2Ff%2FsvCF3uSLa5dCboAsgvxpZVSE4bAvfNEohYN66xWaZs0Nqed28RUM2xF8PGNAmXAEX7GPsUSQxCS5fana9V1rWW9AU3LUL7&X-Amz-Signature=639f15a0399506b0bea362687d58d078923dace967550132b0f83e7883e66dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
