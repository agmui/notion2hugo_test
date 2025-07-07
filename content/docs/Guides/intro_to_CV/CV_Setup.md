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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGUIA5MH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCIBjnHWnPy83I35xgJg3xsRrK6bPpAIWHLi4%2BMlonf0QIhAJyO8W8c0ppYi2A%2F6lgFB8BXbUa6PcdErovA7%2BuN8b18Kv8DCGgQABoMNjM3NDIzMTgzODA1IgxQXjz5RmkHBBS5Gmwq3ANZNLGvWzd9ZnbCgqvld9hoNa4b8GQ9rZJ4Pkgbr635c7JMdfBdwMYTPVh%2FEF4LicfCUUCJfLglRD8QkPt3U4o2JjKbSwryoZYyHxXPKQq7OC6z%2BB0iGQ4e8EAJyyZqY%2F0uzCK2g9s0FhqF3jOS8OjRy2oXvkcSLrdmYvd9Y6%2BonlM6aui8bqm1ZOY1tHtaxu4ovRB%2F2lLf66ljPLd5EtveeSi1OGa0bUBTSyF%2FYVEHoneg1XgJuof6gLOcGtt2BXkQ4sjdEDOWq1Z2%2BUjiraACDQmkkpxQYnzTbk5D1CJUkN27n3a3eRfbLRyyH330TyRFqrxiBVmAlUwVbGb8rnb1hIp9JEwWhR%2FyCmhDQCJBDx08RTQfTVob5RS7GMoB3I23JuWpoRbeZOEq31AH2DmXL3IhjXiJkhYRdYC0XWtPo94FIOPoCoHsISQvzg9yLuASxLaPHnf3YS7Hk7tQuCST81JgcWTDl%2BQNglOeGrEZC02nu%2FLh0tNudPv%2FHnqwaK2YGAgJ8ulNPDi7oUxx8Xz8xXYIdtOOMUJE8C1h3J2TbOHynnnIRosGcUP%2BG4wFFxIWqMYccdBtPBX%2FwaH8vPmLj1i9Pz%2BzV6SFiHnHXtOzSXBe%2B%2BbJdehR86zmRTDuiKzDBjqkAcVhVFXbUFXS5typWxxsbizBWSrY5obUjZz9I9%2FYuFVX6ZHSZAg3oHDNrv7Q81q%2F7Pr0MpxTEOWEOlwElll3fVh%2BIjwAGZhtUdaz2kOIdFneDMJPKcNNDhrqvI8P%2FXT7pUCOZOg0NQD%2BVERLElD98STYWQ5LCkpeuYQZS2VIWVlZ1OvVpWosynhjYSVgzIgX66Ewo1aOLp7Yljq%2BO0ngrcevpHqd&X-Amz-Signature=79899eb0c2e7a1ef713f98c36ece16441c5b8c3ba9d5fff3fc787d0527b2ab19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQ7UUBR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDH1IiMdGGNBAm%2BnX0JzdAbji1xhRnZhA3QxanykOEgQAIhALzhbyRj1H5ssP60rYgR66P8rffFEjcXh2SICOXcv1nNKv8DCGkQABoMNjM3NDIzMTgzODA1IgzWc3VSMWG3jOjK%2Fz0q3AMUbVPC7R4ih5XK1RKO6sasQ6Wdz58cnxauWKhm3lGGDI8REKyq6rVZ3XG81mAKbTUg4MjQ8m2d7mNB0JlTOtl1fliGkvTp4dKeUSlCloicuoNd3Z%2BeQp6ItY0C9Xog9QMp2hLSM5d7l1LDE%2FpnGnGQWqwIZK6fA4NqBrrN9LyWJmUYOkXkpwUSz3A1%2FtuREyGoUWiIkijbER3IoSsvsKuTs9c%2F%2FtU97pW0%2Bccyw%2F%2FmFqoxwmuGG4ZPIx4ZmiqnIdcUuNi9ub%2BVmzDTo9kEyJAp489znofXJ%2Bln4au8bd%2FSeVrxgUBPzSNv6KepPPBNPyamMJvmglzPqBM5B8dtLsFr9GBngM4ZTtqU4Pe2IXyuHhepBh97d2GH7QMdia2oTSUiSez%2ByelK6dRUg3wBsNNPTWke0cHfjkFJC%2B4Kd6Eotam%2BkPZCkryjphoWPulrz%2BthzWvXMqgyGnU%2BdelFJJm%2FEp7AlkdaUAubbKeAU1ZaZ5vjnnfgDcX0yAwl%2F7gZU7H8cicasMk3zU4BrgVGCFZIE9uxffM2b1txm7wcrzOYCNLnMRVmRWsPAPsgKGBBWpcHhoROk61eURJEOWFqU%2BfJlFDrj1HYZbBvs4407wWlI9HlG7Vrn%2FbABlqCHTCCj6zDBjqkAaGwkoPfDa0bYdNfupaRUo4vZE5MuFmCg0ls0e2fXET%2FUDx8TxC4Vu3d2qG17UbJmgJUIavvASJCFW0GreTRWftU2MreCsXf6rXKIOIFtC%2BwsBwdvAOTSeAveGUFgTDgsC9kgQMhq1qJjdWfMeAOnkSWhSfSXGIGNXqojsDxcQYvJHUnFkLFdWacS0XXMfBvbHb70QUp3ate2mplt1rOZCU%2FiCTc&X-Amz-Signature=b870dd5e361594b0c1a98d5564d13a9ca45bf75f8ce1245b4871336e1f528f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
