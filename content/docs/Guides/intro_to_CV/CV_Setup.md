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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTXIHA5R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FtL6eAfAKtd%2FExr4scbk82NXANuCmRiTA3N6coPrF8AiEA7ERjsAmQYQGIUWSCblxdNLotgbArmH8p3ELuK7yie0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAg1LF6wPN8vUf1YVSrcAyj2bs6BqGNQG1R%2Fmy1hmVRjz1YZwk%2FMvvL01PVj5RSNTujAGZ8MV3%2Blaq855gKdTQVnvLQyH9FbUBgFGU8tJxhj2dXw7HOw82hJxwkMbpynvEPby5lv%2BxLWAjs1oxIFM0TFBmhO3NpASFkSSxp5lphKP6ZIRL941T7TDd0El6mHpIY%2BtobxsrqABnc%2FzVB8C81r584ppaOMh9roaOFPnFcu942exKp3H9uvOBw3dibb2FQHC8lutQ5CKVM9Nm%2BxR3UO6HIA%2FuQyF5gJWaFr%2FMLPt%2BVfThzM3%2BX7BvXq%2BHBI%2BgyHIyxh2fzQkMxcmhBczuQFpS%2FZQnYPYKMN49xKMFXyXs5C9tC7IvfEQSQB%2Bwya7uHiON%2Biqqics151wkgLBZjuk0lYC5tEqRdmq5v33nRMJsS8NlhATcFCflNrIIfl4Uj2bZpnBHJ2uopKhOJPXIw7GXOYX%2FbABpOVJbB%2F5rhonujSTcIWdb7WgGK3Q0NxYusNDcsp2KkEWvzEzOx1KTH7IG6H5bqJnFTASS0WH5AfYkL9PpjlsxtfJZd%2F7Cdd7nDp8hARFBkWhjBFj8DxAXmyxIwe15vInqkNC2%2BPvRgZAXIro0StmAGf54QK8qZerHJZYDGl30tU7BHyMOaF8MQGOqUBRc%2BXyXkQSy63EtCyZzzHvv0tdmpvV8t4RWrPnyVLpTVVMO%2BtqktEqK4smW17E6LVLrg28wI6zzcLqZJ%2FlLKtKzpZdXgaYmwqeSCNxc5gIyb0VLjOLstHwYCSk3ieZ32FPX%2F21T%2F1VMyAS3vyr1aR6o4k72Qcsmb8a87cnKNXIho1tNMYtrhaOWi0iUbOSNi1Brx2gY2DfzqmdDBEapW%2Bfs1tJp6y&X-Amz-Signature=216a36440c6cd442db650885367a52ea0f758bec2d08a27290d69f5105b7b6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJAIVANR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMlkoAVOuewy3Tgc170b179PQBSd2qGTTwa0DCkEqVpAiEAiBfYfevN7VQtgPqovfk0KTSnYD%2FIHQ9O7B%2FU8phWT3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJlDknwUlgUSdA6iBSrcAwBcODNKvkDGsjg%2FzS%2FP%2FOn69t6swbKoduB7cqZH1O7FD57207pDp4dl%2Fy1agWJqmE35lbg53KOSFPayjNQArB0a2HqwElO9JFAlZlcol%2Fb90XTzWv7Pf6hTL1p1Rt8k6Mr2RrpOvfP4E0S4rR2eq21xlPphh1bnTEhbS9uW%2B3hljfAUsduRY5wXvylJwtVLGXmnL3k1eyBf8a5DniR8Kk6eGL5iZB4pZXG1rqjBzEYDtaDl%2FNwAOsi3Jn0z4gdb1G8W2HQEfnHpWMJhetHygjobUfcSCy9yjdo8Ci%2BHbnVVq07tcwT1gIJFcqTX8%2F8CzKE3CaA7bl15d7vMlXoskgUmV%2BiIPSsmt%2BaGnTP%2BXAt8Dz9tiFbkbPnjoDoguqR2YkIHshrkPJXh%2F41rrEgtJ%2FcVoNdkbzxA8r1tpY73SHn9ltJ4rQs%2BH8oGXdrKDJp0SSz9UM2clUVlalK73wO1J9uxIW1qSrE4bFXydWzvxASKm%2BV%2BgPqL0kpNv%2FdO9ADmlAW7ENjPkS0JB51jeqxBp1F%2FYwdl374etctBvg1W4J9j3BVOqamz1kY2S63UsJQEnE9wnBIhppooBmkbM63joQnpe8NF74OyJ%2Bl28JU8CrncRi3H6D1501IC4tHyMICH8MQGOqUBvIeIhuqT7RjOR4YIHrfqgFjfv%2B6kJnXjrvGqqHCC6rVaLPDx6EFiNYIpTtnVTf4j5ubWBs6xMds1b09dQfS5KJduvaqQ%2BAmgcQntsREwlm9KrkitvRHM9uMthpEOYZS9mwB8Sg5LR6lY8EFvvQtzCUI5dklw0y6ICbbWGfffLOJSlP8oJ%2Bg1C55iXWKMcdlWTweSz7YGGhRGmfRidBaICT7Yleur&X-Amz-Signature=e936e1ade91c559d7155de3b0d72736964bf8c8cf4216000f09e932998914ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
