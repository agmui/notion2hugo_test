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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWF6BKW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAETva%2FfPHzrjTlCL4A2oLOahGRG3J6ayCOfOvZWQWYEAiACZwmIJgPYvPMzhOd8n%2B57kyq0Y41eF4ocl9SAqfHQxiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfJvYzdUqR5moQDBKtwD%2BTh1OMQsIHO%2F5gP86ceF37CvBA3XTq%2F9L1E%2FP5%2FkyeGTZB%2FHYtI45AarqJTJyHmorhtjnTBnQRScwr8h4%2FZQFCeHSgTAXV1SQ5Vd1e%2BPJNO2LYWSGUqGYIQ%2FnNPHNO3VZ71oaIMkqBIhBFTeEziERbXlPCJyu1XqwpNTTrn5lh%2FSAR9L4WzUYloFtoiIroPb4MQjHCpX6TxZEVfH%2BGB9xHZq5P3tmcdIt%2B7yhtP%2FatexsHVXtkjUmZZjKhs4PHW38i9Fdw1Gms1CwAtgjTbfUKNdR7VX5uBokA8I41dp8OmolZk1CnHBUdag8IqaU%2FHDnY2cdEBpOhKBen0j5873sd1Wf8pgPkudkBrAsMVVWZtRR9IvuVvAPUH1Pv70RcXJOLsqrZzwHDMjDi58yrILOyuksuzJxZES53cKdEP6Msqc3XF7qcYMXPpoq61IrAHxaOx7o35RtEpRDNdm63aLepr2%2B853BHxIKfu4Jykp0fq838MavbTTCwp2m%2BhVbw4Ze%2BtsWlV5KoOhzm3A3SBtyT42tBmtnOSdGvuHVmIyvBTnjG7mlbatSUyjgWm%2BfspuIcAEgO%2FyNm12xgGTK0JQ%2F6Lf%2Fep%2Fbbhj3h%2B7Ot2fHvDMi7NzeOL98lnC1SgwyavaxAY6pgH5yb9s8vBqNwcRcV53NOB5jdZLHAaOt1LwvS4NTI%2B9PX%2FRsPofBJPfLMkbIafYuu42VOnCMuqyX5isHgGQwqvQZgOehaE6enMuqJ3y2ZyASGWKZeyQU0ilswjvSa%2BOi%2F7cXq%2F%2F4qMJZlSUb0kPFWjminq65L%2BHl37m1KMMo3bmqtPPXdDBjkQBG1KRHCGjQZottSO0fH1C5Cwe6YykrSGVeo0l7Gy2&X-Amz-Signature=94fa09e8bb18faeaec8a50681b6ff72671b7fa489a36e737269b1b0bd6d2502e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBG5H7H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDJDK%2B9%2FH0zgRmU9RMncbqaxxT3OckNIHpubX1sANHaBgIgGDHr3hjxdBtXZHT27RPQbZRzywc0DQIDWzkAQbsKTt8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2r1MhekQuhs%2FOktyrcAxNBBV41W%2FH412ufXWkEoMRzCxoG0k9%2BP%2BomVOXmmIl2jVGpi5X8sc%2BAUXY%2BCJpwioshUs0mezXW5Xbgat%2BEJzaRzsk80tlNjtS9HF9P1M7TZ0lYv%2FiDLar%2FCC5Kvo106C0Wi8INkR1t1C9ktdvqplm6wTjirxRs%2Bn13vo0bMwlgYCbC3H%2B6sDFCSeE5Sg1dUfbs8ct7fVU27hcKiwUjksQaPSsI4QPV9%2FSqJ9kC4mDsN3WWqgWBTLXZAygW0HIDyhujlLUFIB9x%2BrC5vgCamqpDtec9QfplXzUMU%2Bh17qKjrygDFdbla8l03ANrSIxprs6sWl7qT6f8SIJzE3FS3n2a8m13rNhI%2Bo42nxjjEjOclHT7TQ5XRbP7GVUub0IoDz3vsNvK8umdEoen88GCXw%2FpCerOn%2F%2F79esbJCiyw8fMThBc3f7g%2FIQ4YPhXpk7bhbFFIEkaenyigGQdhS2obX7cf5naXHhVn7Dviyz3xFud2hpLI9S6s3vOgm6zRzxzdj8rS6jeSUoi%2FwZkyV9CSeu0JfhnGXILf2uSSO1vmcGSJaX26opCJve5pzL8Ww%2FwbABjXSg%2Fsk6lTkn%2FYhBz3vVnRqavy0yWII0oj%2Bh3h2A%2BuSE%2Bkzcy7GRcUqYFMOCq2sQGOqUBHd25wIq5zmYo73zaLzA4S6VCgz41uMEC%2FTlRETHSg9bfYf7ULBfQ%2BdQUS0dvdCphg4LlDjalFL7uXU4uXPM1F45bMGBdeY7uO33m99EXFYwP4vS4e8ltO9KzDGukU6qJldjqksBq%2Bx2amorIOBER9XJ0r5Bu%2BHXVovFxn9bIn9dlpfk9SZCeGH09riGTh9cnVeP8VJ4SoOzjPEtgpeL%2BaafQurte&X-Amz-Signature=8c79bc1ebf4c2021017751c398155e271cbae7d0d3ec208346261017e389c758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
