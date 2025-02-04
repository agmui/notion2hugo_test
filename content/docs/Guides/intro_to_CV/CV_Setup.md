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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCBROCR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDHvJHDuZRpK4Bpmp7V8oPvNnseVV5RAa%2BwUtu6yWFYnwIgUq3prbYYzPOO9Dbwm0mwCyk9T1HxUIgdCnGvFyk0EGAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHZh8sM3dDfA9z3B2ircA3f5lGz6KXzjioRn21c02n0Bosn7iKlMLXTiKvtf4IunHapdfNF8wwRZ3Dz%2Bv6DE87DJtbVw670I6Y8BzeuqYU2kam0r6MDpQPPMxfyJ97%2BoOW8PBwiF3mdLQRqjNmmGdq5sUXaGhEp%2BXtDKjYqIcsnLU1%2BeZ%2B6%2FnfrLtqq50rQLf%2FwVAgrvi2GKO5ZIoAZ%2Fjvkd8UFSS5ncbDYUGbl%2FgqbYvzGljipCxoGxMPDIPraIbwbjn3pBhHAJ%2Beq012PjxNC8%2BGsbKEd1P7sTj7elA5aEtF0rqoFIbuaaO2dX4KFZP96KnSXzef%2BrWn4OGtNK267ZxObmC7JitcG6L%2Bu%2B1%2FI2Lckaf0tfdyVJFLzTje707fVol1MdUWw4P6xmCva0HaFHOdCRIjJxt0ZSAbKl1x2oEA80JpwgsJz5n%2BYWo3O0%2FfqC%2BhAckSkN9qctv8kmHzgOnwTuOcP1rz%2BDHR6kKVIKkz9xAqsBTOtd0HK3dYupPFY5Qz7gXUoXh3doqT8CuSooQ0c1fd8ryncwpzx2v2cIqcEI06z8QUYGNQE9wd9RnuzxSzak%2BHKU8aXnsFZgXmh0nsdhS0FMLF0UiM8RD%2FJhqoj1Bbs9Dn%2Fog%2BkvuyOz7J7jddPxkU4lxO46MPjmh70GOqUB%2B%2FuGaV%2FOJuzGloWdKgc7Igh3NOrfghxPLuTHKvCDJwdkp4zwtGLmzIFRegFErQHT7roZwr6hu5TQorKeKlBUci07zbkr61cLmjxqKUdeJu%2B%2FLdeXcl9gM9sQ0A2hFMRzXHV0QpSN7YJJ7dAH93cXaNY6EgMtrbUsvNvk3pWoOUZaBSMI%2FG7RdZPWXhtS5WlSVVJzDboap46yDwa7pRluAUh5MxX%2B&X-Amz-Signature=c38dba9f0ba6ad1a8d5a55cd18ba373f8fac08adf9655ead99bd63f3f2e42153&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWDY7ID%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDjz3Z56rrxYdf4N9OfucgZaRbIhpdJKxdE0lvC6tRP%2BwIgB1NJo2K3sNWfAr40jS6ra1yo1IGc8YbeoOR6nzg8VMsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIoqR3tXhKoXvSkhEyrcA90zVgN5srtpBbND6Xz6SVMPkajvz3NvJ3PQO3XCAryuHaNvNmQ9JJg07yYvdEQkj49EmGhZ%2B6fzWZ0f7i8qNlHAsT%2FPfkmsVKSYafkMdLlmSeHLod9FA8LBRWVl9y3CIgXQPzSnEhZIsDZZdaGdh7ifAmad22%2B23AaQNrJVfFaYvJ9D5vEdTgsyNEHrNAwI9HqI9o3rS6ZnyEnRPTj6KRtnWkEb%2FS2mAxFLIiZcgrSC4zjQgu8oi9wJJnCl38ZG8oNc8EU3QxeQ%2BHjXSCfcLu8XcUJx7aUXuqv0o5GDjBaUmKeYH0egqBIj6EAX8k3nNHU%2FbE%2F8qSeos98seknCMX2dEaEwwxEXM0IqfCFrapZY4GU%2BvWNR1hJExYT7R3EyQ55aGoMPVOIajw9Od9RYSZosnStRGRcajVvhBjSfDg5gWmT%2Fw6vmd2dpg4rkeTiOGBCOm3OJlOs6eMP92YeY6O1k%2BdCthZ%2F5PI%2BmCyP%2B1XS7MnTbKxSPZ3WtGABDSXoxlqHnGThYOoYg4aA24n5bOJoDEl1DMMjmN%2Fx1%2F0NmrYG2OTKBqaX25nozNQGzcCVPJOq7DrvlI3vlvuEXBpoZy%2FpdWKCZpiRiTiL18LSR%2FWaP%2FxuTOd0N%2FZemING%2FMO7mh70GOqUBLJSDilj7WzNpQ6By5n6MawNsi37EdOr0yCQio9%2FP2VSPfF3wIpXzk%2Fgts0%2Bf9MKUyJagY0l0ygr7xHFLwMUSiZbKuKVdlNqTk3%2BgECJBlaRwWFYdOkAEf2jVW6hWASi1fA8QY3YoZtpCxxtMBPxxq1dKa5Q2tCIbVvgWloXAQ9aRAZuIEVe3P8dNoxWqOmFr9%2FztS56ZlqlWV%2BbwOK1a06gZE%2BwR&X-Amz-Signature=16916216fc557ad274d4a5a446bb9a847d582f6226f9224b730e94c93c7802ec&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
