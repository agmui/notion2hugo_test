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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XIN75WP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDl4wBiQt4%2FtFpxb6Y8o%2BQRwlq7%2BXfKBq%2BfiWYXdtD24gIgFlA%2FJrdOq4R7J5Fob1TqDY9e3E9iNdUN9RZnt3xD2AMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJwc7d%2B%2FNYV2ZV2A9ircA0tw8AV4T%2FISEiQofn0KCP0qcoiAzkuPrry8bed30MGliPKCzsFBa0UFv35iMrd%2FUzpHFs1QZINly0ABm175Ek3jJHtfhYAMGxMPSV1cwsfe0o7%2BFziSQ%2FhYfLTU3etVt94OT1u7yee4EDlxorYMQZJIJ67PwsUxS%2Fjo0pDnFaLdyhAJ4pth9Le056yj%2F8TddKuy%2BomSsFXzLkS4q1zpgFApKa%2Fyi0wy%2F4CZPzybMBBki2ccoFk6VBRNBWGMLAAHEbCy%2F7cqTw9DTM6OlkSujMSEWrlYuLBm12dHZyO2zfQR5m%2FNBBQmR%2FwOnnRqZFr5%2FID5E68OfE8IZXabSjzbFCuh7iKEK12J3CrydpiGLrCYgvEabRPaeLOY4uMMjq2fFhIJr%2BiiEvHn0pWqmDi9%2BvNo3F9HV%2FtZ1nFHjCXo5Qq7yhweAe6VafDA3pFz83EvfOBLx8jSzD5cuDL0xaXFsi30awId0Jn3rTKP6iL0rdlUC%2FviYbV3MvolZAViIFtaUbT3NbtgcrgSdCXb9fpbCTU6uQDaiZTprTkk9F1TA4bAt7d8dynpgjoDW6IUA9sIxhS0VhFR%2BiG9y%2FoHJHedDtRC7wVgfz8pagSK3ihRcZ9XCzX9gzQEVZpsDZNVMOygl8EGOqUBK%2FGxuw3Kj1a%2BqwfWp5UmfIeR8UIhAUT%2BfGwqXPxzdByrtKTzXTOI9UPQtlyYyvXCNjdHYxVcOWWda%2FEe%2By%2B4E5iiKfd%2FXU6IsM%2BwTPUSCttJK6D5eeNQ0keqCmqi39yHCUnCwsOP3JXocZMHN%2Fw%2FKG8hx%2FcGTQwTSsVRf9E%2BJgk70er1dUj186XJvfWOZ3v9XWCy1Iq6yPClLnkdKy8jNftWJYIS&X-Amz-Signature=3f588ff224845e3f18a684597d4711b452ee3ea6c657088cfdca7c4e48ee8032&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WYW7EDL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCRFlnXFVd62fDr%2BtNhTgrXMMpxQK7mVq5rw2WeIJcoLgIgKFCiTBp8awYxOA04gxjQFj66A3VYhEbM8ulWcfcp8F0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAAC84b4mhiHWseLHyrcA%2Fwvk1oBPGkbka8aaMXbSt4o52LA9vpMYWi3EvW1N0ZjDkf5g3MScK%2Fa4tCSRMpv0LOTPc7HzSK8wlAKimjyIY2o3RBjp456CNxR78FnE05dmEuKfFY%2F5yGHl3fIJZH405ax6ri3dO%2Fpt1qd5zfMm3H20blGV9866PkgNIJkqrA%2B55oF6D%2FwiWU1Kfd8GwkAfdYUANIj93Qhv3BEMUGzlZ7zvl1fVXExEVZptEpxnEloF%2BgDhPBt2%2BozOu8Jd1I3jLOex8dHBdEjZ4snuL9n8hhwIUu2l4opLC4%2Fl6kBHZ4qEk%2FWfLtptK8IjEqj1%2BdZ60BA95X3n0I4wIZg%2B%2BoxO82Gy7BidADyw4VIYSJikmH9ZHXYpskG5FDZaw7ZsqUWJJ0hpNiwhRmm2VOdt5XPiZe%2FYvBY%2BkKU%2Fs6qRDI%2BUbD505w79tW9JxgkRCvfNQsnldqoquPiPBp7oOpjFFaaWim%2BxP2vbvHko1425ACwT%2BdbPXNkf9by2253I7IgasrL778uCBtMPz714hn2QXRv9pRzhuUsSA9v32EXb7elcnxXQqVhWcsEofrR4kScHu2RNTO6%2BVZqV6%2BN7G83VSwAwJPoHNJnkvEvxhFIRfD4%2FweO%2FKhq2WNAkuNQFPP%2BMIWhl8EGOqUBQzx2qOX85Ro%2FhtVRI1niZJAOgnbng9Y8m%2Fst2jM5SeVYEU5w5gVxLa7BxeUPrNa%2FPKcZpisLDgwa9B5lVA7vCPALbCIHea78pRMOQ5tn5c6c3CILAiadGWeR7jNj1RCmlAkeOfdCEgmccI3gjvE3t4f2fzmFGuA55SMy49WiywNGWvwrtlVy8hSaLMmkbN7OXcFdBVWF%2BKkH5jf02ZhRaVk3I9p2&X-Amz-Signature=2def9b03ed7b8012e936b52dd1c2b995d7fbc1c6cb1f516b16f8753e8e12a8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
