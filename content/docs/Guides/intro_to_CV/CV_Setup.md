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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU2GQSE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZvFn6prZRs7IDhFV9t9v%2B%2BdJzoaoRYtMVI6U1IYLwjAiAmNEWkVUesTkYTicARmh5OI3%2FUjQWLcDzvYOu1eEIryyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMRL347NRYpa%2BmSIKlKtwDsNHC1Ki0Cd5fF0RW1WXHkstqukX38g4KNv%2BVuOzfJOO1sTEOsGZs5WBPpKpdiK5S%2BJSCgJaWrJ2nGpRcXCxtaIkiqcP6bSqxD69iuJUt1o%2FelgxjGpP7In94yKfRNYuSsd8lue7yWfViaZaKU2EkawkfqMUMW5K1iLG1lRxNMVcnfSrzRmFLZ05zk8woldro2H7pvIewQmZp5G8hKSbMnGuHB0HThTH0zgF97oZDcDT8zJo%2FoPEz7Man5fO0Mi9Bkvk3Ys%2BCOXXLLel6rBzMoHijw5SPGVm9R3XwiHzOTYgUt7zbjJxkO1l3SUCOmsNmahw1GCJ9FFx9EWU%2BA0YNSTuApmYxUd0pOHwwLjBi3zgxdgixJODrKLCuMIT%2BzTb4vgcTXsawCxlDx5WXmUfoQRGrPQfJJ8%2BYN3Pn1Xt4xl3F8oZTihNtubOpH5ChzqpRV3HF1jb8PfBWuQD2oGeF8Upc3w%2Ff%2FJqYbUi0LQpegWWxpFeeVxqjV5o0YD2%2F7OJXbjGU%2FWTyXjrgag72X4kMu2NqphJITLeEVO88fvGGX2QmYxFZ7qoXixxFiAYMBsG%2FfLiHsE49%2B26aIwCPhZrzE0SsOxQFv3OCuaHVXXvVmDn%2B0SkMB0%2Bu06NKDiww06TNwwY6pgFFF4dVB0TrKC0p%2B%2FTbTVWblCuqoPqF%2FPVTz9fhVtskKDxn%2Brp%2B0k2ZJqb4q5nxy%2Fam0tA9uEAhnRX9b2yvM%2BL2ztVxwayj8ZPfh%2BzJXFFU0dYGTDi9%2BmCXMN6IlKiCVoIbLTdjVDfiwAKXKKDeQmWEQ5tLrK%2BI4bY1z28WJZ1o2o1KIDEJvFG3LP3bARw5Z0rnx3dloUvFBqRr%2BkluV8oB3P9K5x4R&X-Amz-Signature=091772181303270a5ab05201b4c5630b57556952ff597634e7d8c729a788f71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7ONR6P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2KCL%2FvRZT3DUtCWkxGKEaRuY6kRRrFfDzxGw1wCDCwIhAKMo2h%2Fwt5o9hiy6qszS02RBrW32%2BVaWWmX5TlxCsXu4Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzG1fdh%2Btttjb5JFwMq3AN%2Bxe7FuVJqSv3TDeujXFVQMUOUuBKSaVcU3uBQhX%2BJ%2BMuXoZmSnMQ2UEpasv0RXog8d008l3IBINNlpjuQBDLKdkL89NJnnuInx4Qv6rtgZ3trNewuDrCFi5EJfWbK%2BVmeAGuZGzV9B6nSsWiheRuIS6nZQnvnadL%2F%2BfWQ5vZjI%2BbtZp%2BSGvJTzKzrFlYdryJz5t4dSNDF7%2F5P%2BtuhpMhy%2Bu1DCi2ijGuQ9IDcSvx9SJtYb5N%2FeNiAC3BctuuDgwgi%2FfgV9CnIv1yVdqp3wTJBl19VH2OHLOwEEZlInaQETNXAq1ImyoM3HlFyGWbPo9Xbzo3I%2FEAjQbH4AUa4ksbxDIc7oE59xQ95NqEzN1FQmMc1MsNMiVvB8zisQqDH0%2BMmfS6y5VT9R%2BxPuilpLPwiBPJ9zvntsMoY7GGvOdHV3hfmEnBSb6MVyqsS0qfwrSngjzj6AcLQ9qtsb7ESjhjvrzsEAhnwEJ8e2S9ox9WixAyUsNRpl6PY7scVB2zQtcfyAAO5IzkbBfAPFZsPZa3eqJd8ksr5GaT2QXk4utqZ1UcJmfU%2ByeSEiRtguPrIWyC5XI5IPUjxTzGfe0r9%2B%2FPDXPzAI5q0M3%2Fa0xFByc9dDrbNJtlt6EXPZDjCHjDWo83DBjqkAeRdmHOCY7kXKY5rvyC%2BWOfU%2FuDqD9yejDvr3WEzjveS1aNdVX9cgZ8mMhEsUSmw4LYTzMi7qns%2FPcHxMjc3iMpcxoz4yPoe7r5Yjjv20YpW7sDqMHxQp01skCIDc%2FWMn93tLsb7uQQVgLQ1BiHmL47Kg39BzCmZTiUWNeGS0pvo6KCo7vAbcR19rNqwN8iuUDYLo838MDBpm3dO6CaP7wn4JXZ0&X-Amz-Signature=be52464ada37660f0159a78218d1439a01b4fb6fb96375d985a301b0fd5e4428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
