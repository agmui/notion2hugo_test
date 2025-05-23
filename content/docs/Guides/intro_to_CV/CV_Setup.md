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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZ53IC6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIB6nbP6hz6RE3%2F013iV05bCN3NXXMTlBqdPvSmnCzK4wAiB5A86Y7o9X6RPVRHECQeHcTjEEO7wo6NBXB9hkceBGBSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMStzYURXOsgS22wRoKtwD1VEHyXe5iZM7soipK5ELfpGBFWfTb89hWm9x77tyySu9LrHQ9AvIBdM4fRh0Wfgm4YNFTI7bGdeX43%2FBTQ9ajgVTL9B7u5Ynr0zxE4qHqBFAVi0SRPr6z4xEuYie7uabQ%2FQKMt3E3xXNCa3NeJsCRAGKbr2oXxjtaaXYduDHk7j2sCfM68dUklIflXsKMdT6Jf0L%2FIJdUPJTlS3tUqNmR1Yfv9%2Fo%2B1uA5%2B2UMGg%2BU%2BweFZ6eiLnzu9tqgwa0txW1jDkxn6cxflDAH%2FIyeOe6iyaY3DAge%2F2FzkE3S4U78OHZzxFvM8KtlMAQupcmGrmyidOP6qdPtA5GUEC%2FBBBqiFXJsOOfKGhSn5fq46eASeJK1rGOv1aC5tPnRa2PbYnr2YnhNVrO5Y9kYWiWxEYIuHIGsKEbHC5c8wdb1X6jT2%2FUFnDvXlnW7UBBxAqlVbMpXYLWBSXfMpuTbjS5LwY8OGyr8tRiHADaSGULaEq2cVLUGWyi85Nz4EyOHWaBlC0SnL5ba6Db2NYoogC3W5gHDzZy%2FwOpxd%2BpS693cK8T%2B9MEyZjwZdaaHRbzCwbEaGjC4qk8n4B68Wfnx9OZjxhTdbO20FABBn3eonS9SEB5MBhTevYd%2BjxtSn0mdmcwycTBwQY6pgGHxO76ZIsSbMNLhb0HwA52sJ%2FsJiSzghQUsB%2Bvlf0T3B%2Fpizo9tsOgiB9Uwq8kRVm7%2FvZF7IqU%2BSB0xaAgS9VxA%2FaxYKmqNLym7fNehi0jLb7jm%2Fej%2B8IJ52ib4wq4MS83buTRkdm14n7Ac47vNsRRmcgDg3xivIvIWadLZgwb9wWPd3HbZoHZfLXd%2B8IIIMECxnje4r8LDnKRMH51tqnabjFwd%2B8%2B&X-Amz-Signature=c362c062f3ce8c26448aeae6eee3ed371bba9049fb21d2f950c84b5a29569b79&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2PHIVL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC4BTjB4TUaTVxIzIw1SqDpTjtTu90byOutWUI%2F6umlgQIhAO5E82zHV2lBkFGMaMtZu3Gt8Oo%2FWMST8TEOQdYkC9SnKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKIIgYZWJ%2BArjSm5Aq3AN%2F55djviWKSqq%2FELxwPghBp%2FSLgeqqA4sCb1uUUk%2B44pEC4fTZzJc6ESfuUmQ5Tcjfk174r7dUr0CaLhl%2FuqZk9ZpHT2y5VVJTw1VCOCHDg0daGlQuZJcn4gwksyx76Ckvq6wu5KTqzwl4Wbp8CdDTmBLYCtlfyXmT1tRYUtbTsk101lmqJrHiPzkcFJAMygZj6yOTEtDXZ5DVHlyokUIQ2LWGX8ZYBuKjJG9CH57SlWeMDTxhxWVCxX4Sc%2FSvI3aCQLyBlzluawMwEozqT%2BW58C6t7jdn0hjpec8gp18M8QCQDLRG2MLTBlKG8xLK3FhuYASJyfXPSzeosTC9XMBhFzL5bwHI8G1Jd802BaXNzUnIfiHla1VGDyVVXJxkos4LUx7BUGzkyn5inNuogkR1BDaH%2B%2FPaERf1CqAFvj5awhnTSEr5SWELZIsUIdKWpmO6YPabGhlN3u2cHneNk%2FBdwIsRdRWab1kt78e5K6h%2FV57KIiDOE2WsPRx6FGiEHiM4XMR5W80Z2CFlunPt2XQtxNQKZLpQrhmLTWOa%2B9xNXVkHchas5uNK4gU2OIjSofBoLlWZDm3hYh2jSNIi2OOCavQt%2Bo3NY0wkvS9p2EuSnV9g%2B80qGvjqzdaLWTCuxcHBBjqkAVvNRMUkKiKQGf2cHo9L0Xzv2JPjb0E1gfgEYF0v816oGBKRhfnAmUadQEMXe6MUEmUrfi40dZCClkIpJ2luDGdp8r5y5dM8M%2F7q901%2FdP0s4xVRICAzYke1qZEBvtyT%2FFyb2CvgcRtmDqjRtf2aOcaoyUz%2FrSQkYZ3Kasz1zkztqFtrOdHZaSqjtrAt4rqL3WemNYTg1Du8Aql3rPf%2BPecb4BB3&X-Amz-Signature=04861b4842085362da2fcd10b5d4e71f21a68a86fd8714327238cbd37ae72450&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
