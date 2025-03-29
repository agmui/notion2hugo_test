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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZLERZM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCmqSkMUX4td%2BOTmI8V1rEOEzAoNDZQA4wTFEugAj75QAIgS8%2BIDyeGyWxns7CJGVsiZ9k4oSzUoTBZSVZG9azBl%2Fsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNLdqnSu8FzCj0yrESrcAyAfcdoRiyFg2WIjMCxx8LeGapodFzewK%2BxBFBcZIn9M7jsQO%2BjLRa%2B5SAPKxbQ3iS%2Fjtiyth7kM72mRPLDzLGJ83bCgEN2O5O7BgrCZZ0LAvHZKDcMClVY2c1s9WzeEohyvKz3yKWh0AaRUEsjSsHh0s57X2mkoYa9njNCdA%2BX9icdVsTdEVZJp8v%2FjKb471WY%2FjUiLyhMNrVe2oZ%2FaJLswSQtKgg%2FojoY9W1X8Rdb7cw4jQKa9%2F%2BDjZuaFKxax8xpD%2F6tlJtMw19cKIUuWdngnwoCwuncMsHiKuQCsRPUrIbQZHceHWuJ%2BV7cMYFMMZF7Wbz0WB4OJ%2Fftk6aXhEO6%2BRQSd3MAnq1dkVxB%2BmYGW5C0l9BHbQ2io8OAkv%2Fn7744OoplmtcOmPzWCp%2B9Hxzs7EVi3mJ2kKGLwKDtPe5%2BYtel58sQxnCH3AcrdnV4wDTvKbhMODsWOBCt7tRCMOL2J3aZQtTKz0sKZjezFcEDQ7DNp7Xf1OVyFmI%2FdkIR9nCnVyRT8j5mKo41B6%2FSlK96AT6XenBOrDCvSFMYxJ%2Fr96iBRbIfCvTFDLAhceBNfjMf3Pb6tNMbSQnRONA0EsLI6h5oxIa4UPUmn4B3SPiYig9vJXEeW3hAIC8u3MPCnob8GOqUBTH16%2BEecOAXXXYASeawlJ3QaRHSh2AWLlIBrxSINVGfeIpqmRsGrlvX9tx8AWgucY6X0Sd8UrfxgFRVrdpN7qmUEF0kCu8xzbpE50%2BwpCE5z9jNvygbk%2B2J%2BwBOcZfgGPDr26M09IQKpvH25i%2Fw5Tg2N1WZca4zrh6Riaa1URYLlxPdz%2F3GU4E292BnWkiTEjlWrhW7mXXpmbw9R%2BvDHkVJETOZN&X-Amz-Signature=59afbe9edf7c02359668a7d99f77eaae60ec72f141399f694c74375271dc9277&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAVDDPY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDLc8SxkwzGtSuICquFa5wk72LMXvtIXTlbQrRIYlmb1gIhAOxdYJaa3p8XrCKIEZ%2FLn50WycmymaZSHs%2BOIGW51jvdKv8DCH0QABoMNjM3NDIzMTgzODA1IgyGmRFtrVzlF3%2FrY5wq3AN7SFWFbNgr4ntwK5SXnLsEycOY%2Foi%2BJLlDjqoXwKJtTRPb%2FnwbcBAg0qSwUl7m22dq%2FP7zdnPZEtgLcx4m8E2CLTjCsbynNBq%2Ffw3p7S1%2B9vwM%2BfiiLflIz00q%2BRlMEPChLb95dxn%2BLCAwax90NTEaqQGk0xZn3MG5Bt8FxuMdngNlqJzXS92t39DePpK2KH%2FRXxdhkoH64f0%2B7RPQTSRkbp5Ba3xG9%2BCyfgoz%2B%2BNF%2FSXDNtaIQfxcKk63WCBmj1Sqn%2BUIC1tLD9PJ0j9fS9vQlyAazuMR7EBCrgXw7uaByUkTSw2yWiGfEgbcDmm7oV4l1QyOpxjItkJMmKdZEyEeitJL1j0BTFrVm%2B0jJAK2ObOUVAovvJawbmGUYS9y9TOYIw6SPql3F0FvfAfiuq%2BVkmft40zuPp0frtFrKKzZlgdoWNZ0YZ9wekqYNcJLl2WvFhg8z6olqJuXscNj50ATtq9zjzM4UOulJjcOJ9k2aRE8ZGjkWpvQdU%2FogGMAmqRIUDreC4aHa%2FleahbPWy7XR%2BO3BIfKjg81s8duGXd%2FvKgT9CzQxcdmrxHJkaJlRBkiruTzwoXjW1sCuKcO%2FOEJbbF8wjjhKUmHbN%2BJuINvdStLStPNf3EjCtQCOzDrp6G%2FBjqkARx%2BWitKv3TSreiwbKIVpX8A6lEEAFdH05z1zkpymyUFn3oca3q7TbCCwRDku0XcjTzxL7xR27oRnDDlG0%2FfkSFAiGKBsSv5LDYzXA4KKCKGrHs1YJNGm2U9%2BZOSQvtfH6iTLZ1mSqWISO1qP2vG%2BU1aOVK2VYT%2Fcw8oWDFPtLj%2BxtlRvkmCXruygvsWh6qEbivRvX4E5qMiRqSc3xpyWyyFlQMv&X-Amz-Signature=b749bc62283e3ddf138d172d0b5d96c19b0b9a7999a4443bd433345a2f380844&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
