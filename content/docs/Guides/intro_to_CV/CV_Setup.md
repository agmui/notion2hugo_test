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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LFUXVT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIEblO%2F01uCQa1uzS%2FQtBlyBRUhyUgWYE2lQ7JBQKSEGOAiBQIF40ZQaLq0VtttH6jTkQdUtaSqHv2bNq2PIYVoZIFSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMebsARD7H5Z5DWa1oKtwDxFWeBMURpkVf%2B2RcR8UdRml8ZkDCtH%2Fo%2BI43vC5F6UoraKl3tswT2zjYZe5WVYVdbVMkl6it3RqizF0c9BpZoloAAqWMbsyUDuEzxkFUFNKCPwDj%2F10kZvOIuQIpmXgkiK8pvdEUJW1z%2BH31a7%2FZgtreGBmyGhsB15HDYAV1GU7QiGI87OG1ra1nH3Tgr7biQYkSomfWGYQe4dg71LLD1uC0SbyiA%2Fi9C49oIjiz9mc6KL%2FJ72pkh1Ui1EujS4CneLTMFCwWejJWJqjIx0vx81GHqMzjh4%2B%2FYtINLwit3NB0XAlprGuXBS%2BLWbeabJVGnEPtQELMxQQg99UmdwxsDrelP%2B1uVY88sdc9vQNK%2BylFJOGaY%2FoiRtuEv7gmHQpecYPYWdOTqgHQmwmxDbOeEdCy%2BvyS0mJPHXrIPKaMC1kf%2BZPsyervbEt4j5DbRUJ3XPWkPiaTL4n06P779eRFltm4VvZ1g4W%2Bx3h3tHmRy%2FfLpL4VcWZO3389oJgWzMRCEcyPAw1adN5EY0n4azS%2F0JMCy8UuUDtQ9j9yX8fWInuhNwrW8P458vWLAHC9UTdmrIM4vLEBVOwbKDpcTQj%2BQatcjiZ76mbvfD1IL4FUZCuE4C4KJxhuYEY2ij0wpqCjwwY6pgFCQUEJ2UAx1tMjY9yVUJlYcz4AQW9KS%2FTqEgYnoo5OOiuJD2mDgWyE1tI26gQCUfcE9cSEHLGiFES63OHvNW1lGyWO%2FQpMOeKrmXL0tKv5hHtJBf1fE4o6AZT0%2FPb2DWywPqgNA6phb0cA6DxzkSkptl%2Bj9Sf5kJNv4r0xn9nHz7C6lYFwYxJdc%2BB6yQxo4De6SxZ54CXXXl1Ug11sEeef2GS9s2Ib&X-Amz-Signature=739015c3b7ca9a0e86f97b69bb37a260034a8befc91d249b2b379cdd205f1fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y74VWZM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBztrw0%2BaphcIJEJo4B0xMJ4qE%2FkywcvYtjl%2FwDIGbTIAiA%2FBvuL1he3NcMf%2FtdF5B8ZZv8QKBguccUfnjtcPKND0ir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMsyswPTnWpYajnSeNKtwD3iU%2BZe9ahM%2FVSt94SR8ag%2BT1x0vYsr7iewNg%2F45yv8r8aUrrcUl1qkQdltGIjrGNLRTMe6sUYXot6tJRHymVhm1DbNu3pVyifUM3QA%2BbP5jySKB2DiEXFeERo%2F%2BynophTuF7wRygTnKk6S2fKkCf6OVnrr7ChhSHDe51iEzRwXOL9%2F7pQpygJZoNj44jtYlnU8yRmyWIgEy5Oyb6JcVBuAnwdYrtxCRsSr7832S%2FdMvp07eFKpj7ZZMqgXicNok11UUaPMLWoanIsQNOeJPc1YIoOI3wCc7vaA0526bLfQU7zihsFP9%2FFxlSWues7Q2%2FX91q3nPD2F4QT4IjORQ8jlvvnuBptA0q3T34HY%2BEMoZB%2B9FOqtaPTCltwI%2F%2FxTATJm5Sr7egoPqecDlAz7UAF%2Fms3A5qvSckanUtVivA3ILDVerGIZIN3cWI%2FZys0rbN%2FUmMWVCYIZytFG6uoHLeNxpN61Kc%2BF7Gukh17OVoEBxpEzLzfdiPPGR5M10UM%2B5ZYfHaphX3rWh1QXTf8j7oWdSmTtYbVa9Ih19ul8MRMY3m4CIP8EV4WyeCjkLao0%2Fj3BVI7%2FaTni0OYoF39l%2BCxMqjm65R2%2BR0tK1TJytldi8OpL565f6DqskVb%2FEw7KSjwwY6pgGuRO38iTduXufsl5YeVfovh2wP6%2FRv7ySqFLAPsk1Y1kgUwmnmwEjAr%2BWuZM2PfbDQsZcBi48ITnQaH0u38xocTPnr2vjCQFkaauxbXb7DaS0QW5wx1ik613be2XAsbPK6lE5arZPQKIT%2BxCMgeetiWQdpw7eMDwYynBdCaZwZd9YYLDCM9rErcEUjLvyC9GgH9rOMUQwWje%2FtSlFfIHdae%2BJqIw87&X-Amz-Signature=08708a85064508e4956924a3acbf62b162246c0e7ea768a9bbaa7c23696483a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
