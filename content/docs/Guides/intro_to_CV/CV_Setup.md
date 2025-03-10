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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4M5CJ4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHqkm0QcmJr31fdxpp3DXqGA45V5DLCbCUopDnaoFoUnAiEAoWre%2BuoGlbf25Jlw3U%2FC3%2FAJ5k3LygkLmjcZ0%2FPm3lAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO3QQVcnJcSlOBWuircAxOesfHx7MWgriBjU8KjpIryIcFKCxw1Pof%2BThiI3fxDisE3TgS%2BbodyvgkLpBvfmnFxG1g48mTcnyHb%2B3dZp7c%2B4t5MwFvdegyGk%2BHlPH0%2BJbxVKU9iRI7SnYTsrcvekstzRHr8cCwi3elAEz%2B25w8gc%2FEACEoC3A2xe0sn5qBdwl%2FHsKoihPEXF9aA502Dg8mT0NPJvKE5AbNTwUJd7UtMS7plew1UnhQNDUMNBCWhy04VomoK3Ej7W%2BeZnEhyR5cJPvaNgXz8j75EC8NGIjRGYzwDpvAMY%2F8el8czq8xL7pkxEJFSJE5%2BFJdPlTSYmMVzc2YqAHVavfOWD%2BLzurWDNv5ZF9kaH0HQZdMzQCnGb8UhokCoxJw9UeCaflxZqMlSJf50s0j%2FZ46VJQa9YEoXx1Mzk4imv4vKsk0H8NE61%2Fwe2vhA3oONbzC7dhuq7xAAOY8Kskk8X%2B4MwnwGU3xKfZKDcY7Mfm5TKKX9vt4kbEQRkrqlSSi4%2FFfjSVPCrOO%2Fz%2Fl7ZQaXfoQstnrDlwtiXPwJxxPffN06uNnRI74KGTC3mtLYqUMmQeDStwn9l5lo%2F23s1emAmGyU946TQJ%2Bh%2FZX1C7xYLCvJm4kwJmbx1Vb9gfTzlP1j9qY9MLysvb4GOqUBfzheeJ6Jwy5kekUEUlRlnV39okqeOX46lN288PYZhOLbGKA9HMQpHxPtvuE2zT5niPYsFujYK4lrNMBk1nj%2FqH41SQGX7udOGOpRp1TJl97jvNOcXxlSz3tOXBWN7N%2BsR1oV2CJfOmvrKMT8Caa0SOA5ynd0yvmdLxWwQbF5GICJh4W0Zw47WnOR7R42keChBI2gXYOip0K9GGh8ORrM2Udp7NqC&X-Amz-Signature=704f5d3e4ed3b7068b084f392de968f985b04c420db26cd783ca7949c4a2420a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JFUFG3K%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCruyrLukGLSnMYZue0rdig7hQY0tjVooPtgMXgGGHp1AIgJA94a2P31J8TlR6er2wZQO3dPZyfMi4n7Sg8hjm5migqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOavZYr36h8OCtscZircA%2BT9D6iXJfNyVLQrXk2pHjRuHnF5IMdXMcIpAiDcSDNuLrTNkFvQ9KXUL%2F2fKdRgQdUZdJk6xJxXKWgWWsWBu2b2AP4qUobmrJ%2Be1eAn4C1nW%2FmmWbTPauBMrlHL23vUbBaItgDTe84JXvMtox4BMYd9AhbsjQ%2F8FXhD3yx21m%2BNazuvAQphQcfMH6t9ePhhyclk%2FpadajN2WhaabLq6VOEfpEXpNBUIvrkkDyk9Qr7HIRcyyGISltEU2Ik4gersRzNX8xaK4Edv7klEERO04YwrH7bh28OHIXUb0r%2FcHcqRt3FyAaTh9UkHOgeuGAKRXGU%2Bg%2BMCu%2BCSAZiEfwTMMtDzZnpCMrGzs9ahJxTsLNug93gGvcLALgvCfvM0lqCX9Gwb%2B7AXh4tQUdIa7ZXAJHBfFfOmhvl3yINwNifOPmCQXH5gKiEqLeaR2aa%2BTiePGQl4vVf9o1%2FqHF%2Be1FTMm5Ezp%2BEa3di4Nfap5WR8VRnXhoGw%2BXpewSrly7Iw1K1jKCWg%2FmWhDe8OMaSIUcCpTIWMV%2F0jWL1CRhj4A8idyaviEV3Li3mT%2BkuIm422ZmM1DWRYVge44QxSjtd6q%2FCCfSPzx3mkgHjBdR7HxXmG1KASsrFbMgtUs4lNCHJuMPervb4GOqUB%2BUOrHnxYsohlPHMUUzcIkRKaAkofZgCwz1XQ94AEfNSF6IIS2%2B31jXph3AhJVrcPOELmt%2FzVo2eA31DDoXPu1QkS1KgAs19IJJ2JnICszblKhCcV43V980xK5jJFAfK%2BP2U%2BCsWedy8mByKr1Nlpc1fq7%2Ba5GQ7oyTiN%2FxiG1%2Bk8e5ax4GaT41K9gCHt3TxFxjEFBmAhr51XmS7ePDdgq4gR4mw8&X-Amz-Signature=df1ad961ffd58f9d107330d116c0bb293e9c1234a72f893ad19abfe7f1857b67&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
