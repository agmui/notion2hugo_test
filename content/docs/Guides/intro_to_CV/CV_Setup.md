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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6LLRXJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI2EB33ujtQr1MIeSTVZHWoQJvDOtul3jxODlptWK5XAiAmhn9qXv%2F2WV7RhIQrPIkP8au%2BtIScvRFj2JPqeLJILir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMtkUv33Y16YZBcUveKtwDUd18GgpiprmyOUDrMgHyBKCbNqrUng8hxk7zAms72A%2Br4WhXU61nHAP%2BMOwUHqKBf4uXS%2FJ8ae%2F8oekmRkfmk36SebDCjoX9hLn5WC2rL2rYspcSTBEKrtEguYiB4RgJZRH1rJ9HQiO3Luv%2F%2BiZJr8a5H1uERcD%2BM%2BWh257vgxIubv7Xk7m7mAnHtBur8EGcL5EQFCI1Cnfl%2FcqKzpTB5T%2BWGMhgAE9Mo4gi14%2Bscf8uIACws5KrSI0QY3avTeUf%2BD6AGAGLMjXKBzT4RBh84247tv7o2EeL55mtnDaz%2BihdznaHXbBNGzRw0QIEqeJk8PD5QKzBJdZXnL6z66f71%2BywAWQzJL4YPCmX%2B%2BRDCNFzmBs3KCwSXbwMzSgcWpH8kW%2BHo%2FbzkpnAyETXcoSAvmaRg2WqrBC0hOhsbwcAM7MqiWQGB4w4xF8wXgMCp%2BHdtvom1Lo81sIO8282edHv7rDW%2BXy5aWSwaiQtKJ0%2FTpyeAQsBdAsCIUI1X0yBpn3SB%2FDzKBbcDGD9cwxJrkt2P30ZuymDsrOfn0eA9KQ7bAhxyQBe%2FrIM9C6bD0tjnD%2Flo3cmqKZS%2FoGzJzFNub68bRo4NVVHIXCSRCO%2FuwZoHUaBFU%2BiZ9WqEMPkBRIw7qrSwQY6pgHdu3oW8i1U6ukVcd8UHL6sq1HVVauuekjp4vmM9qjpwAvySOqGEUkMJ6GgB8aNiJH7VBGiUHacXf2HDoSmmgLN0zrdML0jwTrGBNA000W7YZzT%2FxujswLxA9wfZWczWSzYdBucy06yLtgifSsKMnar4wa9deCO9ufDwRWbDVVL9ZtgjQdSlDNW7378ISvGjKMNkt4TGeKpjiH%2BFssoa2Yr%2FIXCg0xG&X-Amz-Signature=ad1ed13a99bf9fb6c339ef592b02c11b54ae3602e84c43cff3aa498d526c17fb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECCL5NX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmtTIJTK7Et4ziIFdmSqMyl3zGUou7DlgoJlT03zrZ3AiA1kR65a8PoDZBSMyjcOJAY1Cgntt2AqaIxjo2yvSwkkCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM24U5Go3owJwn1taTKtwDkxYWCFCBXgRu0%2FH04VQZQUchNeww3VHm4sdgTWoVN%2BaugSDQQDg1u5lHn4ViRCj%2BzXUsHrCy1JZPT3p7zUopBHn2qJIGcwq2zmDhskPxavr%2Flt8%2BBQs%2F1D1ta9xWM%2Bl%2Buqz4B4G9QHm6d7OMt6WarWT%2BEtpOy6wcoCsJtwhjvTCIq0am52flYt7coTpDhkqoBrCsTU%2F4iWqk3UjbxU%2FAd266hWdsrH2BwmsSyYk2B6nLtKtwH8p%2BNCl1hda%2FF405FmnaLV4SZpsnTeKH7Qbl7uOt6n1YbT9nDbPvX5sncG2U0jbarQE2NQ%2BzoulbHIVRFt6Xbaoo0p2svBO9p744I%2Bqp2lHtHWInUaXIJ3Yd1XgVW09HlFNeDGLTLFSLErBEpHEQmXWKArh1dxD7gMg6VXYCR0cxZt93IQiYH3yRhH0ZI1ZY%2Fjfdnq4nRqN9FHgBPT5o65jJRg7XM8iIq0m3ic1I3A7iktOPuupc5j1sRmsoPpiAVPY%2FLgr6kL8oFSmse%2BU95iptVnfgJ%2FEOtmJ%2FkkWKE56eYWovLLw8WCebUgq8E%2FE%2BsDRdZEdxfZmsls%2FrQgUQ6de6ZpBC64D4oIgu%2Fbs2yLTcX77UKUMv2NgFl5Ws1bcxoWYOWok3vbIwk6vSwQY6pgH0Q7xIDHLSlfCs3BZODxGMgBm5I0qZib3OiY87IYkBTP6HeVTHNL3MEr9Rkh%2BXsEcb8jzgyGLI9Tf9isUGf2QE8OqW4sqgktW3%2B0mhJVvhs6XcnsLdywXBm15Z2TFPpasZPLs80DYaV2cg2CN6LbnqzFruxVgskFbVcy4vrrm3P2%2FrHqJJVvVUdSoP%2FcAPYnSY88u3f%2FCvxbxSsFup341ZlufQ%2FiSY&X-Amz-Signature=336460298d92e18e31bedd2cc4f27c6af2071ea48e31b8d94b7da6a096cdd34b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
