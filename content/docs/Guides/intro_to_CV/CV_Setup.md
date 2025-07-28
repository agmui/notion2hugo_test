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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSU3T2B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBswtSg2vwoX%2FenEKi4Ja0PfVUNX2l1HC1g%2BkpG9m6t2AiBBZzMNsFrK%2FZMqizUvxg5Y1uRtQUIl6%2BSNWWp%2BlaJl8yqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuqk%2BNm48XtgxwqlCKtwDLtkfDIX8kMqrPaXgH%2FNVRLH3hZ4fmBl2tsOD6V711RLRK5j1uwM%2BL3CZAQGMIRDfaC0FcqMwey2EjEAgBgOyaY2Nhwl4ArBZH4SIQvZhUUbw0sKwtgWUPsrJt7w%2Bizw8tvoZurNNSCqRonABNwO8KxkjeyVkPNxIY6EF4XCs1oAss7x0KjSxoYkB17JhkpkSROjWx%2B5VY%2FAWVxtWJ9ZtAciMl6SB9S0Ub1%2FOlnqxaibtwBBgLDm%2BO2jOaQLnbxiXV53a42OPkJzGlIQ7jLle1ib%2B%2BXg%2BQzAUaHaxvb2OXEqSjbnA3IP0aqP7EgmAt9zeggbaO72wrclY3XeL6BUcb5VKD1W6BI2RMTARBPdfmMmyXwUkvYLI5cuV4Mq42iM2%2BI5V9ZnBiBGpeB0zR2%2Bc6tV5BjfL8ugQp1lFthAHr7PZyxQcMiRFnSOGU1Q2uCaIiNzs%2BuetdYniIMnIfnN7B%2Bcuhjl7LC5ZOtXlP6u8WmHafDPb5KjTzv3EA9GrCvdjU0Zf0LbzAna%2BHnxLgInLFeReWZz4UCVO6U%2F8x6I%2BhVqNWWJ7MxYokH7HGFkq2mAvl2QyagFFLIde%2BdXwH8d4h%2BiJvslXOaiuGgkoan3a20rzcHac6ED%2FqqkdvsowvpObxAY6pgFKrNDxeCBzjry935FACaJax8KO63pcU9bOKzavcW0muDBXXM9KlFcQRqe%2ByptssA5dnzhEvzmMAu0RSbRImklY6IWefGkJtNCQ%2B5HW8XdgspV6LYY1lvGcYvSNLqtLxCX0i%2B9h92%2BYKQLtIRdluSaRDhZvpN%2Bu%2BLTi94Nq58SvRntakK%2B93JfV8RUIVvUtEGKZKOQ%2Bpkf6SNDHDDR0nVHA21PpwSgN&X-Amz-Signature=8c6060d4a48dffe4b78abeb04811b5a432037d38feb8e24c434191b5e3f29125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXKFUXU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCb87YdY4A0x4%2F3%2B9U4Hge9lC5KfKu9PZ9Og3y4lR9kNwIgfyiDxfs8go14QP32HnJh%2FahUQ0v0YnVYvCtd91t8oQQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtwabd7HNdS1nO%2FzCrcA%2FdE%2FFUR1WaUgeeYHkhh8VEL6bRffncrzm1XwBTC8s74RCBURfM2y%2BPJyhS0UNlQWyxDExfZmWBUTP18LReBTHQOVqHBU2vZH7weANrugquRpDR0mxFbnU7gl3CadG8SxXMm9t3L9WVIRs89xJqI3i25hwCOI%2BcmgqPcUxea3EFZ%2BgoXvJ8EGlVOa%2FWMjrWdZf8ZDsnWCcA1Fy5%2FDthKK8fbg6MlxELUcrHI9P4gkBf75sfl2lmPqyvrJgKPUboMmuFmQ%2F2WfpaS1sfDZ6VAobcLW2fNilpkfLlAc0o%2FxRguBqp%2B9YS3GzC8kj9h96F9UcsMY1xZzs1xVb%2FYaD%2FJ6M2sMFDaB1ZRR5X3l3IyQHbwxQlAZ58AXQWD0DGNMoqW4W61VjPuW6M59QZN0yOpo3KKWbbA4%2FD68GJwg3BEdpdW2kO3I%2FlJbEAnCA%2FBcKrmVb0avzdhsMfXc3iNHcHOyiydl01fgcn9lLowxqAGTOTS%2Fdm1nVI1UxUNSe9a%2BEy%2BvihPJxe93TAbRI9t6qHhiyYdyehlxPcukuNEncP8C5kmd89iNjMM8jvO97h4vgSFfjIiJJVuxOW12JJ7xeiTwKlWYjPItyBF%2BG1ThqkNay4NbLapJAnA7VGR8zSaML%2BTm8QGOqUB7SEgnXSMFPl%2Fj3ZANhPAfMQKEsnqoa4bvFGasF8nifFULniEujT%2FF8iuAIZtG2jNi0SjsFQxZEkDp0Atud4onUrXVoZr59s6rjpuXlPU11q37BV56r9y01eaUGrJXQj5JT2nnrQkON0wlTik3WlxKKqKPjBOAfVzMUGiPPpVElOYlpZZaW3Q032eNewxq55%2FJLXnn3yamO9CAW5b9D6yeRZACzzI&X-Amz-Signature=49409a71d5b0aed498b1925d884f9731d8d95ce80d871eca4f8eb5440669ed4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
