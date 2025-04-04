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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD3RIVSW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG464f9zf0eFSnfNKVuNmh6rdbBn2DE%2BH99MSs690dS3AiEA0gtvx2%2FiQJTPEJ%2BgvD57%2Bjp28X8m3ouVTuSP41lsFHEq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBxiCtkThRQlaowj1CrcA3MhwHEL0CPiEZj4btt5%2BX4gY4Ihtj8%2FpsBhSratER499VqNG2DqW3NEuQji9GGGApu1OW2rY7yhgEiyb5ISSgjvTlTFGjjifQa328OJzjoMclEKFGpQvjkV%2FAFJkKmF8Jn9Nt%2BJRV2c08bJERg2AXWVCvLBBpEr10Pp5aTpxd7MXt176beiZwYkJlVGEpD32r2hdD10SddQld1U%2FPi4Z3zbVll7Nkh22273atmL6dG5Z1ke0sqCslvevD2LPXoM7CxqeUNNbZiC6Ny%2FL8zcbcQiJmdc7lw2S4CifCuxBcOOt6cfLJddTZ3kpv3JiK04E%2FiHRcW8O38gldhQ8ty%2B0aeDtUcoL7pb76lbDszajtpkS16ixxSzCdI3NRR0TFwqJrrgIqFQ%2FONuN4XAEoYpJwtSB9%2FWyRNcRRjzMj3fK95RB7IIqm9qwprgOYXprFwVOFGROyrdDXE%2FIOql%2BV4nM2Q9JS5n57Hg%2FJhbg3dSHIt1QEtCbH23KTQA0qK3V80axQrBex7vzfYpKt2Vo1MuPP7xmsOWWOZzwH9gU5DiL%2FvllOpKAedbk%2BSctTxuf6%2F38TKVDVHRMPaD%2Bjzyz25Cxrh6R16pQS9dsLSENAwp%2FnvY%2B6hQpwq4jxXzsC7GMILuwL8GOqUBTEtIn2AIa4mYiuVI3EycTAmww2Gil1a3adD8FOTrtpxnQTl548iInxi4lGJNV721uA0uhkbqMuaJ59QRuhpdYHJTvq%2BvqUqaXLdClaoFya7EuD2N74rNjbuzwGmsKyVy6Buii4aUhWninRghQwu25b1YGrbsxrWDUy1vZ7MaM3eYLmAqlD4T4DAXf0APZpcKlYjTvA7PAW2mk0rxRugjxScH4Im1&X-Amz-Signature=608eaa1a3a2d809c3ac6030f37081be2f1a4097595df3fba2ee24a847861aedc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZ3OJZ5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqf4gqEi2FZjFTAMIvMuMVOY7AGsTCTvSUcxR3f2z7DwIhAMcDylhmpbRjEglLHlyF3RG%2FyrYAkDBolC1l9xvOnmREKv8DCB0QABoMNjM3NDIzMTgzODA1IgyMW7RiLe%2FcNs2QLoUq3AOOmlQlidvD%2F4w9Imh%2F7lGpdsJENOP9pWg0HW4ymehmynKNzgf3sXshySC9EAo43lkv7xrznkI2zSnl51pJ7tMYU43LOAFLpWnkJP6p9w5avy17GFqdzkhDZWCCPKXm9qyB0QFBB6wGnGCuI0U3FG6%2Bkg61Qy%2BqVkPwYeq2ThUWBWMpuYQ%2B5NPpV%2FqYHCvnW36HwLFE2LehnQVr%2FhkPXHvF%2BmShyBDu1OO01g4hRS3ixHEn5wlh1FDrvN5jD4P1Gb1j7Y5KwGVMH%2F2pZd4%2FCgJWlP74it0RrVjXeRmRbM1NTfskBFTSfpW9A9ATJ8yIShPSt0E887QbXZJCjkXQf7JsrthV9SL1KVrgmjeN5nvKuvMTBQKpmYgeSy5O%2BmAkUknPG%2FZC8gOIp69%2Bu6XRGvGCSiUGhF1Q3gvDCibd9TtD%2BxnZ6TcGn4hwvUKBC%2BBVr3ZrTrgFFc%2BR6oYWF0Gedq4Qy5mNUI10%2FY1Xr4q8kLrdlpdoJeeEOJh4T2NPaw%2Bygxwh4OKSJzXAmITMyZA59c8fJWa%2F%2F3LbaRR5%2BPqxVLYAqQKOecA7sgqZ3ykpWUONk%2FUORwewf%2Fs1qwsl4vuDrMI5EEYWx%2BK4cL15xsvSNuF%2BpAvygfYOMI%2BhlevDMTDt7cC%2FBjqkAXQHshdukfcBEXwhiWNtHjCRDunnfGf%2F7otNYb4tYT7w1JuKaUUC2%2FOG%2BZt6Z%2BisIZBQ60dy%2FyC2ZV4zu%2Bh%2FdcrS4NA7StnBxjJEbLL%2FUEaHuft%2FZWVe%2F%2B4KATTtuXMn27ZUc8ASuEd1eCi7xIaKFPIbqR5Zcr5bleNjXu23q3D3WDTKgnsQv2pntxNrn%2FH9k%2FCkr8%2FN9zH13jgr8U9urgt8CwwY&X-Amz-Signature=4deb8d8f2f262f70f30ea2de46e0958d8d0e6ddd33634e22fb70351437b55501&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
