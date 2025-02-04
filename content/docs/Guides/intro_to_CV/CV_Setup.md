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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNWGRWB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCJ%2BaZ1B5KpgzP1szhAoAdD95BEKVYDLg%2FY2xkoZnyXxwIgN7uSjBwD3elmHByqjDF1oVHrnek1Q5bU6KXPpQUxQ1Aq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHO4q50YfUy2MlU26yrcA17hp6iRB2udyFCtt3fnxuNGpNySuYIbNygWLFxz8hNteHQf5Mf%2BZd3r4alXZ36Tue53B5GWapyDruaaHkeivhMYkejAe5%2BJyYmxe6765JwhtwFtk69sDo620fVF93b62zaj2BsZh4%2BSepmjs1TZ7K2KZOz7pimDyBC5FJqlLgJfR9v60HEyx518PlL4zf%2FssPsXMkyyxb1a%2FaL7pKR12oDosBz0EFDofVz4Gv5q74DudJtvdVculkmzGoBhWftAsJESnFahQPb4pcNsDwG%2BO3vz%2FcqzoIMbnSNP9oAn%2F5lb4IegciBaz2IHi%2Bg9kUei2x9aZtkDTsJSTwiVCL5l5kHFBGOydaAvLWcYkY42to7mPh7ZeWaNLdzhTOekenWAZzEf%2BcVrx1G%2FjYhpIyEFazEP3%2Fhlc59ESNC6iqotjMmeESIhKXx0MfzjfZiwgfmkwBy76ez8dm6o36XgdjkEhJUCpBmeJmMo8iYCrdFgVOSDf382uEol8KdKjsSfTV74F7%2FDZI%2BIEvzUW0flXHPNpWd020EKnHSbd0aoQBXmQzTQTjiEbmi1h7w394RSKtaDAyB71%2FsqSjdTgQDh%2BisSOw%2BnLNwlSOEzcsEMExr7LIjf%2F45mgpRxRCgVC7CzMPaUhb0GOqUBQRv3ur2KlPWUH8nkjv%2F93Mhpfa%2FAkaNPen%2B82Osd7tveaKwHZfO6ror5iK1XYpk69wDmktxQdq3eiuVhuBwp01p%2BlbvtU%2FrTPI%2BPi5Huw1bb8mPCwelssI7xsNlZf7TUJEP8b4rnjsHxcguRJurWz9McSV267Tr64EAB2wnvUNqyzPMwnZGcRl6gKpILQgsgZg797h31l7hXZXvFnBmagfdILTIH&X-Amz-Signature=d24c2ba342c47d9ca4cc7340b2451b12ae72da54806a3b3a5c55a79ffcd9aabc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVI226MG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHL6b4Tmfcsq1BizTxCX5kUoPgbB%2B0JL8omP8uQD7qCPAiAAx1DM2o69FvUa6P5o9noo5T38xeku5jh7Sa1mlAeoyyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMY1mo4rJxoxajDGFCKtwDXiyviK3bVEkcJexmn39bIudvQuFoKWL0W%2BWPuzOa06iYwTi%2FEOmG66e%2F4dmWfkZ%2FzTZ01v%2FE7K2%2F5uEFUcoZA2qgG3%2BVxkFZ0Ewk1DVgnBcrnKbnsHtJqpb8tpZPkZI5eQjXS7uV4d5Ukt6JrUQ4MEYagvC3H2rjQcQKBDt7NDW4QTtgn%2BQRnLdWJ27MVKDlhS5%2FxGrJ5i9xkFNBwaXySl1nlD4Xius48rVSR6fseyhtvuGuJAbCBpSZbYSkxgNlD6vpMP3bKJeZHcqQz9l6W1ueeADEi1HeVl2Yn62AHRfF50OibSO5ZlQ4Lovd1%2BCdHXYblSg7nh3OfgdvGtVxr1LNY7ENGiZBKwUp40NaWCQj1VDDsF05gbyj9ayLqrNefzWuqCN6gG9Yr195Thr%2F93Ii%2BmYXdM0hjksz8SVKK1wT165gchldRJHm%2FwxPQERi%2FUWjvpDsfRAZbR%2FRDNSpCdq%2FHw3O%2F8BfL6B8bYKzXmDcdIUnqpeenOO%2BuZ73lWChDxx06LLyVv3ElfytsyBeicWTC5Li8uhFB7XT7iUtsU%2BLnt%2FwibmecTT%2FpCCJernoER0VfNCMkkO5gI8oZZ0UOZ978waxk4TtLPxmi0g4GkB2OWT%2Bv336TT9KYhwwppWFvQY6pgHbQJIM%2BmIZ5%2F0%2FO8cleU2sccyCM2T2vuygV1h6mR8Q02shVRSJojzI1rdAzD8FIThfC8pFT8yJHZrnSU48yAT0zTMnhCUTKcWzIc2w0th2UUoHzlyx3PxTQLzpWz5bh6DWNkZyeJk0SrK5RLNFlv%2FBLaYzaLS2I5r4U1HAIvRxJOeGevywvxdCREo56sQU7z7p6UhSrKpZT75Dgbr3uu%2BFk826crDE&X-Amz-Signature=859394a27d3f7b7b5cd7fb266c4570ab21026486aeb735db2ad861ac11f4a643&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
