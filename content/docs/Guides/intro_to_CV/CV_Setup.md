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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PCVJ2H4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BUGoSfP%2BILFPCnGC%2FpQ2cWDSMQIM2ZVj8oeeMMSNCQIhAP6eESEt0o1l4MjsayAUU3580iwF6BXP0Gj%2BjlNAfNfyKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7G%2FPnpKcp6gHuiwkq3AM3yn%2FI0OjjZjmtMOytIN%2BHxN9jA8fBDR7aV2gilkItHRKEimOOA%2BykCDIdbNO3o7RMIpYe0DnQq5046wSQEEvxDqX547ZigknxbqcsDjlNkx83i%2FKF9Sm0coP7zOKbWxX9b1MEIV6YqyMgp0GNid8BRlaf%2FbT3gjUKKV4YUvFR2DFihDsKfUJAq%2FkXtNGve%2BpuMCSSmKiwXH1%2FKqflNcx7ecL6svQZ795eLHiEaIDKAzIwcTmr%2Be69A5kscBFBuX3q6Ee1g3m29LOaNdCUOc3WVbgyTd9Rbz%2BOSTvbb1iW9QW4bMWgZK6gMYNOi2vKjoIGaGiZR%2BLsUOM4H%2BrGKb2J23LGC7FUweZlNQhVznd6HoM%2Few%2FnrQHSxUF3edFgiVgIwRwbZ3F%2BR%2BV0XdeyII6jDJzrxe1fyLxffTQVT7rzMaZA24pYB2wJkK6nN2lSr7pBlwzqXZvFaOu1esMTlIANHg22yj%2FJQye32GeYm7af4RWw3bTlTOgC6t1SQT0ahyQFqwxbrYozok6jv2xV5jrONJwSdbLbSFVui%2F10DN42WTUm7VAj4VRvwLx%2FD4P6W1hDrPL0eiFlFwmvxJyszHVoi9JR%2FL97VdQlg5%2BwwKUMJaWA3kGtjr3Wt6SAPjDfup2%2BBjqkASDNDWAvZYb3vx4XspA0ERwg9SoC32PDFTHNJ14Ilxp1bF79Oiz2pWkYpUrj0fAJ5cbX%2BLYD%2BJH%2BhwjCcTUSe29T%2BTNAWqgAvXVAdcEQVQYCyK0nCn52raLPszhx2OzT0xz5lP78ibIXzbVSnxb%2BgUnGTljaYcHf42UPN5bH4ITIL1o8ZoZlaeemZb8%2FeP22Hhx4NlWInm2r5GAOzwdO6t2%2FTSgf&X-Amz-Signature=3c9463646905a6c82deda05110b6b4bf550186e284e77031ff3b719032592e4d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DT563A%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc4NJeMEej0NTLqJY3SJkD8U9jgoYslqJG%2FrqYt7PtsAiB%2FITV80Qek5McMjZn4e5iZ%2F0PMkf1pO7GdRtRE0t2a6iqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfyBt6zKqfSuVdVZ9KtwD0Ml%2FjI2%2FX85SMEClMt4RqaO9DraJKA%2FCrq50y5dHd9yhx%2FYmANSq824c9m4yCa4V2gmDZuSI%2BdmobJqvdsWQHFXfTgbxrx4Wp2c2mYXbouNHQDEJwl6qG7RVA64BJv1DaPKWvCTMWnoa%2B4JdeuIGqwQBTYgBsnEgCclGadbWkVGPRYW%2BOxfxt1HmAD6Q1RMo8adRMsFt7NOsiivQQ7k5QTX%2FeNTGn%2FWlUqRujoX1Eq0xPdNcJd9j2bIsFTrXSDuNnrUtcIFOulOsW2ituDFOGSAa3mZKhVjYXTYZULNRORKf7PIW6bBhtMbhl3vFlGLkOr9AEnoLevsYlnrihJeI4e6%2Bgb%2FBtuNa3fzvEvQVEpJuIqsWdDi1vtnYmkeZv25wqxeQJYFj1U1b519qbIudCUE2OXb6WiA4sx3VGrVGGOjR6icf7PA11Y8eL%2BygAngKR8Ml8fbazdluiiWZ6WMt4ABgIggKEswCoHtkJQehbqvecYWLk9GAu3m9a21tnsNApULbu8jtPb1SCbNnP2AoU79Med%2BXl3zWvpCUNmqLzCf%2FWYRoH8jxuVBvOfj1PXUmBuqDZ60tgU2nc47uWBDcK%2BF%2F2nrpnXcfh9QMiJUszNm2D6wVxNyV8W0RTzYw7bmdvgY6pgHg%2FP9cwFarxlkb2phkqxzUT%2BrkopZndbIiHbWDJmbstRVSe%2B82IFJk%2FKu21fjuWPDJBewA9VubpnxAPSx%2FoFsaxxQFCIPV%2FyW62AweBoX7q7%2F5%2BgQfe86LDRLqTFTX5WDqvIBU%2FL7Wdz2SFeoYHe5YHTRty0ASMtnXG11MKFllIF%2FUw%2BuyIkw7JysHoO7MWP2wBO14r2LX60lLWpjINJrC3LnoAh13&X-Amz-Signature=15457f48fc891aea2f9db06cbb0423a23fe221959e059e94c223befb3380f5bc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
