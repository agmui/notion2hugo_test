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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAP54DC3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDSwuN5r%2FLYH0%2ByMfJ7c1QYYFpf5EG2JvbsNtaoQqiLYgIhAIaJNl0fAmviIhMs%2BC6gOlvGQr9rzXuoC06YePQ1VpGTKv8DCC8QABoMNjM3NDIzMTgzODA1Igw7ZOb4a5DCmbAvOg0q3ANhhwpYVow7mmmDX4vY9OL4MiR7HFBPKZb8Wd00jFQEyfajO7on57iU2gUsQ%2F%2BJm%2FmJypZJnnlqsW1b0AOLOmKOqYp5226aDi7tbN9sVZp2neeNfV2f47L1d0YyT2%2F9HyydF8Iv8pj54FwbJk0RLuwhGx%2B9gn9yQ12LaGrlSdv8HSxQR43AgEnkPuJtmMDcPfekBcmD4LxnI2YELpMV%2F0G%2B6DEeVUT5EwcxFZxmIP6P69ImvlblYMUggb7ODAtIMemLXmRv5Xd5z6uIxdfzRJdB6u%2FWjh%2Fexw3UYYvumv0LAnP4QRcOE1rJZ1zJa4X5WPjHLnjvJVTbjK4jLjZudWKgreA04B3ptAEU9%2FZTMas9T2ZoPWF88NqHrBFNt7UVGVu2utPQ1BhnarBes%2FDSzXD3dbEhRddTbhfUGe%2BUxqtQjm9ntMwXv3%2Bd4Buk3Jps8CTtbj%2B1FMFnQo5XVmA6TLG1ujju9ok%2FVQsoBbc%2BOUlr9qV%2FBGIwcuE2%2FdAjct7V5qPoA8xsRi0Ci5VHmlXXZ01PwBEDXyD4pRndHjs1ILdzWcc7s9tWk6cyAkCq%2B5clM710Ibp938riamQRubQYEiL%2BTtllukZ7iHRn8uIjbjSgMdWyJO6hJ4Mhqb1tvjCa1pfBBjqkAUwr7lYc6H%2BMRZYsaymM16Vd7Ele1jakP9fU9UVvvSSO8yWVPOZAschMpA2tA%2BDSn42Wxu3J4iVHxfP68R%2F%2BHvnVE8A91x8XrtpjPbIcQjakKV4Z2Rpi0PRgAa1VcVFrl7tZ9dJeErPFpyOtw1c60XihsBp1tCzuEnoPKHFyptk1Wg7KenCUr02DLM%2FAc%2FydAuzIpEk5s6Vj4i%2BkyGuw6wIvo3LQ&X-Amz-Signature=f6d3b563455683b4bd5155e6412bef6080c8b8a56dee70fccd7fbd4c943c0a1d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHXNDCE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFzPcUhWh0%2BgmX5U4ERep0nh4yvUJir1gMFmQo6mSmJeAiEAmrNCwhQ23kykiS%2FHJJo3NKexS0tAFDtcHwqhO9zvnJgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFyuJVHkaIuCrs5dcCrcAyEVqceOL7c0bR%2BH4SxAPMzJvirVm86TUKNnQnBQ35XZ%2BHxaKFkKYHRQuYbdIms19PjMXRTKOhaX3b2OKoNqhri%2B6iqllJFVAkzcyr9HhqFXk5D6063jSfS8iLuqwhjrxGFyyejZozRrCR9YxpEFv9%2F8lwSjVruWWMCw9SFO21WvbxXJXrHAdE2jq%2FrzzwtBTAQbgQ7QXieO5MO6xBc9R7Se9Tylcs4imZtd0%2FNaJAioxmIklyzR%2Ba2FX4%2Bv8Ibtb3mTaZao1aJIqpZ5BPYH5Nr22CGSIaQeozcjJqVp%2F6K%2B%2BeVR1GmBAo3Z8W0p7OgmyTqXEWYaYIsRCXnJtygxPBqABehngBBOcHDEYOXrg3BPXwyWYVsnFRY9sU4PguLBZE0wn1zN3WLYbMKnk4aB1KlPLVsY%2BzFta0L37BJ2arHoJLFk97KceF%2BYpJrtKxV4NI1PIjrZhTU%2FbuBU5kvfwR%2FO%2FVguT1skjCNzk2J8JYrE0Pf06WBv6uAZ4dBd%2FW2A6dZAZw2S4REYkmyVDKg1wf9669vgd7z%2FPP%2FCwnOi4OpRfdgruZok1za7UIrkcVeNcJKs7JsRp0TX%2Bv0K6puOrp0xE0UO2G3%2Bn3Nys8OYZhS7R45nY6ihy1yWRHxtMJbVl8EGOqUBUOd0MfKN%2FOBwKypSRR8s1MctUxsSYpwwvzZzdnTUu%2BaLg2sZAGcfl5uMr78hfzeXFlc5vlyihvWq6jVTOEagdRZ%2B1gH1aMwPnPMQLdCaPtOF4sgteBaYGrRUjGmPTJs3yTEE1xnSBL5bbkOO6KwgFfosmiHX8Hzki0YygMO0Fi%2FXD4Few%2F77DwTFdi6U78eaY%2FOqtNBiujwDehfw50Fq0MFSny24&X-Amz-Signature=34037517520acb31eb9b3b8810482930269e2e80dd98c79111fb401fde84464a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
