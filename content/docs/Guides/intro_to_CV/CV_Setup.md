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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4O323A%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHDRE9v854uAaFtWeiRKQa7yV34rG5sjRDFxlG0LvABFAiEAvufrZ5bUQZhQekhUpBp3yoM0kJaFwzWbMhYgZsyEWokqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYHCFy0HbR9T7ghQyrcA4so6m5CrERUtBTPP4PtOpyXBiWClg%2FI%2FBxSDorl7vPLCQ%2FuavZpOKscrlaxBVZE7RrbitShhhyZQCFplVb%2BWRWuV2w2W7FNXAXRXfr8vYB8iRDw7A4g3hlCtaSkJ611m2fqtT2MMLdx0RbAP%2FbHFPtxCsyj9Mp9I%2Fdixgkga%2BoeiXCJu6vz8jk13p7gfLRDTOt%2BNGQFkq7%2B9ff5WVZ3SuBO6hJfWJvUn%2BasZ7gGH99acUzoqkecCQQBFauEl9GSOTvCCxLddjgHrccT066xmV7hHj26nJ06qlGW2M7Ab33D%2FI4t0UO2CorfygOFS8CDAeqU%2B5eBHTjP%2FTxWvGu45dZBjlEkzQOfAoGObMQ%2F1IpXQrXY%2BhgmGxol7m%2BI8RIWihqA18%2Bd1bRMuWHOukbdsUIZlo6cuEEYf5ImEq0WIEkJsTyzMWG9wrtuq%2BtzoE32kDNB6oeA6493UqjwqS6M2Bn9g4QWgTUJcHOA1HrGaDrecrLIM%2BhqOhMF5m7UBiQyD8teKH8ijCzVssvN%2B7yBRV6JS9bfSOpNr3rzau30SjR%2FadJisD2QrxY7Beb%2By26ypFIoT6HZ5DqVTAQPDkVhf5i2KOxCuJTz3%2BS2TvrFzXIGOuWEJAGgNANlCN%2FtMJqC8b8GOqUBuPXfNQtqlP%2BAs3ue5btc9kwiC6xzMqSwOhJEMS51W10Md2aYbaOo%2F9ljbsx0A0BFeMdSsCUsggQ59fKoLwZxLHLd93rlMmzAQzJ4dx%2FOosIVmPaVmsMJOvk0vTRnSlLT%2Bc8UxIxz9fKyNUCEFiM0svKm3XFATDAn9ajfs3rsgaxA0LaRi88dFnc5c9oVVeqtvsppfseHNcR3QwEakMn6OlAAr7wI&X-Amz-Signature=4bce780cf28d77effcc017fdb7d9784fcc4dc1fea6720836eb0b09522ba509c9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJZT4NR4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCoO19dH4h4qHVuoQJGv8gc%2B8movJt5n%2F2Db9CiQdNmJQIgf2yxjq9y4S5vV%2F16QtiIc%2BO5jbEgj0Zl4xuPX9JVtEgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAbvYoH9cFaTBQaayrcAzjNLEdAxR8cJYBglBrflInZ4Bn9O6KkbNGuE9NECyZQwfhCPDOHq%2FtKLoEglsHI0ME93NRywumIPOeOJ90Ta7zAi%2BjYIAUq5uwasTtO5DAibaApauehjnrsXzpuADqTFF6yHw3hjGn85aNSQwXjH%2BMQDklSEqKkqMjNcGk3Nz6Zm39ZxTQBO6Kl9nsDEe5lJlVvRMywxNOiA408fFIQmGGmeUOYijpQsvGSx7o2IEkoIXQkVkNiXfU0R2Bh8JjB5z1QHC1MnCFjjgcrk%2BXiTM2cg%2BmDd%2BV8Dlw0%2FaitBbKbYUDlPkyhLXlq6IAVkyDR3nshp1FAof48dx7iEM6ael5m7pJFC5wWkoGqxXnAcynjiEL6TBYq24t4nAAeRtiGG7Et0MQVJnSOeeBbeBOmJSssA2UsJUy4gF0pLLCncY0O%2BlDVk4UhwQ70XhH1KH9qpEa9koie3eAuDw7f5XbThBqn8owtuD%2FJh7X2kt5cBqgJkhVAtfY2gpb2K%2FHat3Zk6YlSoYgeF8cnKno9t7F8xHo5Q6hufWhlFnSr%2FcaNIHcLRgovVAhP9lUrfwKmn9BpPij%2FKzS1qfzHYwRJwTdSJyW9t9KNDNpmJZcK1h%2B5rGpySWcoHWOPn5MPKGR8MOmB8b8GOqUBLPaI9w%2BXlCG80SA8IhL84blDz12YqJO0G0nIBTAhOkl5CzzJcLCAl5x%2FNzdHYuXa87dQ3gpd9biaeOKNEwluaoO3FljJ8oe3Lf7QoiIXTB%2Bq4CoMoPq%2BNYmDCAUUgEeAbe5BEFrHNW2cKTpjIadU5MznUYxTKvsvwdM9O7v243KzY1FQtnLXRrks9FilPqA2IsOWO0XQ01dqWu8zrqa7lD41KzvP&X-Amz-Signature=229c5be3a9f09316ba966d9199db35675f6ff92252317c6d0c3917a55a504247&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
