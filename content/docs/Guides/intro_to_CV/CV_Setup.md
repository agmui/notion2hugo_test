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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXSBPUQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGW%2BfHs2azX6Oa%2Bt3ruD2rwArTf9NhbbpvXvz02TzoOyAiAa3rw01BEE9t7Y7uNeI%2Fn2UKNKokKVwgJ9APdLuUa1RSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMn2ThXcrDhwhox0h3KtwDrU5R0cy8L7930bF01Dny7SWZIm36L1z7TiazSaL0d8N4TKnZrzHqwSZ0qcZT6q2sBzGtG31yk1cbrvK6uiMBSQHmSL5SizvPg%2F1AeN7w1E49vwk9faCLYoytLvbSO%2FgUZ8pLUCvOYBxfu3GE%2BV7ejssIGpG7%2F8nfxPYckhD9WsOdd1iP3RFnOd9UwDh%2FXlEXy%2FkC5aEOk6WZR64YcKA9NnxnimSv7QdCH3wt0AwZxTS5yERcobLlvCZ6BQxj9JrYFX%2F0NjMMIz%2FGoM4iWcG%2BzXtblB2IlSavUXG1U9DUQB8r1V0Uy35F1j1XuDFgbJarGo0floEEs%2BwPAKLPZ5xR%2Fp2AFsXa4930CbdozXEdDfqlfSsksnRSrJ5Hb944wau0cDqoEGXFOF6DeQ3DXBcWnY%2BFMJpGCZj4cIbjAVJymdBCRGNmOrhieAmHZWoSJQ3qY8Tgi61MA3C3HjZcEtzp8657hCZf1bK7KX6hnxouOxSn%2BmKPCOt34SbQXT%2FI8AMcxDaZ03E2At8I%2Bw8xrZ13EgCzYtfOJtxU%2FQkHdzGGMXEbVjOrOHJYqlcffCHifHeVJO%2BT1ZZPwkKdCMEbOK%2BDUTpR%2BZawoideXCAX8QtwxsZbP1nHfkwReaheUmUwtY6iwwY6pgFR89%2F9b76nu8%2BdPIB1L4%2BBHno%2FWmaqm2rcj7H4fvgMoghFCNwi0tEf1jBMlmH4%2BIKBDJV5r4r9fdwCGg%2BMBBmyoGaXq0DMTPz8GPxCV07Rj7gWjQP3Cka7wWuqU3w0yXKssssjuey76fhQ%2B5wZHZzQ4CZjO9KlKXelxbJLuMHXI2ICDboDW4oPJvNMy%2BTAeIuq0LYkJYdP8vxMPTCVSeQWKXJ6cbiN&X-Amz-Signature=90596368af3e80295a8d48bbc8899ff471e0c07c9365a0e5209ea5f60daaec9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIBH64W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGqnI5Ld9CfhULenEqZ5etR4EKJLelmUIB4oke6c1hHKAiBvR75sSNbLIUFJnNUVj16FA5N4aP2Vf9NU%2BnXRWsKQsSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMW4TMKTxB%2BvgCfziMKtwD48JBgrE0HBxULC%2F1LHNJzbC0hQPnuj%2BlrX5fkV504LWE%2BW1QvUqru4%2FDwH5zpuF%2FPU3UT55gEG6Hq11NGwk6%2FsknDAjgmzYiDcSgN3d8KFbsoeRXPF61Adc%2FGbDKmIzFwVkAL3z8I1Mihn3Rix2LQS%2BzWjPAuxMy5JlNxPTA0ggEuTl1JgzHcfJ3aKJwAj0OPfn5QBemC7ImZ2xX%2FI%2Bo%2B9jlweCNfrcDnlUjp8A8zSKLtoD1n%2BBSBdd33nmm1dwKpe2fJLT%2BRvFbWOG%2Fb%2BW6ouglc8b2XsSm0htxsXUmottbopKoaQIdUuy36fPWFjIYie0UbYvxhbypI%2FzRX4dFqeM4n1WJHw8u9BtffMFcKwTGvRsfYN2X8YK%2B2he9x%2BdngpIZH4vCfx6pceskWug8mi%2Fib306mUz2wt%2BRybaZzO4xsl82NlINReBwSjQtcR3e5dolnhj66FPTX%2FAZcuLkUqUJp1LjiP4waB1YfAwZB2EdQM%2F8EXSnx3FmvELKV6qof6y%2BavULUgRrtJSpxMBSYdDyWc22dHREv4HUWk5LZzSs%2BAGKUFngIHCo1fc6rtmawxHpKllTRuvUxqI%2FicNalPxNS52Wmxd0KbOCJjktrMFgdQ5JycEdYi93Nvowr4OiwwY6pgFvIpF4%2FrOdR4I3uIj8a3Qs8jIM1FL3jXRSXiDTkMETJeksvfAxxw0K0DcoOKzhIyJSVkUVXYGkF0aYFBJliGSE4fhz%2BBZafPV%2BR%2FRD4wL0sYARQnLbaU4G3BClUouWNl2SCwl2p3vVyNl7RcK22yQZJzLrAlsb7SgHRyaFGZZRO0lftxsyfvBo6NsuxtjeFKl6wSAX7x81%2FewxbGTpZBGCh6eXeWvI&X-Amz-Signature=c34849e58b8fdc56aa9c46eb4b627bc6f31324e6753a3f2a2303076819205545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
