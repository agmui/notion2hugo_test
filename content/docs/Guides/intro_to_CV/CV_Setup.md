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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQXKUAG%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDPHojsDXc6UaVA2fLzcgKwTPCxsBHlhXw%2F7Z3%2BemJv3QIgMnA%2B7A5%2F%2BVwaG6lnRWGQWHZulMOruPEUpF4kSkymfLgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH9BQtVncPZBJpEeSrcA7OsEIfHZ6hfyGMH43Lz5eXOnUOOesPClyKTVspxPuBpBtVSNoNiM6yVJOYxivd6lCxwiXXf4dC2Xzmj%2BWXUcSt%2BHHrHkKRhneIrcwwAxfl0AjgCnkkar9jzMsBWnxl1LELDVuER3k0k1MBqbFNIbuha7vsK1q7RDnK%2FzeBu8bKyqSWqhHz%2BJi0uRTVHo7BrEAT4mM4%2FiXcvUzJ5NsNTNMWS5W4PozjX7iounIvNmX%2BncnvYuY%2F3K5%2BoxLq%2FLxaDDL8pT1hDGNoPvqTZDZ3isaP6NkpuopxbITRL9X%2B1macMspdIDQN92nJqcz0%2FXuj8v%2FNk8qyKTG1P%2FdiUi9UwIyrhY53BgF4P4sRkyWDL%2FEbuu7YDiDWcv1%2FYsN5KuR%2FEUKeiYP3ZVLcVs3HOSvini4eYBn5u8oMnY0BvePN3zcMhvvjNEozCGHOdAAJbwdUhLtYiMhBIyF0vTP7eK%2FTDg5p5CbdVU6DAqgL6TFiQIHU9od4IV1ZNJWZZI9bzGJtCTVEh4usyJDOyhl7qzsC2E34JfYag3UejSFMesYxcCGiT6wA7%2FDqrmra7nWP2KUaj4s3soHw1u0GfYCkorDELNPkTt%2BFlloNIpwwyWR6siLwTFvwHSbE4XGOYEfVDMPn7xL4GOqUBQ%2FtbvkUEpr5TUUMBqDHf2dblbgZTO00ukbylQdOcqQyrui9QO0x3GfuQfU00xVxbb0lR3LxdHqu7ApYYfp2RRKLarvGbmeRy4PTfOropq9GHQDgu%2BK5fHtdY4dr2WK0Dz3HziBWG0mfiZepXy7X3kBqe5GiXUVdQ0LUPTgl%2FN7Mmv6cSVRlB9j%2F4g5VqT1RTCzwhAq4bkxv8LsEH7YUTRGF3mPBL&X-Amz-Signature=61c26b350ba698f1868fea199b6e30e7934f80a1bfb4bd303b7620163dda5160&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5N4UY6H%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICcdxEtI2er8APOFT0P5YsoIdxEhqBKP0WyaKnwcISfXAiEArr7sX%2BT%2FrIwGFka9uh0Xq80XPUGHFXMeRP9bIfpizWsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ4Z3V5wUH9klApoCrcA073I%2BfRx9oAqfcGDFi9gTtdwfcblkrGddKYHf%2Ft2Q91%2BN8y%2BdRgWrmUkZg09VPIlm986edqz1TgNxXAxJdeAMw76budh150bBSEMJh6xeooBiH75CPGuZTcbOLk4%2BAPY%2FPfKelTOlN1668UWMpPfmU4ONX3MVhpn44DKaYvRvhNFKJ%2BVznEbkFiNh2iUKJczjoD2G05iOLmh%2FZ%2FX3xNjdmT8gH07dAYBDiwnZIw8qVnZWNL37oFqJpMw3Jp9qaNCOai3oKt3i17JNG6ki28n5afBy8Tfdlh4iakC7cq2LUdPhe7%2FwCrFAvrp%2FtzqIBtacEri2G6wgT23UOYA4roEx9QzpOdNDel0MWEtAhNRVN0WNwdESHNbo83WKUKDR3E1Pp9n%2F%2FjQMJf%2FMgQ%2BVQTXZYtEFZA86%2FUKm76aMp4LyRJrwAj1f4Nj30NvYUZTfbLlV2CtFSiZeSfJAjWCDP7g%2BJ5Ie7MZ3pEXX5A%2F5e%2Bb984ovnYNs1wipKU%2BfECMET3lpHpm1sEb2umFqCkvGi6Zwj9FXy92tb%2Fmztjj%2Bep%2Br6eY6PA%2FZ9o1WAuhOyrjyP2kP0GFqiEUSIiXw0SXMycfKWKvtqHm5lfLHxYRv3dFSEI8Pr1cAD02G6YY63mMJz8xL4GOqUBdfnrHEwEZZyr22GysUmlalCRoGYETy5Td%2FsMSwww0FWq57f7x3ZL4VbCSVyC%2F4cFuVbIgCYu2unKUPXhbN4f57MnqtMWSeCiBCtfxHLP%2BlfQJnW7FVdZ2qXywFRv%2BrhOD%2FKCu9XzajF%2BYkfNrZBxdOPUlTN5dACS75t7TwA2JXYe5BYEoeBFoYZ3MPiM0TlmrHyJg1QwlnzE8kwTh58fnXXky5uN&X-Amz-Signature=e8ded077a70d58c3736d76755adc0e55864d3380a9cc176d63c416d03369dba6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
