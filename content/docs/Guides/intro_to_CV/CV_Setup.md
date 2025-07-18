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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXF2Z36%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC1e81KwASN9%2FDFSxEkUKJUNEYrmR0qvz83RGUFZ1O%2BwwIhAPo8vrq85WJ9e96%2FUMVypsbyhp3N5Wfxa80ItYeNEWCXKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08lTIQYAfGh7oh4cq3ANSZThCRt5vILJ8nJU2itWtgLsKI7HhG%2FkEHuVWP%2FsvGV2etMQbkehG1ukglAmXiTl8dXhTxaXdOapqKmUpkIfUdYA8N19XZ5sh%2FQT%2FLRtyfu%2FmKf1CfPyTTKTElAhihs8XwCVkwITKK2jDPI1zwtVxIde%2BkSwFzAGnr%2BXHoNgr5xB%2B5cafKoi%2Bl9%2Fs0e51TfNQ9oMoDrIhXQ67LIXtDZNWZgGe5sOQaugJr2zPWjPG3amW8YSIw6EXyAFqszRX0pqXrSHITLa0dGs1iCE97kcUwidSKTbb9HCFxC7HA2XCSq4O59DtyyK8Io%2FY7M152UR%2FCES1jrtZbooIewYOToKdlpUI009gXjLNCWzTqVwrDqGaPpraiI%2BfsQUxTAMnFrrSkwLnquMRIRr60lYhNEX%2B2VW04L4YUrgxmT%2B7ZS8dSlp9HykZFjfru7cNa9k53I%2F9GDXccsutC6k5ogP%2BkGcRG%2BlNnAjeNrqWrlWro2NoAHbZSqRXseqMsCWEdJYW%2Fobyx%2FZppebnT%2FznBVL%2FaNE1AZhTlUz4EX7jY3U4k%2BLe9Nl1%2FZNUlPHeuSH62NwgYnv1hDD%2Fq2XLKKrizNuYKaL629sWYO53Iy%2FHmJqYXDLj5ajFUPFtVoSHDO83RDCpz%2BjDBjqkAblBmkvJfUVh1bO0LTD4Bpgv6rXKJO1XB%2BuCVLavzZxMrZ8gEO%2FX3b8n8JA11sEsfC99GQRp1BI7JSQHaJ4PBe3Ax3VlmtuG2YFxtwkFsyoRPOrxHOb0ehzy5bO%2BPNQVcPvgQ88kPwC9USjiy5Z8vJqpsw8ICsjaP7wb3z6tOUGHhBDmx2dWAul8s%2FmuIkrZWD0F5TedNrKxiqT6aEgoNctIIc1y&X-Amz-Signature=e342725edc98364f8c2537b8a7de1935c562ca268ce219c6a3d0ee6020c82243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRKMYPJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICSQLrVNs53EgQ835q5NfIxy%2FybyclORg1%2Fqm69P3vDFAiEAybCccPo7PRnceyQ8NIiNaLeUBMQbFW10piuHCh0ci1QqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4nI0%2BTlfMpUthhwircA7byrt%2B83mvoeJVpUwK6NAxB1OFOPhY4aeyp2cEUKNEF0xfy1BpKyGaZ0rINjqknsKUKeellQgUjTxel5kMltbbbikiMtyaqeN5bwhMKLPtmjTNmqJC9U4kEZ2wsSwIupucnsV11oZAH0sKMQCdLiHD2XFRSej39KIRSfVHn4uxn8WDoE2xDwX369Tbghw0oGpgrW0x8ccMYhd7NFKiiRjso2UqOBbQ5V2DOfDiNx1EJ3G%2BWTaS32Ygg82iTpGk3l%2F2MDafDJT%2Bb1wFwn3w7TRDALFzRDQZ1gXDxK4p9LUHOCDg1uPlgi83snd3KcyzgB9bL2idnoNrnalg6Mmkyi4jUqLYwsuF%2Bxd9GaPa3aMyHlcnnaLI6SnT9eJ%2FJpr9B9lDBHHTgSfEPIIpa431cevc04WEst7Wkn3uwo3a0%2FVz1aybnNX8ktQY3WKsKPkEEr08vvvUznCT2zKE8HY9DrI6tVaugEdTYKefHvC5nBKfOEawiWyQmLJK7ACaW39jDpoCLbQxUa4mQNdAlwwpYCRgFckzsI74FKJjl2f9%2BoasF7%2BgfrXCs083XuCTITfWVMy%2FDCa6XhigOG4NBfwe30gaHr6QP0hvCwG%2Fpk6Ct%2BrnK7a5JG3FzqgcT7HbmMJTQ6MMGOqUBuAha0KrW0v5GNNltV%2FKMnbKedVj06YlhdJwBhJrDOcBZ6VHXgW%2F3pMrsrV0mCSWeEEJyJuQLBUBF0jfE8GR12Lf6r0xIr0jGkNpgNPidRIku%2FjrhcODMuTf0Erkmsn0weQ6FTWXYSeMNg3q0ML1f%2B0p%2FFLoIqYDdC7Ce79z14BsH4wD55mdiSTh0RJQDAxtf4qHoB%2B%2FiCYqUKRo0Pf2sOqHQ2Csu&X-Amz-Signature=a1d9d371a61ee4d256bf4bd1ff4c85ead82eb3bf30d14f18576fbd59beeeaf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
