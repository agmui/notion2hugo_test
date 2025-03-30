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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKQXQKH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIARn6wAjPhHzkqLsMvl%2Bt5QS0NVXauyHVIFot6%2FPgbBIAiB3HuYHAb67Z77RVUQ7ijAjnTvbU3cpYY1fOF2j1Tn2GyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4lsidPyAVsPTBIVKtwDSc6SzbRD7fZu0Z0eGWXXGdKL%2B9qRzvTxN25KcRQdvf%2BKaMpDqbwXp2dAa5ei%2F6vKBag7uTniZKqUFqPT0SgsOS33uNuSPGhO20c8ZCsR68J3qKoMz1lQKZIfFLXva1mOy9DcQvOhPa5no4ASLRDleezE0Dl%2Bm2XiMR0jX%2FuV7DoOvLLpaDlBKrOX0NFLJyBMDnYuR3m1aLoJ1wHa%2BFBwnHvHVhN7wAgwcWMKMIVnviDnXvfPuWyRbZK9le%2FJGtuPmcH7JsrKTS8BK2N5vlM6NvIsE%2ByuMn4wK3FXahd%2FVH%2B0LUJWY7Bsjd8H%2FzWVQVDHiJNWluvirD0x6UB9AWG5uNddW2tsgvRyf8tXvPgFdOv48OeWYVtY9S04PnQteHVtPsVen4YUOQzjBGJ50EuyEPuN0NFyirXAXZ9YwtBH24mAdQ4W0KympCHlevnAAq2KHY%2FHEidt7hri6wemmIgmFN3lgP57FWsPKOGMUQ5Ysv5PfOMM39V3dD9pzB2e33vQ0T%2F%2BV%2FNrPQARZK4WPokz74WqWY4i8L32Lg2hWs%2BLk0bA%2Bh27HYqYvdCKHKwzN%2FXhdySWuplm6lGijUATZJvHu2r45osvzMvXWjh3jdTfCWWpX9bamQ7Xc5emyJ0w3%2BmivwY6pgHv34aWkd4bPA76qdipU%2F7uu285VTxK6d8Oe7fk%2BwE3GBCIusCwGbH1zEYd7vm6OSEMRgf5jtzWZFObwu81kpqkoTv92EVd0bGh5Y0iHSPA7IO3YodU%2F6Im5TQBFTrIfYKAGF8hY1%2FwpyPvn5%2ByMzSrd0d3MD5O1Xajk3lSDqf2H1hW87WTPbC%2B%2BoJ3KdqBq9hTQsCvJ4c%2FMBOqqHFfPRRjfrARfnzN&X-Amz-Signature=5a0a1616c9908ac573311b1bda4276e39cef3be6d523c579ef6950cd2280209c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WSSNRD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCVrNPwqCME3kAovZIYQr30ie%2Bof1%2FbakTLPLxlZsJXXAIgOsvtgYyLtHQiLgOj%2BpIl%2FInVG3VgcHXVkFAeBr8XmToqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGzd2xjvcztYVvkbircA0NovmDwP%2BC%2BI%2BUg9D0WKWBt0N7wzmpCbc9KCIJjtm5jEmGX0pwOfcAksPdUVbn3MEGCrgKUyiPmIFDCmzEoDGvMIzwvm5%2BxxeQso8kwc76r2kw2oWx%2FTwIRnZTfomAHzzCe9hL29K8iOaltBASzdmGNgKF8j9A4eBebtE2xSN1hMXM6AarrRrSKVnslR43BiufhNaedaXNUPYKp%2Fqy8AiTsaRMDTC37oXCiVlGmSvoSQwQ0fGFkL3yU5DoRxiO10hKEfqmnOVZCu1sEXf7hjM7oh9NOhoGiwt%2FDXmNnZpeECsV6B2h87ouiavF5Y8JsuVZiEQeSvwUzrbgj2xqqSgkJJk4ELP0rNkoya%2FmGxr7VHhcoXVHNMANcAcs6gBSC1Z6qOtxYP6Qwu98PAf2JlB1eT0hD3jglxuM0qPxsvuGKWYbsJX6iql0lim4v0lmptSnGX41YWIE0CYwnuGQzgoq7gWC5KcUg2dJWYP4kWY0CIXGt849dvfG8ef03LhvWq%2Bw9bet5YFMG1%2Fh3ejaDx%2BzjoyDk0MfsbQSE3IeDaGKiWP2Fg3A%2FeZKassQMK6t1n7THmdrc0p60IErjVbLAUCvvNO3dqPa4S3amO%2BwHEM9TiAxe3gnJDWhyhW%2FYMODpor8GOqUB9R7mCC4RoTAX%2BEq%2BvSecN%2F8RpJB1Wd2Qway9JvZDc1Yz2%2FkGGhCsMogH9w9rfwHpLLbVmVNOWpkjQhSb64xUvn%2FlaN1krWy%2BB8MaOIwxfpmr5I13zBgOwxl2%2Fm3xHRkGjeNoXvIMA3NbwIk3AxoMdnfcPQf28rQ%2FGSiXDOf3Tgpd8bkXup19RhM2gmr3nzaAqJob8DQwtH3%2BWWcoPiopWn5U37cg&X-Amz-Signature=5c38446abc7c62d6db2ddc1b5eb1d3f9048b7b402e26dc662bb4ba40c605f64f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
