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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFWKOHL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDixGjc%2Ff1gSaciBzCc2PXZ3h%2F%2BhfqRTbKa84wOxuWLIAIhAJW7tWHo2XtSFtEbZnL%2FcS8mZc%2Bp5%2FLxgWJ%2FYz0Z0J99Kv8DCHsQABoMNjM3NDIzMTgzODA1Igw3nF86L56HAc%2FYCJ8q3ANwkvAFjaum8FKKvfuNX3mrLo8BcB8lDi2Tf%2BNh3eYnfee7AfytaFWtffBWdGJOrtKhtwGOhvlle6M6wTlR9GpjLOnEzmGOwbtvR8fxtf0VWaReG0e1XPVvXmiGcJrBFJAAU1mv8u2tEkRzyTLRyYanMAeT%2BXQhvbiQ3pP3u%2Fz2%2FEKxxB5b37jFLGYViHqh7MUeW0D8F2KMgSkYvbZKt%2BBlM6BU2hLVrmPLK9dpZxnAtdecJ3ZnEEOQ1N%2F38WiyzO7neNF%2FM3%2FYv3Zetsb%2BZz0MHC2V%2FhrFBOo7NacHBSvtKsYDq1Ld0GM85hbAIEh5KPnFGZOVBi9WoDGu73XGPoZJY97yCFfXtOoJi%2FQ%2FVlhkU6MOJHtvxCvRr3RLNCSsgHCs9EaABPVgSbyKGFTFc558GvkT1K6Ods8cNATanYm10cTxea%2Fcu5uysoR4Zj38HJZnZ4zO%2FBHuN5Q9wR9s6sFYqQRZI9v5PeQpvzEuyo%2BzN%2F0Blvd8%2BByq2L9EJCzCjitYuAxX0koTmOkrlu8zmYiki98ibuo1UUMnih7by7E7G0iy4QmangvyQysFk0ypXHCh9SM3Dls%2F0UPn3h0af7sTyW7x2g5zVAHpbZ%2B5%2F8nzCZ8iH1Mbo592AlnQLTCN5vPABjqkAadxQ9k%2Bpop4VjiBwtuOcKpRXz50zU6h7TfsSXufia0igwa%2FtOWs8D39%2BBLWP78TfFP06DqZiv6Wnl3Ho35by4lnkSSRE1cZLTMjI%2B0RZ%2BcsriobUgbYFbonIKiIr%2B6LjcrfDHkHTzEXNocbe3zj%2BkoJdFIzBZzKRb9qzsxntSRXt8%2FgNUd6R0NmwWOmql7%2FN5FCZ%2B5VE9BGOp%2B5pLn7hiyxVqGn&X-Amz-Signature=82c2b69e8ede8f81f1148daf17bcc101443fd89ebd1628a432745459253547ef&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLEXUYKH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmFCyJnh7UiJr%2FhyhEAuO9j08PT1cEPnAuFBmEsLD0AAiAHGaeD57GOknmoS0H8WmpEPv1tu%2Fz1wiCuf%2B25iLEqqir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMojYRw4UidsXtGOIqKtwD6gyEKaxMBmIukXj%2F6%2B3ZgUDo4g1Fz6O1cfU8q6su518opOH5X54HTwudVpIi%2FdFj5Hj3%2BJc%2F48osUZH2RNpkLGgoPw8mUOOIPe8Cqg%2FYUi%2BfEpMozUMssHjLvD4omfA9jfbbzZ6n7j8K%2F%2BrIq9a77do4ZcRNhE5gM01kOcBY2lQ1FFEiDbd40wnDFS4OXlFHpTxxjR3R1%2Bm05h9X5YE8O%2FyT0AeB%2FzHYd86PAoHeK1tLU2VfIlDABr%2FwFmealFEjgz8iQm44NVfMAFGYOpUpDfqVRnhrkZSRRlg5GPuyzAn0SkimZ%2F%2BqySfUbZvTddFZ8J160kpBG1EmFkNSw4Sd2jig6OWF3S6tKnHZt%2B42EP0Yld5LmLSilB0mSFK0YsIySL5RbN8NeiRlq2vhW41WIb%2FV4FPdY4kFgKJog8VmQ6M76m9AM1UuG%2B4gyplSKYM3xX53yz2gmbW3AjbVNpbbCCj8QEIJ0s%2FQZOrFEWHpQrB0QBWmLFjQ9jKmXj8RS4Obs6aRWacZ8ZwvAdVMYRpKaVmIck9qSkVXBeK7uvkcDBva%2B%2BfBvjmYlPX6p2pUNwVgR4oIh8xl2Y4LMP4rti70uz5fRxmMfZVVRK50LV7FXrnv0YC9HJ8LXoQ4lWAw4%2BXzwAY6pgE6j9NhcvPG8qjxaNsnixgqJLJLh1CAicBFoS5MgaEPOV%2FRXJyRSnxIcF8am7iTjuCkWc%2FZbQCv4ZLB%2Bmb8GqAzcEV3FiNNw4y9bh4vgH5vBn37ujhG5ZLLrYDmBps%2FrqjewHgNo6ntaz2nzdpMrtdNu9fFpFbnmZDOHoSiXJmBPnb%2Fooc1zWawQe9%2F%2BB44GRXGKEhQjRwYkrPEo5TmkEGRiix5rUli&X-Amz-Signature=7511571ac4d625fcdde8cdf5dac2400062ce9fddddc3c4fd34583f33baba6cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
