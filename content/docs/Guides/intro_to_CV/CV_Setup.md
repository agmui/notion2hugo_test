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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z7SMYJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEywY9Un20U4yrYXFa8Y%2B0ddZadSYBAn5EJ1yCai7o%2FiAiAVEYaAxiBcrcXecBT5iFytwapKV6iGILlE1eq%2Fus%2BJ9yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5s2HyTpfroUo%2FJOEKtwDn39TjNMXcXmiFVrLhd%2FZMHr5M37umDhGKI%2F175HmSZjafrmYSN8ak8S96y19o9w4kPReiJX8jiUBXwVnio6tQlZxU8yoAuIub%2Fqa3gANO%2B2yCAHM1CC4QiITyEmQO7qkpeZeA3xSD%2B1OSB70DCquG66I%2FVF65NoLanx9lT8jUptOa6Sj6Ctx%2BK0AjwC%2Fx5fPxytHN0gy99fcKkLpNx0I34fTAvw5eOpQdQd5bQZUSzUdJOR%2F%2BQqrzBq2CBsgPI41axSkdtLEg8te5Z7j1n3UBr89EE2O%2BZJMsyw0FEtn48o6rAK48HXfCldzSgxBd4MrWMEhOpPxyeN8kLQggHdHqDqXw5WuLI5ZPwGQZ8cA2WvjaNmEqQIeR1VmmqhgaGyJMhIknj2kVyOGmhnx4gBKpqoqW4lrt74PnjJvSSPNs11jsVm4WRNhtFHNObVASZs5gUPipLH%2FjHVT7lXp5L2faKJ2S5IJ1zgBTFFT7sCFpIQ1tw1%2BYfMaRWwfY5VWzzqsGcVMezBwf1ZrFHO7SDcRGRHbrx6sJdAIV1dzRKvwA7WJTD3dT7IXDTO5rr%2BRfs6ILGICawVIgMTWsh9Y42xlpl5yofzTSQCJzWmM1rMR1oWlvKLfzOKfGSEzGkww8f7xvAY6pgHheP8rx7FMC9pHRv6yxtbbYs5DUoZs9kebokYiutFdOyauNDVU4JM08HMPi5a6pdQ1wl2Dcg9LgSVlI%2FRiRNHm%2Bnhw4uzaccUhIikSI5IuYQ6tnRnVEpeBUuJrqrRpuDIOIU5uHJreuFPulsoXCeB5W7Cc3%2B3LpexM6hfPiC1hYITw1fdBJ1RXwtSKE22MNbSuI%2BZYUpUdroOtSkVgyj3XDVJS0NsO&X-Amz-Signature=7ba14763ddb37c93ca7626c796cca248908459ad05453a16b6a9cbd2557618e1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7VRNNUU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGZ6XAmogufnXkOM2E%2Bgqq0FGCJqzVQi66Xs%2FyNnaq9gIgVYL97bYwGhTrfF2lUQ3ttiKJFAVqrQJuiy2OwOSo6EkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx%2FzeOtEWReRTQU4yrcA4r9%2BUYNwsYUt%2F8QRbjz05YtPvj%2B5fgr%2BM9oA9EJ6qtcB7LQ%2B2x0%2BgxTbAC0sIrXgo%2FOCNnBDrML9ExQvwHM4TMWJ2bBpYfRgkn0EonR9L3OFfFXnHNqc%2FirE%2F2M5re47aSUa8R44jh2bdGarBb%2BxTQwY2ocrl4rFR5PLu0nO76QVTDsnItyAkEBRJlKn65tT2KGkPc4076PVvHfNOwK1K0FJxijRLelFmT%2FyCu2HWmlR5JhyOz81qOstttXS1DWc3lfnNEX80UkuhaJPRx%2BtlMmVBBaOd2E8JxEsVHOdxyyBrZSFHyybgDvQxrxUF7tqXVtjKWSG1ApmudxbfgtIcGCqjNUvJuzPBsgBFoPnlqTavbhfkwlsNfSq9mtcW1nQaPeG4xxnj9MfhnfBsw%2BCZRnLEzVTYfNdmgfBZmY6nPRpuGEA4hYh9gidloB7cHOdYe8Xv0B5bSBlz0zK6%2BhvLlTzxsqqJHCyNHZhi494Zhk3HrsoOK5jXrs8LwOJiPSz3hflQC5wXb6sNPQHdTdmjCKX7xppimFlgTJmTlOSL4iZbS6eXgE1lpMMYgeQxgmFRL3DX6Jidz9nAZxp8m6aaFjla6UpPXGry7o2%2BAkhNh0ZSROX6T%2BKhx%2BhLjGMMP%2F8bwGOqUBiPRUH%2BTtvdyoK5tM9ij6zdKN4h%2Fzxi3BIUnSFLTfzJFe9Xs11kwXFvQUodUyNgsF02W61y3z9GqUe5rAhdoIVi7VpEkWN0UFDMg8JmDLc9JfbIhHDG7X6RS1zFXtWG%2Faz%2ByRMINAHn3s%2Ba4Qey5IXoH6r2LFnJzBnTMOoXknH6SXftn%2FlZ6biFbLmxEuW8QsOWwVYdCdn74ckKPeR9Mn13apSt6p&X-Amz-Signature=39304a54a2d9f3e0976cdfe10d8acd7766f55f2eca7204350f262d4a1a603628&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
