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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFA72CV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD75yjumHaeS6LCAa0bf%2FG9ntol8oqaZiG4IqxfpQk%2FugIgK%2B7u4fDtMai94%2FMuXvXzMZab4Fa4qC53upt1NIkHoR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBrPxYtFlkYKU0l0pSrcA0Nu0sS20x5%2BWD4u%2FFRadU8cdJC4qLRdtgpVHVm0hAdbWd6mna8qdLBYYbQMV4E0tiFSCd%2BvoqpyQepT00COclgsgS6I%2FQ8OHDR4kqDlrEcNgY%2FTUZIVWMWSgGnHzPHCvThh2oLdg4MUzttnESqQCwXg2fGe9RppJsiC9%2F8SmcRgielFfiwuaBrRzI3PYp%2BOst5y5nxmkNLgPDxiQK95w%2F6xJOHGrGwtrLJbFe1WNPxZFUJtsVlSr%2FGB9V%2BUGNuDYmUowXw4Q%2BHEpT%2BAlTnmcH78lOGjRMJ1b%2BUHsZLf2jPV5nuQDA1Vj%2Bj6GM6lpbyT10IyiZMvNIjXQcaZJj9siOA7sXDW0sh4aLbzhgO5ZDo997OgjDIHsA1sW9UUM%2FVIFhaTvpQ2%2FKXYLx%2FoF3E3ATAtOF%2F6JiWlEfgaOY4zzvNTYe2pwOzpJjqKV1mmV57vDu%2FP2jqZ2t9gFSPBpkrns6m3nruMwbdtE66JPJmSx8aJKUaVBVNZsXT6Xl0VS3h2omFcAMPWik92Nikw8xP8bQiFSl8pqHbarLcYUWIaivluHPImSEccMAP5RJrwRdsK8%2Bvm7p146479Unv7s4zDFWr080UNRz9TArhzfRTgnnqfQSsT3pcH553w%2B4k3MJ%2BRnsEGOqUB7aWazAaO0AK6c5A7vnAWStrmipHhOsN1UB%2Fn%2F%2Bu3oJ2fPOgcEToItQRGFQO45id9MRR%2F%2FTLSLih4oOeV5zcUpzRBeH8MaTbEBnotNSd%2FRB9EmpH2LSRJd%2Bbo2MUwOhD7EyDg8DgT4QPrbOTAcQs9utFLToTFoA%2F1IMm%2Fowafk9n1KOI6pgIFVRALOlmmGNA1pSXqQBYcFnSMjQPCBKrT92pCLrLd&X-Amz-Signature=88cb02a34ff1212458b80faad1ba906a6084ddbf260d9e0787b8b3418b211064&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZUUTLH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG5cP5jft9foV5zJF0H3cZhT6gPBWolYNBBzsSUkN8iAiBjPx5lk6Nc6Bzy4yS0it1XKj%2ByuuM49jCyiTi%2BFBm9Zir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxzpJujfptgmmawo5KtwDkDU4oEYoEF31fg6PrVEJmb98UEILv78RvtIijJARaem1BWZWbjdZdJgg5IoY8WaJqRvohJclwHhIa4HZg8jOOsAHfM%2FqqNlWVop72yRu6zxu1%2BP%2BAYjAJFb01rmP0r1b1zjGR%2FN4crn7WGT%2BkxsvVkgoRXpJFZxglLwjFbJwZcyOe3YLqG76eB8I2KMw4y7q4sxDx7D4sz0CHTYt4basU8SBCkKBq4zxmakV6Wp4Z66qdvt9VCU%2Bxi1CzflHwu20twXMW8uTkgx3AQC9dApMEzWGSafknf%2FL0SYxBWsUuKmmEPzPDW%2BH3H%2FyDEG8dgEDW5Wdnl3nq39w9idePIEAQdCVFOZcyLexNEnm9vguRqhQH2C7R4YyvmkYOWBU8di%2FBKcWWgV7J2Wa5z0bj1hjNgHgpcvYwYCF9QzZg%2FgXTFcgGNrPzp2jWWNXBlBhdSpbgwpIFFBKE39AFZg%2BYIdyER%2FuRGl%2BRJkOulxl4DVCrxPTi9bdOYSUCc2G1xLogVrxYN68ydfIXoCAB%2B4SsovhzC%2BUrVyqlCT%2FIWFS1qAm3GWwnTEVeeOCqhCV9tvrwsePRB7QDJfB7JQlYuk6RS5riwUcwzYhdwRJiCobb9Xn%2B%2FIVIepWBg2FjcV4tY4wtpCewQY6pgHdL7BkTzGYg2cAzL3aYTAocDkxFgfKVbO5oeDkqN31deTIfmfN86tD6gl8JMuD4YbsSqkMrua21Udtu4j9QX84ST2Y9sPuCX%2Br87jC5mCy7lnnOQ1B4ac1CfYN4Tv1iYn3vcy1j6ic6U4gkrRcYX7RcgyfucpBkTcN4UrDmjwA6pZDbfBH2MkW8JDxFqwwdOn5CbV3LUsqmua8aPM9nc6AxPvwnEqC&X-Amz-Signature=58e7f9d844b4c7c817ae134d99d5a84d9fdd99a945e55d299c3b5f15b23fc645&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
