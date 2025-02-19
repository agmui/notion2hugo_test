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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIMG5F5O%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVQcSIenHBOGmDT6Let0B%2F5jncuBnLWVOFUKWNhF%2BFxAIhAMJgkprTa5z%2Fjyk6gAC2qzGCfDFtnhldcghXY%2BfLzk0XKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOI8AIIhbzXtTOkC4q3APxhrHDbvJosxDZOlgbfJXmFhDIJ2pdqpGWOK7LDLgjHwmGFozuwdH7%2BrC%2BGXeRsv9dHvUgBWrSAlYlRjPjyz2ThLcJCOzlqS9XmimWwaZXuANe%2BMc%2BdjrZLFoxtXAXFXFhN5oQRSAyy4%2BcuKFQ%2FrPjpx7FE%2F9FOjs5CW19fKM65jlrkNY4J8Tw2OW%2FOVOO02YC%2Bi8y1v5B1iKkdjQpmK7K43E6deFzbXLoCIvGTxGqv5i7gb7YLHwSFTd0tR8S4GrguOsn2WeoPVeGIHz6WZFu%2FVqvnnStIYJ%2Bs5t3Dt%2BEmgs2A97OPIWnsvAq7CQ9YVe%2B7gLMZaJH5klHgHNNK5MXlqKQHweDbgOcRVzOIVGlOtqQmIpsc0lwn1ViAhsJ0LWabR1HnsarEXGAIt6Y8vrcHFrSvLjfNf0ok7zKabXF11peGnM%2FldUthTraEbybJ%2BSaL0FqJN0BDCMQOcKcA8GPaleJfVvA%2BV8rdOxdloFI6K5%2FrTjgEuihllnh%2BpEodvkWkkOeVEe0YyYtMwbukVjI3P70yuKlo2tofkroKORsP7lF6pn9IPJIyEqihSQZu7EgdHgGkaYAZ3PudWDBKspYPNQH0wxH%2BQd4pfff3B6JGSpweCPMPDfwJUiEdjCg%2B9a9BjqkAfXO2rQyKAk4QmIQVW1zcOuNhH9IZ7PdM%2BH%2F3lN%2Bd%2FAGEv8OQImhGoF0yf%2FAMli6bbzos%2BtAuFeECBmywI0srWGnru%2BeCywQHHu8jOYPO4wlGndyi54C%2Bao141ZLz7jRCK36IyHxmfthEk2thewll8TeeljdXkEQ7%2FX61SYIO5UM8sY%2FlEY3cwbbIh42ZcuybuW6Mh3GyQP%2B0qxhfuzkbC2YHife&X-Amz-Signature=d5fca5f8a5e34bcebecd96efc8b0cc7f3d5244ecbc61487d78cb21d184f84109&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPGPKYA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHRWJhH4jfrf7sYX5KH4N%2FhqiopMoPG4Ki84yWR5nlXlAiEArd1iK0g9JY%2B1XUOnpyftgULtwPBbV8DgqLJ2gWeoB6sqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BdtGSSI8dLbA43XircA%2BiqpD%2ByurgL%2FUF82Y6Zt%2FQF6KMVdaFOCz%2BqRmQ6Q%2Fwn2qUJxIJ77XSu0OLdtF%2BN5zYgHD3FL%2FWM849ibOaVjB7VIITTDDy40UiiB76s7S0pF2yRcISPP6uhVCVthKNYS91fOsqUG%2FS0k5KuVMxYtNkNfcwnd%2B5V0GWJblk%2FwEYuLMAz8%2FEAotdV6609q3zgckn3cK3Tnl%2BKt3R6meDBOFBFE3rfyWGOhq9zbsqFUiuWp9IeTIseYz5oIEsAPA4cPDMu3VJwp6hyuR2OmkCEdNB3Qfl8wc9yyf%2Bc1GCyY4dkWOOdiyFOVG%2FWSCBfPyvo6LdkXkX3SUevAqKDZB3vMPA6ZibJiEXq6fT3Ld%2FhWvPPMlUdQT%2FbM3ivNkBWQQdvUWk6vDd9Y10jdZ0ZeRkjytNLZ%2F5xDJBFAOCQ1af65yhTyB7SM3xS4%2FF9HKW3aFKr9BJ1u%2FySHYhvoypv%2BZ0LM49Yb3zKBY%2FoljzUrs5XD0%2FWtl%2FAcGCmmeiavs0UF4yFt65KdeS7Hw6ug3sniXM2oa5PPQCTC6lADAnp2swAtYKTXJ7V2RJ5QRU%2BRd3Vio6haLYG9qMW%2FfoT3hxOuAV3oTEd%2FFsQtvKH8arQcz7Ng%2FSt8T9lsD1XvLJUFstJMKa6170GOqUB3uRX%2F6unRERWzp5%2BzdaYfd7sYr7VDQK63oXIH6r1lS8wX5iu6YDC0%2FnDXEOPfr%2Bgu5phBjBQA%2Bm2fC16pA4OyZhPGOGhtzTmmZCHpOM6XN8SYeZJhUiD6q4TRs%2FFUzspjf4ElQHyYBku2uU9p0faigw7pCMCsWDRiIRHETtwdeyFfGdwG2oW%2BEcVhI6%2Fmt7SXqDvLdxGuoILLRp9MQHWiyKlndx8&X-Amz-Signature=e426d2477e80f741f0990fa9eb26613c4bc1ce7203291341173c47ea6b37418b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
