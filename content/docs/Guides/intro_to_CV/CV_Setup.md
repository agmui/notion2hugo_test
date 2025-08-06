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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCL3JKVM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDqfhvCdcoHyEiAqURITVJpAmQ8i90nlmvCqbfWRnsEzAiBzo27aG5WnZNVvyzCbHabcw1SzUs3efJuwIifj75H9iSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM9iwVthT7l%2Bu1Wrf6KtwD2lNcd9YvOz8v7Znh7KvWGzm7H0%2BSGu623IUl24RoEjSbZd1siUy5wBklndExIpMJnGgxUDbd8kz4t1EL%2Bakz2fWe%2B6R9xvnHNbWV1e64LUrXnaISXVdxPrDkBIEExQvrUyF6LcZan4Jmss4MTV2H9gCKXFnxk4QDPBXTuHdDq3X3uI6%2F%2FNL%2BvmtJbhjkEqbxuqkRNLgmw%2Fo8OLuQ8CmxTY%2BXFJEql4KlPqVFIV%2BtucTGEmeukrAkrIuVpwuu6A0DmY3R0I2JABvVPd2lpxtvM647WUMBOdXld8SyJo4tl7BZHHWsePLbE%2FYg7nSu9oBaASfbUA81UeETm1ae0hZcf1Rxd6RoYSBWgWBfgeWJ5yer7lU%2FRcRBSoDYva1Ij8kJjLWSUF7uHUppIwChR%2FoPC0ToZgBXN4Bz7IN4uaAz6GbcPV7sOCevNIDP0F%2FfBvL5dp4xTrjnR9CeJS7oAWPcu4FXMz1ejsSpT0mOHXSl3edDRtDsds%2BpOTih%2B8a29DlAqCjF%2BNvXcUhbKtfcmTYwn5mve8gtuaTLemhpReh3uFMY%2Bvt7Mz%2BbPrkSRaoVZyyR9enJkY7MlCRO3pb87EL5IEkrafyf97%2BpfY7DVdEIrBkMrwRZazYsbTKB6ckwkdDMxAY6pgF9jHQuU0b4tDT%2BuD4p6r6NWKRhhLiGOWaVyZTzu5XgFwmmlrazg5in9112ThV1PagWsxD%2B%2BY3DMTS8%2FgwjkeGWBf6khwb6Lv2Px2C9GMinXTWzNQRdDmaS3hQQXPRbAPm5L53Ql%2B1jQb5V%2BIiMmC7kVjP3fWFX3x0t7KTkhgxix5KDEcD3XKdL4KpN2AhhCTTjiEkxjBRWlXzSpXPXRBVYBkwTxoY1&X-Amz-Signature=2bed9e805bd1d4c322675ab12bc5c917863eae5341cd3dde93414a08e0f999c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQGWYH6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID46amyiwI%2FL1QLLA%2BfLY9iX9IzH1gJ1sEb3enUXAje%2FAiATFOSJ6ttXex71P%2BPpwie7RUZiBzBgs7dZZMXWLJbI0Sr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMSyHYRHUeDtnUwAUiKtwD6mb4v2NRTrlktYzFMe3kj9hzk%2FwWfb3PkB%2ByhrYuvUy3E6mFU69ChymrlbO7wOq3EuLftBr957plDv5sfCxXYGFhBwxRj6yoFT83bDtl1mcdAqzJUvjr1JweRzQHLS8Yvo6A8qig1IFr7sa7OKllZEubiYC6nbFcHSL%2FnMAW3w9okXCTqbR22IZcxkrXXklOtwM1iAEQ0h8pLLB%2BAkDq%2FkGgCyjmIHAb86d5y1HWNr58PiHtcSqVu5k2c1GIELHlejCUkLStxIhycnaClV%2B3HtUxA9KgQSMGInpbuX8iMdFHziPyb%2F5h1Vi5uYm7KYwlr9iAzo0r1eVr7MRUHQMlpZDCbraHgf11Md%2F8s69%2FVvIkhkJrsHUjQr8y45NsUvggdQTcNAZqM%2FIZb7RA1T4qApqgGl31OOpE8bwgmJ8Ydq0w96HTt1fWwrJla%2BDIMwEcavUOC2M7ZFmoanhAkVOj747L0%2FZ%2Fod7g%2FoXAbZ6k1aL4quXlsLeKby7k%2BurEGbHbvnuYdin4XNcXQH5VZ%2Btkf%2BxsL%2F7PUjRt%2BpriUgfn4OjDR5c1SNUeCptsfSmQOAwz0MqTgY4O09jtAQJV4D1rQxqVO5gnBh8M7H2Ak9QrsWvavZrM4JurQhnAucUw%2Bc7MxAY6pgEy2UA8oDB8j%2BPLs7eYXoL31peCJKstfba5gDqtdHN7xsNhKZl%2B1vALWIZjX6MulbbpGoFAQFz9Y7MCgGvWUsBLBONcmiygnOPb09q8JO4l%2Fqx36gLIq039Kfq%2BIsGsNiEnASeEW8n05Ko4baIUIXL%2Fa3OeFsFUpwrQP1J8LvrzfJoAdEybAbUbgz6aLWHd33RF4lDzQ0G9X32Vb7G3uPQ9%2FB%2Fr1eIm&X-Amz-Signature=f0390b8bbc2631f2c57088987813c7b5612f7c1db8c775bb91407c7ef169bf88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
