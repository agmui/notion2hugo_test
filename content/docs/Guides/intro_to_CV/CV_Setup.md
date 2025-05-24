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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5FYTKP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEmArnrdlbM147AawC3e8aHaFIZuzsDLr3nvELC4pSV%2FAiA9q5utVaXTE3ra52ufShvCKUvl4nY%2Fvwct%2FnLijQyfvSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo8GvNM1FgMuUTXvTKtwDwNpC9fETza04jueSXq3Oge9XTyvIpjQtIQ3jXrmT3G9rivPTdN2Gptg%2BNVyH5MLeqwdnOKUYPB%2BlkzNNKZPWtCHhgIpYpVXdk8rAzoP1komG%2BCkXbcC0MQvJ1XflBGZpvlynI2H5sxcyGTPGiM2UACRl99TLqKuH6%2B0FEt%2Fge5hbrPUTaFd0kL8s4tSxJEkBkHSPEhA%2FjSiuYOzsTcRlwWKVN8TZrj3KBpjfk%2FJBYsp2dpyWmUwH%2FWMNmiKfLu74oYsdzaPq1oUloNJl520UtTHB0JGW7mGGrUHWn5ShAfKhLDm9MUB%2BfI%2F4Q6lxA7YSN3bi%2B30YpMTTcVuSbBDCYWFwehdJvfctpZ%2FA%2F%2F7U1bTd3oKPVfKbEP76YATnyTUdJynRv6oG2AhvehwzUZN%2Bn9EAZsW4QuBcrhmvcfADwllaXqjgnhmnhh2nXI9xEh%2B18qS%2BhX8ZbdRxqk0qGXlFVnoG2QAv48Z97UGNN8uH8Ak4G7FkXFNTbsJEZWcmApf30gCdTruk23XmfKSK8XcKdfzOFJ7RajLbbOArRfBv3dbzpSEeOEarcS3%2Brqg3AYFt9T11hB29d0dWcQjeDe6WqFV%2Fqd02EuZl3HebLn1p638qDwdLvH6D8BFtWiEw0vjEwQY6pgHOInjCfZZxFot6Wc4p8rc5ZZPwxp3sPI3W1uo5gNmZ1qX8EY6UIAjW%2B1A5IbeYTHNhixxkGOZ1TE2vMIFv5%2F7YD3mmFexmxBFQ77ranDb8%2FBf2GkAlX1l%2BD5EEuXIKHRGUWzH%2F%2F9FPb1N26t%2FnJiqtoTq7Fd0P4TubPfTSGOTo38LndSEiMblYQxWXnETCXlLCNHqhD%2Bw3Dx4wxHVV8y6HdxW1iagG&X-Amz-Signature=88544e808e43c92f05242c38ba87cf10573ce8b3df26e9eca1316c53aa88f598&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3D6EMN%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDGn004y8WqMIjsy6Zo5O90JL5%2Fmyywd6HcqkOp61ZCYgIgPKNle895qqL%2BBoAnuU5a%2FMKP6hzACYUtwmPeFLEqAQIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHms6hkY8kMS%2F6MKeircA0MZkX%2BiLqKOMvbaUD4C83GSunkOied1YmXiVm%2FYBI43dkwTXe6M8VJRD6WOxlMdQ9HnHwVJq2lIRJceYXKasPIyKgWt9Jt7wdWb2M93rLInt9escxvLHGJDyIT907nD6RY0odhJaq5Y9sJDyaPMSjDbd7FhB3JGdg7rl0xOfy%2FpExXdSvfo1DtuahA9FrqZ8XBJGRMQntSykH2Mc7%2FRjH5Z8uoelfCqt%2FuKvdBIQpLa%2FbAzzEDk0Y6XAALIoXYOnGXKqsVAD9svKSO9hDkRv0xqfzq1g2rcVOXs%2B7ItO6j6FltKq7PuvscQY2q8RFVPozh6yp1768i20kJ4bWqqFW%2BMFLHy5UT%2FNrwqozks5QiXjeJEmLwOOanl2JmOSEMl841E%2F%2FTcpHPtlRmLOBNjAR4%2Bux0RWEMw2jMXcMyFTbDbtvmjQitEhXN%2FxH%2FsyIR5rceGMKSz6YCn%2Fio0I7uUxxQyOslkCZXNVuNNToo3KqMdiNyIEDsKpspFh0OnLKpJecuUzWv0lfBQfGv%2FrT2c1s720IZyX1Neo%2F1Pmu6vOZKr1u6wnEdwwumGnTg4zZkjSjg2ZmWu%2B3jRT98Sk6RNipxLDeFLU%2Bu5505mfGWdlotNZy%2FgZJc9G87FYfmaMPn3xMEGOqUBXHQKEB1u3htITspylLkzVlRvXIRr%2BodwicL2EVTQbmFLibNW2%2BJKNug0jJVynWvHsStxkzIt6w%2F0IoOATCTwgSYk9Tb5OLXciqvBKJztRf1lX5tv6V75US%2B%2BBoLQrYQb18Xd%2FBNgk7jPEMGISV2CIkgVtPfZlL9uK4DS3EXoqmV38CjkOPRQ3mwzb%2B3Q2XMzSW%2BGeDZsmsJqoaVnnJnMkQdoF2xc&X-Amz-Signature=58af0497dd89812c341cbd677e7ded52a1170847ab85220347572d1e0e229b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
