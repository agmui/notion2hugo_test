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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJ673O7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPsAGqu3Ko8A6gRdq86mUL8eyKAsF4Wgv7IlyxEP0NBAiEAou7s2t%2FiAnWct9nmM%2Fx5%2BwFrC4dQI%2BydXhMgCuuSmyIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFpeK5X%2FMRa%2FzkI%2F2yrcA3rA5c%2BGdyIU%2B8YNpb7mgyJf3iMYTI0Gz1EyA3MdUnPBkCtzWCUjoZpS8FfkfeliesgkGv1mGEU5ZUkOoULCAy6nmaaxHME%2FUvbCYQNol1zj3TLnI1YxtbEtppgf%2BfMqhi%2FeG6EVV95x1KhhhDs2NsBwxDGffLw6LPivOoTdlrzI9Npp4ftqenyU%2FbD6nKOWBVMUkmzRTEFDKBWHRcNlgNPMiwaGImz%2BrJI015AW0CtGgJDKHcVYSubtX1hfb%2FHYp6z%2Fb1N%2BkdvmsTdrXo0OLrBQBYA66rO8OBcqYrEHw5I50dI2lTw4KEINi9aCsPrBh4M2JZYP4%2BsPJnKWIsJG10a8qpXR4r7ZKwP%2F1vwe70tQVkdT9dfZxXdCYqfuTOE%2Fhxn5rGiqsJivpsJlohkLXmEedSzKUuupVSoTbH8QrDz009dZ8UacZ9UBePEkY9RZm87QliEmwtKMnaTSA7siVWV%2F%2FdOyKfmQhOmkwwVoQOquUYPng70tKitzcQTYSZo2jJ3nfJKw4%2FsbGh%2BOol3G1tSc9aPcGnoTPcY%2BO5%2BzHBSwrtbXimgv7iT8d2YeWsSa%2FGAc%2FWVfgoVf3fkoHqJxUDRtG1MQ9bX8ChsuQvEKTnMAfoGvxUW8GsYULmCpMN6XjL8GOqUBSWSeHIDOITAibbLF3fECjH2d0Ejrpnm0mC0xJGve%2FKVIC4o0qpCqpbuz%2BE1L2R8tXdOQVlyxgswghZ21Lux8Kt8EpBunJik7ZcACa5ZweEPsV2YUe%2FCAkzKNFzvPNU5vVz%2FidD7nj2aO6A93JWWBEK8iBjcG6ACBqCBE0woc3XxUEGKU%2Bk1mY%2B6bRj20FPjOMYY9%2BdqS7NNt1lWSHrVSogLpwP4F&X-Amz-Signature=2468e357d518289d055faa62b444a64184aea25f45e76e68be2c59539b1b5fea&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6I3FA3X%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDJ5%2BTojhU2Gh5EUqfmn2ZFgITM5SFHzlf4o%2FYghLo2wIgbjY%2BEr8SVjDCuc7k%2Fif65NB1R7nKCj7V6KIdGUap07Aq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDPs5JRX1I7eWQ6fQMCrcA748QhAaYeEmlnr%2FuS%2F5Oie8aYwIZxtcObh4ySkYCsSuQtVlyMblSIzXBfj%2BDnT9YYWo0Bsamz4TlwUKZAGzBh623DvbDyptex9gqDZhuTw33EefzYbbfRxnby3lBfwayjObJKsB2MOVr9WhFlTVUI%2FoqZjMBGVpUJUJB0qP63618xwCZ2Pdo560tPGPW3k4qjSqj9BfhUavKBDoJvNUL4gSqqRHLtiaI5wrCgLv0nTjecta%2B1c8g%2Bcbg4R%2Bl8vlmwa93e91J5JnYZTcAdHuaiOssGIu5M48Xl89n3Q0k61BlmWNpeW58VUie37DQ%2BsZoZdn0R6DCfly8OqHIu6qWdCBgM1itCj24Kf13Mo2Y%2FSP5vIxRwCR1Y2rfKKrRqQAxMdpyFpaFhk2mhv48i1vOwvo4cK9XxLQ902e1OBIifRgTniS6Ey8SKiSLnxxPpC7Ccx6LtbPDPse6RXMjdbIcK9jX8qZBNmw%2B%2B5pMREaxmC%2FBlCjHvsqSxsogf6YrvF%2FD8GX6g1MRBYjLc%2B5GJlpn3afUL%2FyBF218JTqfMy10WASN8%2B%2BjGJx67aFf7dKU85IRtDPtPDVZiHAZ1zpJZt3YHb5YK5d2mPvTV8cernZsb%2FZPfqqd0FMrjLSpOLMMKuYjL8GOqUB0ojZ3ZN4MldVqhPHNfaPwWhynv6%2FWldGDEybzt0sgjCcd0qNL4QT1Xf4QN%2BKf6BcuO1%2FJ4MaLbvRammQrubYW2vOwqHxxDaXi9xDmnnx%2Bzuvf%2F9Ca1%2BI0gmm0I7ILpKER7%2Fay%2BebbGFtKnWWIf9tYdDqj7RnSYk5EWDl9BrnZaBAjKphjz3Spjdul3mj1V5eZ33A33DX9M9p3iwuHGByKOAxTVEh&X-Amz-Signature=9afe6ff04ad27593cec5dd1b109b4f16b7c15fbbddafcd81d3bb3027fd745426&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
