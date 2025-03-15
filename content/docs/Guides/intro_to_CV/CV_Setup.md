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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY2HUCM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEI8zeGdXNI5psQ1koPPGblc9Bzox3FeRfSWFfosHxmAIhAI%2B78gSi%2B7uFsGM1%2Fsj2edpucIXKxlAnrsLQ6eEAVJgGKv8DCBAQABoMNjM3NDIzMTgzODA1IgwT3AT1En9fOIMBz3Eq3AM8BwuDY380XCxwGfBD57EfDbitX3RDz66zX9d1lG7JrUOybyn3t41Ofv6G26KpNMeLSMUlMhuNbqYkxdx8b%2F%2F8MTmOWYp3xJWcWjFexqganZwN%2FgBndNWRyvDuo7jY%2FKGBEcp1y%2BFWH7gch46powBvtahYr8pemkGaqRhyac0VoPOLGaG1SXNhYYTYkYaBADYhz%2Fem%2FE6cbe679uY5%2BUmCFr0h9aHKZKWD7ablm5vjIPUmb6wzr6trdn2EMJ0Lje%2FfqgR%2Bv9hWQ4br2wbZRNML9E2nXV%2F0w3SU5CXFDhiPZ1tRWDbU0kuIg4T63iaNhl8%2F88%2BGvmxacU0oSig%2F0S%2BZEIBFZFGrBPzAiZd5npzutNtupRnsP7A52OocA1yAUzTd7W865%2FCW2RdqXqu5wOpPDyhklC7CdoXn7GhDSC9W%2B%2FcI9hj1kX5Z2wQF3pXv5%2FJU3wQi8BoM9Xri8F3J7XBtPstJ8ujqeuLYsprzkHnVOgjbhlUInNpsdQfsycUtet%2BQurkxYVBJR6g%2FtaTQr4DvjD6IBX6H7X8jWfx16dO330udNgMwy59dKxTs62skhx%2B2Dv31EuFpJumE0dXbrVRy6ycpT4RL46%2FWGi0fqP5ZMz9GvKTmMa2G5JKQOTC4xNS%2BBjqkARdqCrNOUQRztOuhy%2FgxovLN%2Bd4%2FB2c1mMmx%2FDEsS2Z5S1DMXE8OIIvdMb8LS%2F%2F8i5r7QqmVG3nM0a6rFYMowsHmySznrljDwjCnQ9vzhDc2HHbA84M6tpsD%2FMadq5h14Fn5%2B4B%2BaQD52gbsqNL6e7fAmcHcphM2w6JBcarn%2Bh5ai3Q%2FkNUxYQBG7KrXecm49H7DHsquxHCXai5B4qZNHORG6ZlC&X-Amz-Signature=58650a449da0de22088f3016ff2a8023f086ebc3e4cee05c4e2ab40c9574a53a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNWAKCJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzW7kpH0HcnWiUZ%2BK2rHWakRpGm65C7hsK%2B4jk7%2Buz9QIgP2M05E2ODNTMJTVIehRQid6xlSxxOF5VEcsaNHlI%2BGoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKqcvm71yGP0b81WWSrcA7pzWToil1pp8UXc6ermGQB8n3acQM8GsiUzfgc929LL4J7OupSVCLSqnUasU5d6WlKIKhEJFYz43ZjOUIEk7tO%2BvrVf5H0KixZqXyL97g%2BSoYyv5g0DiQXnVddfwrxlK5Q9zbnKkn0pJb4%2BJmISEjy8quAAKkUhauAlITlBu%2BZLMAIRdz2pHz2iHBCNVyOrrTGNoAQy5PN9cPbxo8rdzrgX1pbKbgtaNlyfz0XMq0PzSkUELdgmefXkkUoMJ9hGdXBR0rYQhs9AQkt47d8VekTospy5%2FAedA2N2GQj5MyD7k37W%2B%2FxRzdNdIB%2F2np7OIPL74hVvQ%2FKyJYuLtDRf6g2n7bh4SL4oZWAVDb64DQ9SMC8aPS0Jr%2Ff4e%2BpMbAdnOkneKLEnRQpxAP2k1tdMXR0rXmA3jbuP82JZyDotFbIHqzr5WWyvAY0vK%2FmRsooLoYoezvdJ5%2Fkb8zGC8aRhB7E%2B4CjYEeWtb9w8ayjmwZQCUoq5l8Q6w1Kwb46XrsWBpKezAJZgzwGIuKjas%2BU%2BdwFWoY18k9468HYLkMryYDzxejax4olcrADDQOVfZ1nJhhlIqhatrCRfVgDuXSJzriBbWkRJhu9diayiAs%2B5Duy0Z8oQyOhFruvhOUujMLXE1L4GOqUBMdE0o99WOmsHGYxis90EhSGZ5MyWFt5eUZHv1TtcQMLPmVbqz%2FfzTJDEWgUnVecvUlNV%2B37mBPANI5mfTZGGc5YKrsIiivkstUQT%2BYxVZS4Jl56m7%2FLJ08unEdsNODG9qQI%2Fi9oAQHHFn%2BEf7ip%2BeB3mEWtTLW3FDS%2FKzn6SB5n3HZpz7h%2Bhj%2Fw2yiYbyhIdFtIR7C8TCxQ8SK%2BQKqZo9x%2FDxXzW&X-Amz-Signature=85cd6acc206e28050e13b4150d7ea7913205d550513707d056645d998195bef9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
