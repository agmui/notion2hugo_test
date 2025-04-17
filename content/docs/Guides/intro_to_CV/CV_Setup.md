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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=26cbffe0d62a072dedd6b64214ae8f83fb433cf83b9b33dde07d2f9b0ac8265b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHBNSDL7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBW%2Fr%2BBjv8VRhpDTvFBqfvmxSipeXs5k6HcHuQTXJfmzAiEAk1jPVY%2ByPFIdgJPhNWANQUZHNGMmJ94eGro9kztAcfIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJR5q1Bpa7vNmWgbiyrcAxiX1TlewrAahAFTlIeyEUGNmnIkRjNHUSZ4HGYXo%2FkeX9x2EsWN0CpGt5%2BQHkhwfDH6Ekk5mraPdnED6svDQ4TCUUFr3to%2B6dlmjlR353jCEk3Ze5d%2BOJpnz5y0f8Bu%2Fy3YJFDRiKoqC0U%2FcRECGFgl6CN0BzRuanoyeEKpxqBXc385ur2HpRqCWdxcmXNSWnzPamp1rjwL9FL8qaWXP3A6O2uuXx1UCLnv331LFt%2BFlxQS46Fz%2FgqCCTT12TYmyz5j4nkh7UyCDvHMO5%2FTSyohKecrHE0t26uTve43FEpzWtwXJzQFTkDoSm5YMOQsjD36U9VB3NITXjFA76jVmmu5JxB4IwWwBTPOEpKNvNzrMslVHvbknu3nsaRY%2FpMrnc%2BRleH4nHMLD%2B5AuWvtVHIXcp9z%2F8Oy0e%2F5ApEmgyfi8L6y4Jhg4%2FoGEQpq16aQYynVVuvt0PSIABfCEgsecyFdEfoykk356aLNpVxS01YIc%2FjS8Q8CX37AhYB2%2BtskhmzYFXFii4%2B%2BprT0EghOB3zLl1IWARan2oKiG9QpRLQUsfBrAxmJO7%2B3ojN1Xk%2BpYDzyTs2vJpEzp3k4P8qw0cXsdTxHjVwOWrwJkX2SBU%2FxhHpC88SthKWFLq4tMIvhgcAGOqUB%2Bwk7TYXQD5bmQGSnTJ%2BZOSvdidjVB1FxBji5af179i%2BRQdmXmfWqIZBjfltMReOd2t9f8IMhaZTI1KySgwRslryZ%2FWsJyAq9ifxWe%2FGKq9DtllF28%2BqWNDvLx0IKxXQbZO4XXxf6Zrlx7XDght16vImAgeqWQmjAZRfCBEz80JMxceTxm8wQGJGXJDAbB1eQocADBcoG9o7bhXpdgZfo%2BHUFEQJC&X-Amz-Signature=5909f5f0031071e6a862279ca11c7cd8ec24a5e1f94900592a228954cc13cd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
