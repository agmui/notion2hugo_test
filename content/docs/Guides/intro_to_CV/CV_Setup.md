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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7OJ5Y2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDQ41jN8JlEJOdKr38mXSy61sh4igRWttvjyab%2BRXb1UAiADmw%2BJbnpJzXWda1NYvWM37oOBKWdEhMDxmRnUFIIjLir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMfjZUij7H9CQozoL%2BKtwDta2KfsasS3LX2oJYFGVlI7tdVMQu%2F4hKt6tsoEtVYqSNtUANyuyv8QQSFyiypBn%2FP58GJ4t0k%2FQh80ehAVErrBv84CbY6NbqD8YhxAiZryvZYQV3mh%2BBJB%2Fn9OMdlT%2BEPrUbjiaM9oZc63w1fmm2rNaK8oO5PZXK8vShCnJbWTCl7eXYaQdqQatGGtcSVfKdINAAYUyLZh9OeH%2F5dulc1uYs8IWeoGgwGQ9seWe2S8zVrIW%2BsW9%2Bx689e7eGWVYDCopD862PtA%2BpXaoWSnuyBVueoHDaFqPqtNIyQzLmu7%2Bb9RuFYMTc%2F48vg98%2FYcCDWKrAcS1SIW837OW38VKRuMAlCkBJLtk6v2O%2BVJCxFnyDfaelbf42aIS0ZUELzNS8EtjdR9H%2BYW53uF26jcl3iTAO4pkWOuK32NTLWFmWZn4ava7DMcnQ0pTdcvGOUjdV9tShjnKmgeiHmUmP%2BcB8tgvShe471tH59icQ76SDWY3uf5%2BtzZdLNPyaUULh5mcTDNL0FPg0Sv6tKjiuEJYJEt1%2BHl%2BKpKq4l908tUpGwQfWGaOEKMF9gv%2FKRfH6Nzcf7jVMT90FEyCeptU4sWvlvJWE%2FUDu0uZynu0rAH1OthDoQGcM7bCicHCphHAwvauSxAY6pgHCxI8Czm481jBqXJ7a7CSkPTvM%2BoHIykOoceMtImkrQVhdWtVupZrtN85OrPusQSYX9SLZGUUMUkSyGuvPtfgTfuQhBYx%2FHSyKvTf5s7ztqFcyrab3AllVXBhuWTUUMkVIMDUzu8%2FYsMXxhMmNORrqDLhqixTwIQBoS78JrzHVsAiXtxHrjUfG2Xj%2Bk6kQLtZlv0pJbnJjZN2adPvnnI%2FzEpWH2viA&X-Amz-Signature=a9336d846e9c6bfd47854eb6fb8b82f9e9a5672fc95f8cf2ccac39e032bd803c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3B66PFK%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCJLS%2FRGrGSYpEVj%2F2syia08EQJKafOGDhhdU19mR3V7QIhAP2tdCDy%2FtLI1tmrgWHikdcp2IwPnG%2BfNMKp1bJLcsNVKv8DCFoQABoMNjM3NDIzMTgzODA1IgyigLT38PI8olm68%2Bwq3AMZHVhUUKnLhCBB0KP8LD0saw8Rn9yRHuvkooV7x3pg%2BpUA5sfFgkeg11rfUFvn87kh8jeanWVyOH97nbeBz8NzQLUsRMLvPKgT9%2BjTUaCfrRNmoxnp65aXBlxmwiWQ75LGwtWIDqrKwpo8tVOZtpwjnBdTR5ghwRZ%2BpSxcWevfcohmFKz8kGxwBc7auNuiqsEdScoo7chcQGZnSw%2F1Ytu7aq9KAHahiKhCmmLMjoARZ5Ly02hPDr%2F6KYVqkObvVN2se9q54EVfelNjNgyKo9MjRfDVFhtafucfaqWzh%2FX4CG2tp0Y4N%2Bi141y8D2%2FZJzsIF1z71X2UBNApw%2BmYbACWRRkGs%2F8YKWXHiw%2FM%2B5MR2M3A%2Baaq5AKXDPcWuB%2B%2B6HjNU903h6CeN%2FPiq3OSlWkMSdSUb0k3sWCiFgU2MN8xYWPYajfMD6S8OF63Er6gzdTXRqWCDTwSqu8%2BMWAZRVyLGtVhY7jcdlgGzmfK7FZRj5jjwEUw5nCkcNUaXi5g0GTOZBHxiCNNDB5T7yjE9%2BCN36jAVQHdWPFAPqpLzg8fszcxPEzuGFC7RyR6LXeNSzUmSdBwStm8d15VEJXvj8uVrhkrVJol5Dw4NBNdN8nU7xx8vKdA5u77wSD6gjDeq5LEBjqkAYryH8r1qJYYViMT3YxVPCi%2BY6h1AWaY%2FOVoH2HKlnGz2eX%2FO%2FzAVwT%2BiSQFPUF52XYNrF84sg%2BwMrjmrOFVpTKRlZpFo5NlFmUxWO6dlf8V8mHxUCdL48DWYbHRNxpxOQ6UKbszp6kGXgxLi1f6kpJyfRV7DI3Fjrxyy00pecsyogiSGAsKpIB9CSMgDPE5VtFZmHXUCa4Bl%2BOgjb2ldn%2BWWHTQ&X-Amz-Signature=871995a22c8233cab102fbdf28545da2fdb78c8e2b1ee75737522163c7b7465d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
