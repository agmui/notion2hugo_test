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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJY55NQS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDBggTMXi3FQ9meNtMoURrhfaUq5GGO3ImO6OnAeZ1RBAiEAkk7ejfAaGDDrVFv9wukFRO6NyIJTg5x50GouZw3HODkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDB49rydeeVVXC%2FI4qSrcAy5OLncDZJaGpljHyIj7d0pbquTyqNIOY3D1HNSctoiC%2FeqJwWhfPqzbyzoBiQsoxLlVv9ZdmbRnEKaNV8C2bwvWgLHEaO6S9kytobU2wwigzhqFkR0ZqCwKekaDIcKYZewavCcZe7s1AglBpWSjHqjpMNymFqKQiS8JeiQ7rPly9E4yif3107TNhzqU24yHYG%2FzubxIePZXp8AMthJeZ4GIPebTprUKn%2F89e%2FSnFlT05nvmjM%2FkqDdCzlsSQPHP%2FntHq5NS51NzIXVZqacrz4apb%2B9hiS6CEh2Q%2BqqaQPjlndtxGIComa0Dtxn%2FK%2BhxIZpFpr18yrtPNsXCysPgP0elWDVSkX3wsBPtLAkt2%2FKou3SsYvgpj%2FQfsZGvyteekRAU4TCQ3mLd680TYah9T5ALWgyUdZVks3vcQFTx3vD6nYA6JzYI2rVqFQPSz67Wma6bMJeSEo3Zx9SRJvdHQZ%2BylW00rbS3L11aYP8wxrYKjn8OkLu1zacxP3y4UlEOwu23j%2FqCP%2BlGeSKHLeES2HeSgYniz6Hobr5Nmt2BWhGs5DXbK24J6CEptQ52s1Q6BK6Xf1WUDV%2Be%2FZY7BTMPNK15O8JLaYoc%2B%2B8wfzNUCvXiq2eZax7EDFrRHcihMIml1sMGOqUBUKqVPc0LWiP8%2BxBLE%2F9PlQUuhQ7XI5EsbMknZMPXyw3jSIOo0em%2BQtys1siBs5OtyJ%2BXjcGhhTIZLA07nUrDNzNeVR5n0Bvx9G94OEGaYMKcX1i38EaZZVXhTkhwH71r0g%2B0lJvLGcH0L986Io1XSMVW%2BcLIMdsjRU6MlnVgh38hggoGZaFIinRiCjfjMorh2RHzLqSc4%2FVLT7w63CL5khgjqIAf&X-Amz-Signature=c86cdf5613701cc8271eb0a0620f3ea58c1e6fea77e780619b0598008287092f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665422H4DM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIB5HA8hkVQ6NfkQyvqP11RWr0N9Kb%2BiPyBKaUO1jblOaAiADfX7v%2FWdgmboK273GpqseOiyr%2F29AyxAV7wgMt66WfSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM2ZV1Vo3E9I%2FfI3QGKtwDE67A8EvKy5PSQ%2BBht3pt0KPRwPrDqtWQXe70GyBIy9BhYzG3Wyd7qnCGO%2BMBkpY%2BjbtQMX5L2V%2FlsMLPO7SOeDx82VHhWqzAYAghtQF3chxNdT3XDF7oUUH0EYaLZMZ7y1zykkbLSJ3DqFY9IlOX76Tx8sYnCVkuSFij9NZYUAFJUeo5Dxp%2B7P879nR9LHDWuv2X5zO6B3Ct5x6jgd1uc%2BAYv0Xnx9s9Q4Aho0mlC59oLD0F4%2B0B8NMYQr%2FTywSP9Ri7tew6BpFHlhsj17c1VFMGABLhxVg1pV3RTs50p8plzIgtcYjJkKQVUOfIrXe7Jx0o5VpoMkSTAKqMFRB2h3fMCRBLB7%2FplDizeZnF%2B%2FIU0j5kQCcWYsq9g176hVpDIeu8Y4q%2FOSD69UFrSJaaxHiP3PcZNoQPZx%2FXu3%2BzL1FSCy0w3SypuSVkuhcg0kccOiWT018k7fvS%2B5FAJDoH30BLcgidBXXpy9Oc%2BwGvBdvZjODD%2BOQwJpCkObiYwn4rBzKiXgHyEnUzoaOQbWSUc2qznc3dpPtcm25WH1mzcJrRgeItVnKQkZ1e%2F9WfAWrltJ%2BrMvShnJvgd6JxJtUTD20f9mA1l92KfVBZ2KKgMwLXnsqccRgI6TsyCTYwwKTWwwY6pgGYV1RbxwxKjpqq83MNAXjtNcBwQpNzI7Ws4B%2FFDSqdPn3D%2FFwiCFle%2FlUJsWnz3HXJ%2FerC8oUe8BwWnzXjDTTZF4K5A5LOzA25SPsSyrTpZc5TC3c0CnMg25dptbAU7VNsARMtKRK50Hj11sRk1HCZY%2FVwyfGlkVJh9SNkf30K723jwQDtaopmFIAj1oYnOOop5U5P3YBYOGsMg4fnn2Jn2PkXzCuc&X-Amz-Signature=3aef619433f42ffe768bbe0af671de9676f03c15a6b05660efe468cc5ef6fb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
