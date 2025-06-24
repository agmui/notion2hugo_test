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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAVRRDK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDZISazsRvTx%2BrJkBuesoxz5TbK4u7j0oQkb05GX3aV8QIhAPzHNtGsWLxv%2BaMCgC0Xl%2BfgHN5PwTKk5rjtnLY1sjb4Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwRDuxiUX2s6hFd%2BiUq3APbZZ0OZWv82SgVhioRx8vXMrvFx0V4NiPWmenGPGIjCuCCrCpXTgbbM2467Shboe9rFwo%2BJpEPLFItR2WkersI24vcvLtBA0%2BL5qn9bjWhSlaMB87Nej30f2nz2Xtx3gtaB7Ppt%2FvC9GRL7MVNxpSO0zqn2MNSrxz3I%2FH8Zbw6BISywBiMZevy%2BttzXbnvWIs3qRo6d1lAuOCYR1jqh2%2FhCjvcATdwwbfBrD%2BpJne%2FzhntVVV3H%2B46AYAZpMnIbnMv7OCxW7mPVLEHCMiwwnay%2BKZ5FX7cooEB5vBHpqy83Zxpr%2FQ%2Bf2T2nH1rKcIe9qLQ5YLtueYcfZ2Rpk5Q8RROLjO4piQc27qvramVNMCqYcq56BBHEEAlu93DGM1SXeOAxtkFZs6P2Q8tjA%2Bzye602RgHhmYwKBpn625uqTFnAkwn11qfXrfwBEBXYA3tOn2WRn051WOU0Se5JVbj2mdm9NdRBRnDP%2FBbflZ3sZaAZblQsSJXAh3ZiRgLZSBzEKBAEXSR3aeXoEpUa7unlWPAC6lEgNQ7BaivUkjBEV5x4LUlizc5PvYiky75ZKxL1P4we2dcm2BWvwZf2fec4dlHz%2BwvN6yZAHnMSUc6xk3ds5FpqGlxkXJszeDMqzDstenCBjqkAWBcRWaNZa4138fZB4h7l8zSaVW6ovW1sZUmfylmQV2%2F%2F9wQCrcXN8CF%2BxwDfYyQNPbIPivTV0FnADce1PhJSFlO%2FkkAcHoh2ejbP17UDoOSQBCIE3w2xe1ecKKIND0%2F29dni6x7f8mdfXaw6auXojPrt2K0briCUFyV9%2Ba2tiLOyVKmBSGHAxjFr%2BG%2FYta6o7IKcQ%2FHqVaUxTW2Owvpq8vBlWwz&X-Amz-Signature=c526f100e2ff7220b9ef3869832d2a1c2870010703c8f31a701c2c7f875a2147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBNKVNQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCx496EYvOEHW%2FbaoNTE2qpYoNY06GJj%2BNmDfoDlQO%2BWQIhAPS7pYHs9VIVer4vsUUJFHpY0l9atWPsfkSL2swIC16ZKv8DCCkQABoMNjM3NDIzMTgzODA1IgxkR7po6%2BvBRnW6ZvUq3APahjQOoKLFEKp%2BEHAdOJ%2FRMEq0J5%2BqQ7p%2BTo3o1%2BCDz%2Fd41sbr6N3L0xGrVLtfP8XlWz4DN%2B09ICxWL8hFLBxW9NjRJ6l8iUElDFSflfYI8%2B%2B9Ijpn81Ho4CAt3ecPpEE2EHFw7eS3biZ8gkCqrpfkinWHKlAHh0vxrtlbTxTCa9tN6CIdra6DbZOdEKUZRD4I0%2BW0Q5AeTXI6bpNJ46Vyah8VoUw3r1ShruJ0WOYSruWDlsD3ilUusf1YpcW2DCyv84edH65awfYo8Adk7jEYwvBuvMHb70hgsT5X0%2BIxjlRvIr0l7at1zzvRIq1uo49KyC3A%2BG%2FdSuADoDRL4pXeT%2B4mPNSTwCJtfCWosFETiC5vdpcOTHuSP44Hc%2BVG8ZrpsT5m19%2F9gPqYPtaVJSHdl4Qg73vylAoc25kT1Lr3vscFtWrqiZQb34KKVALYEOVWMR0czGEKkbOBaJeeaqee7RkGikwLprar9VV1CkALQN4YxXjz85ZzqAjWhkzhmNY4QYNDsmvZ2JC%2F%2BepCYf4yJdOEMa2fkmVZenfFm8UtJxFT5NUGzs1I2yFzSx07dIK03b9Z7b0KEL4mymj4MFndydFKWenuNfxqso0niv%2BqtUaLnE%2FxBvww1O1EcjDosenCBjqkARj0BbFKr7JJPRrlygfLhTMNKX5uBogCcEEHNGp7gvttD9VxGgOjkad2MVW7qFb%2BKduuyA1Sn7VIRt53fK%2FXpQeTRYQ16sLkSJOCRCdt8HAdOQ09adj8js%2BURAYUaf2Bx%2FarEraHa3xgAd5ALM%2B3nNcXzVRgsgJpTYlsqKRgNiCw%2FSn1w53IR9oNzIQoH%2FgHp883fN4MpKBPNozhhPl2pFyZ%2Fhig&X-Amz-Signature=67b856e7df494918e4e2123f1b86f44a9b435e63ef70550fbb3058542f4fa273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
