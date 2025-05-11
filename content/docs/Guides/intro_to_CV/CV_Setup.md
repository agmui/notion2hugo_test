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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4J566G%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDahkZxHnAweY%2BlqihGDM0g%2BOwHCHifd0pJDDN81JQj%2BwIgSepuBctuTEuyVeKqA3zW%2BMV3mI%2FCEfBfvAE7GFx%2F%2FAgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0HMYC%2BOQF2nf7SvircAzweJqmAR0ayGcvM3Esf8lJc2lVUPvRIZBmFZXq6gXe6AhCmmeKJTh3DQBfaBDAYpzEj3eL0X3TxHZ90GisUcMMRQVUQXYGDGX2WAjRPLunl57cpW6bsPqPnc3XPqf%2FokyEZKhoK0H4rOdQMgi0GL%2BQlCgt8g%2Fncu5pKjTdxJyZYig%2BlOpIs%2FRyvq9isd77PSd9KHRyB3Tsh%2FgBsYv%2F0i8e1oH%2FldVWHW%2FTCyqaxtPQ72JwX12RA15g9apqhKpcF8B3BovJv8j0DE%2FRQf7vkTKkl%2BsDlQJkcXjv3MpR7SOmbeMWtgeOMlNTFHLZUdp4idH1HHx%2B7ypPAVibpCqhWDwHcPFsy%2BzrFvkX%2BMOFC1SbasMF7K%2BMMw4CGJRNc1xjhHEsQIPeJvCkTdm1FHOj14i%2F0CwE4QttP5Adisn%2BxiCto4vnaTiy7t138sYxDXHG6H1m2lH1HiQgCHy2G%2BHtdXhO2vAcrMmpy8W8cpS8%2F3SBGwI0mMSU14fzK3qrLaHGip3Fw%2BJezk%2BRV1Sh3PckgvXb5C3loVE6XMaY0EIzVKiHFka95yI016rvUKTVdwSR2KSXXk4PfvGEv5XZZiO2FGl79qa9jLUcAE8n3a2MXvfHL6ZHNk%2Bi5n304x55wMO6hg8EGOqUB7SKlJjfvwRBHHJPQ%2FwkJtaojfe0T2Um06dquNFS%2FAbJrXeFC1ymVNMHWX%2BhNCVbcZLgMJyAsOtM8lXBYsP9mUptbCm%2FJs7tv3PV39yKIs9CFP0i5DM4fVI0O5%2Bv8kfGzAbOG5oMhxhlesLG7qdb%2FBtLDoH1xgZ0CsCsom8KUlJW2hci%2F4TZ4n40mA9BycF6I4kB1lkAQM2gy6pTKqx4HbZAfchI6&X-Amz-Signature=17732bd4c5b13078535946f0705e28e025728a751e2fab5d0c09d94e81afd686&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXM5T6Q6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDGqEMotra8KqlaKL2saVltHsVFUrd9ohzmj3jXnlLHngIhAPaq7H8QvVxZLONeJZxwicTxhkaaV6Sguf1qPkhAzIDBKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqwSDLGdY2YcCRt8Qq3APxPataH5FuDqM0QDKi9e33P1AH9XG6CKSC7lnDGPoicCTt5edp4mADY383Nx2UzRXvERcprj6oAWM6LcHAVj1t0nlkVEKt9PEaYy1IPv5VlU8WeMvYt3UMk7izu2UBhwXq3UULl4QSjKat6qp7BgN0TZUT4UlmyhgbIbvBbrEYV4SjeLU53QU8Rs0rxC%2BvaVHCzjbYpAB%2BCn8Tn6HmMUa8nNNKvWv3UQZ8LjpeaKdisuKoVVxa9CqANTCcPQaSEjVffyzaIH0WRyrBAImPRxPXIl23u%2Bqkdg5sUwmQVLuiIPHxbPuVSANEFDCzeX9OpbkG5cdjVEgbj4XCCBaSrAvdz1RYrC7t6liZtwO%2FHnYswUnPuALQ5T%2Brdn0fGmUz0F9%2FG8rHM4ycjDhfW4eQiX0Us0BD3zEJB0m8ncuyW1qVb4%2FW6J0t80BMOadI2Vk9cD9TjfuhVGue65lYFSu3MMr2LocfCqV75Ebh%2F5NhmhuDZECo12AvGRcioxRTo2D%2F21Zlr3GYifd7dv1bLFIw2Vbr8tcN9c3soZhNIFtUQZzAHFf8Zbv1WTCQvSOZZ7cX7byV4GDp7NAcOUJQ1T1RF%2FouiiExDHX4FvWe3yMDWtJkoDOcuNVv35DwPJHl2DCRoYPBBjqkAYEGOQ8VPJ%2Fggzq5iiHKht0DLqLjJl%2FFF9uM%2Bj6AHPWn661ZA%2FIrZ1WoBRSaRc%2Bv34Y2Kp38QDozQPvFfSXCN94PYxVxLuRAopQqhXvsOPrLQHUtwAsZQgygjXX%2BHU29iGld1903c%2FwbUoDuP3ri3NWsNIN66hmple3RXK6HPKhUFwdePDrQ16NDODEaRFswhqUQTDzwaQ%2Fj0VkJiYi%2BcUyTE7FH&X-Amz-Signature=e2dbfa76872cbdc02b13787ce4e462d98a0cd2e02f066d27f8a73e51805f88fe&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
