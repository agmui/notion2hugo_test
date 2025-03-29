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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSH5XYPY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDg1V5Lv5ZPs4XmgEDNeOhNqQfmA%2Fv458P8zzAD2CBDVAiBIRrJQarOMtwEXnhO2Ne9XNVocF6TVndfI5Ct%2Bv8mH%2Byr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMLnAKdfrYSvbrgZ1kKtwDFkEjiX32VnuvKhEGoW%2Bov19orxFwG7Gs106PUzKv%2B35b3tkd0aKuvZcdYCPmQ8qdJKXE4bP4i1lOiL72AIeRDen5CCOos8ArNnzBcB2ENnVVWjhCN6hoYJhCFOt2bZKXCy3ow4m1f9btnDjOvFMfPlqNN%2B%2BhC15ehyoJk2GVfsqRwZjj3rqhhnnwJQlj4aKz18h66sWBcmuqIoUxDXdramBhB7Gg8FD5AW%2FxtSaBbBD4SuRiOac3ar8eaBg%2Fn9EoV9rrtVE0blTY92c8SKcwnEMOJ1KKIA%2BFsy8%2BGgSsh4I1T7d%2BP6NAA0UX%2BjQ9qWEpOP2tpitp4NUcWPsxaK8%2BNoQjHF7Yo1Fmbi9BfVU2yq80oZlW%2BG5kBVzJnb5T7n0xCAn8ZcwkiCL5cnjELj2ANDR1B%2B5whsNL5aCoPMp22yotaA8D8jbGg2FO3HytEbcFpyuGmwLdHZBMBcQGmOISAaDUYvqw0ufD350IevhvPbckfSFxUJXs8zII%2FWK6VsqXHKstOzaSHfry1OKbQpWHZ7bh6Dyc0ZUNCvlGERJHsrRDQcHybJJ3n7%2Fc5N3Td6quF8G%2B9BT%2BcNkHf86HYG4LKzUKjmXiWesIa2E7y%2BLZtp3Vvo3CLGaDFQ%2FSeYcwmJ%2BgvwY6pgEGLNj3C9TexbS0eE7agpLyKdnFJiiYri9ynap8zdvFgl97gzfStpfR%2F95qX8Ar4f2MI8xDUyXgGYj18oxRWbzyIqfAM71nFvtCskKYY6ITnqwSQDgdWILNzPwiXU3ZhFB2LmAM4OK4HymT1NXsODaEU19iHt442MgqUMCf4O0KCC9Ib6dfxM%2FdM2uLRJwRa7O011XtHZBdoP%2Btpsm0i0WomCCoGA7n&X-Amz-Signature=8d3011f331c079372c62662d992bee22e669f8b289668b3609680071113061b0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VL6IXR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFVGQaAYBxPMNEBlLN%2BenalWgbKjLW85BwJ%2BVZHjW67bAiB0yBNEUj0sWHLby08xWafQMlMUaMRZ0OJOCsL6En3z%2Byr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMcbuPnFiVCEqdVt%2FDKtwDkem1SWc2pFfTRmTyvq%2Fw2nivS%2BOCHoHIdl6rRV5d5OseQrif4SkHlnCJpwhFsWR7VXZLXY30Cx4veHdW0O99ew3wM6PWZEip%2FZoQe05hesOrU3tUBGqxrpiRn%2FJbkIJ2st%2Fvo1XlTY9WHMnWONdAr5QnAYe%2BwTdom38G5aUCmTwsL7mtkegWkTTae5G5ciuQNODBEHiWX6TrmhvXC%2BWxht0Qvj5JOzdymEvFSog6qSic5CH%2BMUB31mZPFdFXJzOR3soUUNAATprV87c3eKC3s2wsItZFCG%2FPZejZFGajhRisham5DVItaKYLk3dtXeZ6L4xKKRbcKdjFaZN%2FCkFkziCImncJ4b1s0RnoiaaWgmtpUbTCDCjlUUtAsGbDAjW7rFKV4gwOwlrT80djoqaLAiGtP38QH1BapycD6pUYFie5rpab79Kf3Y1eYlRRWF3dWk%2FfHa%2Bu5BcJoVug%2BDA8%2Fpq6Vn6DA0KljHh3jMm5YdcuW8d0lYqXPAux18ihogD4RHAW23b0yoRK73lvZ%2FtkrTGZDP2Gpv4yw910rfUdJU30WIIFaHkaFy1u15FZH95DxWth84XlGTjY%2BeAf9Y%2Bhv8HbOaVmm4Ev7LIUJW9d8Bc9jUNWzez4a46d19swgqCgvwY6pgHDZw%2Fkkr4%2BdBPv7WNXBs8nBGwEPOxRdrZIlkqzuH1y6Rro6WvHzoQw3x8NX%2FggQ%2FFEeCU3DvRbjOW0wcV40GZLLiNk3yFFN4KfksEkp6P%2BmfYwrrFidNZG1d6FI29EQFHgsa6rul7xsbfV%2BwbB%2FRb0XoZ8KUTi68u8UXd45PhhIt6JXr1g35VI7HHSKuUu9htsoAl%2FsC3p4eYHacTOtrJjWpMHjlzT&X-Amz-Signature=c61b8d3e0484924772914f8696942ea4cd872eb99021ee2fa852e44f8412860e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
