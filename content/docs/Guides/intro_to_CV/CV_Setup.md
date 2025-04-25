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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BZBKMX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOdPfh1HbKPSiwN8R8yjtELyBjDgO%2F1eWd3jrfIaMaIAiEAjEsxl5LgKKQHNvkZTzWYnsJtCLVbzE3XaVBvC9naxUwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDH37YbSyref07fv2KyrcA4tH7yQQtwQkuuCdjl8oYYRljWidsyAKFgLAQYv90P9YtcQlN1Q65P6MQc1uBCLsfab9jdAsminnpHk4tlC0PIymDklNWyxeMms%2BJ5wzWjVQQTg%2Fs%2BdwRvt7ouGuYJuyLj%2Bm6LuIqYI5dQa%2BYf2s5YR7TLyFDeo11fazEhb2DDgaabRlnfAzmP9Hcr9QaOcsrR7BbuxH6DUzn4T6XgztQXZnUab3dBdFm%2F42E4afjh%2FcKiWvpYHCCQAQ9GVnzuI8nj8NTHRO4jJmChLs1CDJBEr3xSYIscrnUPxgvHMjh5PZyE1Jn%2FJ%2FLdxL2%2FhGxemsYjI2gx%2BGdqygh7H8Fq6npE0P%2Brj0AKZTNjYh8dcMi5Zy%2FJOGyitKzLQwXbLPSEglKPIkGjckWUljfZXAhiYWoUwGoWoYGPpkHn9GDZANsDFunry0hI8G79sPehLczizwOHxAAgruVzEkT5lgXSP%2BOqhtHvSWRFy3EWbL%2Fgn1MuCroI5LXSYpZxnPdYyI5Ep8fPRHIAggppWrS32dIEX3oUFsZLOb%2BODkBKwjJ6G31WvuYtvULCPCnOtR5Fm9gQVk3e%2F5pYENE42VHRMb7drHswVSVLd0%2FNCCO8qIqsAMpqJvknJqCFLGZfwYF7qyMK%2BvrMAGOqUB0AsRcNrQuditK4g1TXwuE8qNW3KEHa5vM0SWk%2FNZ8lAagMk0R8kfxWljmQFbkcIx4x7AsGoLYQ0iwybx1InMQKLstZ4xiRP5ToZ08oLpHXJ7SzPXm0aV9YFzzvmXnUAqDCt%2FUGBi5o%2F9dLtuHNyQZmef8jHDQXQs9lrKCwsP8gDPtzV0N1gKL4rXIrZ8Cfp9VOy7yhgCr7153kSyw4yZDHLfIGPs&X-Amz-Signature=fcccc1cb10f2f5c5623def10f8dab455848a34e0ffee6baa2e36803e65ed2bf8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25PNJS5%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClDqzCDiH3dyozj7Kp3jpkwHnkQRb5Mt64Pa9n8iT78gIgUx%2FMvkpYKSLsqbhcHD%2B3hkykJJwIBux7W9uMN9gZ2xYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDN0UvmMTloXQ0jc2WyrcA5RXRW%2BP%2FXdlroXFX%2FYXhsFvE9Bavm6RAfzr7O7dSWe83hJJ7s38ggjYzpHnMA17b9l70od8%2FXJvVOwhc0dCW2tA2OSLmLUSgv47O5%2BI74IuFK%2FVeBPAMR1duJdxU%2FzAhnf4EopgLsWfQYGpGuEaaECWlS7g3kCq1NhkvI5BOj11aRhztOl3Zd%2BgujLMjcxX9C420%2BJ7zj9M7OENhCzDzBdq8wAolAPW9EwKmp43ooGrgErOeObMULiGgNvifYkyLUN3c%2Bq4oDtlXnSlC2IRIHN81mSjzkUBpakRYyw1GhwaQn7R1S8NLoLPr46HYnlxXW1n4sgJg8NHlBRIleMZ5hPA6dQTmssJmTQDcenB7plClQ9xIkMD9VVVp3QTJG2TcgPkWYVceh7RpmrtNPHRUzyihep0L5lDHIQO3odk3u9C21dRwssWSXrC6lyXE6ctukEXM64CMoUJxP6xFPukzoPg34T8MuNts%2FacADBr%2FiR6J5mKZpLL%2FmTU%2F7tWLr3FVP2WL%2BllYN4TxBFintlEY2zHIF%2BdIG0Ftd2urtR66AHK76FcWUZInpXx1LTuqQWc9lVF6hZBNqR96FmuF%2F0wikwG7i130evaTYbN7XtmoR3h9H5nihgXqwHJ5jSPMKWwrMAGOqUBQ5vlu1XpTiCjblrdA35edSScNmCNbEbgZH4%2FT%2B5%2Bhjfpi5koyVVE%2FHos4cGGu1tAp883CkNPoA2ZhzpG2bQXXnF86wbMYcHJKS8PABvLPP3Und6HxC7H5i%2Bau1WZGxgQUQmnJluhI47RNLH57hfQXAqjWX36FeJkfMw0LLdr%2FQcvblJfHdkFddOWaqLEkXaGX%2FqFdbXYGtzNHnvAy5LzpOWBE19t&X-Amz-Signature=b5d07c79db3a38b90eb4dd2674a4be402d09ed01cc94f8cb192d35efa709f237&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
