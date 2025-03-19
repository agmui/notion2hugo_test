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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLS3A5MT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAoa1EOQry2lzj6DkgMBP7HaCnh94XTFWvInsV57UJYCAiBaimKdasf89hTdmL0On7d%2FJECb5BSNQzFvDID49fF7zSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMqdTwEuaM2CblR1aIKtwDe3YlvO42zyjyjOgGrTAak7HMpyyan1X9R17HoN3%2BkFSy5Lw7RCor8al1tnL2V5GiUSYDzugQtJnuNMBNf7mA558aR77e1xJEkiBRgXIU3jMauYr8F58NYUb4xMWng3thvtqk70mCn8Mx7LreSVZexMy%2B52bmhvzoOzkrxjU6LZ4OVyDc0MLqIlnAO0V%2FTzEokPYAhMb1W6B1jk5K8dWbvTV5%2BTdOlaXrcwHVKuJPLmlJWHKYgkYzRgAQa5icta4jT9gc7mkq%2BtSvLKCaGQ9vtzV%2FdPYWcvQgOgLa57BxYxJNFfEtEPWWehs%2FP4k64hAKSh0Kum5S9GFHSqdBVErg20%2BfMfpjhzCr4Cat00a7TpsAN31JseNim6xuHTFBRp2LhUzOaFuX8AVxkAjGk3rShFFcKl9XrInONy5Qs9FwOpBgA%2BUzXcWjkV022bpB%2BzxsPH7%2F51Rw16Yoi4fjaX6TQKblL%2Fhe9wHsXXBHS3rACMRsPLeh1vvBfw1kl4J2%2F6OjgYUuKoOD5TGwqVNs0rTTMsDm4MKPH%2FoH%2BKqoyS4p%2BJAbqFwuCIMvnnOUGIpZIcKUyl8UvFe%2Bn1BtJNbq4s9uJzSKDeSc14o%2FRSAePgCDf42ztmQ6RPr0V2DYVDww2cTpvgY6pgEHRz3HENumHGGZchgxntc3yYzNCPYKDuzxAd4Gryhak7fFfmeK26IgW4aS%2FuOOrmSssS27aILR%2Fh5%2BcJGjOk4uYpc1O0OplfuRax1bog%2FjSyEpj%2BITwCMk1NDteAPZJRTa7NYc40SzwvEQCPfBzgYts18ihrI9H6JiznxwTBh00XG8Ze81dLfl6zuysf57CiwaV8PuqynNYhPXeM4znpX9Dw6avupB&X-Amz-Signature=5651b02a718073020c45df0d1d47bde6bcce1adb617139aee27c1d9db646792b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZDBHQU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFHaGLn6ezc4pcbCSy6rTFapp2OX94oBLc1QDrKtk6XGAiEA7ZUqRbprnCIRrkVNzJ6hB2vJAP1p8HaXvXMhdbyn9Y4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMmbRO%2BDeuytRh20CyrcAwZyS8U0NMGisp3yE4w9wsv56YBDWDV3nM9l4K8xJ1AQm9apZWeQ%2F47Xl4RMBLaeZGOPk2OigSrP98fX1rR9xBykZuQOSKJ1YFe%2BlGZuyu0TOA0v6%2Bq7dIj%2FTRv%2BFfPUwu9Y0dRHTmKQ6BRRVucx402TggVmkvANWrYs9d0AYdFuL1udgo9RDydCGiAQYOhRCdrWKdVF1glkIWk5HaBdNxhnn1JugRWHpCgYyrnWHFH2H4zyBj68SK4PhDPRUeid5CNBqasWGZmeRLIXZayYQJYsFIPDc7XN25kS1Af5pGV1t43hw%2FaFrJUuENUWA22uDyWT5ijIK%2Fdg%2F7hbGQGLU1dz20JqphNGkLi7Plkb6N%2BEKR8LbyyNFj01z3Z8HvJkdZrpN8ooT5kPVK7MQqHjRrS7hDmEAkTmPL8qcBDlamiDtU5xMPZlk2yjrsAhfcFr7pJ1vkVvI5V4U2HjWVC%2FDMGeNMG7UsxG%2FN0XoFFfGKamI61B3VgcriZ15WJuUDcbJXK0GjsvQnv%2FPL4WNItYSVH9NRNUQvyvz7qrrJtDghInUxgRW6Xp4Cq6a7WAqvs4WC%2FQXeKraVPiizPcp%2F6lCdYpTYryPaR34FumGfIUx546sp3azDQggeOG1MRfMN7F6b4GOqUBA79ut2SG3%2FwIc2kaktZEZCjsRMrGraZ1xIAPd6gsyclQ%2FURIng0JoyNdqwV8TQIp4f%2F4HJNr7nW8t4FgXDnztNI7QIe5B7a90vpVcTtNTwaCo0O2xfbGGmo5fvBVzOyHBzNcrm6o64%2FVb4NWsjskslCJH7JhUYh29EPaVtroC%2FceZjyr9WxocXTCNryH8XfcxTeaZGZ3MpvPbSiCYOQalB46rzul&X-Amz-Signature=2c0c007e1477e4c80845848079031a6b647c77cc3ef29d2231d5999d74fc7d75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
