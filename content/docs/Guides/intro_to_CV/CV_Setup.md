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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W77QATV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA%2FQyU9jJQfTddRQpmz0Mp6JtSXRr88Z6x0O4VtAZqDhAiEA2zaXmSeVi8TLtPCI0SqUvaFwXMglifmTWPU8l1aF5CMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIVfOtKd3PxAsxvkTSrcA9cOLPsGL%2BaoH9%2B4n3KlNpBbKM1Pngpl81AfJ62ET8E165a45MHP9zBtwUUPOZCgMmiznLrPOU0nyvdQwPkfZy9IIDtk2is7F6lQWb3HRrZ6CiW0F2Of7XUy0tunRw6qPTUs7ySFcwm6Uh9YSTCNcGw8FkLMtYJ%2BEtttD8cfOGPm7BPJFHUQYayQyNo%2BH1Iqh50oC9C36SihTmmAoNM5jroNfIsHsGzg1t7IvrWjkYnCL62ZqY5PWls5tQcyXlVFjZe8d%2FcIikABnO%2F39PSh1bE46oKXJir1pn6R08mNpMnl7xNeY7ZIeOF0qrSrw764HD%2FKCObEgDP9EM8hgbRKbi1vnLiUk%2BLqXbPsq6iK3h%2F0RUbcneF8GDS5Qkqrwf0QnAlVJmtFAYE4o2sUE9v1PYG%2BW%2FdRfL565oTqK5k%2BFVBa43XiQC34Lu6ViQDW9sKPEcnz9P5teIE%2BFYpIJj2PAkbFvJYxAkJ4qIVQJ0QG8LcziVa%2BUMq37lNPu8O%2FdmmFMbLIdZJRfRzvIADpgU49KNcfe4dKgFFtuiT8yYdjCh6MlFt%2BHT%2FtbQeb3IEVnTJ9phS5aGZMWABT6sh7mItVI027yxxN9RBWiND4mGcR59A0zSw93gIGqKvz0EFNMPPhl8QGOqUBaUMFBifE3EdzeEVNgtMSL8VE9LlFJuZGZ4dXT5vcMtH9FOzltrBIYSj%2FYcZzhqlUwbduyuC6S9iFyysTzOZM78xzT2SSlpUXexwKeytks8pgsnXYx3q%2BzXJ%2BKMrmGSGFFnysGtDVHB9l4AYne0%2FmlVPNmZALXquxFMnVdnjhrcBgY6DSskSCUk9BTwyTNzmsw%2FlRo1WgWLixiF%2Be2ciNIPMvDzzR&X-Amz-Signature=70266e61ee4c41f651838dc6c96c93ec59f1ecc13eef12d41b7fd522799db576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMU5FBK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFamGdr%2BGsjcnZefOXK4wWQtLNQwQ3EqoYqLdUAD%2BdTMAiB042dR9tbUuQK9pAAmJPuIZl%2BOiFNMFjNh43%2FHSe7hJSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMtYXK%2FZtkM91HGcs5KtwDQm%2BhVew8NMacYH0%2FW4EBYJoqZAu96lQPR9pCemJLSb4xfnsLXWo%2BCu5GiBm2PfnyOT5y7uWGZCzviM0CmzWe1U3s0WCALZTTL9WzNEJ75WDphbNNZ84A4Rzk0juDJdusBa1DThCvzADydddnKack3tWXRIldlaql8LslSb%2BCew8QRUAvGi2j%2FsHFHHG84DLFqLebgqg6lTj4GZWgVzAMcIz8ctfscA7ZnbzfS5Wjj3R33hTqjVHK1IP%2B3Vhf%2FA%2FwqOMk0qPdnnBdxkliPlrigaHgDWt5rPKZ51%2BqcpOht3hXdhy1ICSxyGVcJzqo7hln2QquGoGuwz3HZ%2FRMBju5VAgX6gkTo2assLHXa71jryLXV7XsyqMcKZX3l0U56oOu8QjLfS6kYq08%2FVpZXmnT6xfWiAjS2OmY9MukxbvSrjPko8SopnTR5Gb%2BxfPkZes2tL1K%2BSAgwvA5f1t%2BeUVJeJR3hopaq3EkI9upXzTVRPn1oFDLSipa6NBaXbom%2BR0%2BEUf42hg9t2oLT%2Be4c4f2VCa22T1kRcT8B8QUiItAkcNLQhjbmu7mFtRxygcokchB6C4lG%2BKO%2Fcn4Iwv9usrWEchQkucEQPxWtoWeEmqCd7BTnNEdGGi1bmxPn9gw0t2XxAY6pgGoBct2unBD1tQD4lB02%2FjnGqnkgHr38dynBF5AUfbjJGorSWjs8KGhTPZZhETXwZPXrtqSozCyzQS5MteogNF%2BP7Uu%2Fh3aKzKQ4Sm%2F58BHo3gHU3IhK6O9bQfhOUKUtHaF53mwrDxa4TjZcoJGzHJhi9fkkViMGD76okR9YhD7Ovl32CX2e28ph8OG8jItGCCWeRvpSpxM2NyqzcZYn3wwLdlwpBPL&X-Amz-Signature=9a2e567024dcb15f0125b12901bdae0c57e9415ade7b93f503dec850146e2236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
