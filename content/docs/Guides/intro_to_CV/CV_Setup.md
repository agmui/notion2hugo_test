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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQ6MZOH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTzG5umT1T9fM3fdz6FUeC7wJfC3O3A2wLuxtzcmpanQIgcABbQl476RH9mF5t0beL4AF7s3KBQHPJOH3VmTpFSgYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCdcDxcpaEDziIaM%2ByrcA%2FrWnbcpnVaZ72o4aDnuGxWBe7StDkJQz5G7To58LXf588FsS2yUIXDZG1dTDZIn90oQbIdLdCIY0HjGUdljYYOnMDKRF0l6WbqbPV3mmVwr4HuZyzv5htCp8vT%2BOCrESGdR3diO3pcd08oBGzqnxtjeTQe1dKBBPD8BBr839yUgdGF%2BlOxhemmfGwc7ym4EyKa2WI6WwZgFJ4j1L%2BUGl2ftHInVDKYwJblNI9KsOUYYhr6%2BKBJvqsixz6h9bBA3b0tl65QR3VX4yfekKuX2isz47YrEPUozIvV97Keaw%2FR1aoWJQVLNt8jKDVNRJ3gUMg8sTAV7BDgiopngqY%2Fjw5OXN5cz9eeK1sW4rEPrDS6aGJbOd1XN4Tf7Gt3sViEaJcOcoh%2FKmUGkpp3wZIsilqETSNruqq5g96JnVQRMt4ccSLloQR0o9zjz0JRdA8mrGcohh1kbYWh9q0%2FGGtNsOhgwH%2BLoi5F%2FM7Fd5gPc5pDt44VffkvmsgtUV6YBNmTZ7WqzJJGHR9c45et5sqjtLCtEsq6tGq1b6G6LP9lswZKKXfUd1FrUXB%2FPSbSfQnLDejyusXW9egoZcHNh9FCHDDSv1CxsPFddLWbshd3TO%2FA7f5YWr276ha4dj4WyMKrc3L4GOqUBQFyM6NC7NY2stL6hllbYeOxlRi0rId92SQ%2BMtp%2FtrUwkoiOtB6pECaZRpXsNpqyQhx8aPMPlKlH8ADxEtIuRP2EyVlkJyOdn7nIOKWRxMcS6sgJRMGJHQ5tmY0mGZkzdaxU28Hs7KYQDzn05tFxBGtjrxbhWQQ47RY%2FveypA%2FM0wIjUmXhKNmFoV6lUe5KuOQysnXG9YmAwTDqOi%2Bok94LxZTDCM&X-Amz-Signature=ac296fc1923408984c5f277ab8436c03df4db4b42dc7e5d62fea50b0e394b0ab&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKN7CSWO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiKtlwz6QKjUkeRvqsp9%2BkC6nDi3ML5odIed0U%2F25FdAiBesKbOz49YKgI6x8cbLLrXAdfK2x1rD0qOQKtaOsTM8ir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM2A9KsoV0q8%2FZAV1fKtwD%2FVaPYi5PqDPA7h3TLAjScaOOqljEv%2FOIzEV147EU9uP1J%2BNGUlKMU7NOfJepHCgn6Gei74owQnFGtq1foThKNoth1ZrqygEcJSXHEPfJuohH2sPxZVVjEZGHGYgzS0KxbkbdvbTjcO4dMzxZSoejkpMS6tiuTrUqamRPZmXqdR0MXO7OCc1BqPm4CNz%2BvrwkW74G0lxPKJVOB%2B%2F6C9wqBLZ%2FRoHe3ka2CX%2BkNDiWLYBOeq3UVVv8S1a8SipLpt7dEIO9OyVRY5Bfd56TFqX25bPJtPy2OFAsmXQ328x%2B%2B5JVYbHaVMUmxk3iJKtde%2FUOaX57qNxkEyMgoLoFUZX6yZEBnHST1DaUYS45HpfHdUSvTupzJQAIHkdaify%2BRn%2BqQldmo6JdlBoDr7j5ucEiFoZIONFEdEymW4f5Hl2BLwv3qeWxQXgxmw7EIy6SM1ciJFr6OP%2FsHOiGhFXhIU48fq4X3AUsKSMVHHOqGIboMSVklFPXNjFZmULiPaFeuOYAsHr8bksRi02YJ0GxArwKPwNKye6XK%2BVnHPrQ7nxb3if2nz42ba%2BlkOlId2%2Ft%2FhuWMEt3P0vUgHN4LeqfGGbDET%2FZdQ%2Fb1OeBZthKpqDtNQ2z%2FX0VARTYv4fOLIQwjdzcvgY6pgHgX4yVAmTh%2B3Gls7PTJ7vYQzszUojW3S5Wwcx1mtXl4Fxd84hqnxLofQly5%2FOdLt00krFRsK6YU7208%2BmuOWdrJv0IiRtORTpXCBTcxOl5WXO6oMjgmkNzXLreupEyytAjH6qoZ%2Fj33p56r3H6Xv%2BNle6onzrHMHYcI2kw8Q3cEdv%2BzTe%2Bmij46b17ecvbihYVbIVGktaoMZkBdr9Aer7G57ZQIV00&X-Amz-Signature=f6aa5a2f32cc488aa3c6284ff019a5245c7711e2f02871849d8fb1c88f24983c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
