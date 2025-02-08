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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQAM6PEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCTYI4PNMopfH%2B7fWyoCqLewdSPQvLV3cUsT7hB117rDAIgHqa6hurNpUH8NgRcN8SdMXVoyRVlmlz9dWmk9G0cnJIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHr%2FnluZ%2FmtqDSJHyrcAxotJuGPIUAGTC3pdBC%2FLx84f9jTyTqP7q6Tk04sgR%2BkbvGZSXr%2FOCgpsDU3j%2BGB6Cg%2BHd%2F5OvDpB2pER2x83mTBuwIHD58NqCuahbuLOR0XhHsvG1x4tQr6kFumSiRZTqZv1KbzKCfcabSRZ5jkLr36GzibSmKQR3T0INC4HqnadLHjO4VBSXVJKuLBg9Tps3zxIyFhPPyKLk0VKsoNZsrBb4h3CuLNFXi6W%2FAoClDyI81%2FFYMw1nHSoamjE30s82N0T55FK0CXAVlonpQub66ARrIzG0SVtqZAkWv1dogcJ0X9s%2Bc7rYdPkRf0x4Jf2NB7fabCw9%2FophIW1BpRnq3ngnDPlfHjThbO3MdYLeA1LtkvZf0AqV3qBrSwlSW5Si9Q4AvjJBxO0Q5TD49GVwKzHAIgWwwNRZn57n4LFOqvHCNkRytQR41dP0i64e9AvaMNuHy7ywaSLbmF9JfiIEj00cMbPqxzmO3ZpoTm5jFg7lHTxN1ru8wRnXsj3FiMWLn%2FukkhbsAZtHmRozeN2fMRUvC49ToilEJMGtZ2%2FdPIgjqClw7gsMZsWoEYvCB0MYPGddT%2FI9oAtfXWc7grQbXgejKpiTabYkAZ1WS1ZsoHrTiGw3wPjmjJ1tmOMNHemr0GOqUB5QeitzmeQt5qLsBOFEW0acg0Dvrz3pBr6b7qOwbPcyHmc%2FA1u%2B10W3O%2FA25asE0t3RicOLFb%2BDSPE%2BG4mlUw038nkSWZG0vJ%2B5KQfBxOIia6VQf1BLgv0yw%2FIhJBcZhvDTaHHBfgPqoDnqwQkZ4NjJbO9mNVhcZ4Hk29RsvzAbgySD3xNVrkw58KGKBWmba4Gf40aSy0AeVEmmD5lqX%2Fnk73MQVn&X-Amz-Signature=9312d2fc173668d6e6ed88e210f754c9fee6a5e0301bd98b82ce2caa7f74de42&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJMF4SPB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFHdQPVP2DDcRrwYDwkQqfC0yZxmGWb9CaXv2tAfk6EDAiEA7QBYeFfdClYj2pOfeBWYi0wRBd%2FgA7oEcHFkn9UA1IYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG34pUP%2BTqQAFfQgeyrcA1JtHuKUZMafE7VIvMPXOnVxru4jrz37kJ%2BqN7FuLvasMuAANWftZJkWVLbzpW5yOmPpGEUNbJWOmcX%2FG4ERkpVVvZCcpnTu1hNmdN%2Bbzs%2B4dZZKFXpwT9afZWO2oDchKkx7i%2BBTO%2BRsaS0knOz%2BHSM1p%2FhWeSyZfzkOTkuubdyLW4FOT7D5xodDBPm81NlZgI43GpsJg%2FY%2FPuvcOm86sRFfZj1M9Lf53uee5EbTOKCtlOB44xc8XtSNhs6lvTOeHPTof76CXkExo18q2Xs9y5spHivaqFrT2Z5ryJNjqB94cgfz2S2BmIDJyBCctlC8cAkcT4U5SQH5HvyOsipi7O9UBPRS8OJB6hR0hrkpUyAQLBG5JlOM9KbYzusYE9%2BSPlR8%2BtGZaau5FDC%2BNuT%2BdAa108TpFRPSMUKn4Jpy0Fs16tLCsp2IHmsMS04wbG5NY%2BNcxtwZFgne3KJCbNiO6vj3pIJ4U5EaCN5MG0%2Blc3T1yrK8sP6ip7CzCtrGZCrkgAh3M6HuV4gOuiy5D3iTPTNZxsENBx3RZ688zJDb6kRrIxHzCCdjLXy1QczvwGmvz1LmvVkA9mUebpfkB8O6qM40W2BFHnxxyX44fuvjrlsd4WyMqpNA2GJrnYjoMPTemr0GOqUBioaPs%2F15baVLqTLerrnaWcA%2BqYpdZswYDrEli%2BhSjMy50A2fhl%2FAwGU9iBs9oDDKZTeQuSP1kDYXF8e1yepahoB%2FKBdT9AVzkuANMXu3VSGgbkhcn1rdWzRHSpomhkHUo6TjOaq8cl%2FhzTEZpPXEtIlDrQnUh1leIXf2RFSZu2VX5EyxeeLHjscl01IloCXwf4cnXFzztLpruezivZg9ifxEmXC4&X-Amz-Signature=5ad7984425f2985a96817ec7d0edd64a97c8e8732ff867398573ad79586510c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
