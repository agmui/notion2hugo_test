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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZERFXGOP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCf68gL88mACqYQF9llhtaxj8SFkOT0zrMaDpAGAuKERgIgN5BAyCKPmlkdPM1SfBkhYs0HUstPuBF4ZGR4tQU%2BeEsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTVlt0iroYfv8nB2SrcA5JduhsZC2PzfLvAHQgASknB6V8lj1clVHdUZwiTB6K7YoHdiALPiqNyQ96d1d0%2BGiYdHkpkOy8GFhRtVvZ57K4S5fysbVZK5J0eTQUYzzWmCc%2FmX6GetUsI%2BLLwJsaWgEUEiwI7Cf0fL4MFmWHoSQhGlCUBG80DSbkakCTuqlfukmh7jE9qp7lLjeLu9g4YM9mJx6omK4fkFD3t79EfknEOj7HFkId5dtjK%2BftXZlXSw1ZDW8Ng1egwF82PIfhL0thPhxM%2BETFtaKYlJFkd%2F4ge9NtANKi0qMQtd%2FxJilRYmCcxWrLVU4Od3rA0wT99Pll9RPl7ZoonFJE3xc1QLC9yTSzZQsiB5ilqTinhVoZV0dj4%2FxqHXi%2BYzZAqDKZGO9NQb6XRpkFiqivFuLGwZ89wRFZtDasman9S87njcpcvu4dKOwBgwYV8EPekbJS0CEVvLlj8RGUMNtxVgE6M%2BH8p3jTQ3Wp5R6fIA9jmSOKqOse%2F7ACNNLrlnhEHFwFawSDNqYc9tZ%2Ba0mVfuRrrEiDfbcKgR4E4VJxyZ%2Fd4rHqKgpn7TStso369hpAcI4zk0WmGGvzUt093TbGDKZFJe0EEzgyi2BgciIUoAAcbml0A6AgdziX7Ma822mzfMPCy98EGOqUB6FUhVMM1erSaOg1wnvnvuRu6J5xpMmVPlf0CpKJ6nC56a7UOqeMZZIfm4IUFqWTlrylLH7bU9TWgTtHQR0%2BxEH48VfjK%2BNrVwvyYPepmhXoJacw6hO%2FP6I2D8RdlUUGja68hYyN6qlIUA%2Fv7qKE5wlQbKErLDkpuFSSdg29LJC60iV%2FJ7j4vraDiQqSG14BHOeBlnpMYnpPAdX8Wk3NjkNZ9wAQ4&X-Amz-Signature=7308e0cb1be89deaa180d6a8dca40730fa2fb78e78a18cd609979684cca4a28b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAM7XEH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC65CE0qDYeoqQpMV0KOcrZLpngc9iXGZHiqmdqc%2BUGGAIhAJmEUCsnMMTpOeLSDe%2FCvuq2zgXYPz0ksooCJUkYPvkMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD73rp2eoloAX%2BoLMq3AP%2BjHhsbPjhcKXN2jEmZbx10dZeIUks2bk13MtgnqtxI%2FROhey97x9LzuOLRLvx7yK2IR4ZkfilCPMCRwTuv2bsYcxjHTX9ZPVSDfQY8xK4Gm%2F7tGkQk8RHywWbYm0t871R%2F6GIye7Jh1QI2Ay%2BMHyTkDr9og91OiJk8KHO68urAxAL3qrmhIE5GJombugJIVLa%2Fnl0Q2ZkVTQAucLw%2F46MDd6RmnQibJtT63cPIb7MiSdfNWDYbO4McvXZaqcWgIDMNEIjX%2Fhi6awe73qH7UK2mV5vR1yFkR%2BrFrRmIeU%2Fda3n9cZKckqmLNCEngCKauVn7JCa1lOzVFKwbxo6DSkz7JfuelRdv0WHKqHVJ%2FUsmBnfxQmr8dZh%2FtJsH%2Bi1825%2FzaWysZlt%2FDxHg5bfGfbF0CwV%2FDRMtHWbFVRuWUHrxZ9bl8ezfrLo2bRbgBQqwWJHmKWbIyKpubh%2FPOytDRGtgxIoUdZg84%2BTUSZrhJA61Obbo2PFV%2FNN7Q2Nyuh%2BGnQFJtWBRhVLdFWzghX05LL%2FbVRCxQMyzBsFkfnY9z%2F1ULNPGjh46Z0gSGKMHOOt9f6Lxh0FMBWViIFOZTGk49oVs6JW1WQUMdRKTxVTx3caxtFJEmpn18K5Jo3SbDCRs%2FfBBjqkASZlpMzxU18IdGb2N2GCqDWqDqoahNPNrjhO2OKF%2FjrxtyrOQNH2%2Fcdbtgn%2BGJNTbAE5fG0HY9bJ2c7Ptma5CIrqt54LCXOjMqsXf76gtCbnuqLoI1prcpz8WxAFECi%2BbhIprvGIURt04F6xTJyCxAFGKtUV42vDPYCTJMMDEAGdQNgWdqo8K7eTDrBnFSpsdjtMbaOH7OQHzqojsmF8cnnTm8Th&X-Amz-Signature=9d76b50dc47df011307f3b213a2d44a1b7940ba2ce3ff8ae3c6d6c6352f696f6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
