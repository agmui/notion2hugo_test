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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7SYN3G%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIC57XAhT0WR0e%2BPYqGy%2BWoyZyaUTPTHJTtoHY99%2F4SSuAiEA0IY05Rr62bFsEnWEgORZiuXf2zWhhlAYkCz6qr45x2sq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOMz%2F%2F0EUlUSWYEMNSrcAwj%2BhGA6OwRomurC4jH42fWlP9EjwkG0SKlkVB23DsGr1yP5QGkDZcQMAxaATin9Uj9TlujAbhPiYimu1MKXmIt9a%2FDj4rL9aHFjfnadEYmCqZSKGknO%2BrV3LWBf%2FjiRvZsyf306iS708iAqwK3QKMebnO6WmvCuAILnyq2Kxyklx%2FbnFxf%2B%2FQT9emHUTzdwKbSxycZMAU2gt7nzC02ETW95hl4aWzY4ym212Z2uNw1U2ya%2FR1WlSEZIlspnr%2BlCpaLK53BwYV0%2FmEs%2F45NsnvnKd6NZFyKoRs83nPRTRUb%2BEFWxO7vAVgUDj6htYgcFQQedU7T6RFdvPTE7E4OQZeAnPzshg0pzs07bdECgBqkoIVCqZKPH45YOIklnKKsqcBzbAnT6sA1Ss7ZFx5dTbMywrCDT%2Bv46de43W29CIJpiq2pXiF0C0LbhgNGANcx6SCK0OoXvZ7hl5fujS23Eznu5LPsq51bpfwBKK1l6TgX%2BvSs%2BweQOUkXjEOxkj4ZIMb%2BdiazfQqASGEnU0vccUPbV4J%2BXLG2GgU2krhHYMCZ3sULcG903EKJpOJwCcgV%2FzQG6u9TtYaK4gzc07MRC8iR34sgotck7figxz3MjyYVFVPmVMJ%2B3PbPtydz%2BMNrqhb0GOqUBVBoMScRnxrf%2FW%2FqRTurLvl2Dj0N7CV3gfwvA2%2FRM2ryR82E0O9uNkgzk%2FNE17IrMkqoZ31NlCH5M0GxFiR4dKC1nqA0N2Y3XNRetQa%2Ft1%2B2grT7uIUJJxAup%2FnBb2rNio%2BoRNbrhYly7DvyyaYT3Ug%2Fne0IGbP8kc7O4f0Oyv3DU393gx3twb%2B23ivnzWQyuTEaB5oGetavDuOAsxH81Fa6HSMKs&X-Amz-Signature=b3fccb607e52b9b146a2731e4e7b6591c2a44266a20183202c1df095bcc20ca7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IVEDL2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHa6KMy7xeVgsnGbnoTpDfFXlckIaVORALj3GQbjkJIrAiApS%2FW21iuDS7fJ7Y7F8c%2FMFyy%2Ft4w%2FhduekH3FpKLA6Sr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMDM9eIacczxaaJ5l3KtwDMDl%2BXxwm9SoTzs1F8cmTu54YJV3%2FvLPHfdl8s4EQkDy37%2FoTA8v7lgE3k3bLQ3jNRcTxra8dhsG3dPJ3Jv02pQO43i8cepVbPeXIr5%2BJdtn1SbyhswWzg%2BXPvLDrAodtqlWU7N7y7xxGgp3YlsqHBSAv%2FXXOOrELveecB3Y7HerLOJuBEJw2VN5vGdNARUGyyI0uZPFWzl10EPXzIbIR5JLfn7hgq1vHybAF9FfVcnayuU5lUYOaBufv%2BubiqJL5ddfdDjDYoFanfHbuSCbTxbzhlZNrPl5S4PNua7%2Bve1xiuiXKIvKnwgpsnsYQ%2FhA2r83T3AGr2bPcDLdDJUUf5b5Xk8UyXs59p6IZCvzYrMLUINpInnHxg9GJtkPbXYAVErG0puJWrWz7TtwtxCmAu%2Bpn7YayI7DkH%2FVAs9Dr2RgWShS%2Bc%2B4EJNwqolXV9mSq0Yxw%2BDGb%2FXeY2BpkMxmS1yE6TdN5JvtzISk7R179uLwRGoasNFsZTwkMhSzCCNaJvR3BKkc0VViBLzh0GVo%2FGZfeVGnK2PSe8eT9UOonDxMfzfhRLSpteMk%2BTPLjTxcO%2FehnRbcdeidTm1FjhNQAOh%2BdkcmlAZa8RhkgdjGJ23pXXoHjq1PHDLNj%2FeYwyOuFvQY6pgFF6WVoJyouOytOJ21sRkNA3hJul5IqmHSUPMM52Iu9O4ckJs5lbI4AMW%2F0ey5H19R0IVjQPKQiiFCnuv6kl4taMT2VCYLfWhKIqPUM%2Fd8MRpekFuEN0sYJm5TXqXYGKIFxfpaX5znaNOM%2FwRis8wG8xxojT9Zvv6pIOVzXZ4iqSAs29wR9Z3jGm3RJkukmd0zuoAIkUGYlxvcdhaqAho2ytSYj17nk&X-Amz-Signature=505e3403162af484822a67636e9e17c638f3a91a220768d72cf0651b5b8cd211&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
