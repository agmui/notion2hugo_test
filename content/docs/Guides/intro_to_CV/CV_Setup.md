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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4MUWOP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCdazE%2Fixtp1AXZv%2B03DbQRNcAq5KaenfzJSSyLn7s%2FGAIhAKaPqIMjyB6sf%2F6qfW%2Bp2ZTiZoqiTZa9oHS3ZEV4BV63Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzKNtxpZReKukBs0uYq3AOIVLv%2By72D1v6yd37hDljL7f11tImv0sn0yrLUDmMJ8G%2BXSH3awPH2dp%2FiJOczJ90DtQrbKj7wHQIYxJchec%2FkpZ82Ny2ynWdK0gV8qjbx7PjwkYzKqjwZFTF8j%2Fbk6r8v4Rl%2Fn%2F8%2FkuixdLLN39KYn0TZwPNoSN%2Fck%2B0ub56%2FT%2B82bE087rs60ZIoli6066ZsZX4BwHMszHwbJfKeufS7dByosXk4KViSsXKqDS7QS8d%2FhYFP%2BNZqIJWpJqbiUxdwQhDXF0KiGiPCJJPjXD9jgzimgEM3zaU3n7GP53s3nl88l7VSiEQ3FblGKIiDX8%2BMdK64R8by7syNALvxEHgWLKitp3Nxn2rJXOALVQiUfYWoHfB1h%2Fcdb%2F7bFZTpLoFKisXdBP6JNRuoYFEn1AW8oMon9FhjpIxsW5YA%2BBSYNy%2BCZXgs98EBk29p65hw4XmxOn6l4YpH%2BlgfukV3o29WARhWMCmJamhuuR2ZgI4iK44nZbBriAgq4y084IMyPrKGIP%2BfOBfFrmt45EH0BJQifew%2Fq5%2BKUOJR1XAZcJRlgcEKejwipYvebY%2B66ej8GcC3d2pmP44Ey1vgFrIUPURHAjHNRqr%2FpUTwzRVCS9yccpFgXeVDykeXaU1zzzDInfXCBjqkAUgbRcbkoRzRadIDNZx7fg%2Ffv%2B2N1Pi%2F92JvcYmG7OlOKTFKa2RcnncCNOKHcjJbovOuG6CY6uHIv0JzBm8pygV9T6hDZYIFxWGhrd%2BYhnrMDq2D7o9pYGezO4xZTg5ktG73UG0QNCMvHFZpgYlVk0%2BSqU85ZFKFS9VSw8jv2byIdbTNgBRmMC1iZwr1ppdz%2FZBOPpUWdsoMVp6SZ9ifsG7hGH5u&X-Amz-Signature=a7f15b9329b913235caeaba989f5b348114c5f2f3f971809b572e501f8e3c680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WEFOKMC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBHEozVNoInoynSRMpeh%2FX%2BYrV4yEbx%2FwPTOyZNYTgkYAiEAomQHgQ2xQdlyeOQjLd8aWsEPIfcKcFMP%2FYqJLNUQyY0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLDBj0Wv%2Bugj4lCwVSrcA3RUjOGVP81ZsSP61gV4UYyYC9sJO7mNi9no4m%2B100Xc8MDAJXz7rRLB%2Ff2iJQZNDDXJO7lJa8tpY6GEfC1IEUL5215hCL%2F6SaSQypYQeuJNfBrNYaja3OHeinVqb0tEVCbdWN5w3ukhoVsLj6yaklTMLgBDUMbDJjdDAYHJo9YKa%2F2K7G2YqkEqIVK0cdd7CGCReKXg8hU1cH2DxJKu8%2BilXvfnb9GwuqN1FibV18sM9QPOvcpaGHZoqS%2B3dchWm8kL3w3T4u5EnHg%2BCtfUxL%2F3Pn7zcvnmTPJZEVostso8l9h0v6YA0kpAUiB7OKiylCeFWvRe3T1r%2Fw%2Fztd6364E5m%2F86kNtFhkovVaDBViv8uPT15KNC5guyd6Vm2oKmlinqzylitV3CgGug2b2MPmj5g%2BebgLKe%2FIQ1bef26lq1nrAJRw3N11LwqS15Grx%2BoDy8xZbqW0zWT0MknM4r6QKTJjtMLmp2VvtKJ%2BbB%2FUyKasNJKv3y8yUIZsxFFOL1GD40GZRVcbW%2BGqIQhzry2pvEkcHPv5SlTasNdn78ts7J45bZuSLjaUfhHGizzQf9jfTD1idxmX6DLdflZtUZWH8wseD4jgwhhyOMo0KzsM%2F%2Brjd3Kxzdgy8IvGhyMMud9cIGOqUB%2B09VJUimNIzwe40GrYRK8tZ42a6mOuK8LZxlkgfvpND16tMYrEsxVOkkyM9VHLqOZ71n5cvoaNdYefLitpRYb50YY%2BDo2bPfWAxj0XnuDaAN9n9e3nZYxABwNMgkC8doWUH%2F260148sXge2EGYy06mSHls5WCNnsQismiSco%2BAkPyfx0AAU%2BB9MiBMN9hs9Se8zCLklup%2FLAmlqLSRaXM49wO8lc&X-Amz-Signature=0fa4b83f68fa2656869aa2008bdca4fe121ecc0056c936931fc1df4f3c36fca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
