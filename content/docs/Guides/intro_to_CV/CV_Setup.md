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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GOGG5P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDI26aICHiDnYI%2BE5E8d15kl%2FCZLelc4tO2FDp0q4yseAiBSoGWMRDX7ePekI0woCuUBxkf6EXqUrOzG%2FBYCE0Jcyir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BVTuOMRFe71KQcu2KtwDNI2%2BuJITga7sBRbFkhtaZdJU%2BDFzCuY%2FdCuX4vLWJWTVcx7YYI26sr%2FZKoBNehrfm1TCVi9SNJdiZmTNvf6dzad7Hf0O2VKG3wU3SsnN5bDqw8MyDt64AM3u9DGtp0RPhF%2BhSSQQva2B8bdcD7jriMPwHF%2BEXKijD6%2B5aBK667lLy43xMdf4y6Nqm72ZO8wxPejRGvppFjpG%2BnEcV22RCvxoKhII8Je5JTVCLeLaxHoucp%2BdDjUf83%2FcHEe1mIF17XTj8lmN4gVYEKhic0By1ip1Fp%2Bren%2Bp4PA%2FsjsRzaLxDKM6LQnziQfKDRXzXg0DbtrorQC8NPXaWg6V5CNkpNkO1ZX%2F6gQ1GQiNSQYOujY%2BlvbLmusOD%2FJHL%2FzUnmexcX1FCr3zUwYw%2Ba9AH8tFdQheoTrrQaZY7%2FEq%2BI5%2B9HawJi5KnsyWVbC5h%2BV5CxPWf6LgAE6gvpgmIW5JdUBXyr9VuyXmxR6edm1iYPQ394FZRxd%2FaU88etf1%2Fqb3gbf3alvJyvdrYidCh7Nkur1pKUo4e51rHliTmw2%2FYkGi3tCG9NUqmrvmcHH3gD9uSmeamm3G6df7QoQAhw0fCv8Xw54bNOhF32EElnl1XKfBo%2B6wYqXVuUCMZIBW0Eowi47CwgY6pgHZgFOz5Jnmbj%2FwjlDzrNbc5pqB23hJU%2BBUAVgQ2S2%2FDMI81DiLsxHeSuZIa7iVQ88ewRaMCIjkR20YkS2VgqCV5LSENkMju8HfY%2Fb3MPpvEZNozdx8NsFtux6dHbLwqTwmuFsshJNo1zPyu9RZ18PpP%2FJTOPPppsYctP48jHk8PoNsIYDpQ7pO3mH44t4wyZV8qva129QFigd7bFgjSvRcxbzp5zFj&X-Amz-Signature=8fa22ee8c7a6420a2c997272123bb9918c6c943e2b56ee70a52b0a1d86f8e16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKCGMLER%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICfHniSXzfTiBlieSFrv%2F8TqMM8%2FeLvYNmuLSEr9BmGDAiAOzQxYNJwVLTMuSik2LBoQTiLadeyOEQIn99kWxOQEyCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMky3y8QvXEmnN7MzKKtwD8Gm4a%2B4hPk0Wn2Piwd6mJzlgcigwSoxTrTRV%2BnfJLzOj2hRZsC2HQ3AVpmahHQ31aItU1v3H54%2Bj2K64%2FHds9vlc1EmOJBDigM1%2FqmKvXifkQl3zcqqqIqzW1N885953KvJT3fJbbnQTgSCHck9aJJLrVSKiI1RHX3dodJM9FMb0dUVSo4eBuq0Ec%2B3GwD8Gr1sTTaPJL5HTmgjKnlQmryvnZdKguwhWuU3e7YMINarY9F941O20thyzrZs%2F3Iq96CLdCtf79oBroiVpBkbDyitfjr5txnrPL9DKqbzWJU3WkPKrtuWziLN0B5GnlMKEZto6PQbM9NwI6mrP28OAx4RnnZ3MrLP9aio1NMNqBTpbUWqBn%2F4k0fSwcb30yCfXAQsujigt4pFv39PrnBrzKH8Z0zDsRqwcn6EsDzYAYAy%2Fdb%2F5tGGnG0%2FZbgNr6N6CZgjlmtAmkaZ%2BKE%2B5lw%2FD6SVyIDlngkQzJ6UL3TQ8YpMtU8jri7MCjyCpUzE3JuF1Q8YO%2F3DRWnPvId4L5ChIBckBkOP8v0tx2was6dVONO%2FrPbjjT6j6k6RpkoXJfpl6SNvEyH2kZiQQCIirXnIRzG5OQm%2B1OqKn0JyyeMRKiRjXk3gytDvqnsPSPqgwsY7CwgY6pgGB8WPrHShGFV79lipRpKDqnM2jlV%2BuQxyzc4bW6EQT8jjCA%2FGWJoldRvNEqfbxMbzSpzWwi1tK6huKDJlh5ZXY8p%2BUazowsahHsQPfFYpmZPqUhkE3saNiiA78ZkPNYhnG8RZWF2gy6yQEh0ZbEVduZNzBsWo%2BO%2FFUslNS9599URpaC8F6Hd9KdpZ2dvVqNAwcYFZ60dhoWeFXjx91AoW3CcmcRmd7&X-Amz-Signature=87e8808a3513adfd8a43a0ac564bac644f2bb70fb1e42fed8f9af1d15bbbcea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
