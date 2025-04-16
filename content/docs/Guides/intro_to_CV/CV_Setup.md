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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLJDOTY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGnfpVQ7RkUC2kvcmK3AWeTUvjbWgF4wGfrd0yC2e0wIge29BLFHSUvVZsVpiY7BrCKHT7XLvzXDhP3XVbFNi8%2Bsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDB9lRuwdjKZPEuzMxCrcA2aLuszj932P65j8SJ0%2BzUNPfQ79LoHz7eVYlqR0ypngiFd0YWGwnDS1Rao4bMh4Njdg21DPb3OOoS0Z%2FwRq%2BX26qV1Mk%2FFCu7uOP6YFf5NEPniJupzyAun4HvsyDaxd47C9lso4ID2V4JG6%2BUqG29h5CnvNW%2BDinjgtNttwIdcd48gnt72O%2FR3CZxJJUzabXLcALiCGIubgaKvp1NgHKHSWtJXnlJ3Ke8EtjQEVxqCuAXPX22kaDr9T5CJn%2FEzGEWAkLEIL2YTauSsDfH33dd1LhH3ZZyqi2FtUlbr9bdShNtRh7YTjPzSIKb3DwiB4nx5TzFsc1%2Bjx6jYZkzzPN1hxy6laMUptkDNEPT8aejrNRfJRR5lvNz3qZWmqMz7zuWjHK%2FhhMm%2Fw2nhjstodjaSfCdoGsFetk9%2FzDc%2FJq78fxOJuR2ZBtW%2B%2BXTlmgHXQhG8hZFkUhAa9Um6%2B1%2By4CtCgDMU8zmuOPQM6vj3hzTJDzItuFRC1yeca62RnpQLXosff6tMCyKEvDJCVdjvlaONuPJZeOibHOvIyds9va9JtY8M6fkm0LCmiXot4KnSBYZbrVUj3JnK3WRi0rA3AW27543nRPxJ3FhEEVkCM0ijIb7HICBHAcCHfke8tMJ7x%2FL8GOqUB4UObS4CHFj8k5%2BM6ahzoUxKtTV4Z7w8S83ZI5%2FDpWnN7aPVa565KZGePJGfxfkwFzft7Yz7yttf8Xq8Fg69%2BfkDL01LzMJ3EbC4ZhOTR2w1QNkRSeRuuvwPlqyGYMVuUBGGmwrOVy%2BQhu8Fr13NaFcIZjERxQtbLvXDwVNHxmfrKScYmRILnBEb5LC%2FudV%2FJaCub79lU6OpIexgzM0OXW6ilA3GJ&X-Amz-Signature=60a96c79f82f64b175dd1608e5828bd273a62f923383e8b95188c94cec002f51&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQVHSFM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2BdsXUzFrmhqCsGKThqTHFKkXCxHKvMoTzy6Y2HKTyAIhAIm%2FKJSipVf5HITAZMiRrDCf00rL0NHfVRTYgM2w3vjDKv8DCD4QABoMNjM3NDIzMTgzODA1Igxe31aMSaYGbhu1sTMq3ANDEp66P4OGPYt974sMXMa6rPIzjirO1LXbHA4YmkrDOEMGNu5ZW115BfxVim8S6c0odd%2BueaB8aoFJDVq6hoxezVGXS0vQMoguhgfmoK8rDsQu8X%2Fi9bWd1Cs5ixZBP7Ugryt24ia%2B3xPPwlZN0PgnrtFi8pB97h0OERbADqZP5uDKXSbwn7%2BVMtmsf5kAQxgl4aoDAsn2qUrPSamKq%2B8vRIoqYguEuCkmHQyMYrg4QBtHVX5ja0fVkw7QotiqPI%2FL252MnG6ZOHaJuLHh4a2PX4UWaUuCM87zNp7RpNoBcbvu8cZrkwfFUNrfMzlXf6SGMW5TUPkr%2BKnP2DYqtccdZmQi%2B02jHwPMvWmV%2F%2FX7mirezgO8Ag4fkd0p9b1uxgKwwIDILyKq3crSjE3cury714bPNJbBj3KX%2FKBtuNO9xrobTyn%2B1j0zog4WPRL5fD6z2Mrh04MhyBuvO9mEDhMtfECL6U2vP4V7jbpY%2FB9RuC%2BBEMDlNyTOp9rsLbDcPPGIOe%2BslrKYc6iwZYhC81uDlEJWFWfQoWsrSuSLwcxDTYMiYyYyokXdpvK2rPpecb%2BRefuRx0HDEKE%2ByyXXXfJE1wPcUnno5MTbelVNxNZbWqzYC3cIvOLLZM2kvjCb8fy%2FBjqkAWdRiGaWhxNAo9QBPPRcLOdFVPHitTKoPV34TmGvsjfV2fNqQA3P2Huy9owqp59CZ%2FQ%2FCaXHn8xJPGzQm0XyzDyV%2Bdv6cZA%2FTZsXMNVnsgiQK2I5cZJ4QaJ4bwpiXv0G219T%2BzFpQAmEsxevkdkkBONnuVCa%2Fi3YSptX0TjEqYFszMcInqVwurp4KvgHe9FydwpaBGUUl7JmNCYa45m55C1ZXRdH&X-Amz-Signature=ee9a1a93bf4d131ea8def02d0e21a38c95037606967b66fcac8cdb9e56312f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
