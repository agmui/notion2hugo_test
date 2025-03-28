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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJXBEIW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrf3P7%2FqVil41GeWAwRxZGvcbi9bWx0MTK9r1tdRLXDAIhANElgqAin9geS4j%2Fe3t8HgSCxHEzldJE1VkGwkty7lsaKv8DCFkQABoMNjM3NDIzMTgzODA1IgyhEGVbDpLqR583cYQq3AMuTBtZfKRUr9VXUlBmaAuUiWJ2v7gakPwuTFAbqFys4m%2FfpY4MtQ5P0vmTgfWS5W9iy6%2F0123wxvCQjItmINr15YRm4h0PLezz8GXe1oYL5H0237bbY8aehLLc4O8ed5KfWtxd2tm29crfJ%2F8OxRNlhaw4rDeHjzb%2Br4TvaFf1l37gRfN25Ur%2B8Qr4nn29eQ%2BmGH042PY7nds7Os%2BUISnbFmzAxH52FwT81qxvbWU1l0jil8BrZNOj5neUAANyaVBhD%2FBDGQaHGmmpemowLxyWKWquhSBBpnJVeGikyHNnQN5EDs35RUtYWR10hTuYTW73EOR1kimXBAzejH8H%2FCJY1pohkqRowONb70TJUMe9gtt7E61%2F340eJWDby7QAO2b9fuxKc9AqWcFFOOGwNw%2FunDramepczEvWyWvp8kxV4tpuOL83yOz%2Bq127OEfdq9%2BiwhBatzCqxqJrBKAmvG3%2FgyuLF2Mrwa4KpqTOHIfjwSlD9TAHtaGZrbZTpLg7XYNgG1NMp9ZleIUk%2Bz43aGBDl7i6zOhb3zyUgbTch1GnHiIA3cJ304WTzdjLqhYT%2BI98toRf4UKm%2BHaS239S7c9VSeCOWWYk1Oc0hw96nEennupx2CmcKeRWgj9UyjDOo5m%2FBjqkAezxXuO3bjwoTIueCAFJlRtaSj4V9rOCRCr%2FxH0wO7DlnfwBKaYd0igi6XgqfgnyBBJW8KWBqnbkQs%2B5qYGKv4ZFxAVEkRMkobGhrceYyQfrkvzbgjyOtYwMfH26o2ffjXa34th4LNh4mkKwb11RJ0lObXKlTrYVZ6bVzyA6cgMUA%2FN6T8nOXqbYFtUujK8GSMCOdzIOQXC1AATju0VkiYyIO2Bj&X-Amz-Signature=e7d65bb213e767cee63ee1c06d4b56ae1e685bdf036ed825ea8a29a118ab4a79&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YDIIIM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQg0AOXMlXECWffYQWpViAiSZ1uHqbTIKNBaGsuGx1QAiAe22ZDMe7EjFt%2F6FRPWGC4ivFqWFd6Tpq69FSsZ1VwQir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMUjPWoVneGdCAt9uXKtwDggtU6sJ76Nwns9DnEhAHLMc76VmUlMdrWNjFNLC4T9uPG0R12nqRlcmJZbqrL8RMlWVsiNEkPz5WaiMG9yZrQ7dgsmgsV87Ul0o5tUZMphgiUdj56AYZcj8uOMVsu5AEYe%2BmrK8LepsI%2FPiyo4cq7iR06hHnzb6aMvDQ6fZ%2FBgYvipQgpy3z2sf3t8GDS2v9Lr03BYuIrJ63J5KpTxYQZFeuXuAEszFSBHKw%2FLNO2UjBDXi57O7EwmIySHPDSSohc1dKIahI2MZtnYpSE8PFzI%2FWYFqN2IS4RCBBf6kqakApOMTTbedGVflAVuDxAf9Bl6oZVzKNTV30mRXvyRvj6zgoNNpvAZozsIKV4L8%2FwghU%2BV66%2BnYr0RDj1RACXDSAiNQIN71InRDWYZbdfNprVboF%2Blykf9CR1LLoJgAD%2FJdoRRnpoIGPXfKzWprRmYmCuuuXKULMQ8ludnndY6zOTEobSChmasr%2BCxW3yjO4sidD5YKgRJZfQPjJAWH3fwl8IbVi3GurUPESM7LVFsmj0Coco1q6pjFj5h2XG5kTE4%2B09ro41K%2BSlMlihQvBAtIv%2BR7tDDClwoIlkOVuqMsyDgMUY1icWOdzv5EIvLWb5afpHHrAaMsNpKRiLKowrqKZvwY6pgHgMRXp9BLJcTEHsy%2F0gnseHpqMg2r86i4uOpiNY3zNPJA1FC1SysxgpBBzNmJdmEelzII1P0%2BUVgWqtVVy0461QFSVDTFqEV1ubsxn0ar%2FOXsIfSX29wstajXILIFDb8FARHU2Rasg37jiO%2Bmjtwf0YMYnWHYFlK4S%2BU6QnEOj6Aq%2FwP0GRF8T2OOJYZHyO39QRE22GQ43Ez%2F5M4ykvfRyf%2FoNCq6y&X-Amz-Signature=f67372dc04939d4a3c170311d5c448b82dcc83406d804dd6ef55b224782d6fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
