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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCC7K2CN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoogOss0CmIzEpa9hEMSBS0UJM9wJMkk1v2jNVfBHQ1AiAcYfF46M1tr1Eu6cfZPHNhGo4EfNpjMaCZYAwVqCtbzCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOcUWkWRwzfpcHDDKtwDh7y272UYIighbNHjXtC%2BPtpOsuXre57fqjUIeEEehRFDMEBMVuesA58PwY2o5SxsZEF%2FCZDVwMvbQo%2FPLhNP29rKBQEe%2F1jcSGxRfkLX8Y3%2FMfrv0deHWIp9jzFJ1FbBUr1gZ4yxVNl0hiu%2B90hk7NuBWDLKtVDCufQKtJaGox7uriyej06SNJRjWrC4BRIoviqh%2FvhcwgbpjFSBvkMDtKvIzkbQ%2BaaDj35hpkUrzTkvAm0ITN%2B5xejFLo1XlSanpeUM5Yu%2F%2BRJzceT3UX91lmLJt4ry3tGungRKmRhv9Ooys48dW4Oqa4Fyuc8cv4MSa2Vbm5qw6dRtZw5CV1QSpxTH%2FSZEYKEdTQlC3EArd98HIVqEPYgY97Uk33qfRGr9v3jRMK5NrqPSUDGhhKrz2CkVUQGmkEGdlv7Yr6as%2FEkzRN5WMa6F43kbISzhKqmzfJwJuNxTLY3Ev7KkPrSNptIPTALx0W%2Fu4aiiWpLW0ChEkKFyzNbjPvd8GniaqxViNx6uMhyyMOJkRkV3VeJATcYmxMuezlRfT9oL8Zfjb0GKqDOIfvO5HdS249yaFdT3SAIhZ8qQZhGQV%2BtpnXaR0Z6uvCQV%2BfWRBDkfwi9dZTJCqeL9ntSzr6n8Zk4wj%2BqtxAY6pgEKCuoX7COuo8wm%2FD31kAxUTMkmaAI%2FJseJ0lSWAx5JXAHP%2FRvmeLwtR9hwGVROkHBOzGRSnb03EXnElR3EAuNz2NEWar9goMBTl%2Bj9Ls%2FfexYAtobpVex4MoKvVryyIBebzUhmbxh9XCN9kN9LPVICmjgmvu%2BEGGblDFxnf4tFnNOjr5mgiUa6ZLiRk45Sh2T%2Buc3gEfWHsTfS8AfQPsNpVj6zxmC9&X-Amz-Signature=4283609d650df4fc99a78dcb2660cca7ff639051ea86c98cb60b4444eee9d97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSEV3GE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZPJqsubaI9fgFUcaKy56BXdSVL4%2B9nAtWjXuIz%2B18AiBthPnrEjWkf8QA4XIxdtd4RmTyjHtjfZG0QuW4LfTt0yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfr4woAMHP6qLPU%2BjKtwDWOz8oUSO0MzxhVPlrziPmrUhxawvhJHgpttDYCFPy5CJQ1TQkjV8l0i25wf44ibDnkU69RmYb6oDxnljIHwB0KWpUMmpahwzRY3%2FhZFfkUIyYJ2Q%2F2payAGZziOfXX67SaO9jweryjdtQgQE4xXTiCY31MsjSht8txcPVfo4VdP4Ew%2BhDdb349BflaxLk0pq9Rbcevnfy2GBVZEJYkb5qU5e9l0b05WG6n48sVnOJhl48bj5iU6EfQeAlRpLXo5UbCZ53lmaRqY%2Fz%2BBC%2FJlT5YRsPn75KWvuiPKaTqMZsB0nSKLnQ0LuPaZ5PPKt%2FOFZOKyGotktJBHmxyVtLcmVVbsjbpI3b5PHhpeOF%2BEUPgsqPgpayedkPTWso%2FhBMfsbks3RyQzjKvgWa4TQT9aJDGjbJF0FWRx%2B0YGAWh44zUzmUVRAlSJmuKaqWu%2BV7uCBEng5U%2FnRJQDTn6FFmf%2FbC5T0dTGlLDmMfAUpS%2Buy%2BhnCEfomy5E4PfP6%2FM6fQBzgagXsxMhLMkFfnfAP9zrpOe5IEPOB%2B8VJMtSekFxvLlJ%2Fr%2B3sf25o2IqR6h%2BKkNRRvjm5%2BsglpoQ72T3r1GEqFNm0B5cAtjec2V3b%2BOL1XSO3d7oZmFZ1hoF8mi4w%2BemtxAY6pgEPkDg5bk9dRHUCNRfNa3VLomV48JsviVWOzN%2FnO1FkJRSk0PXVMBTpbnlAgVtVU8kvrjX08NHUInXURpyLBj2o5lgnBaaDV%2FNLTKgk9f3Bmbf%2FCXsiuZON3ZcuQx1mCoknz5QjsoiONqjp774DJh222S%2FkTzoI8VrEviMxfacbscMVH63%2BLDkF35SFtiwObzn0Pk4TCtvd2k1m%2By6WaACdU9ePWKq2&X-Amz-Signature=0e936dcd6bbabeed4f8a3c7bcc7ddffa52a7071fedfba3f46774fb1c720a2535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
