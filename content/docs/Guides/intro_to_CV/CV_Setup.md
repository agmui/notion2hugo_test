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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3TFH37%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHgm%2FjrEnmr0mYEYCXQiAzDKBGkC%2F5jikybuMY6C%2BwbAiEAmpU2E2YT%2BtisvTKTzNvYcY4OLMfbDfLi1DhyA9DDV6Yq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO31gkPOheaEdP11pCrcAwqtNZGuSV578QPFBMJz8e3vmaeUpiZc%2FSok1Nk8Jz6zZ1%2FeYiHQ%2FB1Q732L2JUSbrfe334%2FDS5p3cBkg8z1D5XzeuCIGhUw3XzjMHQLOaJAnuPWJZ%2F8oqaCUeJ8d4KfShKWTjf8ZmAQQH7ndkxUCoEXTIuXwiw1WVlCy27NrVCsUUtit84dFNfacd%2Bb%2Fdlo1FCn0ky9rD%2Fk4CgYvV9Ds0V51Ld6%2Bb4ETAbe2Qy10DNhQ9LLY6Xy9iS%2FGtqW2RaELTZDbgos7WEVUxDDsiSO7Qv64ZFTtgAvaUyT0UUnINLfNaavDi5w91CI%2FfS65u%2B4GScvfHRHi89zR16A%2BP9DyaWLVepYSV6bwQ%2Bpkye0X2DQYADrXbGzcCfRT8RGXmD7l4%2BWxp6SVZjmnn5xTTyiVJgqpAzwP1CD6C97OwIvggOaLdKt98FIsYR14w%2FOBfi%2F9AUel17RtWsVKg7TugW9Ws1W2T2IxG4BX1lyNIBHJDUaLVZWDTvNVqxol%2BHzLBeTeHiHSeEPhPtvWClDXXJpZLT2u%2BW9okAK%2BjGg4dNZRlz10NTiQ2kj3qXEV05rkMqfOAAdAvsLCDRVIilyVplvqQLxdCVyVXO0YnJx2MxOm6MDcbpWeucDBxDrV4yBMNKW2MEGOqUBlZfTo8G37m30%2BmH3NhVc%2B6H5z1eslYwvxeQhsFjBJqEsf95YvHIZy29%2FVpZbTQi4HJPMVqfJm%2B6NJo9Z70LUzwbRAcrOD%2FKglf5iP0OyoGySIPW30JgyvZfLSN0PgaYHLBsc2Xqc9zoWMEjRsd8wdjm02q7Rt5YCugaLFqfAa1tiXwkUy0nCU1AnvZUm69eZpojDhwyUI4n%2B%2FU1vq5tXHRx0%2BbW5&X-Amz-Signature=df5c8987e519908c040c6c0e93d37d683eecc9efa328cc893348b4510a85058e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCPRY2W%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQY1P9zJioCWKgOzoUHY4Y0c17QTYkObPzzCeOKiMY%2FgIgRq8%2BZlcZjwnveR3qrI5XisXO9%2BZRftar%2Brny9Bw57ycq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMB6bycIdrHiH827nyrcA31HQ7x%2BoXjptqouymdsArIn3AJ%2Fp3LtK9Q3RFe9%2FJC%2F38qc%2Fh1W2tSlJIHFIZpRoXemH%2FxfK4OrTUi8Y8eSDJyuu%2FWFpujIJyjVTYYXmox9bw3%2FejQcwQn1y3hBq%2BvVnnylxocqloK5hRO84MRPu8xwBfFgd97E4SOBqYTXFQ29bIvjHRdGWy1vO4fI6d%2FIzw30xzs3yK4S3VnnESU%2FPU9cSBPx9w%2BLlLfUsvlq4jnhaZCUdZbNeZx3jhp%2B2KIghvXtiFxXe6OJGLQBr5Fd4fv%2FMuYCI%2BYSYH5JP%2BIZk2obhPQhRHnn9PFXKJbuNSIZaQZ5%2FFR%2B164mhr2LaOys0MNCBvm%2BIivqUf%2Bx3Lmz3FMQEZDLheY9mhhGbetYMc6V4r47%2FSkrhi1qljylmbcKtHUheqK0tTkDEU5jO9mUVy1X0OrQWE7c6cg1Klrplmir6JZdDBx6mrW0ezcHSFo3FfxNtbE8k63oG9Cpc6Ta4rsR5nyb68lAlsNw4kSaIMDOyDMZrrRjckCMouQUN3ncn1w4IeQ1JOv6fkn9cHL5CRYJl2yOFzG5gH4twGJAXrSl5YsgvwVnHRPJEYKrEhoGmcjaJ1D4127olriLs9biV08elc9%2FBhDysKCR7sgpMOWW2MEGOqUB76XGgVrzKwoHIo%2BUX%2BLTfRrwEBcIlbmKvLQ2e2dH5WGjJXz7VLo4q09hrUMABdBq3ohQsmHoq%2FTNLNn0OVvO9XlU9jq5BKon4wfBiOZtHPecf3YX70O39VVJ6rklNTNswbXCIkyI4o53aqz%2FkPNY45oqQ8Awp%2FoLdRYHyUetZFB9vA65N8UDWgwCKjdzyymj0HgfE9gsOAUNGz4lQFb7dYZxc4FM&X-Amz-Signature=a791184f1e76355be20cd014676f7a1549f48aefe860ff1811949203bd2ce258&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
