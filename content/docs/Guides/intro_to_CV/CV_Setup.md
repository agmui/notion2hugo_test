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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJCUX3S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb5tn1%2FWbBGK247kk2SCpfsAbd%2Bqq79k8YgZ1Gz%2F%2BhYAiEApg6eb%2BMcDIqx39ZTr6a1aTXK6tVoFUDi0n%2F1GupXpJUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDO0jkAV37sb6yG1OiSrcA6Ip9vJYYXsGyp4X0b4Q18xN%2Fe1S51cIyTCPu6s5C5NbZrOFYkUktDo8vY9nhYCg2ACA8RueYkKuTQCukld6gLjDzsaH4QR1w58ep52V%2BPKqpHs9RhlQvtoDMRORywSv6Bir32Ktt%2FKHAk8FM8ckmvoZYdXwr9UVC25%2BzA%2BsGX8Jcz%2BPuhWnTLrgQ2%2FIvTWN9F8BTaSRROiEDnZRgdZtDO1jx4zlY3VmQPEmnXZUL1cb80u5c2m%2Be%2Foo1iFLwV6LpWQw5O92YeiehB1zZycWnppWf6R%2BAQB67os4ZflSfml8HrrjqhaF4Y7vM%2BFg11JvWRkfAGodoVsxUQcAz1kIoGv%2Bt1Rrh9o7tdM4jJTaQUIK8GreVoddtpWA19vm8qQZLDqw77%2BAb2Ok0vgbEBd6EKbu7W5YH4JqVhFzdF4m6OYTQtuBPZbQMfahHogl1rwh9Pdk2xNv2rMb0Zl9YRmHPe7Eg3ldB6zBRaBd4s2WbFp3P6QmCYBxxoZk26NFe50xrGHys2nKUW02uUCxhGc4GeYzDiGYjJDkXoz9HgiNybC8svap%2BdPrvZdasMXlss18zgdmemdK91gYzzHKrI5AWMn1rPW8P3wFV3taibURyUBZWqLgpqJCF4zPHCDXMJH358AGOqUBpeuj5SSloq0lAC%2BbFT2Nkg4Z%2FZL5uADCK0XrgVvoRD3XmMDTYCC%2FXnihtsnjbT1%2BJAeukc4eCMfB7JilJ0735TU61gucxG7eAU0q8y%2B2IZoLMBA2Uwk667PaWplmynvFRcU3mqPW%2BIM3l5H2985LjOLHfPySV15M7ZUSUCwHL8yBUgUzumX528ab6aLxO1ciw%2FV%2F5hXSvaFRYBVElB2UyvZywiUI&X-Amz-Signature=38a1b304f503ffd3c371321e3f8196f5a728646b185c0abb958c1e4cefd92666&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW2LE33T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD88ebNzXC7ofpgLjMFzXAB74o2prgloRX8Wr8gl20dowIgO5UFFRDDJfqNuet9qG70kQQGm4THTEQy279WD1b7VCkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPbJ%2B%2BjZrj%2Fdes%2FcVCrcAwGC7MIS2S0kzI3Vz4MCHbTufh%2BWvuZ12ZhOufHJLCaXhmtemfw%2F8cRkuz9A3PuLOQZC8H2d9foN1iG9KTTEh2y%2F3LPB9IKdnYbPtPsZOXaAQ9KrvKVKlVumCHWQMt%2BIJlfFD0LgU0fnlOqBRFnGq6Wty2%2FBbYkJJBJqT7WztJzKhE2huE6voOThKq1yEe5sDv9cjQVoAEGdbLQ%2FQ5w8TkwdFRbpumjLiLaM6vTWYXGMjrPwO9%2BYbFVCig3uWxb8u1VTDxm2%2B7c7X%2B%2BIWsJkobOVIGn%2F7LulDKYnAZ4n4ar%2F3q%2F6N%2FhG552Donsw1oNMNqD8LtGYg3I0M5UqWHS2HkUDHSeF2RA2rlWXaeGrbECAXuio5cONZjCSfK1JoRPySLrbG5SuVvV8a5YDNNo907lRGtaOBtv5oxUl%2B71FT%2FFOqFyqmO2WUG%2BBKHiskI4bscLes1UFmd%2FfY3GaWMy0D1cDIxadKHbd2eZ9M6gpV9UwUqYZJPPSpwSfBLgzMT5N6r6Dhnr6rkg7RbtljKkHwe2SBRplQGUqcyhIZPcSkifIFRiOdMmoCaY3z3n0XLzAs83zrIcmHRC7Y5txDpVCHHs0T7S5GE2hZHk2G1BEcBJ8IMOTFbMcDqymkRC0MLP258AGOqUBtQjVWARn4Feaunm%2FI%2BqAWsrgpLItASHMkPbv5fBDvVCQnq1JEQn1B3GmALUA%2BRtOCYCVIBKKUGiSEqBK3AvfkldWjbK75xtKlsecr5gTCy%2B5wl4jd3NGCAIfuTwHJobspwFkl2dffJBuzSOYUqtKPwYIRZ1LcQUEFAxNgRpC%2BYcYLjbJX6sVsipOwajpOVBC%2Bh1TAlieSQeU8bQlt%2Bbz8K1BbHzj&X-Amz-Signature=452e01b4ce77f1d4e41aa26ada69b39d540dfb85cd16f81af03a8472ec3ae0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
