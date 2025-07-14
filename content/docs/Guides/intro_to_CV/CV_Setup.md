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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUENW5X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCdb8TdhvM44cR4SiPVPSn89%2BuuFHPAmn39MUsaA%2BsRmwIgHwqEJCOzI%2FGApDXT1yxMB912QCPgZJ4fVM%2BZFrVi3PQq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGa%2F98SCV8gOiIYrKCrcAxjco%2BAmhDbYMOXC7bIJ5AVT2%2Fv40Cq8WyhdcI%2FxramoHxQLKb3u0R9q9xvDwHX37JW6giF%2BDaWY6SZH2Uf7inESPq3xLF8sdnO%2FtXoUdVOsuBBf4da1hOeeHJEJlUM67zGAhl5EmGsAjLsqKQu8SxeC8ikqB0S6ENEp%2BAK0L9mWmDs%2BCe0HAtoLBgNl3MADb%2BBzcN9NQTjb0zEdrWYxZDyAkgCVqeUiQe2J9ecTt2ndW7hEU5XBr%2BW0rgoDlQpEDOrdaJmaRij2%2FPkrGoBJdebPFMNeC%2BKruz7KByYURWBaUzkuJhm2a7UuspdZsKJrTTX3JHBftANu0XOcxoLqQtJflWzlKe02TBm%2FALzvzgUyAV9bBwJh%2BgSvIbRp9V%2FGNe2NexqQozsJvgqBPZPzilOgysmwv6RKYKGFrA7Ye9joq1%2Bf5x5OgsGlLOaws2Spxb0uf6Sx9c6mCt6IUKoDwBce468HfFGN2Oqb1WlTa%2FHrhwW6vdUclVuYVMwSCf7fWHzI7hXXA%2F6FypUPjfnSUuUL4lIGsPnkF%2FgtP62W3kC%2BN14cwxjCBGa2AtzfHRLZEaBq6JtC%2FLLOp1kfaYL3yTMUftZI4am5ZkHUCXd61l8U5fCqOCuYVTsYCeVTMOKw0sMGOqUBlkw76DH33lRTxyKKd%2B7ceRYdG0zvXbixfta1Wtfe08eT67mRlYwdMWqlICRwsNl0TIlqVtKyZljfHKItJnx22YURF5DNqpbWyBBpAAGUU3xWwk3mtru%2BPzFw3FMkACvyDRljWUMNMUAqO1%2B15Eh2MJDoRqzLoXZ8owCmJTXWqabFGoWSIDkbxc6CZmjXOE0SCgxV9TG8384etlC0YqVKEeVQx0AU&X-Amz-Signature=071f4c9b8f481b63648cef776fae3712087ecefeb57d26632cb8e71a0091d61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLC5A6V%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDwtk0V52uUNxLp9LXvyUhvSxKr1oKgtI1NbkkR5c%2BrBAIhAMAE7yomiWEmSlEmn60%2BkmSoiTZ0g2%2B5OM9xV2LKbJp4Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyOK7D8k%2ByoNWaNDL4q3AMd3%2F4O7drIK2f1RpHqTBKp%2BGJwJz0499JUSJtmK0WF%2FfZhQAjC8mCGzUGF19oLgdnuq%2BT4P5IFq0QEAgULcWdehRnL88sq4RHvaDc%2F3HweDdDzd0n9z%2FTznaNAdqJiTDaIP7gqpKgNa%2BwcsCmKS5HsAl7Gv4A7jcoYry0CSDxX1wpZktvTnFnyACi4MV9l3Izk%2F35HP%2BjuHdi%2BOk7r5WcjCWyUJKRUixJsNjvodrknrJus4tRWIrGMw6XXLaFTHRLqj8aMGoSQV%2FD%2B9iEclcxbs0Ft%2FsbZFfd1d%2BSmORfc%2FRARavfS5JPA8fVP50cN8Pvy6J2g2J8mE0ykciUGNkXjPjsdMGY5Dxam33xw1qg97ijar80hsxfsCcD3fijR4jzOsOoIDhEIOqM5mVbR3TQw3ncXhQHtJ5y7oT0ybXFjOIWRZeR25nFF6qlzl24zZ8hSbvxWvx58eLO1J9zxI%2BXGrkcWw1CxHbjaMHMx1c%2B1ed9bcPtb%2FbzzauShvNDEqSeT2QpxZGeDxUJA004IVtokO1HJtVs%2BOz%2F15m6W4X3rF4eLpPHb4BjujAO97cvlWSAwlrBxvgQ5W3kFQEA92zBGe4GuGVVGObHB7rjkIyXANXmw0bFMjkBs3DYoWjDVsdLDBjqkAS%2BHRI3cpdR3sUhaqS3uEiIUT6lcuNV2yGLy4R7Sf6%2F6Eawzb6Rx00PyxcnwcitxkZBqPZ34%2FdOMqS4uKe8nFYhoY%2F%2FPhrtVibb0Zxw3YswRiZKDlPmTjYQM1oCHXQE29%2BjZ%2F0N4gGeSDmVUrkWECt0p4OWzP9YRFSz8VgRxgvHMhp%2FT7Z7LqQWulVIfKUeuzPK9DBHs1QTRkPbHu%2FbExRPXfvWV&X-Amz-Signature=5c2ec147af38c285a05bc2168fd72719f6fe2c92ea3a923058a8e4276b2e8d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
