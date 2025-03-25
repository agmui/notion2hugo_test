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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZYJJMX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr3yLye%2Fjz3dcVir6JyEeA7ZS6RucFoDkNg8zc2H28zAiEAn3HODsTYzEnQC2AO9EqAqvSC4vMvBj5%2F3YdpVaOPjp4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDG9XsCaf7qzpayMQSCrcAzzG9rRNBDaoWJER5mnSQgk6l6G5MHAJ8dWQ2UwkoR%2FmC12B3U1Qx%2FQQFi0E3AqZJzxDJF4BfuhHSxjWI8FjD0rcB0h7qWnKVxNMBZExWkwSQgyFS4rQzSmbKyijKxycrcmoFyeIYf1WHpSkyrPZYPsbpe%2B1UXjbF2kqqlUhCbJ8958nOk4KoYLSXE5BVIgib1MekgC8UtJbsWE6ItOuxFGZ30XS1FJ9VVy0gKaAR6BDMbtkvFaruyaK6ArGiHmEsK%2B0OEFn1%2B8M5KAy0DgjUU%2B0Z89WxCjQrI4ucTSlJH5rbLFoGQL4bJn6%2B2hz%2FAG90ehHt%2Bu6X2lTWdjCsOCC%2F7OvO77W7hH0gn1IrcFUiYes5Egk9twA0Ds7q4yXnMj4q9EZZdPLEo2vWkxs0pYHpy6EZmQvt67yBSSp1Gj0mjKJ8texyjV7QO%2FeJ%2FtY9pjPrWoEp%2F9VsmFchDqMRETh3h01oTj3aQxQRI1N6wMnkoA9tmfakJ4LtDhI1%2Bz93DecEQZTeHh88rQTAclO99OgZfcL6F7r%2BKnAZe2qaaJgGGm7z%2FxUbj9hikMgv%2FjB%2B4fOy%2Fv2XK6ukft70rNXMYDWAmavjvY%2B4%2B5c86M1t6jwzQ%2BtFeBNhBIrvzqFc9D2MKinir8GOqUBj2lY7QUqXXy0yOKs1eofnfvd0PZTqByf9GcYEiDGvDlY1oHSS3MB4PgxQtLI%2FPej%2F%2FTfkno2eAef65luPuy%2FTKOsu1Thi8cwLFL0xH3SqD45crMqip8772o78Z%2BJKXt9UcC%2Bo%2FNvMhZj08MX9RWn8Y0FuT61KliGgIRRribc4jfbbUSJIRvRnp5Y9dNc0l9lCEY2J0JGHxmAqbV4ggqeN5RCTSqq&X-Amz-Signature=b2de4a168942f6b94f8e0bbd8c1310148bf66558972b9d388c0e35626313253a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIOFWO5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgKmNqVMvat03xYc4OlT7oVg1JoAwlk12A2%2FFu%2FUfdAiBxBKu3J%2BuDMaPvxiH%2Fi7m%2F9AeZ5DWZ9TNPbBPSztWuKir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMmTHTiuaC3BlVg7OaKtwDKBGAeqDo2JzljhmFhZLJ9EH%2BV8BtmhdPO%2FZfNDaSkRL7k581piRURkDqgBS9HZpHsrU8h1UJcHjGZGPEPnsMBKeUWQv3io5z3t15z6boaeO9TnMzT7sdcctRqV3HSgWCyUEWr7909IRArvtAeH6jVaQY4yy6rn6e8dcK3HJHvYJWtrR2dabVclD4c9I69Gx75ldNjKD9M%2FZCqpgFqx6Fz6HsFP67N9m0z5siD5mK4KvlXncrUrgsh9PbacOSE5%2BBSnXTBrSqcN%2BXku%2F398G95PxbZzMtDwLAApmxKk3GZKaeAfR3E8k00iDiLJc%2F0bfL7X45cbhw1nLR1%2B1mv57G40Wupi0d24BGhtTKSefC5z299MCpO%2FUxxI2mjHxszI6LOQkyn46Cw%2FgpWMFDJKxtxQQi%2FWSFK4hTrODIFkBh2WAHfLhprYLkUrNRWsBX5Ws1T8XaBIDBMIQkznMCx9%2FjcjUsGbcWT5hzxCbc0no2hRE51U%2FpSoznOGHNdLrsMlC1BkQXJFld42ajmzll%2FseFtdHE%2FhQWDSd%2FqhrU6jG%2FUYOPBOSUfzyDOjSgsUThFyAI4w34nVtS43Z2S%2BcjiWy9SluMQk4c5Owyhzk46VObRNypUK%2FiIXfcvx2%2BgH8w4KeKvwY6pgHYYi51Nw75UrBIpD0c80LrsPt8Rvw683A86qrtg%2B5yCYQzfRVbDWulKfgFX6zIU00M4%2F%2BMFPisAKjtPIVCJIHJgtG%2B5PHntIdd20%2F0FmV84aesOY6xANVV9i6lasVnw2O11%2B6wCXQWGIQSzTA9XJpInLmCs5Jt1ADhB%2FSrUHLITanLEqYLQr5p7ruLkiA6YHbcb1JZloWuzDfOQnLIq9TwWl3yaMPx&X-Amz-Signature=d6cf3bf4ae10cdbbbb63f7ec96a223399be3304057a8c6abd0980e96666a4b31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
