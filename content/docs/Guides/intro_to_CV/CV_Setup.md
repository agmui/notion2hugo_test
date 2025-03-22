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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7TS42S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDvp%2FWH7ib9gMnP7mzsDpKPZjLjeL%2BaA8FN9NlwtfPTpgIhAIG4Pr5LhVNxR717gXw6jPJIxUWvAxc4Wvwc%2FLCWlprCKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKUaQ0WGjQYMef0mQq3AMKSR1Hw7hyDBFocXmnfq25xclTL3U6Birp7yDZWeTKzI8l2wPO9wKdsFtPo3PzeQFinodkd4kg3NNE0RsCPmvfdE70YXSEyVkZzYhGdWuC%2Bskhs8nQig7jZ7um4t7y%2F4GEyxnaoWR5eXv1ksKPQ1pJW830t2mgQGOaZp%2FEV0%2FPoQ%2F6Mb0UoIeyp%2BjJyrZjwkfUUUtQTW%2B%2BuOWWWxMS%2FakpBIFwYf8%2BjGMkKFNZ0JsBOIwTv8AwPrQFQUz%2B5AA1T3etnpdsO9eGwiLl3KILKWEh08wHajjHdeSjmmYth7qDP8uheT7lmVMMoZgQirRrw3ii3stfy0eIB0ALLrX%2BoyLApDif2gRrZ4qoK5ilrprnuekYLDDV50aR08utFU6KyUKj8W0Xqyqs3jJbqfIuxWu6hn%2F5%2FOX4%2Bt9XNXgbCBTa%2FNrGLN32lK1tr3goYRp5bIYPgs0nvd4vi9lTUShjYZriA3AiO5ynjaCBBBSKRk63tXQfsfuMdWqxdbL%2BUMTl7MySa7lX%2FU0DOC2MvFObxcntNvfbIvQsDVkNbk237ftBxLzeG%2F9rYV5xxrjtK%2FTuptQOOM36ZMVUJobqNxfaDqTJShsbdhrz%2BGSdx%2FMH%2FdShERrlzGXpLGSjh5J7ozDv5%2Fi%2BBjqkAfuuafp5mQN0WtMFYg1arIRUKJPMMD5%2Bqdw%2Fc4NmanbleDzkT1fn9GznPl1d1YGZ130hkURxsFMg8GiPuOrWJeBxEQf8z94%2FNvQ3FTQyj%2FMJuMFO127wx0HrdtW1NXxu3PIYfXTz23UWxPLC1N6DorHw4W6eEPUhmaDDDRC4MhTBD3ldfwjjdjVvySn%2BqFtMBw9YxQ1uSlA7uxmHUUOTGUpbbEhQ&X-Amz-Signature=d6bab7364d77f3f1d61081270adf973263ff9b9d8530f18efe85e68c2692321a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QBP2UG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCleeLZBVEJ%2BLn3WONNZ%2Bbw%2FnzRiq3K4W6jPLdXmEq1kgIhAIVJvwiMByyv5YJCWBHYA%2BmtW%2FIWQCw2QJRv6jNEcfMNKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa8xMq7QhLRJIzUmAq3AMEkYm%2FzFALAJsLuJfGyI1bARE12OUybYbshNXk3tTWxy6CUfufvAYnwoeJX8Z%2FtRn6hnMvIF%2BDbtXbBvcb4Uce%2FziixOqVdjR570Fxu0EKEdLnkavYi3BI2LnOIp5qD07iN%2FtxwjZHqsXn%2Bx67xyn%2BONgKVbxJF%2FCupPnhmCWQ2nabUlct8AYwe8CY7GduSTiOD84mqoO81G1hGxjdpLXr2j5ojJ%2Fq0XhMv3F0mY381c89QEdk8TaUSjxL8EIJxnbrOeemowy8OFel1bQalFaSFZti0DcFFyFR5zuhtv6FsEehmVIHdGY%2B3%2Fk0sb9Qg38Q355ivhfjRWRBLRFgzr2MwLQ1b1yRD9CxPYvVr4GLllm7Xo52CcsWcRVd6VTpj2m%2FL4DyIMevZuh3Sag8GeWi3t%2FrzyPBv98135I77bO45RrUFtUQSfXCJrw9SuVM2GSXF2%2FQ1dQutFTwJ70n%2FWlWqJKeUq9Sbiw5rgtBgzN5NLX70V7o%2B%2FMB4fi8MrBO0kplqqVzCVbuxifzDpQfup08m38Vjg8Pjcqg8OWDRx%2FQKls8F0LojT86EBCaqxALKPNBD1FvwO9omPWtssXr6C762RQ1z%2BDKmybdPBY9z2sYQ0Ik6ylqV2ObaFm7kjCX6Pi%2BBjqkAfvnaj0JP7huHezFfwA76cruasa6vpRlrMkSKwfQAPaDWsxumje9KwL6eTjSV0H36Tpm0%2BtnRdH%2FYolD344nBCpUoA8IoaoyPMtJhTOYQyI2%2FORia%2FxvT5rCme2%2FQzquPOj3eyBpVLNOJiYi2UFNVnFF0bgjpbF6MPIBoRpi7nN34egWOaMKQmQhhMtU2piwqIthHAM0VAr7y0icGG5GFQFk5koJ&X-Amz-Signature=ae7bda8d18e1d8c89803a66d2302416fc49beb8b45d114aa7d4bb20e77e7d4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
