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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KO6SG55%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLF4VTshvV9A5znggWPzjg5KZ03KA9SWiF4L3om5vd5wIgN8NGgGN33qzsp24XIQzllzya5rUlABof9HGKiS5CJAQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJh7yHQQpP%2BxfvUt4SrcAxDb2OKQijyplRm8o5AxzmdAYi4MIUBqnU04utw7%2BQgKdm%2Bf9AT1NsAozbnKkMJOwQRYAt1ggxUik7Cs23UlgNU6O4Z3vN2glZCxCpHPpCtcbMs60hQ3gSxHe%2B2GMd8sjPQk%2BdcT5tLf1jKBLpnyYRPg53IE3b34WEL4cMEy%2BlCMG2esA4sXHqeMunOCcQ1yWYgIeeuGhq%2Ffxr5PnH8Ioq1aAzzMOL%2FQWAQMMHCuUcu%2FqWSWsVZ03mGEG4z4PZs5jcWVAwgmk7H9yxdqHgM7%2Bviq0VlfV9%2F%2BtYhZ0uTUj%2BVjgS%2FR%2BPl0bUNmzu2PagBOZ5llagiqUAE7GyjX3qoYN6Wzt%2FAKHH7lvFtAkFe4z7EhWsFzn1lX2zES34niaqZORJnMSt58rZk7JSoAQxJ34SU9caSCLeNNjee%2ByUyQgJJB%2FGrt15uATALLWI8diqPZD0MXIrLdR17eL26q0hYEg1z4%2Bp3rw2dUb8K9TDtc51JaZxw1Hm4o54HMcYOZvU%2Fjk51ayDQEkfIOYnRl%2B%2F3r%2Fy%2FfamPZFoI%2B1LrEUmgu9BM1dHWvggUXbg5Tew%2B1w9qcCbrC2Y6Up4NNQmU5Or3m54m%2Fp3rLZf5xnkh3W7WVmbbi3zX3WeaPEJVX25%2B0ML%2BhjMIGOqUBnktMPiUP5DDJs9lfBm5LW41ALzf4CvS4hdznLiOSKu6lzN1MJa%2FGHVb92gx81dZmcOvx36CT9dwInweosf3TIRTnleGWmpq%2Fd%2FdIRslsj%2FG7KCy50BQAGd4s9ZIKRAIR6riehOu0HZOFjWcd%2BDQjPyc6i%2F9d1Ab7LTQa6vUmbc48HAAvzj8fHnNUI8%2FoEw2QRH%2B3XTziLppWREygJyQ2UIrxjGUc&X-Amz-Signature=66c85e2e3b5a75b5fe87ba5d5c20f26b32949da01baaf531d912b1b8ec48f282&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWX24MAV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7aC4uxJaAjsQoGw1bpRQCFh7MNIf83ZpZVEcz%2FzAO3AIhAKuKM5ttZKTWxMxlQDL9X06R95VKwIJNXf7kmPkszvSpKv8DCGEQABoMNjM3NDIzMTgzODA1IgzU7Z7tCeexU1kDTyMq3AOmlezaDpliJfrZvraYje9DQk8cyIbpMsuuV9kjUABoNnp%2BjaFdO%2F5wPhGI1tE91M8w2%2FlidWzh3F9P%2BZMfeyJZiAFnvCtEirp3CUVTVGuqxaSrGxPgAv%2FH2%2FqA9D5jFDAWNtK1bFmiMgLYvtFvDFkVbzDX69yFQrBcxwzN7qClyhSXfCNZFC9TWljNLsGUTQD9IbDNSRDAV9VLVp5KB5OfMeDLyuCUUl7heF3bEv6RMPqojHzBCTw2T07bX2rv6DZ%2BGj8Y5eejsPBgIV7zDIwoBrkzOW%2FDVjGN8bCzYtVHYDmEBtbxkLAFjhIYcxk%2B5bb9FRkaOsFpjmTwrONb0R8XbsSI7r6QkDcQrU2d%2Bh3QL4hI%2BQ%2FPqllh9%2FQ9loGMEGw6BOhFi3xTPCrpLKYmyUjplm62pPwJ%2BW3bYrX3f8L%2FVKz6VFr0BjytjQ2KP4DpNXxVH5Dulstf3ZJClIgHyBDKm8mOIyDMOe0ZmXfdpEIlG%2FF8ejrFxvs8wXbLBPIib80nmozxWR8KIdl4txsoqp79ZhuGoipCv0gpMrJSSWndLufiCWbtVHW3klUoV3YMCI1RWqOrBMZj7s1qVkioi0F97Z0sZx7imJ8VuhIujQa7ruSi3aqQ0tsYvaI5izDYoYzCBjqkAb4LtmZVLgUikwWzkeW0NopIQhmlk6pRrM6D0XDDKo0rZuvXu2YpLCHpKs9wIEN1eHgnjlhYN6%2BrRsLknNUzyPZYocR3HULv1kduRZbGHGIcvb0z0IjZn3CY72dETbsjJbWLSM1MfnWQpU8Ffiete84TZGSPhMm8yoztyMT7bWjVT07H%2F1UIno80x4pDqvxwtRZLcSrM9yDYrGrTfYL90DfBh4Xx&X-Amz-Signature=f04c083e2e618011390f9c15f0e5e8e26a7c2c45bbe5c5a3049c07ea2075d25a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
