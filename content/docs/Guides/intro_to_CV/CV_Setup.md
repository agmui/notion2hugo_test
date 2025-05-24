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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIFA7CB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCy96X21HDkwVsOceVQ52AxOg%2FthkJ7vEAzQyZkECDy8wIhAKsjNce63pFvFHDsAlskLffq6WfZ17piBNr7GI4sCpfhKv8DCBsQABoMNjM3NDIzMTgzODA1IgyRMV9lPHaU%2FvVRDp8q3AM2ei%2FpM847GxsQ%2BcnzL1%2FofvQSD1RlkD0lbJL%2FrP92566%2BLM0m35a9emu2BB%2F1xoOcfhmPt1GYn1YzDD%2FJbL7%2FlowWoqeORU5paRkuNr3mg0o5QWrK0J2%2FuhHgF40JEi216rDzBhhXXJy5d5NxrdJSYrU6eElleogR9uT2EBxsID%2FN47czkPhLjhQKEr8LaxdbcKJiWNN0J9C9fLs2SjjmcoJbqeV14wimd3RbyoMSMSjfQCRKGrI6q%2BiF7xI28OCOqgbxwWNlCFd5heNxwCXwNlH6Jw1LAcUOlqq6uwNrYTn1qaeAXtvxPcasHaeuK7GDmb2ODPWUdR9Vw7%2Bi56rCAtxMBBFVvY5Y3po68G10udaZpjfAgqCbE7%2BOBj3ZhNDDZG5Fc3Y0qbpcD%2BWITuSvf9rdcbMMb%2Bo6dif7qE%2BjHWs30hjA6283Z8BHA3ynzTwyr%2BeWLHLBBXWCYyNCD6mHMtZz2wu3QgJBVJ%2Bya1x5F4vGWNbcoqXzfmGyOdQ0kkkrwMOtuurjHaMjbqAOuNPz5ITZF%2FC8to55cEPHZupwTCOcMXCbB8rt4Y%2Br02v5A%2BQSDNIeR8z6rdBu8pxty5lUDgtwe%2BEjG21uVMYTvbP5PCyVg3CBCf0v2TFDfjDqlcjBBjqkAYkFaaB7csyBKJOPp8liiuO0sgUJt9%2FX%2BqwvmUp5tTE9Utw03zwvXwPwoj7Y95XVRylJssPUFOmmyjdc6Z0tMHQTKEcaePkO5J%2BaPQCquQlMcg2G3VDlohH%2BRk8%2FURW4EQZLwQWL6w7qmN9fqzhFZLxf2dxOKGMylPTC2%2BPbf2q69gQayw%2FtA%2Fp%2BBA8zRHPLq2TS6SbYhDuPQsjCc3HPwRPHxN%2F%2B&X-Amz-Signature=023e79087dd246127662ac21b95e8fd5b0ef11959c9a8254512df3406d45224b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446HGCQD%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDacY26rfyGiOYB0Cj8u0gQwyTdnhZGLsvpdPjvpwJ9MgIgaE%2F0hRl1g9y4SK9Mllkas3XLO%2BHofS%2B%2BDEbveD5L6Gkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKQKnJLj71w6BlhoOircAwLIcG4qAC3K4wh1NQniVtk%2FXiKhdkeVkKnfyqEC9D9oGzAEo2%2FDspJWLkZ4lDBFEq%2FcFL5wl8ODZ%2BRYp%2F%2BxXb2zk0LtruihVNBDg8V%2FvJdE6dFaFXG%2FthpuqTW1cTRHQft7mE4dUSs6U7kHnFbLPXUzaI0t%2FpNJlX3vP1EqH%2FT%2BhAX2wsiPG4AnGXnzKsWgPMp3PXbsTAeChLpGgSkyD4qy%2FpjvuFL3CM4NA0nEsPc0Eeo9HENe9hKXIxXVDSgPs8zDsal2x51IldYV0vm948gVgATT%2Bt4Hg%2Fjdbm3KwdnpA9gYD20C21gJwoxy5wGqChSeGXwDUujTWjz20fRR61FTtpo293ZdwmaCkO5TVx94jvaVNyHnsQ2rty31FHUEW%2F%2FmaTshLeaSFEgQg%2Bp9IAOG8G2j2pjwNVQnl1ECBnMjEXjmD01Bb%2FjslSTAPUNIEz0WJ8TchhiuFkmf0E1LiFV90SqMsD3rgMRtLM297MLYriFhHWR1k2FRnML91IQjKwCGSSD7ZKiJjSjAgVcZCCYRhI09YZ%2FzTxSGc7og0vwt7Bis3uqTZ3HEulqR3bYFfpTEPsNXOH%2FfQPhP4MnS9WNha8ng6IAu%2FJVcD8w0v9q6OV%2BCJu61ziB5S09iMJiWyMEGOqUBw440MtXxQKIpCIlpVUvfCLMqwNAvdTl2bh1ZgrIIEj9Nn071VpHWXwrcyCr5GYgnxpFff74WNgTahqH2642KqGoD5nYN%2FTSCRehrEuyG8qr9MKYNkRVzKMG3T0O9Tr2LbhqRATTPHKcCLH2WfFUO2NANYIy6ggrvTorPHswZB4p1ZcEpOf1gaPtxSJ%2FvYW%2FeNA76scyF94DGfinMMusP%2BV5oOMdK&X-Amz-Signature=e5843946f24258330647fb72e77c28cbbf5e62115667201efcdb230dec866972&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
