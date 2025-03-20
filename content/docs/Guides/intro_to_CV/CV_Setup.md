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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRS2FONT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC2inufdBhOIVipF0sgL3R9pfxIS0B2p1Z9YI9Ti%2BkcsQIgXeMJtO%2BNU9MUAzSnGE57jLqEuwrkcu%2BMJkF2HwgWTGgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZyUHIC23X6dZyprCrcA7EtP9Mw9z1mjO1AXuKny1NtxX0eXxXlIO8oZ4WRpXUB3iCtzrT6OtYXZkKsv6JWJjYpAv%2FZfzhs%2FS2%2FjX0AkFF7uBWr8wfDoc0m64Q3YZ%2Bj8Q0pt4b3WZqQPI0BfeKsglTPNu6no1VG%2Fd5pTy%2FJ5XvBpV5qqFUAMWRQntWRvkFotpZ%2BWV3GBACTqnrxmSBb7%2FOieHDNoHqRJhvaFjdmbnOK0YZNiNGnL3u6W5XN4fWlwL%2F5KV9bBZWSCE1DNSzraJflwwNJPEIqlDwYnP4d6J%2B9i1ibU5623aX4r8iDWgMp2S196ndpQLFI3eSIt7TozHdBY26i9b876VNA0lT66seJeUXiflfcHuGLu%2FIkSbb1gQHvC9SPbiFzrGZjYqEmu%2FEV50MF4TNU%2FZnYRvtEN2KFOmfQr3b8RhxosGFXI0V8NWCaBFYyIoxqyW%2F14ScrbHlNe0WANYxNUd4vPs9j3vecGF0KW%2Fboyrymn1emDnIZKtaQ6wIVcYeA%2B%2BS%2Fruy4yhopfg7EplVeeb8EhnORRlppWsrKnU%2FUTwyMKgAtQUcU4KE02%2BmZGTCXvxQwBgubEKRUCWR%2BNWod59qeBBXbAplVq%2BztdQ2DNdwSugo71KG4i7wJxj9SWxSLYWeBMMCG8r4GOqUBeVD5buXcPmuDHmsY%2FpqR3yDqCFGFWqezsY%2F2p7AnoT2fgsWn7bWDVCJNIp2u8J5riQA8uj077TjPaGj%2BHpRxc0aWSGJ9nbFZuRgIXm9GywS8YvyeZWXNefnGWryKpwaex3oAnHUtpuns%2Fz2hgQgzn7IxyQSL0FRLcU9rZFfuOWh4FwdGuA7inc4Ui9nDNvSbC1oT0MqPl7VnoQROJAhVhZMoAarK&X-Amz-Signature=c646da88ad3549802546f627eb6f124ea34dc845083dbafd6d125568f2f8ad7b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIWXCTE%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDvEmmMWRZQx5vqO4XkDWmKtG2%2FOAFuUSMjagvLnKqf6gIhAMhLQSrUxC%2F%2B7pppWaL2TZu1FxZ7LcRy0iZCD74R4WDpKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFAXm2zNDZx6gAJQcq3APJ7uBC5yp1yTD5zQQxFq2GbDjE76GT0Hg0JQa7YknFTXgNxW77rmFAz3Hx%2B%2BETOzj%2ByNjHyLUWO9eC4hnc1ibMVp0rfgJGCXYnWu3fAun2%2BRQg78FIRX8gdyyD8bUKL1PlY%2B70kUdA4ZBo%2F5YN5QIM8ZlCi77b9niM1YmN4M5qozOXj3SXFBFDYA2qpxss4IBY%2FXBcINFcuEVpyXgofvHU6A0mL%2BvGPQNaLTbC3rn3sN8x%2BKOUYGowzLq%2BNNDYouxENzPI3BR9cC8Hm2l0pADCGn6pFvWH%2BXEH%2FMLJTaFdnKK1Pubaks9sPZeb0e4emqrjH%2FW9dCCR0T3qoEyaaJxuwd1Ov%2BEpk1lDzySpdXiqlG3nrsPuL4hRSBoi4bQ9YuyZaxy47YqrzeTf%2FJA6FW5QCkbdqSJb1dfuv%2BQUpmzQb4Astv4uU2V%2BPj1v3GqDSUQ6IMyYJhMWOiKld0v5CkrnprCfuK8nosvilLX8Z%2Fg7aae7krkd%2Be5apUCaeg6s8moDGeDCeTLbgSoO1cRvVhjbQMCzkAJHFrzrMavMhdOqJZd1Vo6D%2BRo1oBJFBcz2CebLf2WeX2Oe%2BwQk%2FWAd9QLx4WpeADqHrUAIJuAGoBuiHh6D9MMn%2FYpzJ0QuMzCHhvK%2BBjqkAQjm5M3lm4%2FMF1wZBhnxc6GLIKQAU6W1wSt1SBWKWcxoBnYDWc8brkms8ms%2B6YNC8MewTTZ3Sj8QL2A6zLvoFPgzEEcOaEJ7x5FpReRSIuXXDJBJPQ6OUPCsZirE0QNndcNz89SUsm030uwzrrngXeiJfi85jTxXO5c6YUWGSdY7viCiA12W9sXgSY0%2F4U2oHf7QERbKRrPW9QeS03zupYbxXEQU&X-Amz-Signature=1d6342e178e74ad0a43721a85abc4c009bf0a18a5541f8924f10921cda1c60f1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
