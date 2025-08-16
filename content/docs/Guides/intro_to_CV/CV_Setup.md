---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV3PIUC5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIQDs5OcDo8ExzsOgK1ac5SFGFm48j5Wm7VH5Opi0OocxJAIfICyl0aHqtkoQNOckCM679llJVsd6x2uwdcqeL0Z%2FXSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjatYlIzx%2FxrHUKsbKtwDQaE1PX5%2FkVS5o81Gdfj9DqAsED5wnPIuAlAFcnxGDEDTTrSg2NKhQJcjlFFeF1umKyLcbgcYJrPwEv5USt18aeZHY46BZ3hdD4cY%2FFiYKD04ERE4YAG89mfZKtLLVJ25nQLUBg6SSOdv394QNHYTIu26lEK0x87IeeH%2BJ31dQ2lLoP5auq3wA8uAv5C7Xao3kyWuV7LJjqQ5trwZR%2BofEUpvw1qJEAq%2B69Q09D8Oe8T6EAyTMZIT402u9JNS6gypn%2BS9ZWbFkrGxFp6vRBEXmtGOyGy%2FmPvhzHdGmtssJSbEJW0sHcPbmHour7WqUuh4eEqv%2BukOr83jnTS%2BLR25IB9I3BeBW2Mwr4jFMOQIBuzn6t5bYYIDz04st7erieUO3CZdT7hNCaQzi0P9o0kX4LsdjJqoWUb7rnGyg9SMcyqrYPDp565DgcASVMm1eSXEE1qdjQyx8PRCUF2RNR4TKMjRUqcGspsJecSE%2BrB%2BfUtrG0J%2FvIHlfit71R8btWnIOMJys5%2BX%2BUUr%2FWRGPBU%2B7VoJ75LzkhkyXYwzEyYCV%2BpWQvHcqR3uzW3k2JVHej7%2FyodlyFZa4LLS13XYkLFF0FiFTWHzzw6Xqp0b%2B69f4sGRYxGglAUTHYglJM4w1%2FeAxQY6pgEbLeX%2F87s803d52uj%2Finc0j0PrZtxI7GJW4v1RFy5%2FgYDTOw9D0gKW96GWAo0fMCQtYDYXI6O37FkQ%2FtwwcojjyVcUDhpiIqwVRYGALeAB8hna71yquxOb8baVsKxonyiOxsIo5jCpR8qUnhlbQLwImuA%2BFL4J33HXGsysA%2Fa85Ff4VyYJf5avbLjvm3IIZXleu9wujI5k6fDYEnwY%2BZXthStQly1r&X-Amz-Signature=076ec57b5e29bddb2d838a4f21e0e5b0498764aa5dbbba00f929e659d4f36ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566FJV4I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIQCNmDJE0OHXgdsZ0jWAXo%2BusgSLmzP3u1dlC7vh%2FphCjQIfUynHtQNsGN1HOTz7yNudXU0nLzldbLXDurIT8iGJQir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMKdExcIiAzsvr10gzKtwDqLLi172BezK1LICpD9z%2B65XJ%2BNfLHlUk%2BJwL6JZk3%2BM3L%2B%2BYQ%2B%2BnBTWjMd7enItQ0eXi2c%2FxnXKzi0M%2F%2Fx9eNCEj2uCq2XS3TM3XpiE6m4%2BhUbwZdoz%2F9bcuxqsNzPnbh0uWbAqptUG9Nedc36cfSfbY8rFZxw%2FjoZAr56JemFQveSyzaLGbjhSZHhbBjSLMwABCeWEK3Qt4KQqGAhxXguzbji%2Fh1V7tZZXcKGdrgT0Duzs4wlUHM7o0zN0O7UKaMQ1jFC3PlUr82ztNRq60EwDu9JiFm8zoJ83ZG7YpNb7usoLxFLuE%2FnnhFTwlWnPM2WAyUoKw2AR%2FQC3KaaJw0tJ2a8AeWj8d3Jc8hcqOK%2FYhw0V5U1K6Db9ZBI3%2BCcPLs0CkiQa2RNi0b9efgupthwP9zd2S%2BirN6dDJrKimmtDoOftvUWsMeR0aIWl5sh8S1Eppif7%2B0Z%2FKudga9KVwl4Vro3DZCcYO%2Bd3NAC1i3jl0C%2F%2B5KOcIZnO7qejKhcVacO7wlogyCZr%2FNiR8E%2FigMoG78yKqb1iGRhEk4t6bj5cpWTnEUbfdOa%2FQGduLAoBKgEeOQ7qQRjNTwdZAzlAxeiJ48NKrG8cEJkd2NmMZ5jTHBz2cW4Ew9VoO1ZYwk%2FiAxQY6pgF7OawHNRikb8pC8bFSSp0inaXp8MNWWVWxsakbQA%2FAoh7Yrg%2BDpDxqN8391cr99PXfXBdupg9%2BfzL4Wj6%2BUVBuLno50wI8gFO8aBiYMMBZw2pXsCZPQFqP7ldWDeyi9S9ey52y%2Bz4zXC0T6sAIea4qN28v82V4YtWXDUUnMERhrRuH%2FR3zmVk7o5%2B%2BFtFNHE7mz06yHLpCgmUt8NBdAo5yggvYZp5a&X-Amz-Signature=f0375c8cc9dc853e6cd7df4a76edaa98dd379dbacb76bbb57f5f5f3d90407418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
