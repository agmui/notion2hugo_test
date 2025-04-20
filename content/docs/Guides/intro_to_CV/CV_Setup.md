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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXLPMSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDY50DKy%2BPxX1EhK0BWmc7W7Qp%2F2EFa69lKE3Q5KR8KYwIgFZH3uSyHwfA66QPaZPPeSg4fG6FE5cj06SqTfIfhPDAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoRiS%2BG8tJGlzwUESrcAyL1v7JN2y00PTQVm%2FSyA69shwjdLXeA%2Bn%2B5pzqvRqLF2l9Ww8Kdp8mxCC6STKIafthMhxoSyZ7q4LpivtrJPjVPCb%2FqNsR5PY9JcubAeGEzsDhXokDEHTMJte4DtXtU0p3FGf2tJTOboHnhUBgE2hqolIygKlygDaPOSMxUBXv8C%2BTsjfEMDddvneGoPzzPocAUNCkMPd54gKiHG5k4lqWnraM2ZHFsyA%2FSRFcKQpMURa3L2XXdcVim8KmgWWvgwLpccHbyMqTHsr1S%2FDWJtY8HYRjNFTPyGrDhd%2Fmnnj%2BTfleT3%2Ffi%2FKcIpJ5UG2zrUcKMkitBC7vij8KaBeiTXJHhStZYvTji26CUHD6nROHlm4SVqku%2FxO6ErVnvelXJkA7cePW3zvpEmKqyyGZhn86mGefSPeQdWrolTmAZZgI1aupRkOsKU6EiMEN26mAb5h6W2lzY75yPtaUD%2F5a%2Fhit8cYepeca2BnxPl8o%2BTCIr3DdwFUrTPor8RtcaSUbBvzWZT2sc25dS0WIQgfocyzktXW0%2B6M30YYyAzti38vwdwsR2nVUnI1Qe6OC5hPUWcodKnEu5L20wGCBULVuI6jI7Pk0a4D7xfJgdKKGMCSZY0kjCMFPzL%2FL7iSp4MNmBkcAGOqUBpjtC9VE53PLD0blTMBN5odIOMTG4KIlC18RNED%2Bw3Qu71DnLFdju9THaI8Kr2LQmtBP4%2BfHH0KwnhcHXUFTT7QqfSogDzD5ShRSH6xbX%2BuT0EpE4BlgRDs0YDNg%2FWzdYwAXFu0wumWCoOamN5maVfA%2BGxo6rGhxPbgOad5vgHNj0a78ynRewzxLqAFNCDZ0vo5S7o1Ed4r0wOYf7keU7fQD4NvfH&X-Amz-Signature=ff17bbc26f273fc6b522e15235b83745f6ebeda5e24547623eb89474b6bff7e1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THH72OXX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCzACSIGlUpHg%2F9kYVFqu5Yy5%2BLxFG2AQf%2FDuspEdFh0gIgOUvA5xs9tHELGJitTj1uLPoHlCtN19fdYb9Tu3kBzXAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUQMd%2B9INhpH940SyrcA%2B2LAcIHzhL%2Fj5K7P%2FdnfBDdJEsmSJAd7oBucFSHRcjWruWclNIXt7rWkwtw%2BEQum8JQWFexEhZaCc7qgf%2F5UTdc3JD9bsX%2B3lFFT%2BSg%2Fc0eFgSMI6oisGlTvidHkj1sZdz6qQXzhEen2XLRA7BilYT8ZJSZgFyjiwRA4zPU0MK8xL30pX2StQ%2FmsOodA%2BGjwpRBRnTb0L%2FZ4Zj9CrD4q8xwnzMcjV1aywneiGLn7IBHZtyNoUiCRATkP1S%2BzJyIjGNk2imYQmaMM6%2FRJyKQe25PX7Y3Qeeu%2FZXGjRiqH8uMwmg2VMEGtgcju4m58hxivMMDluacECjnH0%2BPU5GRMxTKHCw5YhA%2Ffx6xdlpLIfD4OpKsSlPsb8Xg%2BXZhTafKecuguSfrNiDMJytY0FrW%2FIq5K4v6DRCHbmx2SUwq42yhuJaqqjzcUBa6Qx%2B44nZFlhEqND1MUXGLf3As3W3Y0QDZHXWYdB9Dgs31qSWHRr1nfLKCGWDrqyuxdWRENIVc0%2Bk2SNbAmDpbRipx43HSQbG6Y6P66hP3oN3nVPaoHZiW3x%2F8%2BtfM%2BKp3QvjDab2%2FWXhH1Q0HvP1xiIyAWpGCqELG1xopDfgvWk4kBVHSIPq8cCPc1PCk8vo57yMNMNeBkcAGOqUB7SH21GcOJrB0gtL5Brddta2vbaL1%2BAaYvSQDFYB4HHhSMF2tFqkg6iXG7sageccfrZiWwoApNtKPVanRhDGfvmzW8vEHZOJi7ohJvcs2WDybzQH%2B0JymBsZJIG3pGPKTb%2FZ83mtpU3RdpXBRhazjoztB8dD9qPMg3cv6fULUrdnSOcM5sR3rwz%2BtcL3YsvDAERxJ8d9kJXG32lz0hI8ieOj6cbXx&X-Amz-Signature=f341bef0eb9badc770e9dc70318feb54418b2b3663b00c22a842476c3888aef3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
