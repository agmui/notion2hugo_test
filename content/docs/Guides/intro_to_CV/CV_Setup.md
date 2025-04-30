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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCI7SYBL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICDOuH4B0lGoE1FMcC70pFNSu22e2ZsAx4NMu9QDaxJBAiEA3PvkDKG0wt8O2F4EwWJ0D9oSFtNryINO03DZResBrMkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkxuJx7Qu23VTotVSrcA7os5EpFDfMKdJNHt5VW%2B%2FoQyygxZ0Qw5fkCwXmda8zYgzYmt8gG9BqEIb2kYw4eAI3AXKu5pnyDH0mXOm3t4f63sGv43p2DLnn5SY5Vj6bGpoWWoI%2FG6Y7Y2gQZAYtfZ2ONwRu%2F1AOxLnQ%2F8rQKJKKa3OCjkMFR1MccUEALyAT3tB0SrefslQaa%2Fe88JrYkmGzrXCdViCd7D%2FHPX6TWvlYv6%2FTc8kBSDLBANIwEsmw7r13aTuviVMGab6Bp%2BNyvzZse%2BWG%2BzeO%2Fh6uF%2Ba6QUSLI%2B9Jl%2FTIsh6fMu5hREfopVbc18e2lRSd6jK0BD5vuY1%2BSXiYIB7XVgnmhBSfEZEnBByGDYhpvnR4iz5%2FoKx1GFHuTOxrZw%2ByPyj5HZmXABMO4QmSD7dVfdhmypZg%2FqM5C4x%2BRdJRGAmh8%2BR3wQekeeFlN8ooLgyB1aFRBPnRRlgq7DyXfD%2BAqKqBFlDkMLOkDE78PyHOlbaJdlHhHMwkF94dOc7%2F8tBnOqX7no0vXmziL36afvfEVodmwMgvM4u9lwHs38APalUMKYMs3bMvHrIGl3ptr3euZZRV%2FthDUAvGMaEdO0R7pzJLEi7GSfVKYTGUBGdyWSa5rD7tFREHVgf2qCw9R%2BrA9o6ULMN7DyMAGOqUBxQ8JpxvyPmJt4C6BtHfHZYFoNKk3uXWdSrYxnkJz%2F7DN979L2KhcwSSuZ1faQwQUWuQI8JrT6lBKVpgBnANFyVyKz87OV0vXmPmwRPVbQHpWgkswE%2BFQOHTtJWGr0QzAnK%2FLZ%2Fym%2F7yCacRyBI7%2BzEWGEI4F2Hquga0vh2Fbj74RcJIMKENqhXzpfkS12xCPmJDnO7CGy3tRBuogNkWSjgxIcOrs&X-Amz-Signature=0c3c12438783627180ae2a28aaf5894f5242213f6605dff255dfac2f1df4d235&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYOEBFQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDOiqN6OGo0EOkh%2FvYDcC%2F88JiJrxYBsPEqNMQtw5BBpAiEAtzayimAMWjcD9M8jq2QxPzbF41oEKE2h6arnfidb3rsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3B1cxqWi9hrfYicCrcAz1ni6ryRL1wsDfiX1J%2BF5m2tp%2BPSYrFZCs5ssgia0VGGwaku2yOFIZ3JtBBfxPGabdjm%2BSq4swy5gSWbaWlljKdfyiaEVHWdJTL8JvgWe6orNko%2FCSs6gOaLbbFNFprIr7ko22eadji%2FV8xckYkWr%2BdPC3rz3raUIsl8LD3L92LZ2MtozJ8Q1fC10g%2BP76tgtlximUsDvpAMbGweIb7qd5sNqD4LSxoLfEGCopaVL%2FPB7x2prCBVAv%2BbSiSVl7aYbc%2FFGohrrqiMpd6RA%2F4zlrdpSl1c%2FVKBE%2FPnY86Pw7ZNT2yLYmPXBdXlVx262Vb3leJAvFIVztUMPpA0UqDdUFE18j84iv8%2FxJ%2BqSIMr%2FwrJ%2BU5eaW1VtaJW1h6Q69JOlAz9dLOWIcrJttg9Ne%2BvKmdn2GQRvxDQHTrusrew2A9hqNaJPikH8lUIDBoYuko1R4KQp%2B4pwPp7X3m9FD2PsshRFsq4drKJFGihVMcyr8U2QPtT%2B5pTmwfONRsHEy%2B519HlK%2F7RDjO20y1Q5AvI8IPHOzjqQaXEvUbqhgvUQQ0JDyRWZCt2ScQOWXUGWK1J5f4FGXmQGXiXKlLFH8sAetIsBurFIF%2FXzgM6sT9X4mCR7Y%2FPztSutpZUI7cMITEyMAGOqUB0MvSlWB4HykqRsNZ7Q2jZiqpEKMWM49T0bIC8of73oFqS9P70HnQxOMkRFgwNR9MOM3yfhqs%2Bd1k9BheL%2BYLWx%2Fvv6YXcioipTH0%2F0Hh%2B6wr0kk6G9gNdMVbHNTe6HxpIVEhncHcV5kA7vCyUvqaCYXUKZdBzIZS%2Fefr1YyqpgNISw5%2FJmg%2FgAymTyQMqUhXeUZsTDJbs3O9zZrQ4xURUMEm4i%2Fp&X-Amz-Signature=fddd9aa4943605bf9b535ef5b074489cbe735004717ce1090fb2baac4675a886&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
