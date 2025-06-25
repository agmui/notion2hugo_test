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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3ZXQWEL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdOoG1FmmzpfCD5R5UsdDSlZnd3mUjnMZBIMc6MtHZtgIgaLeArD5V7QrpSu1ilZuN04yiOutfqiaXtnaRAT2k0BIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDAQ0WIVXYbykVnnanircAxNJPPezymyqxqX0RoARksE2ofiirJwDfShiVbg600eZjIWJZ%2FvFKns0Se%2F6vEgOca%2FKsAWNOXDQKlRoVq1AdGlpjWerSxnB72SxEbYp2lfB6bVpNhPfvhL1222ldjDx%2BzvUVW5EH0aumPSGyzlsWP0%2FrkdLd9KhIZvHrlCNQNMSoXUJzPnPbuYG%2B98r7yMzMKkBpRcnLlZZIiJzEshITM2YH%2FU2vzC4MTbtI2qpL0XhhCN8Zp%2Fut5QvdHKXKxUIROvfgVHvwVTc26yr0krs8%2FNWWAWytL0UIYZnl3aQlXlbELGp2wfN16J5H4TGxAQSTmKigbOAGm%2BbQr20%2FdjvskjKLH%2F5NXb3NQE5kv%2FHybMevIM3L5gvnl1pltUA%2BFSsWkcgiiYa8T%2BvoaYCOrJwkhTdWLdQ9ELSZtH4aeahCEfSRmZtn%2F5AcULoTU61KkqOabzQ%2BHvPzD%2F1PXFZEm4pJtvtih6I8xvptlkAI43j6xr0z3X1pAVMYrJl06Gwi32nlsysLSzPnSomwgJRRNI2ACzbZPNNmFUz5xIKzcsNO5ochMjsuoIHrvBlWeHGmXXGXv7avikeJtsilu26c1uA39nZuPcCa%2FhWNRhnpJb%2BjDKcCIwQ1xh19GqV236tMI7P7cIGOqUBWpipzcYy4mOwTU%2BcmB5BdrZpQQ4ixNCJZC5K0vxPy%2FKyEGEIGXUlxzj88WLiYRKeW%2BIEM2Eena19R6u2y5JNUk65CiMJf2%2FfXAoAXlKmVOAzhGpIU77%2FFvBwXkfEivGRfeXuDHLsXnFLP1bS3vJ7qY43eV1JrU1RebZR5QUKDy1btYNHRa50t%2F6fNP0rE5BKSERH9QctMYE0Y%2BSqMxuSjx8EJMt0&X-Amz-Signature=7c2acfbba9ba8e616a9618c13f7ab6e548ffee96fafdcf02cd767c25d08281a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEAV3PWD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCXY1tgqNycMx5pvaUxlnNIapb%2FLU7rnrAeiuCm3qeoWwIhALFeQiC76intHC%2BRqaBGHxhCFurJ57whBP6VSxdt%2FGeKKv8DCDwQABoMNjM3NDIzMTgzODA1IgxjJoLOCMe6Sl9qH%2Foq3AOkW%2FAKDvgF4H%2FJeq4P3jjr6%2Fv8unop2WHujSr8QptmUii%2F9Jh5TdTFkh2bnViN5IrVtbSmOoe%2B%2Buebm3c1hN8Rod%2FP2NoYN1tefepwRUXWmOQezk5mZt2WLuk1GJesMdVcs5TN8wxja8ymNmwNZOJIYR7qLEd%2F4%2FQY4P%2F60759cuGN19E4hPJtsgE2xbXAmN18KuvwWoWmRxA5e2anwVJIrEo7%2Fd4OmggIUPNT1LKSVqmrRFZeqoha1QwSnUqGmXYh%2BVgES75yLeyXUL%2BmkXEc7qCoVE%2B1BdTgnQUmctYXr00wP6pVWcW9lOi33mOdOLbhvYelwEynIRcwQ5S%2B%2FpByXElrm9gaOQXXX9HAVqBjUbrVynB33C9S7Ov2knLUCdLECO1brLyWMws%2BHwiDXWjckMUGYJSqZuiOF0UMYdDFK7Qel1WW59AFuMVbjtpogRAk4buuyZ92i1Y7wnO8w9OyYuXi%2F0o6Jy9kCD37e1tTW8AhFiny64TzM2gtqonPUE%2FgvthXLD1TQtJnQ%2B%2FTzegdfIP4cfEaSppHjyp5sqe2JmERFrchOG%2FzGfKIQmfdu7dI%2FXCfKMqviWV%2FzgKAD1XJ160lJk0kHC9SJQ4HnEN2GI%2BIZn%2BkX6ApWdxWGTCcwu3CBjqkAZjfRF7MmMMBEhEVLiZAkZ94qbCH8c3z4woncEQd2GLgU2fadxh0NBUjdXzUr6FqzU4dA2rGZFngWOlQ5%2FaPSGhZ6%2BzpZ8IDUPSBXjj%2BR26Kxh9cWCVkOIYX0fjmRTH%2BGyFS2TOvllH%2FVC%2FItlRMa4s5l1TPm0bCfCAF1DMeCZ3Ou6gLAUpNjgljJ%2FS3vZGWC5515TBGgAzG2G7jez4bbehvTLqU&X-Amz-Signature=c92f1b3f04d61ee15cf319df8123975eed046ea0192ab16ef122b24dde45ed91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
