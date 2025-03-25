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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALQNFI5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDutEZa7nHExRn3dIJIfA721ap%2FsNA3OOCIta4elMaEigIgBAr7Zon8gREPnDbpQET1o3b1BLY%2FxZVwDSNzjCLDPo8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDGQpiFnwrDttzlc%2FECrcA1Q0WFGdI6w5aE1brwXZ2yVcCvKFvMZLGgy3dzN5TfQmROZLRkyGcQHEDXmRxG%2F4B7z5%2BAlSdzJcXikXt0bakojNPsOvSAQzVURmOMTw8s32dUdS0kobLr86GD6IYdJ028B%2Bz7NN14wUKzeZrehShLiFlnL0D7%2Bygfu15v2%2FXm9v5xyzC0YJvdbl7jRGLO5p6uYxzWPbXRmfTcY1WRuJYKyjEdLM09gqBo5ArUGbUw%2Bm56wLsWprhuk0j%2BRK4%2Ft4G%2B1QYpGkzdW5TLqG3f31J%2BC3L2lGLfMwgB%2FtNjiFROiK%2FJqiu50IzQTCr91%2FI%2FbFlgQv10XCry0aAMtSN3Bn8NbVeHZ21jTpcgovZTZTPl5JarV%2F%2BtO%2F6UEZK1FXAnAE%2Bjtns%2Bk7C0sx8pbiQKEHwuRT7c5pfixNZVcdTV61rRzi344dFjCq9xiOcGm8AFgMraWHxhwYK9WenaGDnVcqXXOMPDsZzdsOZSsH%2FaDvs79dCs9EnLnFjz7WWNjMsnA6ztoNO5C8nEE1C9hCoHghm8v2flvh0d%2FCEGPkJKp5Lyg2y99RwwaN12X0LJlvYPL1GC9ZHt0uu5NbXVAKcz7qBZT7cmONYFY%2F7q75mqXavmzlYrasRgzEfkS4GvggMJfkir8GOqUBLbzyXAt5uK292jsqduviXU9SuOqn2oFfbvE568k0THgY5NaBIoIiISjEOqow%2Fy5o74IEgGmRCXtKrhL6yRpnXGY9kqNzVqmNNmxB0YtP2Mo4U4LXRSd%2Bxe%2FI6hwVXUlyr2%2FMWb3ZMDVELOnPD4pBFhrQt90OShgCDO8PTyxgpn1iAKob8yBmupPp9hw%2Fax4%2BRYipIPIPLGtwvx4bUJRN4wJhVrMp&X-Amz-Signature=346cc465c3133dbcca36ee72bf47b562be88079cef925e0c9f84e21e2dda19e7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6LWCDU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENE3KeeVHLuIxPB2xi8c8ZD20fCn22lgK6XpFuj7LnfAiBkotzjGSqPWktfqt%2FZjZwxDwm9LSKAyMBD7ienBOtlZir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMd4UNIJlRcRBIQb9wKtwDn8hdEgPf%2FE8hP60Kon5gUgF1Y4o4rjytAQOtj9m5f9wR9PhUrXBrIQFbFfVG9sNtu0%2BrXh%2FuXzvcep%2FN3cXCnNXeXmpUog8Ag6FuySv5pOMqXCol9I%2Fgwq9ClJZfNWMpBsb%2BnWvg1I21FuGjF1RB2FUnr7qzbvOKUXM1WMNvOlHjuRbWgvhgtrmx28qKN3s%2B%2BxhUttd41TYUWjVPaomt%2ByGdmTTNepN3fHFnU0R6rWd1MaFNmGCf4xe%2FDzQ%2Be77ULwgBs%2F8phs62e7aSXSMJQFFKt8SboKt7S0rA4fccD2oa%2FVgeHDWpbEdJuIMEAs7bswH%2BMq884N4eEDTIBVCnVUJ2FtSnNC05cWAHkTQHaSej8JRbyOK%2B89S8Gc1HtgYQBWIv%2BrR0QvM%2FSXxw19LJvNmSlsIwUQVlmWz95%2BVK2i%2BVvpozBv1QNNizQ6Fxm7HdOb9TUk7TazGEFgDjm30Xrh7%2F6wCS%2B2ytixebaF%2BlkGRJ99U7BJqAptE7ICnDHVmnTNptBQNjOP5omKH6oGUHD0Grphcrx7pYO2lM3lVWLPVY8G22DPSnvguuTpkrcMP9ANNPxBeNJdVZefg%2BgLnNormVyt%2BDg7q1h5JblE8tReSuycuteUR7yxuURPYwi%2BWKvwY6pgE%2FgAQ29l5YhPxZsiB2cqWTpsmAFMaQUTXWb72Td91ltdWwNdzJretihink%2BeYiU3mLj9tTPnEWeoUOAwkcfItRkxF1w8G0Zf2m9XKasz4pnfnYGb5wb%2BNQaCX6%2Bi15kfqpr5FwhHvEsbqFMpRDtU0N9aTbAUGNpg1%2Blandm2BByvNTF13YRHFOjchIw1VoblLasnG2mQTFMpJH740HKOCNQ5jcUv2X&X-Amz-Signature=e890c05fa048a16e6e78b39863bee53384c5ebe86911abf3a343539b4f875476&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
