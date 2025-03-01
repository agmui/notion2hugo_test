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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMYULAR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFj%2BU1c6L7onnAe42Ms%2Ftsdl9f1Zf%2Bj8seoJCo1T9lSHAiAXtJIqP%2FGoc5PNQBfIsGj3Qo0L0ZMwQ15xoV9XCjkfCCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK6GG0eH6sYA1Oso3KtwDqJ6iWl4zhIHkTbjuloE65jzT36pNCV2a1%2B30Tqqh2pAsnqgCmnKO16vByIKDKv%2BczYD7gwTnEnb%2B9t8UJCI3BWHV%2FdMgZoB615uVlfj4%2BlXvuT5EBJgsbB8uSgiF4bPSlmKz%2BAFds7QayxYH2Mcy3CiRoPkkeorhdqrG5o%2ByaHbgNL4Ydm1yHm64KU4seV1fBsMjeykeEaYW%2Bmz5r%2BwZyCIGsdVfisvqxxWXaAJRhgmkMJIa%2BFaHMgtmZ7vtUCRK0sTlqIa%2BY5kTKzQnpFCw6sxL%2FYmp7kv4Ko7xVRhsSIBRJ9VBAVuwjV1pSMVKGojCLiEjLTtSy5uSHNEQ%2B5jor4jKhKtIBWSGIhiospxjXl83wzX9fkw4zAfK10JKMvvXWZJL9blO59gWV69VgtlWqwS8lY8PZ4FOJo%2Bd65YKvYYmhpXG2Dw1T5aQRQaGtgu8NykxEzOC4aeC7bSw1ZGdNO7jhh2b%2BcrXY4bHrBj6aWqW3%2FoM9j7lSf9WQgFQedQjNXW5OczJI7G%2BRW41H5WLNBB7oKIgYGZ4T%2FsyqtCFqiszA4oT5l3gjnwvf8EMHGoQcwAcXNmZuTOuD%2Bpu0h7AdbNIB7kWczn5nmIJK4rB7D3tKAaLLNiOqs1v8g0wwMeNvgY6pgF5YtYdBE5D9R%2FUt04ZWl9W25txQJ74BRwxiXiVZyIgP2U8urbCcEtD4qpoDhambYzu5DesHg0jz3oxBiv3azEW8OUum0vNr7YODUuTCRCsNExDNmki9kjJLYxEeDmhqWRjcCh%2B%2Bg7Wb1M8T70ccx%2Ftlci6W9qs%2FhICJUEA0usrVyeLP12aM4RxRnZRnWUiERPUZUyuXJgZlWyh%2ByKKGkgXHu0IKkLo&X-Amz-Signature=1c4c1725afe6ffe5f8182ea544cd2b762481e1655904d6f7462cd3ef41ebd406&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLTABSW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHVXPXLmLAwkBnVkoncfzzO2L8rqhCTN6oUUGo0zigOYAiBeYmqL2oApJ%2BCib27cdbc6RD9zPEjt8Swo30KYhaMMvCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWA9s8vZbqpCBz5wvKtwDIpsenuhkriLmtA8xJ9p%2BrC1E6DGJbOWQOaG3h1rJSsOSWUnXlzXBMK47Zm1NZvOhYe55J%2BLv7FR%2Frk19eHmcyiJR5PjfHTAc85IT7Q0VwK6QMNgiWCzi6ayVMtxGYk0Z6pXNVjjuplqeZ2M249FmY84CIUToYkMR%2FkDPyq%2FXSK5xOPlU3j2Yif1XUWHDUbn%2Fi5wZcskkCe5Z4KC9ESFNYqfKz1Pc8NkLxK35UVGJmThElKDbUDDExi7V2exKNpR8UmQbAk%2Bm7juSRUtesx6vOi4ViB8EVm7Gd5HGytll2JCsC274%2FiWk4bVdtTwltbG6JaEqnFxS68%2FTxyN%2FhqUyPBeZvbWYXo5BmA2xINUYQ67DZtqNLYCqXuv4xRKVzlqHXBzDgVET4mAGaT4k4Z4TNzRZGSjC8GfIQQukWE%2FvzbrXOHiwopVC7WiplS5bexD6PRjlOpl46XigaAr8ukmNFa9wBu4MleHTAgCmnifnl1ET7AoWw25vhq2oerJPZmPfxGdKNuniIAm5tUDRJM9wNjzRF4IZbTkBl2S9x7jGxZkEVz0oObHAeBZmYZzu8US8QHqTxFfJXQvL0LaX%2FP8wM4iDNanRIX6vYEL6A1YeF16RKw2G43Fb3a5EztIwwseNvgY6pgFIfUsgs%2FaXe2VvXa6koc7cCVtueUP0Btxuf2pP%2FIhn7YTU5Z5p4FcPWwcxo7srjcEB%2BAyWvegSSVhAjdOHb69ojgVcJWrwY2He1MLjUzK47BnA2Wgxm%2F3pYldCx9fmH5ZCuuIV0DGWoZ%2FLm2MiqHYHyRE8WpEuXXVpBAFKnd8%2BrLK%2BRpbyRllmbhMjOLHfIrWpbSZcwdxl52HQYDUrd8SdDu1u0CMM&X-Amz-Signature=b82ac81f523f83f97846b3511196388434a093d9e39baa4530ddf1f4fe64ed68&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
