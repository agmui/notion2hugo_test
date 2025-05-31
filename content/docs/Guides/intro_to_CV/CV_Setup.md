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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644326REM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTi4BpwgxnAgpLNUMOiHMDFiiEPfgUStVAgj3d1EsFJAIhAMOZZDYvh8RJpZoZvpunzDoMla3vLuUS7%2FYH8CnXXS1RKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSFGLqpdzejHiyngq3AOwxMjyqnJLOAl%2BLMy15rjm3ukvdn2ORLqIxhL%2FYA1fXnJ5v3Dva52ikBmXlKeo97M9PjiKFARhgZ%2F3oSM%2BrghRdmTFxjqEBA67LTaIEyDzgEPYf2isbXuMQNP94RXXPxEnY4GTlbTiFroGE8E2Fti6rVlOh8XZYSxwGpom3zkbAwnCwonPpN%2B1Wc%2FDR3AbS39hB66jGmw7L1E1MROVDPh49oz3pgi7fPy3lRx8bYVz5EYLoiqhkEhsyu9db7nREeCxEpArhd%2Fb3F9RZsUyAXUKV41q%2BySOQd5oo8br5C7DSZoDuxFF8eUCUL1hphtZzWGTGui%2F7rRDMEKkiMQO8OCVZi1KIppbY8pqZGEiVnGDzPheRM5QOTioozAd3qJn%2BoJ3psP4TCNJv5tCzsA8IvZLSMPkiiIG2y34WRZALD1EhegfKV%2F4r2%2BJESCc%2FTzlbewUhuLABMFPOvEFP41pOqT4NagJueQAJmte4SO%2BQUFoK2FTL60G6ClcrsucLYF19QEbQevl3QqospSeahDXYwCRX6x0e00WW4S8mUNQkSx0Dn53MvLUKz8q5Vqj65YBzP8qpaZyNcdsvs1DICmfqq7R9I0sw00l%2B6090y0VrnEkHnX%2BkwEnuQBSyH42RjDSpOzBBjqkAYRbHe2Osvb5GbLUe9R6TjEMvlSuNrZQ9RkSuyElPKysGSaTbQXeHgvH6%2FzpL17XV%2BFe7ZqjSingB8OZG0yzqg6LHVMZ7Ql5kXr6W6wBR4inDjdIAPSSJ4EatrUWO2%2FFHwNhTRzoEW0O3zMwPZRjd%2B27O%2BSOgm%2BDMAEbTAdVv8K%2F3xo0eW7QuFvOBoC3rSfDs4TVIH56xZ2O70oSCX4Wr6xW8jVi&X-Amz-Signature=16e8ad0842198508333589590e4d4f2734e468e51fabc517f88499713267414a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHOUZ6H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWqUvvtHK62P7KjZPYwLl7gXxNfaU4ONX6UBot7lQuEwIgDcMhvnuykI8i1v3waHQVu9oQxF%2F1lPCm%2FrswtvU42uwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEweLzwLaV0RagzqCrcA0WtBFhULVv8RzMbszx7qco90kCVU3YTYdUBtt4PYP2K5Ztx2eWXiItqGLFC3KcDW9yhZ8sJ8XF9Htc9GG1%2BwL9ngXMCMrcr4LsBMDvZZV6dEMDQIZC7ww0KnC65tPBFcOfOAyB3GslOD8SUPcbxU76hdZORxKgAV%2F%2Fl6Wgfjx3MUp71%2Bvjfu%2F14oBMd7ga2XcFvm1DgkHtSQw16mLRcSpwROS2lHYy2DpH7lFIev1N6zbBWWUkCR9SkywVqdQMSRAaZdtPu%2BPH1OUeiMxt%2FiJh5PjAUMQgrPCe98lCBWxzjac%2B670HAMXj3c3h2HIr3LHiohTgXgFoDXLzieM%2BguDAgWj%2BKPXBtcrZT3A2xtyLC7c1r6PZutN9gUs7f6GjGMzW4boWS1Xw2Yhq0ZzzvAY8X1BU7ub8SO0UI5X3RoIvNTzPJ%2Bk1njsLKQ22JgClOFmjjLPIgfOCINQ0WsStmdK3%2Bm06SE6NXFGhsS7qCzG3cV4FiVdF9HmXpVT1oqJA6EoIyxSWqzq0ueD25ZK47UBNJYFsfLECaX5xX8nAVUKlVuXN1Ih8aHDkX1VGP99v6gQOuGr%2B%2BM74dIJnmQuZgvsRcIcI%2Fj4UA4KZmqx2jJ23ZF6TkymcPNrtX8idxMJCD7MEGOqUBimwVF8cC6KLhQFx2KnjRcBt6xShvMSePg%2Fs8Q7bQXsEG1mUaU8kDugC2vWoLqdaqhB0sq5DDdaeolQlfi3u790GAu%2BFCKkzNvTMYjos%2B3yEQVM5K%2F7aUapKH7qPNJ7%2B0zDvTa76j6YDX2u9PQSdNYd4XBpKnmkUpCOBrHlrMIFBvnYtYplaHC1a9mTF8WkoWf%2FFUKIYA6IAVV1YiPMr%2FN9A%2BSA73&X-Amz-Signature=bd5614e10bfe4049a401101ff57e4b531398bb2a11557089f77ce3e9adb68d75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
