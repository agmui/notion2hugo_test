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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXM47HED%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3A2FZjJyrujr9fwbf9QJNv2PwImyN6R9vy%2BEYr4GywIgDvCsQ66grjXj%2BXrvqqyW4RolpOHmQMXVkU2a2fw%2BsDIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDhiR2uqUvI3YrHbTyrcA3lJlvpvmflussbMZzXBsJTE5t67GX3fx%2Fg6K4mBjTlUqUnHk6EV1EF9wXlsqpvV29eIEE4IIM7eBtPd1uv5trGzcS4tIKAN6biQ3z479D1Rq8JlYZc0Cm0U8sW%2FoT987lTin1j6h1z07RWPLQbzhF%2FHwGSXrkGs4ByMz4n42vq7WJvajDlXRZGXQG1gfLx9A4C7mKWMu4%2F%2B6FlVYP%2BxR47G5K86IESSBWfZ4UrrBw6clsOCM3CqUyG2%2BR1FR3Kh80YrhlW90Gku%2B5vEMXZBGTu3I9Y4Aykfqyb%2Fu43h%2BaXmdyOBm6gv1iUfqAb1ZYl9t7ZiXQ5VK1biaRrC1QyH3g7%2FPceskEQhUP8WbInVsO1l1oF6pEdlbxRE0zfaBlzV%2Fa3vhmBjPq0Zft5FpLFxYbJHsMeKZA5oLEaVm4ZotDKdOVcBg%2FnVX3%2FI6hWqb0Xxt%2BcppTDwhIQCak%2Bdyc5e31V9lVZNMD%2ByrhkfTNf0MYLFPjG56SPENBPh5WMBPvHpmC8qYPSCAyrDVPM%2FrA3ifDNVoGYf7PSj4EceJQxx%2FVS9cWfF87D8MjskdiX5d47m4A15tb3BJ%2FMjd78zb6s%2FR1vGHv%2BTWQfyAEq2sCZsxvnjPAFkU1PI%2Bjk%2Fi%2BY6MMWKusAGOqUByvAVuGu83jhweWIIAKyoDkfwiPhZIqHHoUropssgxO7roTF%2FJmxICOsmwiQZqhUNgin3g6Mt909UlBAg%2B7%2BVrghn%2BeaWNolOrCmcK8G9kuLR6kVfOy9S4YOtFHFTi8ctsAjeuQjHjorphtbTtL1bxKM8pn8O16meZ%2FxXKMy%2BrkB2oxYVIZkqS%2Bq1ndYsmdwItqwMjZtwPgQ%2BfnWzsilap%2B07EtUu&X-Amz-Signature=6d20100f2439ca0a44fde898b84dbe5e0f15f08cba664076332e8201b5a50fc8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZLA64V%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8T9NN6RZzdBACw%2FcXwK5sfiq4hQ9JBG1P%2BLaDMnCUPAiBikukjyKRkRfr%2FB5%2BbCqTyFW9GtCsuA51JaQjMGHSbmir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMoe%2BXu5fkfaNl%2FuWGKtwDlvnxIWOsWG%2FHOIRyAy8aAKgsOqXrD0WiDOjHnxxe2MV10PqtFOAX%2BnU9V9kHIRhYK2ZIS%2BeoaulAktWLMF7DUO1HrrxE%2FEHA4pmDIXviCtp9bpD8MX%2BYN6mOJ%2F5PQt01i1mrTEIN9NS64L2dFaCrMvsbT6snFQ9PqKEAKfVNeiRPc7wHA29GWNTrU3EGYLOiI47oEFpPhXWO%2Bo51gVCArOVIYihKMGvvWO%2FNZBFodB6%2B8nZm33YGi8LDAdElEXSmSRBT7RHFPAZloYaNx4ZRkZU8SDvQPvt%2F77omnY4xRhUe%2FJmA8EACLSXlL4kPPqzfE4GH8kVmUgRxXmEkcOiVX9twWCcxTOaMBron4x1stk6JdaRKVbq2%2FhY0HVpm4NKpripc8zBtPCQPty0xQRvF%2Bw7GVfqWBy5390fBqw3le8jOSrU%2BbfLa4swJmlsNkzkeV5vOTZ3OKjw%2FZZkePA6fsWkkwdywBoeW%2B%2BY0XHoNmHMD68cofAQmz%2BkW%2F1va7%2FamNWRPbVHqzS%2BzvGppCUffisppF1lFQshYdJxPkURi2oRohsZ9aiL6j%2BinJuPj87OmU9HwyBY9phR0pyEqvV%2B08GAgsPY7Sat1mrC08C9zaV2HdwVMApQvMXfGg90w6oq6wAY6pgFcwWnnFMKpwCcr9vkMvKzNfAjr0gSF2921hW%2Fqi8jmmHnntRMoiqdO5ls%2F2uYosXdmKy3TxJcP%2FxdIFYBcALhCaFVED4GzFCDm4Mie0xVZtVChBLASKIPjmY6wmnlptp4aa9SuO75BA3h%2BiQTnH6gU21X2MLSx4MVMYZdl7dQaFhxXQ6M3yoa4owS%2FvGlRosBrka%2FxrWs9XJ48uu46DdCQAIGe6vZH&X-Amz-Signature=aacb14dc8ae759bda5fe1bda41905ac46d0759a72d7371154955bde4255cf9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
