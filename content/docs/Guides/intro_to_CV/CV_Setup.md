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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSMOR6E%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDBkSf7m9q6JoHKUPUbwLY3BqGvQ%2BbImW7T%2BdqakvC6dgIhAI6fm%2BMJq2EGweEAzTJuUoG%2BATG68hqYXnzalfu3bXkGKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLnHbKjeL9cGpLum8q3ANkvJhQjLGuvFqfur9SkN44kd6zJKbVRpUTtKr9AqbOG0BBQElgRyUHc36skXQNYI4AJH%2B6a1QOrYfZNfmYMO9prLPHql%2FvXGaqohwUjVtfcNdkABY9MpIp8g%2BIXL763XzZio1cTcpWOAJS2k%2FEfSHyxxJDdpc6ic8ASOvUE9I7aE3ihzHl%2B0P46ZQOZnRCw3fgLuoIFzYEkm76C1JgFAUNscQZjLmMaUI9XebSonLLYXPoX%2F%2BjZ4Y2zn8wZtc3lMsI0VT5y5HQC3DaQ6khgN4bVKi9B3JROrau6tqZURYMg3Z4B9gqoThkxnpVJ6YYm7PX8Ioq8iCzsmzkcQtp2ODY%2BsJH9VW6LykYVtcBDADFvEJbQfNsl%2FQWlYPIf2x0hEcbsfiJbT7KjSg2iIenztKjR7374YLaezCchUR5BAtpUjBaX8tXqQ%2BFHCY4aWPALmQ6fpRZ4rzEHLVSJCry6%2Fk%2F%2BDqowanuxu84vvkRjgevaCgR4yL5FFkya5XbXEn1dTCTnUG1McavgXiOhr6BF4d4xnQy6ralPaRuV%2BDJMryJNrsb3DFO57GvTYcVu97ZP%2FiKhgWuY0zhBhqpkHVhv24ehA4%2BRNICfuFT%2FZ3Wcc%2Fh5VKufHzWWAUo1gLRTDCH49u%2FBjqkAYUsRrDK0s9CCNKegh8dCJR0Uoo3BV17U7iI9%2Fu5D%2BH6jtufIYWle%2BEsGkT7gdla3WMspj7MTQmEpgPsoDyYusU5trjAmsKbEuQ2DCFDRXAX7yDw4q%2BuXEZ%2BjSjr%2FQfCDL82KQi2L9U2uB0fmzuWGHBfEz5AmrN5f540OehQo%2BYar7VQE7G70Jqo36UHxcjaNttktW7N3aSOn2udQfsmvYIfMKKG&X-Amz-Signature=514a73df56e06aa0c795b2fd3c0e350bfcadb9db9f9951873036acbbdb301417&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HRIREUY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDgi3ATtNkZ5Q4KTDcZpQ%2Bhw7KxMr%2Fr%2FqRETeuogdLAVgIgeekJatZKNKDBeWM11HlpBduN3ZXYOD7Ua0WqqAqEQhQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxHbkYg9Ak7cVPJByrcAzKIygVYuW7ogtA7WQa40UcQmKYX4CwojINcbUNpIJlSd4tcHpmInH624JUjijDKSpji8wBAS4robCfiidAo1NK6vy3xktTaU8%2BFsuEhl5z%2BkVhMiOOtAQ7UnqTKz%2Bwr3f2koXv%2F2lI7UVlEgp%2BRkZW4IvXFa8iwtwfvVE5Mqe6Vvv0T41ytNHioTUyyP3bCHDJjaQ6DT778t8BbMHTrDJ%2FmEjrQ1v%2FicGHfzYINbVnMOVqc3y96mTjVO52ShkvGlfZFx%2F1wfINs%2FcR4aht1Hk1Y0mLXgCL3M9g7o1603XAeKxu3JzMqywWNddIXxqh%2FUvwLRL5bRikPnwxqMInJiLqRemcowwfDfq7HyUPiIaGvvjNFma4F2A7nWojE7T8ikVCTjnNV%2BLrvkmNJBeoVOkfKBAoT0nWfOQ79f518Aou0TLM9OOgoLL0x7ZgK%2F3rdJbylumn%2Bvd4D%2FGzqE9bGiJ4B%2B%2BB4WakLPkZ3SVOb4TkyzWlRxjUBOMFrKxUmodOJjAPEj4XdShFvLWxHvHIetloagz2f7erconfld1tK3ciYAdIiKcmvjpC8bZ%2BaINTHQ95gyf%2FPaTIHGZ8XFFLMf%2Fe2Q9fzpI2ylQO9gbLrs34VulSTl1TJOGZweft7MJnz278GOqUB53nsofdECc6nMATRGxy8r3l8%2B7eFsBWpv2%2F2QbIDsey48W1FqaZgQSrOb5LZrmrBmx3QdGdNcsEz0G4t4HcA7ZU%2B89%2FuMK6EiszHPM8qOIHP7F%2BezMFyW9I7rzi9y2uk5UUXs%2FL8lT%2BHLKh%2F3H%2BJIpBJd3WFUHZenWy6%2BkybRXYN%2B98wMUesUQjGigD9diDaxltkM34FC5%2B4J6saLtC1SkPCUFfw&X-Amz-Signature=ab70ab994dd3189f6382f903214657c746316e2387a6327632aec3a8fee50bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
