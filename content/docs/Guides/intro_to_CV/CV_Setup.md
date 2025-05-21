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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRIDVZQ3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB6%2BZBK2JXzjX%2Fx7C0iafiF737uWtTJFknlKHeM6DoTjAiAf0rHMhUTzbC1GZdh9UGagEzDoXC7kmgHDa9PwWPrGoiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8TPQ0P0IekbxVcXHKtwDiE%2BqrErf%2BB7miZuav%2FEeid8tWMqL9j5SJzyHUOJqyMqGWlrHIgP3YfZumkbhAfSv4PFO1zcnBWdl0tIYe7Bb4Zmu9g6RKjIGBXj3Y5%2BmFUyI02P634y0TjWXqbZH6f1DcoHFpl6nDH6tYMepItZ0Z5BHytvI3Ex9R3rlgGaIPJzixaTaBUY03N8OBI0mwIZLA1Chx9wTGNkNhg3QrUuAWM9ssVG2PnoWm8ZljHPLFOVGwcDoVVLOeCt8%2FsE4Ioo6EuvBPFWwVZ8jXtdK3FlVGt910Jc4PsRCv6jVw0PD09XMKjAJcu97pfyD9quHwmxQmd106FBZIAVTqLGVJgHJSa8qEBHqwkh6k%2B%2B38WXbovjZb487%2BV1WCrqmWLBOOn1o4abiVryTp7Ze3ZvA%2Fa8YT8NTM6El56WaCwRmmufxfM0rzT1jkT%2B6wS3VUmW2GNXcdFUHKkAYJqVTCNciLpy5MqFQjMtkVEQp%2BynbtNRYOgvEBOAFXe1ENXmkrwo4wQWsQGY6fVEtMeud5cpEN17Hqp%2FWuwswybrjq2Z8WmCgrQQa4trU2y8bU8uheBmWVl4LRh%2FMPoezTb3N2%2FbPMc4GScUtbsUH7f4qihyDJ5XmeiS5DUyl%2Fq8rIGmJ1LgwuI64wQY6pgGHGt4gDJv18VKmQcSm5lBS9G4FLGJYnTyKbvLWT45jfk%2BuMAfvk53cnZBYlm4qDnFtwIZsIgAUDC3fFNPTM1itD1%2FhRGzZYFhpwtwY2NbPHC%2F%2FYKAWxgT4dCFo%2FOZO0abvhFhXkfo1Q7j%2FMJJQ9jL0WSNAzVsmXz8PDhdXFKUFExWDFmtHMeysDUD2MKsOZbgZHLU1yhGuLZaTisnoX8h%2FUffF4VZX&X-Amz-Signature=e028a0c45d10c717952ec16be4dfb8f16f462d263b7ac20ddf5847eb64a6229b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5Y7JWTP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC3wrojlm%2FqZ%2FB5AmoBDpeSuFsEPaVvYduQF3qZjXZBGgIhAPn73jaP1yrbN2JlnbmaRIba79TdynrjAQxpH6BmmPlnKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLEvm9RmeIvCmlrMcq3APtskPS9DIs6DKBiSJ1SfHcODKfY31IW7A3a3%2FcJPM9a27xifftIxtxpNZDwk6iEosixZ%2F1LCzp750nU4eblCVVKglc3Wtsv3aLKVZ7GFa4qu%2B0%2FzuGzVjqk958MFAk2lzoGrGNdXv%2FwdmD63aSThQrtwXF%2B4Tk5ZQ9jazDwie%2Ft1%2B7HZh2ITM8XYTqcBJADgePtJnNuG7lpvpnmGF5kP7AA4FrjDvg6xOkjB1UhTpJ9YS0HuortTfVuxkPv37quEE%2FEmly53iP2yJdcsVqG6CAjcHVBrBesiWWaN3jpyMzVkjv3MFo5EdJIsvkLvuKEC5zKw1kQak3il9LJIPICHhAVfY0biiE3BBRpXKlHznhHUpUnHg94fH8TO%2BhN%2BseatGWVvKkIuy2wC%2BDlUKnqK9D5rpem81Q%2B3JX4sjC83Xe%2BBTWRAI3RKRdJTB5raHhg5nDJXrpzFA%2BHqSf5fVgVbgh%2B12i9PJ2g11x2%2FTfOwEAWBQWurz6LwluL9BbVE29JxU9LAfXFEbq6Cs5qwCrXrFY1RQXzcPXPduJQOUfFRNHLq2ZfyNPW5L3HpploU%2B8HyMFHcBRvk3l%2FZv6C9%2Fdjl5mptIxwCIiHlnqYm3mlEz9d6%2Fx%2F9sz%2FftDSsTYdzCIjrjBBjqkARg1ctsByTHoqOoj8ueDmnu3VrrwR1hN1Sw%2BMd64Y3VG8qCAFoNdG2bFC2Kl22QxBiJUOOA401mB86vkKpG1fRHG5fMRDk0rF%2F2gPT0IHV1v%2BVdpou0AJ2tQoMoDMKOk0knFu773s%2FbWilpVuQ5EiVqxGeyf430c1ghHujPi2BBtC5di9GpUz62Jbv3tjzYWH6GLjuwCajevRTm1PoWLDM%2F4CgWQ&X-Amz-Signature=e9b15639d2786b6206ef6350678e0b7fc04e79343eb40d64210b2e79658d1863&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
