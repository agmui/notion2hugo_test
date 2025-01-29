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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AA6NRB2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGAhZcArdzvW3gvxcbD%2FxbKIgMdJ2r4h1YtWy180cX8RAiEA9clzZpFoBcBtqnDtw63GdcgN56i%2F7ihsqoHq7IyTd6kqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC2p0jOXMptpwRR3CrcA0xbTSlt%2BNjjPkiGTey%2FPdU8a9u2Wl2OLFy6cNhnl2XD9t%2Fz%2BFZ%2BgKKl%2BszkP1xW%2FnwiBS0MvWmn24QzghR1CPi3%2BaLKX2d3g2L%2F5IBwJMf4bGIx%2FqvylmVo2dZQ6Td%2FxOHO7aSSEHtJVMg5%2F5d0bIfexGQgcgzGq6cTgIEIpipYnVWG54rSD%2B7N4EIO%2FP8kRYnrsnFRgGnGe95hqFW8QBYA1hYMcrTqE9JqD23zzxbgrz5sRcrlc%2FcBhm%2FiSNScHkX6QBd0NTFIjnF%2BTmfsZnZN%2FMma2izFNWuXx76dDrbRUnWIJE7mtuoFoXwMlWPT8w8aVxr8It4dF3WM8tiTr%2BADFixAajrMA0IzjtLfkmEv2%2FeAyCQayVHhBwhgJvqIYbiwxVuclSBKTQbp4%2BDdvVfHJHdns8IcsCPQO4A%2BGzMjZejJqq8rBWdes6SdpFu6ltccmDJhBVJs0sOpn78QI43KPWPv3gvgpsQQ36jQyFfTExCuuZ3XD4qfpaTLRQckOqd55XbKcJ2AY2ZTeP7U0WOMS%2B9zmZ5%2FlhEWl62dPn5b3TI%2FSkjLPN%2B%2BQEWY5gLfMo6l1jAmLIfYe0qlKhMOi4YhDehtmQLfJWvwFr8XsoKoR2K6PdYNGfv42Qv1MIuS57wGOqUBjUnXOT2zn4CIukmMyfyb7jVeCUNMxYuY%2B4wbmsaSuZqQlKSEYJgQ427k31Yy9fEYBOBKc6xNwYV8CBtv1bglwyL9x4WiNSCI9BTmC%2FtDMiuGhHwsIQ01Xm1xbE9ci1g2SyGB6coMRqhqxEa88UNoJGO8y7LNfUKet1dyvfVLb2oCp2Rdao2uk2F1vmJHznY6GJx354S12AYluZ60FZc%2F8S3hrXUp&X-Amz-Signature=0685134935e6e59e211a7fc5f8b2ee593114173f70ff3232c3bc5f4eee9eec5d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVXLQLD%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB7%2FKgK9Q%2Bid4hdgqx2mKi8O4s%2F2dlrXAngYjyHk6C3JAiEAtDzy1F6ZOLMIICw5CEMhNBtH2LltUlv6EGJ6FNFKLPEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW%2FXd%2BOkS758zhsxircA7bpqsK3N9g5bh4j%2BnREahOSHiJfCs16RuiajeqnYw1Y5koPjH5I1BKXpOD0NrVPblaOMgSOBmc3YTXefLLCBuaeBwt2Uig5e1%2FAYjTEgKOAFAzBjwbmVgB%2BUE%2FJzuJ9uU4O911YCHfb3xkM6qysAtCRHQ5wT41GFZ4hSy%2BihvmbGagniSw9btIOdya902%2Ber6jdz8%2Byy%2BNpCm3J1mvRUSFQxaR8YYfn0XToFrvMdNQvPRDOAVkPfEjKWJjdyVSDRFTl%2BAXvG69rQ6T8hLPzMrmt%2Bx9pQYN59OFK8L662vfNT6LcANdzCl5w%2Fy%2BXTriLw%2FBGbMjfuZ%2FdueAgIfyS2UDZWCTiuFOqoP%2BRYKIx%2BPKoWispmdvq9tpmSLgjDUNafhMWjJbtnPYOxl%2BiCjap5CBS6KlYOBqTME8pPPZCwXGrdcohjkwyDb3ti5zFn6drfm9ZVsih06WC0K0vh71FVwrXABCyX5QCTaf3SZnUNBlpQpRfh8lNryk17y9drI5k08oDjFd5d6rQlqlVIOAISkIVvUVojvvIv%2FM1RJR8NxTAw19CYouF4pCSLGjAtbZfGUm5dlMB%2BdHeGkE1E94AXMnp1F%2FURfipsGk%2FkV7Nhz0iNUI6f47iz4cZ8TkFMKqS57wGOqUBHvk6UzUjhNLZLH8NjDSJg3Ob6OSJnLvNA%2BXfdU%2FuSW0dnb%2BskVseCjCQwOCqBuhjdRSyia8h4HC4Tl19i20j0Cp%2BhHsFx6T9XTiY4%2BYOeGoIN604SVzpuW6uE9EBlah6NMZgKxpFlJ7enEBTWA2sfXsU7xB2tMAi84XkWt4OnCk3VIyCu%2BMvZHgr1fYC%2Fs7YU8zyktW8P8B0DHlODjL1mXYBB4TV&X-Amz-Signature=9d9a5da84de6a1887a93a3550f4846f1533c57ea52cc086c90d0d0cee3f735d1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
