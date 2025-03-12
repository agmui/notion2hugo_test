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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLH45SH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIEYSunjLRAEuG4qIkgnhUSinBKGrKyzR4Ww9%2BInWnsG2AiEA%2FtOvAzTsYTuohuTwTSVpcTYhUSs4G0oPqY%2Bhe4DY6zoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJ6D6lZg2O3vOesGCrcA%2B14TEevTknlAgTSeOi5KF%2BDBNhJ%2FyBD%2FpePdMW3o01J3ron9iLpbVeeDnXDYv78O2Om4BCxbFZKklYw7NaReCGMIRipV47lz9c%2BOSX5h39uXXWz%2BbdLk953R0MbqfV0h6Bk3LBD957n8yVVS9wYu4w1cf%2BXMLmAIxZ57V276UaxjM2VIgp9M71liPPd1Mm2BMg1MuN5paQegFLZ9yBwiG91WgZrzgV2Qu54FoHNHQTkohd7mjJ%2F%2B6nZaiZrArd2cW8PbhbL389BAJQknOEnmkr%2FVe5%2BulzNDgf54moV11Ef8ZaXMF2PK0h%2FFPdeHbCeeIVZTX%2BYVIfSTuLD1i%2F0Bkrs3qWuMRUHn189IHNoRl%2Bn2eGP1vaqYJBjHihxbRCMPxc9fZERUMmSGM2Qv4rqOAPUgZlvRW1PNpx%2BJN6%2FepGs%2BwKR8ELl8DTT8JZ%2FaK630aGtHsxBxejaVbaYTsePYsFpYkjZPhr%2BHqSjtUVbh%2BOgGUYQdrXClpCiQiUiQyugwuYEkgY7jyMyBk9dGpJtrwvj%2F1vhpRV6JVSMFD2MnzwjAxPO%2FbdXyFqT%2FZ4aANVq9j15zNJ2GGsfp137un67kcj13RWzlqHnyg%2Fiu7Tdccvk6OqJ82%2BIRPPMJIqDMICOw74GOqUBdeYFL1OJVsNj7CmyTs%2FanjDxJ1MYVmpjkZwFQ1w2kYsltKykupx3bpWJDPFGmQLXd8r8duo0U0Kv1SWlIJT2zbVY8M%2BLobtwajs%2FNiIEPl1zgzs0KXaH6MsYK1M93kyItARpsjbeHgBA0UP482rxgO0LxrWZNmO5LMLo4gqMusVYN%2BQ42tDbhoCypxIekt18cp9HrGQwYDkmokL%2FVU9tEYsJqaJv&X-Amz-Signature=14fd74f51e44952ecc72cd74bf5767d6710d644a28dbaad9ddea1a83eb385f99&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466732JMPFL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIB%2Brl2ThmrA1uM%2FTy7HnCkhGzfC3jZpdYVizTlWcGKRGAiEA97dJhZwxwig6smsoMhrAOXgpFusQmEWBpNiatDZVEf0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObDEXdVtBBE7FsbJircA3UpcguZKYIgCJCll5V3uEgGaJaM%2FLx65g9aOydvwVM6BKiKw7NGwXD%2BV48sN%2BV0Ug1bcf5ldbyLFN6f%2FhhcNc5r7GVxXCm21J79zH3tnUk3lrjsdkH6FnlVnKTG9mu52%2BbPuehPFxKUY3Xp%2BKhbU8tsvl51U9lo%2FRfumNQQcm%2FHz%2FsEMdIbOLfA0tMMnVKPaWMAve07EVRjzOdkj3BIGk7V6te7MO8vrdIdn2cQ%2Bb8pyXmn%2BUPRmGn3rCWQMZr9OuRYfcpson3MOpRoMg%2FyT3zIjp92XkhDh9tB2Knb5h8ssbZrk7DcOo%2Fbxu6vCpM7uO3%2BK4g4yzxx0M9y9k98FAwiNuSAZJaLgmLeO0XbVQ8Lx1e1VkAYH%2BBW7ooiFqzhbYUszXLWlNRCTtHNg%2BmOK0jl0n20KlUQAiQv2wYPpr6N%2FkAgT5%2FFKSrXGCWu0HImhLxUyLAzzNeKCKz92f%2FzpkZKhxL%2B2UH8xW0JfrJRySPsndfuOBDvZQ3vaN4dqxqbm0stPXN8J0ddt9Zgjb5XME%2FflHIJEvgW3YN3lOGA4lmlZBWDVin2aXwbxmTgcIWOGxd4rAVAKTnpKnyLC%2BGnbs4tp6ig5gJvoW5K5v6hP%2FUcJD0JWg5RcZ5pXAMdMLKOw74GOqUBLRIohQC7M%2BFaxGqWE2M%2Fv3Gm6o6ndlb4u5Yqc5fTg6CbMj5xnZ7Rj%2BWfWNV56BCdRRX5iEi2pn1%2B%2FvdYbb72iDXjZALH4EfIluKLHThUdrWAGJbCOUJBTZKIIbdf63IcfadixWM3NWSE38vV2q1MW6lXwnhvD0FQMrSmvyVHY50rX3mfQCWTY2bV9%2FvFBYdG%2BgicGnQaPbqNapo8tdaBTiqwky09&X-Amz-Signature=69acb0aff9a78b713a8109184d31fb95dea013d1f1d10ac2706bdf977015a9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
