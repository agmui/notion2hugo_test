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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYYNCEI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFCIRFl1GTTmdFo%2Fdnr8NYSHP%2FP48U1nRMK8o7y9038gAiEA7nAixVPOPjUxljl1HAQrp6jWYnqzkBuhGKKWPc176Sgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIrrg%2F2HwZQ46voCsSrcA6xBa5qSJiLQZs%2FUmqLNAasjbgm%2BL8nmdLtzUlE%2FkOw776ihQDq6pXWu%2Fv5EYNEsRihz7WOVAs%2FuIyzRVFJn0srp8Kv7QS24uUquJv67SI8gPjLTZlF7Kw7sq7OF6HPF17tF53%2F2H9eedWyzkfKsY8GJQDPkTcn4R5hCO2D6CU%2B4z8V7wkAejqWJuPCvZC5iZi8LIn1wW%2BU8spivGCjeCbVRPSxlMRavn%2B%2BhSrvygOTA4XDt%2FtTsVzuQXNm7xRNb12anSS1R%2FzHWrgjS783ssyNgdxM99dri4UFyeXDP55ArUYAeIfD%2BL1oKd5Z4wo%2Fm06Q4dtuUEFRgUs3GeiVfAKqoxIbNTpNg0S%2BVfdiv7S0bPIL8oADJ%2FZRSVAQYwzdi%2FbV3E%2BUDElvCJdT0kET%2FAE7Q2XIawAgIZ6RHXz6XYrkJzzzaDESmgCTNFKeC%2BI%2BKHzLv4AHyoVPPoUCsMPXf54sPETQk3dT0awpo88qWtZWzREPx1MHyFWZQXgAorLTPiX%2FxdOr55hqdrVquGDPIBmOvCAy4c9YTd4t3F%2FveriaDNLcw53svzPt7oK61y9SzV4S%2B%2FdcPOPGn9zqNVOioUEQyTcKRtzjRVUGkzJ9l485PDe%2F2jiliJtgmvtFoMKOPiMQGOqUBtlXVGNzkHLRj0R1rFy6R3WnWVwaDeUVDZUD3vr0gER1CbTRkiGpo%2B6imPIdE37Fc5dfwLCmcKMBEP8v1tHGMdWLXloLhD2TiAa5QNao%2Fw05cCHJFKK62rqfVORa3jrqHlYWtIY4PEIp9F8nzqePgwRHqnX%2FdaRR48TIDR5OzyqyuWzI3JEdgyLLJa7nRigfsgjNhMzvhpsBC8dyTDTUgGdQNOrKc&X-Amz-Signature=71a38e763ed3b0cc82cb396d75d28d81cafc4cbd19f0ea69835631a74507ef3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNS3LZH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCfEp4tyEU6rN2Qa3Wcquu5zf%2BsR2I8DEY7IIIGhC7lhwIhAJtLEhZGHq0oktErt%2BUdLmh56nwdasNTzoh037qkVyw%2BKv8DCCsQABoMNjM3NDIzMTgzODA1Igw7cdjblSe1g8LZ13cq3AO5aAigtOTAv%2Baaa4mFdXB82qhOGm6rVP9YzOT0evtqBmXx7aDRw4K787bu1aauvS91rB48n3WYDnL3n%2BPdIzWyQ%2BSVlQ%2FDuYMB4qn9JSrjWfI7FXEsH70CLg2ZzCf042G%2B41QQf7%2FYZxbmj2dLuMKfDWSMnoDbZXY0DJArgzIrHHSZWEKjb3dFFeyusiKQw3p%2FlI0WFvpXQsWgfDskz0JUA7MIadQVSoIaZYreb9hGmux50KeeUE6vZvEudmSNRXs8nLR7XTRhX%2Bto04ocT0mtuYZnYvmz8sFgJDd35LjscVcIjQVIYqf3EvSTZIZenu87W9dspOWtb95m87gQfQsWFWVnhfy%2FFmD4uiCl689QDEI1RUiw501GV7Ll5R5oqqDPG0lFXRyzUx41NhDNB7YRKCYrWfXDSn6oWql2tWJlHt9jHkGWZGDP8K4prwHLonZswhjx0FYWmzUmhNYWfr3%2FGG5C8pqdzWb%2BAeo50GR56bt8fxRnxSXGQ4bALK2CQFU5Fd4mGdBVTWMRQGqYvAPkxjm8OhFFlb6GJvhgu21J7twOXckBAc2xurExddoZv0rW3nUQIQL%2BR%2FV1EX6Xxxa5My8Zom3vVZZaxT0FQzgT8dlyJsNTAOmB1Mw0BTDvj4jEBjqkAY1bYWWGmm01KO%2FuWc2CJ4mQMpDTq4E4TsLQ175E32%2FI%2BuFMUAXEmPeggEfveY%2FD6DY5a0dtxNBvT%2BqBX6Sytyjw8nyPO2p%2F7xVE0qJmuXO80eqBBn435NmfvKMCuEfDa17j1it0NliIsF4qTsDaaOTsHJgKcyjY%2BYuX4pv4%2BeAMiqxRMQcbZYHXl75flxSV0%2F3N%2FofEAgfKyv7LJFKnyG2IhwTf&X-Amz-Signature=bb771d240eba94502bcb496b8653658b1d305aff61fb6ff1e5fd50445066b054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
