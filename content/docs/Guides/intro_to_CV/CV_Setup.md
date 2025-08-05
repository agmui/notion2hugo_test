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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T647FSW7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1i5zMPO%2BjXyewdgeKDJp0a%2Fncn2LyZCviDfbNDja0igIgTUwJ5T%2B2lsYwIu0pyYWYC3bvXedIleLm9lctUUnFbzIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIBC0O7CfpBwYMvviyrcA781KS%2FyowkHuJuYNA%2Bz8cKtlf2Or4CNuPJUo7oloL50ysCM1Z3bUz7FVq4FKmIaExYAlh3y3LOseIj2XWn%2BUnxwSTGMe%2BI6whNhpSv4zch%2F9up%2BdXPfz5xuQV%2FE0r8IPt4wlhqpNXPHWYT9U%2BpRpZ7myIy9y%2B2N1OhL%2FO7mJLo6q31U1QAr2PndKxPrWAcO3Us6EMn3tQ%2FpIAyjVBKssCDXMR99j8qVeN4P3n2touyDYvTaGk4%2F7BF3IOfeIcJJ3aXshQJYcTs%2BZtdUZbnv1oA%2FzABXna2xRe7m98gOfLWUJ2DghuwJUSXJZ%2FKQVvQSslkv77owmDLUccYcb27sEnU0jSeJ5pNH0BAk92aE%2FcBnG0VYizHaTXmZdGQ27DOJg0NP2VbLkwI7ib%2BCSEX%2B9DBy%2FwxinUlmh5nrtHei8AMDRoNgWX8Jn0idtwwzxqH1xTy%2FHdDgG2Vb6CFFD2ZsnCLWCnufoIZUtxo3qj0ql4Zzruv2Bz%2Ffq91V4YAph4mtVfGomlzN5R%2FjoKPEJIkxP6Zg85xQAtrZvZgVO4fCRUpqRIfWAj%2BgvfvmE4nWmcQ7iqhxtxGC8d4p5wWLt9ScWco7SuocryhsbK%2BlluHDjjBaxuPnq6b0Jf%2FuCfIZMK6sx8QGOqUBnMgYZdE%2BDziVBFkCE4O581WYl%2BJZev%2BX9CNGikozE3854G6qkhelMauvDghvh2nx9GX0dBv3uVCLsMECCCVtbmPbKIbPiT26hkjLX3Hc3eNGKV5hUKlcNsrN9JbTIi0kZYjkdaHWo5MSgLQBFarHryFIhSBnvqPA7kP3t4cArmxkzL3yITQG%2B3ErhXitAPAN1dd7lpRQRTOi9kBNqJz3EsW%2B0tIu&X-Amz-Signature=220f9fb51cc876bbeee16477522db5297bde1914d2d2bc35888a3aeb8029d235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EFILEDU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDl37NnxS6pKlXSyLKtq7XuPXC1uGabXZKaMvAIeKHgqAiEA7QefkICjoQXGdgP8DVyLoUC6n7nElNSK8Bq2Jc1erx4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDOjYWQIkaLbPePpFyrcA8h9%2F%2FtI32kjNZD2XvqsRvqGfMJ%2BFPwtFm466FRZMCDjxXRnChRHZ64UT3nShlve0gIt2SGhWoYOT5XdZWPeHcVcy3ksz1Quhrb3mG08Gp7oVuQ%2BSVKLBFJS0Cu4AByKlIlAD25bLxRu5MI3WvNiauZMxemvLNMmjHoifJy54R8Q3IRtBClJwZXplqWe8Fh1Z%2FjSHRuTGAZWoAMkNmuoOFjW1F8I3dWYCDvuUVJ%2BQUJD9%2FvsXAVeuQCHCN4ImFALOYAj7d%2FGhkSQKpENyrq%2F7LCfMSMX9QSoY6h5eLA5Xyt%2BFT2iUwxWEdpkNljm0GNiT7QssFefEuFvzLLT4vypNK%2BFPluztQYTkEGb3u3YQyZUmA2LJy0dcEvfTAo5jJae%2FWGR50jU%2B9WRUVwDpGfeRonxbo3msHpCZD9pKlfsHkmYmHIHI695iYgxAh8Db0dmFT1jUW59jb11JGhUkHmle9W7AnDINMjaoNqTzF%2FJerw3836uAikZy2cg3YAdENME9a6Un77%2FhNNf%2BrC0QUIYZKzLD2pyvQ2gygyLLKBB721lJo0xt70gnZCqu2NlsbrPqtDLrtq9%2BKDmCeFLuseeems%2FnEP1eWyxiiX%2FYe0Oe9TUIjlq3eiBhr5hlnbsMKKsx8QGOqUBX%2FeplkokXVL7TUF0I%2F5Z1AWejSzXUSPq5VfU96fYyQQR%2FfOPvO%2FFvU71kfQ0PA4bhQjHZPUAQydv8GyQNUHYQF47v9e6eewdz32dC7%2FUUCtweg0i15r2Jp4lnt86Tmiqja1NIQ7%2BLk3QnS05EeCik4cxS5NUJycs5lfNyGcsB8sowvig9sF7uMsPPq5xh6vVhTHV%2B9oCTdSdUdlp%2F4owQCfs%2BiCJ&X-Amz-Signature=2c34d765cca5511f835d2965e29c2f1b6e4f3fe96088242c3cd5c4e5e675b388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
