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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMW3OL4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxH4BH51rk5DemUcZHahaPYPUxP2MQJweiDbqOrAQRXAIhAPA4xBc00aQldcW63UP01KzNIaabY8Yf2cCTEOYdZpQ4Kv8DCBgQABoMNjM3NDIzMTgzODA1IgwbxATjXJkulsVhkFUq3AOHIkScEv%2Bo7%2BYMj2AFloALfyDkCGDpq8%2B2q6ozydBIHYHHXRGUbXmtuNJY%2FglghVcBjjj%2B%2FfrshTg6shoCI%2F45Cn0%2FQXtanbjVR7r7DdnqtWkfOh9yFhZp0UYXURb3t%2Bx%2Bf8nO5jRnaBKf6qVAh%2FsPozJ4hT947liSvC1Kzx%2FEcQ37ViPqq35ViswXd%2BXz8AbnJy8krzyp03P5R7BPOVvqWILSwF4sJ%2BRPu6uNHujM8WmX8R7PZAPbh9H9LGbYcoq4s3h4WAqOg26IiFEW3LACi%2B%2FCryJodEazk9SWCucdXDl9AF69oW%2Behl9cjlVf%2FkhT%2FuBbCfCIbyumJ2M2X39TOqSUNLyfJY0MzdGKctivEeIiJWgx4TRjEegBfAk%2FhSj3n3ksbm4tljVxi3NQ0gdOYf2O8sOHyWe9zfJ9yjtRlcI7zjjVxuLI7qfIjAWNrKo9s%2F07JQ5xA%2F93ML363kbCbF3sTw8R3ue8DtZI8t0BNzwvfKY1ZdUzRvdv7oyvbDr6F%2FKFjkFjTrP8WituLSix1zrVshIEtVdjtB4aB95o%2FARWUQoLQzP2NmQkUVktMQtaJCgY6%2BBa8ufhpV%2BA%2BB%2BteAg%2BhMCEw7YSa3zc0kjBAo9rEKbuK%2BWy6h73OzC65r%2B%2FBjqkAfnDKvvDiMsLngAGY4qt8m3zhDrGj%2Bm0ZCuLfe7h4rKagq%2Ba0Lqon%2BUPPwkvzbIIxkQUFrF1TOFvz2R4eMCCzS8rAEkN79ji6wqDmmQUA5%2FNMAPbYth6Awk6KuqZlBuBYwe8FQZyNjFHiS3wjWCX7XtNzh7qUGap1VYtnEjin88GKAG08IJNXjwDrV9ZL6QOoDmzVCPzd22rT6tV%2BgEQVl1Y3EU2&X-Amz-Signature=5f9a18d1ded0593c8739510481ddea6709fbdd8b2a569a59dadd85edce3c383e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZOOBCY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfHhOb9dlWlWxG2jqgCcqI%2BWMoQlNgomtzLinnh7GLgAiEA0OUyg%2Bhq0o2rIa7Vuftaxg6CGdha3JtXCHFWZD1dWaEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDICDvmG1WKato5Rk8ircA%2FNOLjSLWG4C0wu%2FhsyE%2BGRRd7Ui0L0ccRL5sGL9WIfMcjTtFP1jej%2B5aW2iz6w%2FwLJasg8PiYaIdcfb63dl8Ke4jko0HL9jKeoOSne42SKxd5Rzm6viL9buYhLM4ai3NfIRyVNssKMzU5kVXVG2gQ3qVe3%2FqL73BolzDpZQdsXrzuBagOKfIG1pppkhn%2BrvZF%2FnrEUlxBv%2BWhPyedbtGXEH%2FTI1Crk98efxjV8CQXKzjvsJpjZeG1QFTe9GSorh8NH%2FZMH3ZbEI7XJVjDTOv30r4g2PpVmILkz4NhcaSAjDcRtFaTA2m4JdA1jnuL6l6GE1d8Aj%2B0pw1I5t%2BWLb2QdGxSx9P08PJd4Ib7T1KaZ8c%2F1jdMMEQ0TX48li5CMppe4aVbmfXK7rRaeuwPPys4YjeB4r6hmZjDLH%2FqEw74r2VBUK1zpSY7JkM4JikEWf7XD8vHfF4SdKw1lnPO%2BemYI3vr2JHs873TPrZPD5fG99YhZXjx8GEhA9bWHWcOysHxN9pySmps37xgWMG4R124XWeN7iGcNxmT7Qt6bq6rDuMxmsH5LUKBZ5Nj%2BeeTSnRV2pXWyRXG%2Fq%2BhVB2T0K2Zb4t4fFyIu0sklGNVrRQqdTSKOpgMZyP9F%2FoLFKMMDmv78GOqUBDXRzsIc2Kyx%2FUD9rvcC70XeEBY2jKkXYPjNRTDeOR8KTB27LSksx0os4xXOC1OUhGydiwOeX%2BJE4BvbZksPDkIFRpuaHyOii56tdK3TENcg0jOCIeaUFURyzSCl1BimvZuUwnkExdfiizZOSnKcHwhzzyvluN9v5iGsXIvvUWK1BkJb1TcUguCBFty1FFeG%2FZVSlHSbYem7Pc70BT99GWp5P%2FK8s&X-Amz-Signature=f6cab666cadf03d1f9270ac08f644806b1e08ba3ab2fea66e7fad51cac3faefc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
