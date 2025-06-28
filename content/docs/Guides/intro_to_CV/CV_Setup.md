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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NEXGMHR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Ic53Bcfo7cdZTE5QBXeq1EmTQWLU5wlqdQkBV5J9BQIgO7m27dXZFADaU3kMDW8qiMolFLKn%2BwNNHQXG6cwY1dYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIu6yaPZA1qlybPByrcA9yqOrGjtMzWjhtK7I5hJjO7VNoPwDrXsGywQ9Xld1w1xA7JSEhooLyD8o9gdymK%2FUdq3vJU8UrvSrmacyIxsfFECyD8hk5k0QENDyA8YOhYiByR0NL8mp48ExHUcnqpd9iLqO1hcgHG4q8T%2BIa%2BBUqYJkZSJzaGASeBB%2BxdKjhl57zqFuGvF7xJC2icZ1VwvIUF2ai0a0SCfu0w77gAj%2FuglODeI0vdOUxXvpgiR9Byh%2Bybid6GG8l78QHLmJfyhjN%2FNLGqIf9Rr9PucscMDfdqg8BCuJA%2BLG%2BTfXbu5POEjJnz8nwYo4bechB3Vg8JwadQttvTKcXaDMLOZHc%2FFPu9%2Bu39aRay9FCDXe4qOkUbmsYmnTxHjQ76j2fcUECwUNUkEM5OcHReASya9dDwCtror974u6RS%2B8byMprdMv%2FUPcucxS2OnMjxobvWJ0XcV3N88%2FLgYxY9DyOlZik3sfE1wQAXzaUPd6tqA6jFshy%2BTjsd7Oo4VxY7VqumIyJmP%2Bbhhx4HA73lcB01VKeGTP5sCgOdBeU1j8uVtWgA8JjikXqcfayX0tUYF2R%2F7%2B4XLzAj6OsRqJBxX3NgHNzWro6aq%2BmoOKdSyLC7FHNIobz%2BF0k6X9Mn%2Fv%2B85n62MObK%2FsIGOqUB6svpBIk80cbEhgokSB5ak17j%2BfhXF%2FdsrXGXwuYpYmrK8poKib3qEMqnhk%2Brpy%2FD835Ja9UaDOBIM095VCnG9IUExjuMSQJKS%2BuMRQv2KhRp1aMEVvO7PStRHdNfk1085SZLqw7FG15dAAqrjbHZ61RJTRdPXIbO9HwYn5gCv489%2BJWstd8b0NHxxXVMlcrgUcslB3kQlEcL9lCgmeVu1hLaptZg&X-Amz-Signature=daac6f3bb095447686d883e0b0967081db19aba5aa824037fde9dbba7c960118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6T3B5W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDonTMaVZbZkTqQ2iue3IIpKBiLcVL8drQFy%2B7NG9%2BiYgIhAIEMurWQ%2B9AZdzdHr4bJiEV2C1EApZ0SGKTRfvYgQvLEKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFh94sjw1BpVrxQQIq3AMk3m2vk8huAXEX%2FZhN0MMTDsYZe1vT3bc6OBZC2I4Nsn8JG3kfNT23tP4M1uYGnD6KwB1ztjNmn1dDenpYdt3cwh725%2BzpBsfyNPagLsHcrkwuzkY7SOhN7XzuYNwUlp1WCiXzJHP7OQe6g%2BGUVAJ4T5atjzqFQYeGy%2BlZR6lciv5tPV5Pls9G83%2Bc6gdfN2%2BhkDFHm55sHkbhA9S%2Bc7HPT%2Fm1GzfSUstMqKPPUiJ9n%2Bipd5wYtrjF5AvHbAdKpVd8r%2FQBkR1J0mcp5J6VPYYQsJKY2Vcd9pcQUxLQf%2BfIeLBZlMDmDknnWSn6b2auxH7UCpS4A%2B3Irkg9YUsoZlMOxDtV8h2ugCsC5C0jTVs7mJpASPLmto1akmWdCM7FAtceIHonE0Qo5elfbN2TVK9%2B7JZGwdTShnWyVia0yrVSWDLYH%2BrA4U2tPCPm0Zy8WtCavwmtClVGQBg4hBsfAo90a5c%2FZtdFkFJ%2FeRVRfUADew7fc7uF%2FtRu%2BNN56E7rWBi%2FVsl3D60AC1Ze%2FZpLSx2WH3I3M9KieXzvQWZNC5Pazxcv1901Abln5gBRCKvTGo1%2FxkMNnIWpNPgCFpKUhme%2FHdRBZp9%2FBV%2FPJaydPssOd78r5r3t1oWy%2FvkE7DDeyv7CBjqkAXZLwLChrBCkHyM3sq105MNMtZD9bhCvafEnBlVD9SN9jm8C2huzb6sUemuDyqW8ourxQyTB7GDYVmTCuajplKwuR%2FPcJpZ%2FTVi2JNnNLUPZZTs84l6jkMJBdcRCYZyu6gYdefvPXTue%2FvsGEmPlR8Hm0ldnjluHtIMAo5aWTexf%2BkH65X1NU50Z9k2TLSo9mxqEX4EpKoJdTEU89JQNWE%2BvQI8C&X-Amz-Signature=1c4cd54774710bba75512c9c3af9566e770e163890bb9c17238cfad53b02d071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
