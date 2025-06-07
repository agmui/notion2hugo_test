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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDC3SH2Y%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnEQnDMSThtOjlsBNwpkw9c2OvivvU9fkWvT4FMpzMNAiA%2Bj7AiZ5yZ%2BKgq6%2F2Khz9xWLXuLN0slLDznJUyN3ETZyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvzs052zqALHGYGynKtwDQFNvlXPyvgI6GUieV2X6MYqMMfhf2lNW3bDS56ISb9itDzmIuzpjHSJia%2BwitXGzX%2FrJuQzDzTjNyK1PjXtW74Ie2H4ZlbkyKcmxlzpvCF1ViAIqZAKwCurDw9eRz1si6UeyTGWGvlTR0jGx656DWn8wvJknOm%2BybE%2B5KfZEEKmT7WminxlVo4J03pQti68g%2B08dWoZRF0mrr9tAM%2BydvxX3Ff6m8XS1Iu6apfleMLiwX0UlP70r%2FjsRCDJeKmIWwmZOrqkGwtPouFgc7Via1%2FdrjVaRIGuRLdfHptR8D7IuzXc3aEpEy%2Bt6CQAAuxX%2BbA8%2B%2FIx4RBOx8%2FpUq14fcYQ9RwoR%2FiF0FV4DW7Fq9JYUPa3wGh%2Bys4QfS%2Bj1Brz1fLYcrwlpWxZ8NwXU%2FpxBH7Tr%2BRZ2E%2FO56tZLk%2BakCCqTkg9PmQ7pcG586aTNpLs0WjCvzy6hRiPxPi6TnkBf7GFv4R92NqqOJQa5BGVQmhdQdi2YN1WMGhvRSkqSPhT%2BQJ4HjziQT1seJ7JicvMaU4m61ZP4umD8zg52x%2FbC%2BV9ZsJgj1chsPu34AkinkVeH%2FOhbv0TpLoqBhbTrnZEykxUXbDG6iCfuopAy8BRR1g1DtoyQo7iDSycwqUsw88OQwgY6pgE%2FQTbAeMQRyUDZVv34lmECVJMgVIYn0WqjjWhFB9prp4IkuVbAtOFcVgjmfX%2FrZMVURIoAAGObNC82lq2MAyy%2BYf48poc6%2B9gUuJU4K%2F5tu7mTULoksFX8EmsK3EUqh%2FXQrr8CF9w661gQWgaUOGunTjEaPkpw5tW5N%2FUu4akNb1X52GEO1bRAl%2Byus8pQ7%2FEFTdMNPkIJkm1s925%2BxgJk0QuXx4QB&X-Amz-Signature=da692443a7ea72c10b5547b28950b64acaf3647b38419e7508f61fd304d3fea8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36VTMDH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3LgxEK%2FWcm4BV34gIPBWyCT3t6whbNQg5qXda9frojAiEAqSgIv2m4NGe61U3P0ARFkSP6x1r95ZazVSH4ClcS%2Bp4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNnTqTyTcQRVvUNspCrcA%2FXBbHJT%2BiNGabpexgH8ODct%2FkoK5dkej7lUlLMvSIzs1imw9P7cwI8ShkWwk8IboAy1jRX37hV9ZUPtpC8CPE6w%2FgeIdqqXnlCgAR4cT71CgbbBtFDIG36heSJDKWWNSqWaRgZhwJe%2Fk%2BzuZLA7sqvuHJacOtQVQF7fSoALWg6xoLg%2Bx7MNalCgQO9gpqDkXeWSjK9Oq7Eg3CVouEewe%2FvXrehwEPQ5z2SKyks8mgcxC8yFeqc5vlr%2B9j7IAXvMllnip2YVp8AMUWeU9zSlPg5BZGOUZQZJvni%2Fp35sfitL9RHKaTmQx7cO9jRB66Yb95VwtkpgvZLzD9SCMz7puxVq8JDzEeQ8kF5daSsXXmuRAatknerikkZJdaIQjxzJwz1Rzvnf%2FcEsuf%2Fg1n0qdxG1v676ybsHSJskVu1oe21jGdMcc%2Fath244p453fHPoS06%2FisiPrnBv1b1f4tcDEaXOp90KmtQFMCbsWI0TtGedcKXvcYr2%2BTlx6ZnF73SPsSMSxZ%2FM%2FMFnrmxpMmmQiAV%2F9e5M5vmFse0BcPVNIu6DQSQIishTUo3gdcPhb69K%2BDWeVr7bvxMBzEs4Jbv7xTv%2BVE5d4zPrPp6mBsE7NaOGxK6wcMN2J9aTzZKzMM%2FEkMIGOqUBizQlzzlmgEjOcciek1ObMutR6%2BaycKutWvfkhRVhW3eZFAT1I8EAVtpjLi1hqJtdN6amjanDJN05Bf2W7AsNFy2uXdTtk1sPgCSkeRtJGK66o8KAYJtKYvCn8p38SaaKkLL2YId9B5VSRpaODzi9sIKCIhf3xSD0V5eGVCW4bo9u49%2BypErDXmAy3XYKIv50QLYYSVO9oA8bT8p9YYN2361Ym2%2BK&X-Amz-Signature=891cbb68c552d6eea6f5dcc03fdad8a348136fde31ef73780d8a859dbcf5da04&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
