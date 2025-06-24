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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234IIGH2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCUJIFp4OZaFPxmHGRyzGNxFI%2BMNxn%2BS1KMNAFSI02mQgIhAJCCrfUrdTJF%2BE7HGlyt%2Bs3fpjKp1z8qAlUQqgIz4%2Fu0Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzNG2H4vVYfvP3GE%2Bcq3AP0d9W9XLEGYVsDKhVYTWFQmFJXf4EUL1wMYqYgboeCraa5xOtFVsX1oH6Ol3%2FzpOcD5Jnq5on7UQWzuH%2BCoeR5MZDJGDSdgv1SgW89Qz59UIkrMcjJpCqTxN1MEYwp0%2B%2Bl5FL%2BVrJBsUZRCkEe3throI6QyXTKmGkS%2BH1B34Eh3xzsdUqfFZLQSUy%2FHu3QxvIY5q4wDCfxG2vzJsDthfNsQgccTnpKTE%2F%2FzYoN5T8D6CKO1DvVF4F7cTBuYXzuEkb%2BH9wCzAjcF9ZNsuwBm3bAz37upsH6SS86YPgAHtSfBQmnHQWvLG%2Bw5Qi3rJPXfRLstiAhoeC2UN5neBpmCASNSNgWMayQz2dxkrdwzOvx%2FFvGvCgaPPgBIgXb%2BoAjesR0e6fCRZ6tOuJi3NOB8GZBSg8sO9UCHlx8vysOgUbA%2Fomc%2FEPt0LQYCvNK8hMEz5bJUdi60wsilha3KvR7owIUs3gQZYgpwPEfitneFe8%2BMUdnpAR%2F7QGKReo4eOqzwalrI8IzVn5%2BF%2BdcJqkkdsbnoMZmG0uzQwf5Vlug2WXcG%2F1bN7bt1Fz%2BBAeSwGVy%2Bd%2B7oQKFaxqpHc58%2BgyU2xpkCKWntnerMInjxpT2PHjN%2BAu%2B%2FOCPr9iWEMpoZTDb3OrCBjqkAcrdkheWyZYGsVaH15Q8TsbmTfHrkqzsCBdXnZqRn1Er%2Fktch41RA4AKDti6A2UNc2wR4G6XzbL0DV6qsJ34KsSJPrpSzcEqYi%2BQ1BWzaJqWHJPZ2ayWk0YRX3B2QFGoRvkUwqQeM2wKypDrI73%2FSulpvWPHOJTvwIoEotPd%2ByZuydsl5%2BP7vJupqLz88mlf1vx3%2FQWACAGoMIuTED7G8D4CUJru&X-Amz-Signature=175e8c5407e30023592a65a90c382c4b99bc8b31bf9f3a98988b757b363cdb3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIRTSF3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDD26VQX3cK1rQe3OKe0hdOdx6PgmWQUq6yUU7rZzME1AIhAKYt5uRukmloOfqpahPCuxlGJLwONfsUR236vrccBgBkKv8DCC8QABoMNjM3NDIzMTgzODA1IgyL7NMN2IiMf2FLbVQq3ANwAQKwbA0xWZiefEP0SblDdIXOfsurM3RCh6p9DLyNxRRfx9KrfG5MZoLHWlslwFTxaWgGT2KAe5R2uRHQY06wVeb4EDPzUynZ1hq7mLdVvUOYHhB8bs8R%2B4BQOp8dTPmbrjMkn0DymXk2aF8e%2BPZax6sT2Nyi30m%2FPdLle7xGVHcV5Ubtk8SPeTRGl4kvjchl8TOBCyDYpNq0hM5nCpdrGm2n2lcLDssORnY0%2BVK48ns5tGvZnSlCXNxnXCQshzVtJSgC1fisyn9uHp1F5FfPERgnZc%2FMGxRFZnHfSs0lNjOJySpFVqIcO2rg%2B%2FqHbe3AwVDnauXtjpTgwtaif%2B9A7W6zn3Zz65y%2B7uHekWKBVoTXg9YmGbbpE%2B9T2cFnhkEqfyKfkENx4dbnuudqYJPp3hLCvuRkvDoEPr%2FIHpGHua%2FvZwqHVfZv5YIqjycUY9bHvOUX5H77LJTm8o1OkaBChTEnnxphaoPN2ggUu4KSsYM4LAiSz34lObxY3ySdJ9LQ7%2BMCeGpw27zKuOiAPisiSd28q7UtNUfrbTtstq5Z%2ByvO7hZ8yZYomj3e%2FXnbobltOav%2BwpHC%2Bbd8PzOp6Uv%2FrfONcIcmb1Dncgmw1YFheWFXuAcx%2FcMKtlJQJDCT3erCBjqkARr5DJ3SJ2uTBahyxWkUeI5MOBE59qVvP3yl39YlK88JUz1ktEaSnDGh4BXZ%2FMg9d89MAaeoVGJETKTehHKHew%2BqjCreGzqFmqrBUR9sxq0vMFYuSIwYIf0Q1IrXV%2BHjzG0gqXtrbH5En62Otm5S8q%2FnxjS0DzUVltOC68AZFCwS88C5paQdQKVaE8W2qldV6Z%2FItRzT6WrEWHqDh%2FmxmcTdBEbO&X-Amz-Signature=f36e4a3e1f88de44f5a0ac978d212c92433000b3ed345e548344e2e023ef5198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
