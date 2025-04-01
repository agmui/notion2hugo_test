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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAIJFZX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDTnzkAPB0IEIXTZjLvC5pbWVUkEfjhcIdd%2FHTkRCb%2BiAIhAPFDVo58bX%2BEsHH3yCQM9rF9CZe19FQSDcaO98rfkbUeKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl9yUOwUwF7FgZqpMq3AOnnMCEdMizqAwHuKBlFn69x%2FwqcQ1THvxXgVnvrbDEJKNhYEv73c1C6C7562qjjHRVFjwKvUPoWtaMEp39JskG%2BAmYxbigkoVkaXv9mhJ03jfk6mzhz47ma6Hd%2FPGCntLmaeW5ZMlbwbvQrMhLe5cIFbRlVXI2lwQpw%2Bvwv1D386jI3qt3E1%2BmunaVTC6dRufIqNBGhzv08yHcqCPNUSHVO075ucongcibBZVyolpf9SFybIm3%2B2lUuxCHfNxffnvGf6MqgmUkimUqBagjEdiHHgWObmehoRqCL%2FGh%2BUMZNYV4JCRGKmg0b1xyf7ccwCppiQIVCmGGSFYt9RYV71pdncvGHe37D%2BFQhI9uyNEpvdl%2BXmooPBi9jsQmm1Q3dWeF%2F5k5kpteHZKPBJaz4YEBI5pAAaEnJvQKgpprqcJrKmUHhYyxHH9Aj2hzk6M4oJLqHp1475rGnXNjJIvwqNs0NYka0%2FTahHGuqA32wsPK2KQskJpWlfiwjHUFHpPohpIV6bmMffx8Yfv7dzgOV1OWxRaIyE5cKwnQPDnqqr2kxRiiQQN8RtSxCIH6t%2Ftwgo6D9XyPPwceTkbnwnlAATZ%2FH3PMBP%2F7RFrRmU80ivN47WIM2PvjhvD6ezX8HzDUpK2%2FBjqkAcTrqV%2Fpuvb%2Bxy0yQSKi3AkQirdcwG%2FCzLkV14MmdMxIG7MJyu7ZtBc5kqd%2FQFLRjXjwu5I47rYXAvK6cAU64euNpwS1Om5wW%2FCZMbu4rQzB6VZf8S0Dl62lTWyBYwhto9y4MMG7sPmNR67NW7HdGFpx6tPbx%2BAa28h08LaF0p5EOQrnjgpAzCFEpvjKmObpF935XDL%2FTbZs7JAdsJnFN7oxGQkW&X-Amz-Signature=0fe75eb8f6f1bc6ee942b3b71a6128a3457a4a68c70ccd5ec1e7906a0ea4a857&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVJHINP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCK2NyyAzXTGVSqjQfkOfJnD7fJNijd7caKLVKJvzcmqQIgMB3NgvPMmKGydgftCVXTE%2BreTtQqUkjaHp2Gn7EcVQkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8zTw%2Be6INTfoT1vircA07mIiYdGVpCdlJrvYBvPsMY6etzttR4TSAYDjbGPLjfhjD184Tmc2M5dTUmZucyD50e%2F0PK5P3e%2B0LBFNMCgJEBT4A%2BP2dpId1Q0e%2BIu%2BX%2Bs1QbkjZDRmIe%2Fm4vIl3Wu%2F%2FfH5D4Vns5%2FeYJGeHV3wA4jFlG3RZV0jVSklTde2shdxmOx9cn2bSt9GAm6aMNwPTzbKrsQlkR%2F1Zy8et%2BVoAPsjIDZjOMxqg7F5oLwtQhxI4E2FqlkkvSNwjl59Pgzh4Pb0gFwFqe%2BffZOvor2pAgaN3XV2kYYcDnRLJhzqe7djFezJNVVBRCkp2onpHUiJXLJ3M8MhLyQMCbB73A4gEVSethoWncwZw3NFWr5uxEgOsYWqDlc4d8m98EUvASytztiO1NHVRg15flcERYDK3dVB4OvtlFqYSC1VBf3jx3nFmcGTlAlOYXk8%2B9CRGy4bSaN9DBxfyDhUojgaClpLuPHhkHECkI1jbVgKP1qd%2BwpJeDVrHgiQCoCh%2B5eKFqhZn1Gs9HqoPZsphtmsbBzLP62tLxCENz%2Fm%2ByURrNe%2FgNWowvyCp5mbHuVtMf%2F%2B7H0t9CnWf35i5LwjD3OdAKStJqAlp%2BrEVw%2Fhzn1%2B9aZUb185eOJzoGRJs5PwcDMKqkrb8GOqUBuRmfSv%2Bw9JAykYV2I0A42b8WllUK0lQq9xLw5pjDaZlK%2BgUAPWr%2FaqX3GgjsWqUSyew1EzEHJRqgLnOao7xel%2BmhWTTTajkSjhbkHLrQYIh2yiq2D3NNqVS0MA0ucM9FaxJkn1HmxhXmh25XVPNKuA%2FhKmM1OA1BaAqqGk7U%2Bur%2F%2Br1phGtybtSPzEPNoYfsTx4pTV3Jc53Hs7jSbK0es5Sxadye&X-Amz-Signature=f43fddf2da3553fcf42759f01252336b975599a93d73743a5bc53c66c0ef4148&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
