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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBRVPIA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC16RnJpXOKCNDL8SzvynL6l7eoDGZLeMdMLFELgX1nDwIgfgAL9V98HQiHwdF1JZEvShYLDjFxYVPsHAry3t61lIcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFhRikFg9zPBD9OPyrcAxvg1TqyF3Ohy4Yh3I341%2FIxEWJTwexS%2Bx5cptJ37T1ItLr8n2XW7ffCvYjL%2BHj9zcS%2BDTH9j27cfaOwHID%2FNryhHrpVLjZ4zQt2kQ%2FfP37WEE%2BEqcM%2B7p4bFg2YpRz0rc0TBV70rkv1Oadvk03vqlz%2BxYzvjVrZx8g%2Fkc%2Fig5urBVp0iiGc9BoPYBhD7H9pzkTuIp1O9bwVmVtK5JSC7bCRTvs0lQo5nBJVfmVdx4Ac2km1HqbZZDKtMitUvqXD9PcTsQArC38n4wD6dntC5yKKRzN0ZCHOMopG3PQ%2Bw4yG3nkzBleVw%2BXaQ%2FvZZA2Figi%2BtpAIceV7RiCs8jqVRF9u%2B1A4wR%2B7xuQOZtRoafRFJhHS%2BUjd%2F4EiWJeMrH3gbkJa1uXj4t2nyrn2Hqyae6%2BqFuqvTMO580O57ilR%2Ff%2FpFMqrB4yI8yUnKeZ%2FuaZtWDIt32m554kPJoaAFAUzH1YsMFZibnF0%2FOB1HEiAd2HLBSBudKq%2B6VmGXjSjgIwh5aD%2FBW%2F6SiP2F%2FlJA2nM0OyTkdQssrXpeOOdO9MuTfKVBwSUtt11mswF98ASno%2FsfL7GX%2FlL3H2VdOrTjnMrbcm0CLqZYLR%2FNnvd3%2BBQSD8wGpCS9TUYZaP5vr18MJno%2BL4GOqUBjiDVGY24mB5%2BjxskVxLTNSAtNUU17AdD9Q2LzMgl6vXZF3LEZckCnhySQs6dOlLPk5E8APWPu9Mzq4FNOPFYevZn3uzZe3RM51j%2F6YhIE2x53Mi7qj8SkboGTxXPDWZ31TpkQq4bbupn7qSsbMvwu26EFTfAc59GFH9AD6RiUEYau2KagcoYk4F%2BrmopZJZYALdqCiY7g2vbzOeblhhjXLVgg4XX&X-Amz-Signature=03140f8bc265c446590964caa957b911dfeb16d63d647f3c0b7cd9358cf4c0dd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXYNUVP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCID4gvTzHezYcFWO9VhHFUy%2BgF%2FZW3YNmbWFINk5U87e%2FAiEA8Ouc8wso2a7rCgami8mVfAvZpOjJVrUxZ3BF6%2F7UK%2FMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJK%2B5tXjCz%2BONHevayrcA23EfA0ZVD2MlWcHyMqPuH2fA3Ee60lhAkQrzoUKLDNEE1mMtynBD8pcc9YqqhRTv89rJXmhKqeMGRDspw3itMuUm7wVCR8YPBPSgbUJ%2Brr5Wo9KFeW2Nq8GpNE1mr4hoMqbRDKK8cy5nFydhQYijzKt%2FhwFAQG0P5XhrLk6unOvTqyb0jfRZYiO2sqREfrSyjQHautnkjrDCp46a7QbXlKpba4nn%2B83vK%2BRfOT6PUhF%2F3PI6fq6EiCJM%2FR%2FoOFnngts%2ByNpju2YiRVsM67PFoKkulKaSNj5z5wNth3jno3rHEQeNHf0Drptvp%2FuQFjHijVtlEVPb8sZ46GIvGMjpzlpoGZSyAsJ3D6lRg4IILpGfa%2F3WsPARVF5QFkd4S7LccZ88X2QiLHxApsie0h4bWV8vum6sq9zWTomF%2BfIRmiWY%2B%2F7Bz8bapnrO3uzm1oHcGN%2Bo%2FdcOF3lBR7guIxo97eGx2W5pIvUcNdBMvELI7HY1Rg6ZT2gpjaj9ifzX9LuzzykuojvjuNXELz2%2FA6Cx%2Bb8ZrR6v%2BtQEhZQnkVzztqmyIAPJT4gjEmzFTh1OPopWv8R91kTXFPfYdBgxPwxbqvte5h2x6cL%2Bte56w9CXHqi7QVSxPcAfvuWyIGLMLzo%2BL4GOqUBI9R%2B0aeUMNr2I2nUZXPx9C4AFFz2z3zFPbZrb94%2FJMVLaaRsgkH7kexWCgVJyy70iTdOGl9422DgYkjZfs1Y3qk5Bmg8P6doBX2rRj5ZRVGZV5VcCMnIu7LaDDwzO05BuBowJxmGrg3wv5F13Me6LIhSiEV8cBgkIvaNWlUW16iRzOFUu%2FV3qDTrtQ77C3N4Og0bKWFfG4Jnwei%2BnxFmk4zz9FlU&X-Amz-Signature=60870d9d2196cf9a72d2498031346e06d9d861778fe83b02f754660e54d35727&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
