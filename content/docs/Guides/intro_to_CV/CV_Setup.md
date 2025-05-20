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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLVBLED%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwwf%2BI%2FzJ0FpM5PqqNe%2BJn%2BfPxKRILqDlRZxcWPnPh4AiEA%2FdFtxDC5s0u1EqxBezby0zbvFxfp8OXsMRSpR0r628YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJnxADTme3dxhuw6CrcAxgGJK%2BCJJXzsStkyBoAwl0yHjh5%2BCIIx0WzqocPnJmw86Vx09nfbQrSfsz1pZs5g3xacpUaFKurDUZceVF%2BwXTzJO%2FbNz1YacJSWMTID0dwRpMrGJyLwYhykmLkTEmDyXKteySQBIP8GNRxjftMb9iELrtWTASNKXWULAsO%2BATw0LGJ9kaKIBpSxn9o5m%2BQFlwBVbm2srnVCAQOofZvZDtra3xFrQiOvv%2FE4EnBchygizIJUZD8e3dtvkWVyBXSbX4rkBSiF71cwKsSaYNCOWUdDBQJvV1HlkYbWHo9m67J5Auzf9zvHG6n%2FYc9LLe0d1Z4FrPXXdEYWdyOAz9fZPpK9V%2FLD9nGaywKkNK%2B9jmjv2u5mpopDpzx%2BfNLxTJDQITeoP5hw0Gseb3%2F17ds503zNtppnNXheSKwYxKJ%2BbykVpzT3w0nQ38RJFNWv8Pho74QyS6LUPnKI0OPnyxFvYIqZeO%2BFE4u7kbSXXHFNDkFGaQGT1gjadvkG9C00ujNACQULDopDLOLMD3cwqKtinuE3SCHgZMRfdeaEAsAhgnmc5%2BbX1JnNGp4Xn7hf859AhcfMmvmF25QZbVZmQZsgDsv10WAqPtas1zOz7CX7ixB9JVakqqfIpj4HACnMKWUscEGOqUBEGyuErSYkftOI5lh0Wwkjqs58C%2F7HiMhiz6H4TVDHBpOoFn6rpzsImim1ftjSBG%2BkyHuYy3hR8DzWEw1Qhf1axwalzvy%2FD1rhJFolSIpYJtoi5QcK4sAQeRkBibzChwppYMNCxSmOssM51iknrKQf6KU7GGFTexe0WaM9BE1py3C5OF%2Bqr04j94rBDykXU0ObQS2oR6bPU1E8EbHrFd%2Frg2MUvMM&X-Amz-Signature=aefea70b58047865a7a66d3de78116c6b8c1ce8c18eab13694d0e78e2a887f2e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLGJUIG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvj6lg3TibEWTwWlEcpf5AHlPij6EPKKOFwrkmsuhkBAiEAnUqRk9oTFBPagzG%2FbLdbMaY52FM1i6LKkCzQwZeGyqIqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdXcAdTPuqy3H62VyrcA7MLJdt7CpPnyPcq6CzFYGXaveNf0kphZ603Dxji5gjywqvCqMASCJOV9XCP7I6MIcAxTemlsHWUDtjOO7FG5vAnQz8ZGVSUOCo6MwC9BOqU2D495c959DQlSXfsLnbTIBbrIdDap%2BG9ERdQ5hUjnoCtvjgQqfrgal83Gu0oBfh0DJxjatU7kIOK4uS8QClGYVYFwqLNmVpP1goR%2Bu7aXEVYD87FDwjGcakw01LUuwZDhdI6Bws8owkbDn%2ByWtT7tRN04bkPCJiC5%2FN9FGAbbNAD0JjPZi01RrhVwBUgUdxZIUI1r49LuUaBvYRB8GWXJ%2FZJ4UpTkpD5D0L7xE54zFcyE%2FUcu6jYRbTs0p9KKlNlU3lIXdIfmAU0sTZBdc4FBmI093CRA07l4XTjBQgs1T0Vaw%2Fxbq9I3uZKMy9Kc6ErnQpsc%2FIyroyGnueTO5kll9%2BgGRqRqw9cLsaI%2FVZeRNZlR8qJeOw3dsksPpr8GSfQOQabBHWkx%2BggPEwh%2BpbhQOfoohaHsQkHUw80UBGEodmg3ytM6yQMA4%2Bpy0Wl6vIH9wNUWOUk%2FwlhPOexXcJT1HcbzMJpU93WFG23T%2F5%2Btro96%2BYfYC1GoiSywGan7aKZKwcZ7Sdj3aSOJGoVMKeUscEGOqUB%2Fh5P2khxYNCSB8uL1uaCxH58VM5bFW%2F5yLs0V4bhS%2BucmO56w6fRidZBFbt5glcX%2FJ4DRmZOd54hBMGWzYwfe9u3gMhuf2YgRlHOSsEmhd%2BvoCRIzgP4%2Fg8tltwgfsM8BEEsrb0X7r7H03%2BU6sqEExdyQahpuTUuLk0fApyz%2BFLhdZH0BNAtFVPeKGD1uvc2%2BHH9HM1SsDSP0p%2F1qbip3S0Zu7a7&X-Amz-Signature=b959ba783ac54d77c266cb15fb4f8fbfad3ae3400010e262182325f466d632b8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
