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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554MNIBD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD743GBCo5J8moEIyiqkuaX5VKO43enkoEwmykgPH3i%2FAIhAKQTwHAwTn9ar%2BUXqGG7oF35BDS89ky4nMFnreCEp7MpKv8DCFEQABoMNjM3NDIzMTgzODA1IgxqSJc%2Fw1LNY7F512cq3AOG4bJYAHM5co9DM24%2Fb%2FldZ00w3FG1qH9G6bpap7AGTpn005s09Iq9VRytXhn5vqwtrGLe%2FH1Od5lwz2QYwVOT%2FLGlhCS6ml3TXk6Y0KhSteSLj9dIH2DZX%2BHrfjUcYLVhRTFvkerh0TUnfPgLGGE3q0zFtFNt3a48iPlaF2SNzDnCsmPZfSKjvUSA8i4W2%2Bx%2F0qhzG0uxM%2F1c54TQYVsaErlNTDL7aj%2B%2By8wBJ%2B0Y%2Bdyj0Xzq2KN0T5G0mmRvrAavB046kyET%2F%2FfGVILfueWjEZBOyxa6Uonr9rC5e87FBXlBQkZulmvfhdQQKk4wwQUfAHuX8wMXSm9j%2FL0SiBhn%2FtfY%2Fj8AjbaVtLjXdlzPWREMdtlBq1LsSlCh2sDnduo7dcrexCbUa4iBkt%2FlBBWW2uhJqjiZQBss6elGs4SCoiJ7aDRR%2BCnPmZW9sl0n4UXsnMBXtruMxvWtEfh2f6Ik%2BGGJrPNp2K3m4iO7LB%2BNrXpcQa0vn3a1Ta6cvRB1ZN95ai%2Bsiigt51cu284LQ4K1qGNtd7IkCE1BDQ%2FtIyT0q%2BgT%2FH87h%2FG1YucSc2s6N7rRIGFvfaeEWScz9mvXVBQu4pnERi1kiKinQM6I3pRkgQkllAORYnyDYOPbMDCuvfm9BjqkARpP57XFeDo88G%2FS6TMb12Rjo8z52dMlaRo0xzPkdwussdXko%2BlVgh2Lu2MYV12ozU98MD2uEl1%2BFrKTq9fcYZbG7RNpdf7QthuPI%2BYLnz15NmRTJlEbGphcU5q%2FDbzxDJSTR31PwSYAuOtA51glwiZZXGqqzhIvu%2BYiKhhQXTR62HY5OQCSFQKYG%2F%2BfPF1WAurPLLzWsCJtq9mKpO%2FC0gl4iChI&X-Amz-Signature=1f2d277a63d0a723ad2b071d659c24b8301d28d8e90157e7f77468e34f241ca0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQM3MSVA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICjlljD6BWueq2GhlutHMxZNeBekUfaORJAL5Q6O6CcAAiEAuCxWpTTKEJUBFWp13crLDKwLi4KeMFl%2Ba4Myx6HvKsEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDK3dTIg3ULlwreI3NSrcAyZjeFXGCdrRHk9bN83uyCTjONfLuM0WHCPL9onChrm97l3CxdBjSSul0bIzxwEtBz4ansaKGO0iwgikRWqqTu8RVivbmF8jiiwDiqDYpLh5%2FB9yra8JLiQZ0tXMXMcrTaqsLsXC8mQBU96RTI%2BaF23Oq1%2FCcIpujk8U5d3ujqk1RjRg%2FFuKEYB2zDAe1zeIHHiLih%2Bc8FnbOJ5KWDpyi7pB8BHuT29jWHmOJRM0RxLGGGjGg3uJ6%2BO1hs4cNUBIog7hmliaH%2BNH75hSehbWjpeba2L88CAJH1yUplnQz%2BjXggy5UEp99j%2FUB633XFAesdTRtNQbaFoCgKzYgSZllT6MBX7vNSR%2FPDnHchuRCrdexJDmoZr7%2FPSrhum%2BjJIOb%2FBOZXffalQktkUIHaUkiPl1ln8XvFjmDgshktthRCR9ax%2FpoRLmHw9PMv1jlthA0vCz6nPY0xg6jggPIhPdXuivOnmwH0rqa%2BoMP%2B0uZNOsyXfPHT2YxdS%2F7wqwDzP4V3LBwboUTie6biZpMuxXXF%2B%2Bo83JNPa2uVRmJxYYToQjDp8zbsMbscRsHbd%2B1FF%2FpXpXngCDfzAgc0q4rV9u5xEjgpwXK%2Fn1mbHlFHZRGD0E3e7kE4BgmlcgcZ5nMP28%2Bb0GOqUBYsqDdYB8cZevh6okTSf91zFTqKHPWLOpfXTusSwWjkZRKZsSpD4%2F4b1qmA%2BQDYNM9MNuc8LCr6v6TFC%2F8AhSsvotjIpvwEqia0WX23dHgBwuSGYeyiEJiJliq8ZIdqywqt4trJrdFxIT6QhWFGmdRlyl993LoBo9XF2eKyNamNQlCuY3CDWmGytXvYtrbxLLBo27N1m%2BBtoirxWo%2BY0FaMIiviFe&X-Amz-Signature=b114decb11ab380b65ce656b5db461b0bc117137cae7ce768df422795a075343&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
