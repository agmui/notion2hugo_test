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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNQYNM6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCYUf%2BMi5sXUbCp3mYcCtOlYhICkMkNS9KbMhLLCbFjbgIhAMhn5Po2rPrUk0jaHe%2FRpzT4M52MwKT5fgSnSP3lbkpzKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Kt59%2BdSrkwjLL3wq3AOyDSDDSil7hshtr9R91UjqMGYYKGhivNsoh6siY3qsIV2uuLvgvsKjKaqbo1t8XH%2FTfZMxj%2BCg%2Bm4%2BAhZVqKv3PVTVFxGTtJmzu8p7onSE9PgjUcv25v%2BnsOIOm%2BxXHFxcpypAr4XCxw8roJLjE%2FOlwnX%2FXR5JlJYVobohBvJNXynGekpLh8wikb2Mm4JFPBu0%2BsBZ3KuanqrvQMhbsTG1p2Ntb5hrnUF88MglbQiZThLYRU%2FZl4xUm%2BnQ1jGgCZiXGYlpC6E8doIBclL%2BhFMgPj%2FUSbKwUcTmk7ix3gA6M04msEtgBnSCDtS%2BYB0dc9hK%2Baqk50gHIyZtNAOxkVgKeSB32E%2BbLYpLVJauoJ%2FWq6y6oQpomRj8GmBgzw9pgtDAZK%2BlNdCtWX%2ByQE%2F2trkFQNLr8urWGDKQudY6BZHFXgptk6ykhF4pRkVt01D2wWLt7pS9R4zxeb2zg97hbwA95txSOQ2bU2D7UDONj9xb5kPZ8%2BJfM2Oo97ZsTWXK%2FYbXnhrOnt1mbOoM%2F%2BGjV0sp6oaeGQwF1RVMJ9c%2FdthL%2FhKJmYURSzOYaORuohbSsfwBv%2F3JdULS1jiEN8xpRG4zyKlHO8ktmbPjkT5W7ozzGch1leTEEAFS%2FFXIYzCS3au%2FBjqkATxDPIBXlTqsBMMVsI7asNLNb61u5WcwgtJMEKUlUg6UrgS9O3OfhqQdqtqiqYmXzyCCXN%2FE6vkg0GD79X2yFJMSt3nit4AzE%2FPhm7a7Kg6myMhgmF6a4TKREB1D3jdxiIvCcP7m2ixF3TYXyrJ5wjH9beVft5mPc6OiytjRIHNO2ThoiL%2Fp453mDNe%2Bz%2Fef84K%2BxUVVIW%2BuYis7jnSeryN8IHIf&X-Amz-Signature=a662a91956ce3b1336b5c47ab98f5ffba9290a68482f85e5d46482de4345d047&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D545TGX%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGnaQ2tIs5is1vjRC3ob0%2FSLlM9NWSz6GbzlLfr8iXL0AiEAoPZ2XNzGLz9nT6OIVosAEQQg%2FKcHRwWRehxTR2Scu14qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXB7zRN%2BS3Fcmx4RSrcA%2B%2F5DfcXxENT2tlgAQG7zaoIDbYhPWeQHHl5AEMH8uM1FaYgRv901wW0RrxRcdz7l9YGrye72E8fqeaMx9%2FU%2BZtzZM6yBA8JsowPyLgjg7R%2BSRkktozzdSMhBEg6F%2FpT%2BisIxG4fkBhBvIcfnzso5UeU50argugurHpTkmLmcyJE69m4aa1OKKJliANShVzHKszWVVE%2FSoLnIqnJD2U%2BnlgCCreHiiQBgtkbLTPmgTXBPSW3Hf1fNhBq3XKffHEXB1IfifgNOq8unhQneBXAZLLMp2b%2FO1i7eDMpCq8KcPrUf%2BMj4uwVWcSJYU0X90wXooSpW86uubdsJuv34tXrLPnVcQBjuq9pjd76jkWhGn%2Fw5fXgHdM1xKJtYsAUjG658Hn4oEoLkG6RbFvmxK6KwCD66iGa95aW8kj9pWsIeQDHam9iAw%2BE5dvvba83T0%2BmzRfZbBrADQ%2FTv4HG7kTOgd1R6eyqRXEWrdXbquP8zEE2cNOxmirE1%2Bs5q0mXQjzat5IIOtpBlDUoi%2B4v%2F9xuyoTC%2F0Vxf9PJ%2BfsofkN%2BZJGh8EhFPahRq4yscLqmXABh%2BYd%2Fp3k%2FCCW2McAx%2BIaS4jOOI0Zfc7mL18gNM%2FGSrgy8EYNaOGbdkDta%2FUSEMOq4q78GOqUBxcDuxICnRy1yHbKwfhsnd2Zea%2F%2BiAqLuvaDrp5wX9Eu75a585oUxvy1rKir7fZknkl0qTKOf4s%2Bq5Q%2BpatvXKlP4NVWNG2TpMPjozJqx0XPvpO%2FpBGMq8WzLN6oJN6bFtwcE7VxzQHfh99Vx0eq7kMqp9YyYiEuWAZZhD0GYBh9nE61LJif47FnhhnVikZoxM%2F2jXdPILdlIvqCz2HGgAIEX%2F8Sx&X-Amz-Signature=98f417be6220e5204d68793c081c375a89ecd22f6062ed01c4b6e2fe3c263fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
