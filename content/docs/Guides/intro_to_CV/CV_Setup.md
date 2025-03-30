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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP4I4B7C%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2FdPbnThxTQzohmFBv40j%2FlDFNr7RhVV6XEpI5s19QowIhAMUbj%2Bgyplh%2Fqjz%2FxBgRHrj6MpC%2FmvGRXkAGGKr0FqLoKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9UQCbHzAFifiDY8wq3AMQIkMafLG13lkLBkHQPEhc57%2BoKdsdmF2qu9uoOLcxHoh3W6sNm4cPZP2FIT2MnYDbRmD3Kp8Z02AKeRcszKlqwsbmyLxbBl7F2sHDy9gsgJ%2B9f8RJu9idLugroAy6rprPPoXLqJ4Y4PeYXR9lJuYn3lmNez%2BM2G0%2BplEqXsu8iihxPgM2YNKcepiRBKCAYdXtOkEk2xBSXAu1vqKFlxPjZciHEVk6aMOMtln7OTgfgIt%2Facog6sPuYY4ZuAMB0QnpnW38uMF02FIZpjWPpzAY%2BdjoX%2BtHEYjyNYP9oAs7IR3e2YUdTE67t6w1xo0xVi8jiQSEobzMe%2FCzsOSH1jmTdR7w%2FpwAYlt%2Fs%2BhHRj%2BexBHSD8iHx3Cjrtoj8eaEMGZUqv0C9qX5GLFlN6LlBPGQSfGEqdv%2BpEpIsjt1fJ%2BTh7%2Bky6n9vfU9J2%2F7lkfDzjTAKa3qszmr4mFW6hCfztAtUNijDZyutFJWi3Yubotz8t24XQVXQfHFhML90C2d%2BGX9w2jkk471SeMzW6A3hGZnbl3dXFme8rq%2FDbP%2Bh1lwZufK7xnQEkGFAOUtvv2LwGDKnppNwhWCeqzc7v5YWVa6yL0AZ4cYZGzUkMyjtkg9JzkF69HTkSHjZ16JRzDxmqa%2FBjqkAa9OXdnnZ4YVcSOeNQ6spzCYqgh4tUn2%2F7uiL%2BLjCK8yM8Eu9aO23WbG2g%2BwsxM9yXwJ0wLvHxhU%2BkpJqXIDm2OOStRt1WCTBCRon50NZ1iXUlYtxy%2F0o1YP6XEUpzeeWx4YJCQz0Z5jcc55me%2FyJq0fz5BEidWZkjMlOOGDKoWq2nnwwlnIdEbBBb%2F%2B8ewXWT6kKTppC1A84RwM2SYQ91AAzcaC&X-Amz-Signature=49f44d37dc2fed729de939e0b2636f12d154677bcc91ca30fb77886113fc7c8b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCIA5WRI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFBZBUke%2FGd1MBfWyIMCclsYExkVoJjum3bR4swBGrlDAiBRMAQa0oR2sQnGAbgGv4CuF5vuCa8DZyq3R6v31pkm4yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqcTDfMH6UcMnRtCKtwDCM5wvLD9KLVFMfuQlhDwK57jcndBGrSnrkr5qE4tGQ%2Bf17UykTRm8o3IKMcfz%2BUoRHoKpRGPrlGA3fmCue%2BERl07fVJQsxD2O4Ndkg4eF7SpJnwOQzbXWtgacWVGgKz7HnIjlHd5OhzFyMV1RZkD52Z%2FlYZNJ6o9vBSxSWHKTR8tydMC8QQyNa%2BmXtiJFEHMp1M0I2MBSoQEtuT%2FdHAx1m%2B1VmS6ZGF07wd5umEz7Yx9aZ7PlBofVSvExDNUGDmDSAMy6345HhT1rQi6BaObgXj%2F5JXySmxuS9hyv0JyxYlg7d4Xiiwo4vAwOj27w1rj5QiYN2zkHGmyhWoY1%2B0tVIdaVbRNDUp2MMRn9KEwPLcFl5oW%2FDsxzipL5fYzI72RvF5NaDzB6bDzeRVeBaZClFvI4R2qKYBPemr0%2B%2F3Jzixld%2BFuOD4Hvv0VxOQaUvdlz8ySuKgXRcE7DtVc1c0RCcSPJeP%2BlAByONEuDXUCHsA8jaN0wE27PK5KzPlGm%2BcbswUbitukDsAsXuXUHmA5cpTZx5VFgBEiOjL%2Fn3G2O2EsfRWTG1AQ0Y5TNSsD3ByYb12DMRa8uXF05OgwnO%2B9dL2AtECM462DfuaHtQJEoKtKDNXii%2FgfA8bop6owypumvwY6pgF%2FhWs6mldCQhzNJFJfEiZXSM1UPOpufZsBn2wA5Uq20AZAcJC9GAJSiz4bZIzHSy76FIkqngWl4BYV9tRQBCFAHx6j2WuYXeoI%2FwQ9zrLR7IhgXgNcmpr8SfmnK5AgANi9kQz0cT3p5Ceutj1DpXSmQErrWOC4vnWXlSc%2BG3ljR%2FD0JqyGNX%2FqnPHZPImiEAAx%2B3uczHVNgzldpJOYEVITQUAfCex%2B&X-Amz-Signature=9a6a3e4b8d6ed47b1e7a2e24bc002d33678177dce0310fe8566f604dcb3faf32&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
