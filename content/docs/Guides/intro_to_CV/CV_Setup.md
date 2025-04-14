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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5J6SRCR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJcJiM0RuFM%2B4nirS8aTZZfucjTc96m0uKMYQ8uz9fuAiEAsPlqCfPWw8ZxjI7whqrXZBttpcAjP0YYXDYw2gFynwsq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPFe4YC1f8i4hjkZ9CrcA74tIEgOQXrO8bcrBpi%2BiJ6uqW05UwulpG%2BZ%2FCT382tAs3e3jiaNi7f7BoPhyyNVl1voecpV3ITBsUO3MtyG34aO4apgyMPr%2BSnybOs7qIomipDJoKHmpKfwwoPRIo4iq1E4qXG8peUFLGkmbHCplsxX1Y8PKTuCALgLIvO2tpFd6bvlGQ%2FpxsaRkVsrlFRhUS3vnSAmrm%2FgUhTvcttbafXWORtUIZT%2FC7EiSCnrwCgF0mkWsOYKgGBkncvgh0RTnqg0hqVicM7sSfc%2F3F3wFGREVqG3KznnewdXJLc2G%2BmnH3r3FZgS0%2ByPT2%2F0XQ7719d4GrfoRPdTxJq2uX5WFzYNb8H7NSas96xGWmeKdTJ06lhBiqyBktCbnZ3RxvBJ4CQ5TEFIK%2FKttIFVbh3DWE8oHEnFMAVriwqiqfdD%2BgsmGTFtEDELoM%2B7Wb8b%2FwD9X%2F9Xo75AxLVQlL56qaT9c6r9%2FTe9enpb%2F%2Fr2m13vbJmmDB9taVY4pBmONpi%2BeG8HJ6ts2K%2FgW7UkAMm4wZs5Adrafgk5MuyFYkL7%2BJx6%2FaFCtcxskC11x87YCz6x17oCdNE7K%2BfT48oiUp7UFpbF9iGG7ma9Vg%2BQz%2Bvp%2Bslc0P29qnFSrcVbjznKFNtqMPbi8r8GOqUBuj5B5zEM6GEPluZbUXwOc2vkhDVC4QQKiPmQ0j%2F4gj5XDUkDUDjucyYDtgq1wuOPF4uzIVPlxcJ4KcXctAB88aWEc4ZecgCr8vuZvAakn22EL8OQ3qAvDSZJQGUoO2r%2BtIgv9IjZF%2FsJcHi5NyoZGNxO78rk%2BDHs%2BYpNBqxTQfp6%2Fv5bYs%2BOdU9Y0ykQzPy6LS%2FvU6btN72e7RWwW6ug9uPp22qp&X-Amz-Signature=5a8860f8e3631590d5370472516448f5888af2eafe5989eb37e9031716a6198b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632RIIE52%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhhqUWhgGbALgqHbnbzl4LYCl6erU%2FE7B8OIlrrYmbOAiEA9Yq7704kL0%2Fg0Y%2FXO5N3cwSSC46AAhm%2Bo04KHl6CI6wq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDN%2BvaT2gXrBsyxd1dSrcA5gdm6tP416EG9%2Fbsie2UDLxj8KFqqck4rd22vYaF6froov85t0TgNAB%2F84U17mhofD%2BzINFMC7YyLNDZ4hr7mBr6mmvXOETNMXmcWe9y9LatNCoVCeCxbf4oDCpJbrz0A405E8921lFiOlqFFu9vocr2lKxLxeiXxjJtV09d77Tb4Xeqqib9O26FsHUhRBIMU0SU8NRkJAZsjhovZvrQA5Cswh3V32TfG%2BRT3eFgJwzkvaH35%2BeT8dVJjGR1AJ3ysYsdGqdlYcaGDjmsph9ur8YT8TkN1koFxbqp1HrCo6WnO%2FAxnVTmjRtig5xkF5M8XvUiIgR83EWT8DShgQ1Dr7i6PP7VxW50Qraj%2B%2FZIWENN%2FaYzJo7Bs2Bq3AHcqJGyLePqdEsKuypSfRvOJedCWD6SoA0c2vwbP5jXCYAATvWhB8olEkHhuY%2FJ0K9C%2FUrt5qs8w8EwpkxRKOC%2FktcHgXz939%2BR8Qz4U0bB2yEuGq8XhFKZBgGV49vH89OF6Zyy%2FI%2BhT3OxpE319dzEyg312WLfjpDcraeUWr17kUWIlNmZVb0Dq08qdVteDldGkTHSsBbGHriJj5OEGjx4%2F%2FRcowP32RcomSRYnQifo1YCdRrYkWYusRA4WOQkW45MNLj8r8GOqUBf2RgO52pgI91tzkH%2F6%2FDXm0bwoNAR76DUb2%2FS7ufQ5%2FpjuZrAU0iQLoPMGh0mo2A361WEMvzQWP%2FSeiDk2LmjUtKMMR1Ul4oD1Kl%2BFl9lrhijeznDdYKEqpsDKT%2F6ELVyjtlCB6bZnl4jfHU00c4zkqeBmy9WX%2FWGN8Z0KDVu39mHBtRAJphiyzbRrKPG06g5EZ2H7YLzOICiDXOv3FfxjQ%2BvdRW&X-Amz-Signature=3596471426b1e8f0025e3b1e38a749798f94e8d7ae5d85da5856974d0604b5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
