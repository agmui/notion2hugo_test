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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXK7DJ6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEPdUKMzVXUA3Jl2KMBN30nVV8EOLMU6erc1peKaTfUHAiBf1Cum6u%2BKCt9Anez7Q0QV1SQFh8s9K7IJDEicSrhYsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl7la0Avmg4SLSx9uKtwD%2FXq4OpmV06p6u62JpZzqEivu0WbwuAB8blvvXLfdIPsceztEMtIMoDHGix7Ty4SOGBq9%2FbzLl11z83KRY6t5Jg81nozTEIUIFix7e%2B1mSrcMalM0PnCb9LsB9ykzwQVGs4tXydeNY6Db6wJu0Kvjmoum9JMk0aPD7VXINFnzwiErKGmJIEGh8X1YnoNZAs9mn%2FAq3QLhRkual3D8M5TV9sM7FGhq7b8TGlmnRXE6l0zGtsRAau%2FDjMMmr%2Bmrzf5SNllcsiZMTJ331HllMgaz1yJnu5ArflUQny1p8qM9LYlGvXBMTtuRFXTEyflwWQREjKCOwuIXQaqHexIOH%2BeD7on5ncQAEBYhNvxzX7m1tjjd0T5mcX5pzfepcZHEmSwJdsfS9LOjC4WgDu7r2RaT409%2BSGFY8XbW46S%2B7ykRK8JDb3PuXhy3nGOfhfzp7iZRwzzS5hpvbKHjqjrW0wZ%2FSs6YM5qFPsVnW5pUNx%2FBFayyznUWDfXPQXvwGTUtqd8dzQ%2B9myP%2FXV0gPx7jLs7vnnf%2BKy7JX%2B60genaIENvwvViPVSw02B%2BfgHrKjm4lHtD2fIpm49LIouUG5XdOoPFNn8uoYVqj70Q%2B9MJdmJVBqMYrLdMHWFSIS4y5Agw7%2BaixAY6pgHaj1O70vy7N7UedHgXxXrUd5stHug%2FX6JdCsF%2FzKZNMVr%2B3z8NXUTC80HroLLF90WCkrKU175gfcGZVirN9ctMZvsNef%2Fx7%2B9xZ5%2Fu9%2F%2FFc%2Fk1ihkogQpdxMLYNMQBnli%2Fgcl0gRXkPmTW2S2l6Yo580prvDVmVFPMewLiY8TRSEkXFA5IksqOKW2ARL5sYdT18CDEQYpLQ%2FC55nrrnBaj%2Fl5FXUtN&X-Amz-Signature=3b81af84243ab8b6cfa6fe3d4bc669a73b832f02446899bdce19240c19ee3ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMSURB4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDUanx0F4K1RCirJ%2FjGmO5wlRnNm6EQgYLjzeyK69if9wIgfge2PxE99JcQ85Vf%2FdaWkWNYF0ULzK1iJlVnsBQev3MqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4KaFVe%2BO8clri%2BlCrcA7phqL2RnGvNZuS88Az3BzFfKVVCHqIP%2BQvZ2ka2kMJgRfp%2B9W1c96Deck8KI7Wy5pwTlcntnLA5xlRu2%2FUjsgs1RV4m23sDSZc7fdocYzVKN3gziFVOB%2BjBrHdpS3YQL44OPlZcEZmwfT2LuvnXc%2Byw%2B06aJGfNktc49I2dWykNop4czSxLnO2fXftwZogFAxfAx8BFHLioK2yLbjuzd2%2F2iMmOixt8QLULWFDOWZhNFCUVgN68npMikLS%2FLAxGf8k5h8SN60v0DNsAgv%2FCfJ%2BHmXZ8iQL39yYdkyyZD5PLPOJ1jO3mGcUGUO4AbMOGUJ75ERd9pJiPdEi7FdNZrDaySFd6Icaao6i1H2xhC1gq%2FchfSBhhmuydTuzQ8agvTOgJu2nPNWNrU0z7T7XkZ%2F%2FUrjr74xSBRgXqQpBbTwPQHlCBE1iNWIyouO%2BRrnmPjjVCkr1PoaPJ4nIqU0CD5sbYMKZsAZhsaXGOOHeRycyauKDCP8C7XdoYNM9V%2BiUbpiwqZvqJmUXOfsgQDMZRUfcaZS4Jwqa6EHwuwnJBnIadCJe3Bswcn7Js6ubOKlvCA4HXntwe6DnkeSvJY%2FhRWgGmusjopf53MYxjzuBT5%2FRzFzyBuL91WKW%2BZBVcMIXnosQGOqUB3VrcPDpZhHQpqXwNzwEbNWShB%2B4lzZtz0%2F9%2FjQuWpYmGDIdN%2FSlgB6acOK%2FHnTNeoVJYlypX%2FCX16tCxJaWayMZOJIqQ%2BnnIjMVJdyrKjo5QjA7KLSBBQD7Pc57jJCaW3Lm017fxYV62BdnQyL4Tj5VX1PUhW3%2BYu6lqOvEwq7nX%2BxS1yst0I%2BSN19XpZ347FJ2MPewmw2MdTWQFV%2FF9Mkx5rR3W&X-Amz-Signature=d7cd2248410375aa2cbdd8bdbd429854a47249145967b50fd302bf4093d1a3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
