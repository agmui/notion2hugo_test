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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FW32O5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4vjFOhjluJAfYnDOTUM0ZLTOfOIQbR7hbzemLHjDEVQIhALDSxRMUWy%2F9cVYdxv6NYCO4cfae%2BWvjwVdIoMIKQ0TmKv8DCHkQABoMNjM3NDIzMTgzODA1IgxACYL7nJ%2Bv1QW7RhQq3AOBfRTgp5XhZHS2v7VBCC3ougv2NiDlI%2FhFl5aL9M1DEvc9Bl9Ahtu3j8qvhPCA%2B%2F9o7YZSLFZqyw2giHMhuyFxigVjxFyfQ1vf%2F5Qj06bv6AXP8AtzVCxpCEFDxv%2B2FupO6d%2FjHANc8Gnmc84N2lL968jLTFmuvIA6O4NtzwAL9JdrcPtbs90bQC2cmk0bbtsF6%2FeYUQ6CrMnp1QH6tYCNCzad1WP%2BbLnMtId%2BuAkwgpQDsAq%2BSrCC%2Bv0C4UTcB2TK6WkSYgh7UXPVvbkdshwDsJn%2FMop%2FgELwNPpM%2FCFPw6hfQOVfcKRZ69kykPNZd6yV%2Ff6euHPKPKhpZ0HilQpjJKpYXCVYICXjKSCfokeMZv1Hs2TLYAXYo6Ho%2F8IlQMR5azKN6OSUPM35YFKjGmFUWjYdU2EhE0fpZWeC6skP0zF77zNpUwipDzQCpJWdlYOa8BqwSD3PIEH8gp%2B7traPCR4fmKJSm9JB4td6fezYdCJhYzbQutBWay4dcS9M%2F%2FqE9VKF2DDi8KPnt5%2FctxSmviRRv5nAoEKmH7GDEkLwbQU%2Fajw0xhh4frcw5K62cB9OqVDocyxlPy6VVNttXQjpNrdyX1yf%2BnYgRlSuVucpqbdtPRtdhHJ4BndkmDD5s%2FPABjqkAZ6kQ9rIjSMdMA88I%2BTVSDsExxYwk1MNCrb3YVqLy1I%2F7DZl3whoS5E9VL%2FPdvz6zZ%2BtksWujotWWHI2w3y8L4N09jcrnQXsXgJ2D3Aa91x3Inw80w%2Bd8D2YRFk2iary7KMj%2Fa8HO%2FuuL6xndmdcBewtNuS6CWNyG2cDP4v1zUizMo34Idq02Ms80HVlG0Lpbh1FVYQSWsxA9qdyg8oc8YPV5d4k&X-Amz-Signature=6a21434bfb6d0bee2f78810a1d4533396359cc33ec4083d5ad908696f8937577&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOW3U63%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4XfrUxJb4Czcf7%2FmW7Z%2Bd0a3BkM2CkJ8zB%2FXkdUcNQAIhAPmMXkZn4Wpn1ebXRHicOfBcJ5EEadjYI3MP89WGm%2Fs%2BKv8DCHkQABoMNjM3NDIzMTgzODA1IgwguYf6J55%2FteWxhT0q3AOtbcor7RQYllT2MznG9P4TUXKF8WBv%2FrHABkTR59rhccckrKEAlEJHP24llPfxb0u9cR1UmrOfV9A96Dk4SdZ353NYtda2rY%2FGQR3kCjfa9n8d8gvMe1Lr0Wawsx92C%2FiMN2TvIpqVwaym44Qt8KntdWLXhz1LK7I1DuaQZmNnfsU5MOx8RygSZoNVgRlu%2FxMO1SzulsvHAcTR8SkJxKy3Qi4nOKAcI%2BY8piYXo6U%2F%2Ff9VTE%2BWgg6JTTsyyFeVL06s%2BU5XQ0l63%2ByVCBmrLcuyC1d174t0XIY%2BMqX11%2BAOM2uV0ByX1RWRsjHin2Xtb3wsZp7vCICWsvnNzj9PTYPAHXuPp6ZcYQzpZ6eXOnxoPpadHEf4n4msjbBI4yk%2FAftYuaZH2pklfiCzaxSM28tLLldLLi0knEaEKvBZkCO%2FT6ey970IzkjkRtN3fmD8wjvFrlkerRm%2FzQyRIgkUCvcYmTtkeEmuXLwPOkjT25YeBIR5eYhaD%2FI9a7OQfpZm%2BsUb7MyBB8RgdxQ8rpBcQStDxFE44F3YSg45LvpqJcl0%2B0AZJM42bo2PJ5Xi0PAhSHBDwCjAg2RSs%2BHipyW%2FnVBf1M9RvQLxlRCPJck2O4szqVJ1GWkvKSOI95J1GjDSs%2FPABjqkAc7zLaSjIAGOUW98vJqDFdSERpTzjRJ8U6%2BHjpC5as6592t%2FORqECPlVcl3BIe3%2BX6yg1Ji739qMWFNhYAnIfDsvbpgvHu8DQ750VYEdrsLz1M3rWZ3DBoAPUUtF%2B3R%2FENWYNoa4GuorphDHUSXbXsFEDyBPwIxABG08%2BSdWTq0rUU0pOoAAm%2FhIdJG%2BQ6FB%2B85Fz5WW%2BdjiHRd1lvZCIJLI41Iq&X-Amz-Signature=5cd94461eb8cf7d41172494dcf6e92ea6cb2cb7dc6700654c51def6ab950c3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
