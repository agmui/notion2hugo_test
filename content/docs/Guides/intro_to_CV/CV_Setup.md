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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSSWQQWT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHi5%2B2BKQ1HrO9u8ri7EK2iDQH6Zd1hMiUptRPcSiLIdAiEAvYucvg0h8N%2FjI7lZA6htaPWkykEEG7i7Emx00EBeCTYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS0LiF6ZtYFMFS02ircA16NRRwsOg6YPue3s24230vmlq6peb4gjV2p%2F0MJVyRKnP5QuXMAFWfSWNLRjUm7bwSXsM0XpFne63SC3kNDbDk9Qi7V64eK4MCpseo6AewDE9e%2BUiMrPFkjKPRSFPmSx5n7hdSNp%2B%2BJ5O2GlRzIKcxBgmMTiz%2Fsifek2n7MnWEZ%2Fit1FVFsLP%2FePRHWgQPauzfyJ3kw42FEjurZGUYFcOMyE0PRdnGT8k6Qr%2FbbcfEQQsuri4g8qZo1LPugvt8WmDQEmZf1XCwNSCRNnynQBybmN%2FdX21XQe5yJA2jVTsHk1U7DiB2gdNtcA3B%2BoSTuWnFuzgKJXqr%2Btj9%2BJguCTgiy%2FMpP32c4HiD6G3h81MjyRSF%2BecKPXE7pX%2BCN1qMOC3aYJ231LCaP9f5ewaS2HD74pYRJxa06QhMBS%2FKTmCR46TWOGnFO5ClkrqACVbZtdA2%2BrMw6OXF4%2F9aaEGPQIF4dhPf43IMkZgtgHj9lN7MqwVlT6NnTwYE0wHPigqL82zLcmkqLyK9awC2L9QcLGSI1%2FMKe3rXoCv20xOqMFBOyW3RHkXMO2YCxyz8zdonoEGEM1asEA%2FCX4ftAVsLnkO6jlX442ej3HC%2F7gvpjmRJnb7QQJ2cIh0OmCzmBMJGHjsMGOqUBfnnWeNL86CtgZ0ZmoVrcnqyIkuIflpydb7siSx51EfIe17acORe4LgOncxLr62CiMIyS0d1wO7NbVdl%2FeDhFGahqtdtE3OHZirPqAkfnD7W0U0z5%2FPfhRB73IFXOMPxyp0jizt8QWfvZ%2B3H95r3ireprvWv1ICMmOi7fUbKQE4MtiFe0F50GxA9HbTHSuw%2FG2JJftqgLmQ%2BUpNla68I4i%2BuzzLRF&X-Amz-Signature=0a1648a604431555feb7a29e7478729feb7778b997b3dade388b6abf78e952bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BNB26BI%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEt9iTXIWgg%2B1g2myNTgfcUlDOcrbims2TKBp%2BLxZbPAIhAIl%2B2S03y9QgnYt38LbhdkWitS9nENZ7VXOVBdxx5IfOKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyst1fgoSVkhC%2BTq0Uq3ANF7A846xhOyIEeYvwARuThlePreFTRMKq9VS6FlP6SoRtbmP3%2Bstresl90%2FNX2ERua0lIrfL8XPrM5Ybayt5es79RL9%2Ft5VlEkYAEUigqk4R8weX4naq1%2FmJzou84osLpbpaD8qPuolM5o0SiR9S1%2BUepwzV3J1EpsZaGHwdormK%2BhaJR1mbjr1Nrq11rgFzWSPUEPUWrZbMn3ArrH81VHUWyo7wuLDn6X2KyWDpCALlK%2F6Hr6vTOoThKWdHtnm5jIcmrJwgimEsO6PDYjYJez6RXyqOm9JCzw%2B3SyTovy0CPIy1mLqV3TfWTv9tnCMYqqFXh%2FPdQ8iHRgUkqed9doBIMn1iW8jhMpVC%2Bzl6WkcoEOuHi9lhH94Mgg3CkHWlGZQ1%2B1cA33pTf5NDDB%2BpJA1cP3r7Hu%2BRuQp4DQJ29VoAn8zj9nrczlrxGyM1dVVKav8oijrRYBeE1vcge2wqhsTf7tOtGuJ8QpSL%2FXlRXmydTYX6pXdc2UoJwmX7PcwrKO3%2B8VQV3tryfmkBY4CxU%2BZm1ekbuEQ4gezLbnaK6vpt6TJVdlbgfqTBpIR%2BhOIyEAoSQSPG8tUnMGnlH4mP1j9X7wi3Ae9I5tvhA6tHdKOAO128LIKfG5cfss9TCPho7DBjqkAYF4%2F2B2qTo3HdnA8w4Kn54DdXnnaaQwuDedeXvIttWxvc3pyXc%2Fa50sFmPLaRhkA5xZakEb8qOypU0c4CWQdU%2FSe7FI8F536ocCN9rPn8GlL8QV7EjGe64sT9rDrO9u86lWCATWG9xhKpJzopLJjK5tE8phanMK4yJL3kj%2Bsrt0fVmtkLFt1Lp5HROaKba0y%2FDjCDMqFk1kxZ%2BYkh0yIkPvZqyR&X-Amz-Signature=6d216e4bdf6540b7be688970155719d69d00363bd318bc3fdcbb1a1bae60873f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
