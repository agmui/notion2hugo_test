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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NRBFU7R%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjcgLu5xNDyoYkuCutiy8uxex1PSoqxJdgrFZ4ZeXNzAiEAls8m2DirJRiuBTnx3CNtZiA4VNdf3WarKGJ8sjplPXsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImcW5y3Z3So5wAYTSrcA%2FVnADAtnzRRZFxXtxMSvPFNPYlnqomtMwzYTbZjUMRvbv9TQAAMSDjmnTixqBgS2srSayiSX5zFG%2B%2F0AHem4EdK10sj2SZNGsknoJCR5ptVAqaJNlufAvPfFKmvDlBLki2UoUcWI%2BkflrHvYj2eCaKGsbnuztuPOQpOMLxCXvfPFuieT2J%2Bcv0my3CIs3L4BPQScZ0tXW1hnwk%2BYM9Q02lOcd%2F8rzdhQkjl%2F7Fetyx%2Blnznk4haT0YQtfj6ENxt74puJDKM7d9hZ4EJPIPhXM8i76YvFmYfshUtPq0wbm0voNfct01n5DGIl8lH14UX9u3YmfdKDJxUmmul5921nyXeCGvI1X7JUQSDEq0gRGS2UyY0s5O64RBwkRRLyW5z0Az7mBeT2uWvpTb9t05NZc87LuC055nCP0kKknROFYoNicqK4sskArasozhKkriV9fpGxeHUYGHu8FHL5RiPfvY3tKe5RU4NzuOvJN%2FlsSWP9fy0Rw9LIadUVgd76ep0W3ld9f%2FGHWkXWfiMB5ZB1QmNCdIaci6%2F99g1n96c%2BIjBZ8rV3Dtf9RYKsbeptTntX5zVbyTnyIcM98PpKTcJdhPjmCqY61Tud%2BAF35hiZ0skbUjnvn820r8dlLV%2FMIzB1MIGOqUBjfTvY2XoVu8cxsD2h0SuPGtIMbz9R7erctXtvmwhlCm7i8BAlrS3kv%2FU%2BVNOjGWFAqOfnb2iWuHCPMZDktei7i4tczfLuRDJGA1WqikVRxyEOJlxuxqvQNPjsONmA%2FuxRrXfpNIKKYVWL5UNRoziBC073K2XHH9n8X9G88ChQ5hLyPwy6Jif6mECoS2swvPTybw7CV%2FsbBte6YY7M4%2BLaxx1VAIW&X-Amz-Signature=fde30c377b688f5fe520322dd503e47e792b095d03fcb9598eaa18c5bfa3671c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZC5LXC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDowFSEmoWBFDcBWcZ0n6yrOaj2OCQDPEp9akL2q0s5HgIhAIk5rYn4HjFdJg8qCwpeAmKIElo3sYso32wnwGdqa4quKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz5fTc%2BEae1TF5s%2FAq3AOjSRtILrxeGGNJ6G6il0PN4A%2BW46qxCisD9gv%2FpzMHEdmwiJvpvxLaZsVDQIdXYv14yMCXpF5H5QR6U1bMZHi1XwICoEs6k5pGTw3oKz1n0paME9fMjpwwneczxAQlGbP4wUAo732XVyNWpr1CYInfXR8jNJC8RmzX1s%2FLFwWQNhj%2FuwN36jj2XtWY%2BkBzf5m26SyDCwinUbKi%2Be4AZsGTGV4vyJO5RZCIFvZg76kz2BDgoQ5H1Byt2l9M1%2Friwl13gzW73F6r1cKTvDL%2FCeHr1A1hxHE66dJ6MYiuwKl%2BDd3%2FNqwZpLY9cseQVdRUWVxgtVAp7CrXYB3b%2BLPhrHVg9dmogSfLyxou1IgaLoDXIHVtUhvAxeUFN95Q7XqV1M9chTRcApSzqRAppKcdSZq5S5iE%2BQwJo2Dw04I7VywhZf09UbETiPBeUX3tjJyS21P9t5Ow4cFJTvG%2FqT4vEzwFuMh9Mqdj4svlOMOuIZ0emnhA1MBryjGmvzKBkrmrXmZC%2B1UCD58MjhnE6hu9Yjc%2BbCJQWAfdzBvMXkv6vKRBg6KYV%2Foj07SwDEbpjv6XdD%2BKYsxmETkMmrJMWMWWIFXGj0e7UB7C0sf3kfIY5fHaF8mFAR%2BZjeOOypCmuzDwwNTCBjqkASh4dPy4vbFKUsB9OT7bYmDANKuua2oTT%2FhkKh%2FDpkhz%2FM0c8PNkRk5xfBirI6htehTFQxzGF3xG35aDx3y6awjiRboR5URTmqVdcfuR0erU5UKQ25LweEI5BN3Ag3BjVBzXQDxGXEOCH1A6J54u0IXmIdE%2FqKlQkXfrszWerEN3ppCt4bPE2BzQSbCLjqYWejTFEXwBdd8WwPTWwNc9BMPzP7JS&X-Amz-Signature=47ed9fcf4cb8c44ef54649218367819efc08e2cbec8eba49a5c6457cd3484f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
