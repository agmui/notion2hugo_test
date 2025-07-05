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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MLT4QF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDioQe0sb0Gm5CGKKs2%2FDMm49IDRVZOhLeEneokcUu2kQIgKKYI10Fly%2BDLnm0X6DPP3pMeVCndbx6rRrHwQ2afI%2Fcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDD03FlhDBq9l4yvw1yrcA7yRfzcCfZtG17gHwhiSNbOsalgMr1WvH7dmfwx3U4IIQ1G3Qf1u0reWwfYTq3XgGtRemBPStvnGb7jymQsk7VZqNkyHpys5NJJ0o5L6hYQcRYKDVvuv7cqmhv4DjqdfcrP9fiv9o8EVyA6M2TMC7yVgK94o2E6L%2FuoxvHpL5hIAIzmxq%2FqcbUv%2BO%2FvByCLl4YikcXHYRodDwxR%2FOtUl%2B579d%2BPXMVm4DGd9yzjqnh2PQ4ykIPOY1c3EXdwZAlEx4v4gHwjoL%2F7ScOgKf90wsU2rQUaGL%2F%2B98GvNiVBTcaTpIZTdAN5akyU2R6xs62eIlnr7mR6%2Fk68ckRnl0AZOlyN8AupFV1QzdrGD272vOn7TtIB1eIA4ai7UrcYKWXzVst%2BnzbazEBl3hy812R6aReQ0t%2FwSsmBVDGxeHkIuhAswFcwtVDjXCh1NJ42uGD%2BmkMzhM9cUgCHThQWtAh8%2FFIu8lwLrFgiioBljLo80M76s1iv2u%2FsCld5sIceRBEE2Y2ClqnCcq11cWC1aBeJt3OsVj0aZQhkpYl120bSHSzZBvxU627VpaRhUMU34CLlV2pCd7I8UwXjU9M3w6gOvEg6eagAPBv3QGeMZE6kQjN70bo74lQYQhEW1moXiMIqno8MGOqUB7BBClfIFGD1dQzo2LedWzNSdJZv%2BE46P%2BOYxU7K7NQdAbWFWj4W5g45ZYO6wVrrQuxnxjvufIUYY3M8Hx2RPamBEzE2CCrXHA3CZ1rFVtOpdEWuRbhFKgDC1yqtUxLQU9uubXDr%2FPYdLge%2FSY%2BB17PiqNYrcctuiSh0Is%2BeEQ9XwJbpzipUkPluvWMlq6oczq%2FNmqfbjB49G29ESYrBnJ%2FleQ3c6&X-Amz-Signature=394c03d408f807601e5614aa599d49d21293b359e4742b98578a9f02b772fde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3C2BCE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDOVEelT0oCK6gIqfCcAEdPpSeGgP%2FaHL3qT5RHAduGMQIgQk%2Buh6EBSTOpnf2RqHcX7v9f1Kv4fe%2Ft9SImoWKfzc4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDL5WcEHMVTYLmC1q%2ByrcA6%2BfLTgKULg%2FSNf3tdlxMhxc8G7A8AbcB8cu59CsNxJwVYJlo9J88EZsyJTd9ide0IZ1vaK%2FnCiSo1wa3gcPw3vT0rHuiIbmNhQ0Zr9kP4Pw8x8YtEzyimRfuJnYV3UZz%2FK3U0qKCNaLceAV9rSfsHg%2BQPOiNC%2BA9LxhUIgk1RCxx9g2Vx6UNBA0ZBaVZ3lsKbI5HlJkzj9qXNcYfBUbh5NeDON2TF5pJeRvaYvavLDCUaJtSHbLtCMHtVIugQLV2wp1MjrY0SHudp8b5xI2IVZw36HvVoUFXuCs2XtooO6k2t1EQ%2B7jM0Ebans3BbBtHZLr8ff%2BSaLxcCLqT1jo8EfrZNYlA7rsZpHGIMcSEfZ3MQuzy14d75Qwj7uegPNfQjBbI7H%2BOVZXbDry0nlimakkm08p5nxalmlLaN4BHo%2FEnyr%2FhSdBwgNuMOXVePhavafJZTyBYJtySbOUadiioNWn1ZjVkQwcReWK7AxMrG5IchWaSh30e8CZmOqZYOe3Wk1MhMr1BLxIl25NovYhqLan7FCfI0XqMs%2FAFEQ03D0zJtYgiME0oGJbLiZAbtXQdlFInZnA3zh8TWVeqX5wI7z2QIVkcpbcfgdU30MSR%2BuNA%2BmvlnenKvhqN%2FAgMPaqo8MGOqUBD5cFjZyhLAXT9EHiqG7f4%2F1cLVQW6GqJ069kIRopnF3zYAYRcT8cGBxhJKzZO7dqRhZe%2FkJlSCZfwC9zDaD6WBf3sa9fBPN0MXQVfGM%2Ftx59MFEuNDrsM85i9no2yyzboZdLlly9Fi5TCx0jaLLx1zBFwhsWX3nVEG%2FQSP6uouarkGgLhWu1dFS1DpsvVtLQv3r3eZRF0tM6ukTVbwT7B5WX7H3%2B&X-Amz-Signature=443dd90c5d6804cdae03d4af165a92bd7df0ecca5bb758530e02dda3247a3f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
