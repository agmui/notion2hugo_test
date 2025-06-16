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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RF2MM5L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIH38Dq8KRGJH9BlyhxXPBw8OxXxljgQUgCsEP%2F201Z2zAiEA6uwcAMy1jzXnjRvTETqGxpjnKxvWNzurF3VkEoydJFcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDC2sdv9t%2FG0HY6NiXSrcA1h8%2F5tkmpPZS7LPjpLZf5I6H0ciaxJhd85eTJlUMeeluDyNf9qpqjm%2BBV712CXHgOnehKDvB%2B0b98FaqBYmI2bvmIZVdf%2FwY986B9%2Fy8uI%2FYNLORIKth%2BzPNlhQIgBuS%2FaLuE17lj7W5vr%2BBIRn%2F7oWBiXeakdQiI0Vkb1uQwOBSXYNhYQ5HEvQeLhcgjn%2BW763haMjF9wFhexaalROvLSU7D2h6jtzNk9g2yb2oUe1Ab4sGI%2BNAKLnMxzGCLOt89q0vTUAMPvXpiQ3S4SNHAA4QbMH6Ig9cKXVUMBEGAbjDEdYinMf%2B5h1sDX34Lj8FmVrZ9j6LcMWe%2FSNWsZYHuzgiRkgP7jlQzcU41s2kwQke%2Fu5hMNgvd4VgVNuf0esn%2F3IghKtvA%2B8tcrj6aA3evX20h%2FXcvggeedhSDeHaC4ZffVPLFu4%2B%2F8MJdDOW0QfrKpbuoBz%2BoifskipIJY4lJvk%2FuH0KZjtKWYciw%2BpPyopS9eR1oVTdvdOXXKtvnSXf92rbBHAiMcZ69eBfzKjRBvqn8QsRiJ1L79lS6xpuf5FZc4sVGDp0lzof1CGc6fYX4rrrGnlbXzFBvYu4Ac06K%2FJkFsVDtfI18HkTLoop8MRkNuhTbKl0RWQLYaeMO2NwsIGOqUBY2OSD4m96nl%2Fw8uP4cMzcwWGgRRUlMpMH68msf6U3Og3PTRtBceXdNt7V2IAymSZ7JipU6oHUgRqr2hUrF%2FFH2yIwzXFWK2oy6P7MckGJvpww0ATh%2BBAqFQ6bwPUpqSw5FzWLGYKro7ce88%2By0xuLQEMWDrXu18QdQy7Bd2TXRQhe2C%2BAlWJtdYT146ABwvMJzxRpbeoWIpj0Cq5BDa4xuQURLKi&X-Amz-Signature=d151fe0d51cba82aabdd2494f3adbb1346a50e93a9083fdcc875976996993512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPFDXXP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDqHWTNyuZrf4%2Bg4B7pdsXZQ8EHNh7tJsebSooSK%2FXwSAiBtFjF5v2yYy7gHXR8MuWxMguxDQB%2F2EOLGStoj94jGlir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMK%2BYEanR0EOS0T1RkKtwDuB%2F19P9SpWsEyxLuGhttC9obzf9UaxSO5cw7VJ%2FxrZUB7w9qlFWfti6erh5whs%2BvjMk%2FVzcXM4WkrtzdxJTLsAbbF33n5DP%2FQBxPDpempd3DF7ABtziwXJkpEFUdM4NFfDgjEKiN4ZQyM2J9zsAJnRplMAPvULiud0YdNqveHVmD8dTb%2Ba1Av2tpWO16EYKxI1OiiqOLpDXPzrmgDPeYy%2BjYyv2%2BbN8nGq4Wlt6fjpEyuketRy3d8k2zi648m65EpeLrEtHvgw6DaRI8O3h6LPU8vj06%2FnwUzchBMzNrHlXBx7Sf56ZifK0aadumK5pF6Egb2OQc%2FHaFX5wG0s5YkeXTyaWW%2FyytJvQFreqcR3bZxPJp%2BmJYcEUuJuN5RXS7kE4v%2FY2BSNISs%2FE3ZnzgbDgEHwWlSXBSUZ6Tgs21usWfwQoXcezWGY2hH8EYeDzeYw6dM7bFDwLWP5BTAQgmp7RqVXqY7WcNRdrHHEzwgatqRYjcEVws56EcNT3jZ9WaW5j8i2TUxFVTvjypmhSUEjrLTnSKix49WfIdcMcoXyYETjOTPM9gIRG7jTx01jhHJJ7DSOklkzfVCr1qsxQuSstJTQgOAmr6KAZz87%2F5u5ccw2Zxp5OdNF%2Bg0kkwqI7CwgY6pgGI3Euo0spzGU8pVP58XYd21Y%2BSHMTDFHnxPse%2Bnz3UnDOPi8hb17dmMHfYJKFK8idk%2BHLewdFBnPL4slsb4nz0RI0GgyFRRHiOHfpJSMqYSxxR4tWGi%2FTxw7snzK%2F90%2FTAStovIjW7KMnB%2FSsShramTb30wuZMC%2BG10MynDTtZS%2Fym8nB6d9JZpQzrVuJxsSdXp2WYJyMO2KCjw2jebljCQWH3zCbx&X-Amz-Signature=0917edfadbab98666b7188d1a9604565d0a3fc328582458d3f8bb0a3fe902ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
