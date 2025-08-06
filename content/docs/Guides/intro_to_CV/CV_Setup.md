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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHQKOHO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCICEh7njZmDnbdjwDDT1kucneyHDbiErRiOU7DmF%2BImjqAiAWufnMnC2hXCmzHcIsCdkIeqrqyECtNNXF1nCeFce7eyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2FEqXsjgAdEcpjPD5KtwDzPg4BcX%2BtK58zgO%2FE1%2FDnJIzVC3dGWCamfU%2B4PHUBnSo0WOKl%2BPE1oMtxz0EvkeOkf%2FAjA8f%2BMV1qE6eIWsPKReGw1mWQks1uDXwVCzJbvsp8%2BWhXM5cPI7FAAxSo%2F6NYI9P8Jy2IH3MzeNF%2BZAfTa%2FJ%2FAEqMfG%2Bw752Zud8jR33JyDBcGYTucjFKAtJRPLEcubbevVnxk7nTmy8dxraoxamnkxxMbDolfoPmESfoaf2DgDiTtk2nJ6vgqGybatxy5uo4oHLOXyBsv8qXaow4BefhXpveLVZp1KYQ7D6F4o3%2B2kVNVJ0XCO7cCR5ZsujtS%2FnJ8yzCliscKCD6QrOd0TQmwx9CBfyJQV7u3poaRCHrrDbGTLnFZ6MlpaoJQpkertpWAGklo2N2O%2FmsGF2np5NMNzTkOKMobhn7P%2B2kAn4cg9daFr3VfUoSWY6GpTORjxNtwMgxuMRBXPk8s6K1nP8ArmOsD%2FjRFBTf0iDkzZfx9GZ2pHJhE2ALfIbps6M7lPNQKYAd825bWwiQwy6DQz3b6juvP5SITB3OCKljf0V45TnqZ5i%2FhH2%2BpE3D01zEgca0AJTvnq55V6okUBLVMvuRNGf1IAYkSkFST0FGwgDHh9m5fjpYTfawuowjevOxAY6pgFve9ZmqNmrdEzNN28Kn1iUvUFwJQzFwQkiyYi4YVaCMRL6pj4rwozv6v8045trtlqaorgLDt0OeJNYQJY9VkwFY1uJmUlzNJrxxWhj5T0I8nZ0%2BH%2F%2B%2F%2BC3JroknyEuHvuveS7oceyNWP3KA%2BQJEsDLmxO5Fl2cN25cvS7MAfFIERs85zfd5xlCIS4ZsuBpNwCCWAn8gq5Fek9NRhwlBSeBYMZBcylu&X-Amz-Signature=70df859dbb87f23d1cfa92ffaeb55561e0be44fc05665256a37e20bade18efbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFXPMAR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFCumUP6tKWBzU3Zn0uQPJmFQKGehI%2BmrSvLt4zz%2Fo0pAiEA9khpdbYKFJZ05BjfesGptOOJYg7J8APFYpP4aUHZcOQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDJ1aMbrGXoS5h%2FvgircA0VXfXWpvxzmNhBvl5y2JBYkMbKk%2FvFzdvNdkSNsEftizU2HkCFpHu8HNks1ezm5bxZvQXkCQC2sDI8KAYVlpQHX6KcVwiIg5vCiZAcLSF9ul3bLY2pioOEnsly7xhzMpqGx2ZVIAhgjBAKRXCOqJHdKcXPRUptdd4Yo2%2F%2BhsE3VEpVpr0DMA%2BkZk%2BUK7hUK0PFYe4reX2%2BUDTdeT4AdFNLoyGF8gj8lEtuk33DPacOdWqQrN53KuB%2Bre6PGED1rGGM77pNvcLY%2BeUgBBn6BspqN6EEPLGftFDNqrGKeVQCEyLDAMbaU23VYZmptwcGbFWizuNx33ugzWTO6Jn6QqNVRFwlu4Oo5BNgMM3EY9LwDckpWBIj2M956XmNzOTMfzIsK%2BmpqAyL3F%2FrM6T9GRKBH7SmOvCgKmmv6dOFNp0Ih%2FTdtFq7dT0fDhwGGAwjbXlzKhh7aOUe5eCBIoIOcCrVfQHXxvt9CR%2FSeFVuFnIcAgR%2FJYf9KThau2yuFxhR45NaB4EhKmadgn6ncfcps6g1IDEJgZg4v0f1cu4uDxqWG8qSmQW3rg1rsYBzf8MT%2Bpdj%2FxFp0Jc3I8DrOugCYFkPGlaDQdQD4h9LTkJPQGeOtZxa91O5ShoOMGtFbMLnqzsQGOqUBwSj4dkwN7bGmZJnTDXBh1Sr43Og3Z8V2toH4oK5PyY1vifC4iCrwon%2Fla2NkdE2wfbsf5S9z0dYS8qK%2Bnk%2FN46R5llqk1ncHRabNI%2BvTPSrdJxJew6XTvdKOczVKoq5Bzwzpc8T3wCAHntqyViTpcIGMLe9lMkOGa3Dy2Mi7uQs3uYDDCLLsqyBo1cFFfnYdHlQepRREHWtciJ9tL4tLJkvqQmgt&X-Amz-Signature=79e39ec83cd3adfe912db8de37fe3df0f4f6044133a98e7844d53fbf1b401bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
