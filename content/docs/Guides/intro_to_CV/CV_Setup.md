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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGFPPO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCjqHBDuj8kGmkuClqf6dGeAfD69eXv1LYp1%2BrLhKrhxwIgZEtVfR08t0ryn8DT1K0JQnoo11eubFB7Oqm2ec8Vw%2FsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPcHZlWxwghdUShvircA2MacKCzT0kR1CYLPbqV1RmjSnYLdLwdtB9okmj4WmcKNMuZxSu3W1cZ8DskL4FxBQM8O3LVBIn0Lrtu2rzCTjDTdL1e9L1mJngQ4m0On9P3E86OOthtoJ7NfAX1%2B01NdpTiF951VpNUjwEI6Eww3oNptJkLTCRNUWJGdc36CR0lnUPze%2F%2FT2cTWll%2Bq96o43l7fXRhfOZGOKoM8JilHwt5juzt88kVwZ4FZVltncMMkzdjsWxSQtnZeUeoVnCSBjh3sPCGCQANUY77UZdsy9TNquZAT31ABG7ebBRhOJs9BKUqO3h3QGZUMyWP3z5NciTxw5i99jiOjfTC9Qm3P7BPlG5gqnntn5m8dShmloM1Oyk16MP%2B6up1%2BZ3JcgVf09tDsqEZUc4qFCYOApIVML40aF0es4%2BLWr1j4pjT8TShUGVgxR5G280xaFm4CUl2I%2FNjupL20e3D3vX4U7rpGmqf5b0Rz%2F73Wl%2FTBsnYPULv6PDZzEBPPfoPMqkIwKPFuQlriJ0tA86kd5qUn11V0uWO%2FNpmnESOa1X2CRDhFfQovYf6xZX%2B%2B44vcExAkii0idAoFBI2N%2BHT5TFHltq30Jdwx%2BwITv9oFNoRpNt3aMD3DPqIysd5ui9AkThZXMOmw48IGOqUBFfe%2BFBd2N3%2BBEJsXSFbFBrLzBJPMHxXewDvtywX2Ed%2BPWyiT0Uo3OnExfAfkO%2FKsKxdseCcyNfEzAp8RqpPwAiwPnm9Rp6AzHFEQBgRaZxkNwwnkTewML71FZQSJ3l5Wi7AtUvTyyDd%2BuLdXM9phONRy5TtZbmZrjL1D2e2lmLbW2Dy7cxeQNjmAP484OK%2F0KBpZNT4l1thnqGTV6O14HPE3tprQ&X-Amz-Signature=cccfb62d1ab3532acd251a1cc5de976f7d2715b30806e3ffe8463f3ea92a0478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBMBCAM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIA3ZiEpn4NL%2BHS%2FZoTbuV4WGlR6ej5C7kRI%2BMoBGE%2BlXAiEA%2FPgnPf1LOD6fJniCU4M6GCaXQ7zZz7fEui3vJmHHdYkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn4BODTDOyV5njddCrcA644V8MbgN6Ya%2B4koWUbkYX4plN5k5lrc6PgKmxd4p3Hp7EaadmNNIh%2F63vwBVArztPBrocF5s8Bpqzgkqj0bMdiTN%2B24Xl2tyxHMW7IzAN4Wtt9357NrgRvlOqDoSBVA4YHV3ncleCWXFMZXbIb2W6Ec9gRm6AtYwHIEqCtxCSmVFXy%2B2WcHkfWXhFd6rFVC2DjbznCUF6tx3cOEpvzdXevwxx%2BEah1f4eaL6FM3CAX2lrmoDzm92K7cTAHgiSYLExgETLgr54a4lnSBWP73c8M%2BjRyRPQKBxSXSus%2Fohbnb8u8q2jBweu%2BgLQIfd0SlU33GP90qO6ENIvCc8tg%2BV5B80XNyLc%2FaK0dElEnWy6pjJJ%2B3eFAe0WLws6By0LD0hverbnOij1UDXV51T7WNJdAq%2BrKqfAgQ8Csx2ITPw%2BiqvYVuh%2F7UNx5tXe351nOGfWT49QMEGJlnIu9UlJJl5e6CSBxzXZrtS3tBPdh%2BKuX1nNykU9alDWx5mdmIZnf6I2TyhnFZG0sMtsKm89eW%2BPOHY8ir%2BY8BEj4aFsLMK3gSerhGwkrSTnvmh87AbxrqfCMo4%2BoUWMY8RkQd5UPNnys2OJnpfl95Jg8uWAyfxCjsTLOHDX4xF4jQ5sXMJnN48IGOqUBBzx76vLj8e6izmY%2F0hAD2KszeruvqD04J7MNt3vgDKmo8gmOKUmOVKtnBwwyTIZi0GQy2r8XY8OB5cQm3Cor7NXiRk3xhojpBGJgw5fRXY%2FcsnozdSpZmaF5gbSxL0f%2Frw4sMsfcZqMuMc0PF3tvpGy2BxLK6xAlQwDxSoVfuD6VCD9P3%2BaMiSDXM2BrUsPPhfdb4DawqgjQuVEcfzV31AbgZy7P&X-Amz-Signature=992ad10d81fcba962913797bbd5feba88865d8150b75bbaf17af6bf900696e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
