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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEJE35Y5%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDcwdDQiluh4NhEpY8uOfFiM2BOKDv6YYomQh9p%2Fy6p6AiBK%2F40%2FMR8VHmMK3oHdmy1DurxNLz4iOrYZ14q79rcgfyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcZjcw70RfZna%2FIgKtwDiu2dlxAXSPqCq1rjTJf16NYj1hW6DcVeeBXSSxQr8wT8t9rgbkvqjdMNoUB68x20IEhjYkesT7aV8%2F4bZJ5l%2F3htWwhygi66yeLPoTl%2Fr%2FplMNjYbOJgMlQvZsw3eapOYGpwHqf4hlNMLL48UC901pj6MafPfxEuhkFvy8yDkHrXCD98PQcU14yRm7w8qV4ZEVWFJWwmu3T%2BuLC7%2Byfqu2A%2BKrU2CMIW%2FmGROGFmciW2cnZ5Sq10%2BTCr3ghZQNM6q%2Bh29G6uBCA1U3Sd8TjmTaqYFAle%2B5VfYenTgeH%2BoYliKIe686d2ROrWVBqRRUZJS0sWg3jhDk1kPVNjTWoWqKCsGojVB8gHo7HPT2EnZdFIp8dbU3sTj8ZYwOW8xXr27%2BOW4auvni3sMsDLasqM65c5OQAM1EK86gmFOqvkXGK%2BXbhRW0Xd%2FZYoXWHhVYGXyN0g1L3YbVeYrsomrPF1Wm0s1WhuQLVHnnh9jISBdr2GLAasUv%2Bafc1TTjGxvzWRqz%2F15CDFQhbmabcDWpz7bcaQNqbY9DO6%2FyJq7b%2FkDo0784B9k3Q7%2BTA1svtgCjEUJnjtBdvcY%2FvJ6JEkKKQZ3DGF%2FYwExb55BL4VG%2Bmwd6moq0tDeSZGHw87fFUw75OpwgY6pgGOCfIJbglrYn3J7LVo3b5mpnNEp6ghg0%2BFDHrvJYjrPDGxKwTCsZuYIeIfb%2Bbkl8YjKF4R81ZwCb4NepkyLqWt0BTAGoKWbTRnxzKZ%2Fo2%2FtYW79SUGe%2FBLYS7FQ1VSS85XdAcZ6GpQCLngf94mdbNUG8pUNpI0unWnVpusZZZrl%2BF6mDozDoHoGOrrwXmdaOJfLHtvBhygTLwxRLrj5uCw1H9N9v5A&X-Amz-Signature=d2f147ef8e5ebf744a5e20c5eb97d20416636d3e0cb9594d8ff1bada64cbfe95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5E63I3G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCZiufmM4ypULZOZZrCmisiZwwKbJUaDCguyhRVmuDyCQIhAM2l4%2FSq0ZQkNiQqID%2B%2FgzOL16JH3fpJ1Dze%2FU8UKpy4KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJlKvuilWr3smneiYq3AM4b9SHwFwbYTnPKaBva8e2DZA1ECgdPyEZYoxGVBzst%2BJwwJeXqPF1lW4R9XvoZ6fRlVevBJae4fS%2BkFq9wI036zdIbgAk7U9xOiGboD2UqxC0LoULmZLqFcHht6An0MfI7JkBpPxwA%2BQs%2BYqHxX6XR28C6xLgO6o%2ByVg81kSnJCItbQ1q8jDgln2IXH3tMOrS4g3hh0u4pxP3RXIe4NAnCNutLqXP9xgA20002mH7450QrHBVKNoRA2MBtL2dQJILhnoEW5W9k96qTAlGzGldqGd0sht83X5Gcb5EW2Eod6f8f5Aeaa2K%2BHvmTyH1g5oyYUtbTymiH%2B%2F5ueYzmadyrpCCYFXYK8LLhzSXip4ytLicJrv0IPJL6Xd7SjbcG5Tl4tCNpjwbklcGN8ehGzV2gSkxu5GI8DuMoh4NpgpKIt0TRPKMj%2B%2BWYEvOCf9SUpMjExDsHa8ztBX4oYpZHa7D1J%2FrhPFLLbrgKpQ%2ByUB3BqiYxG%2BZnzaEcIkTH9XVPZmA49%2BSNr%2BpZe1Ct5heDgh7DL0OSYNDKU67aBj7Vsx9QaCyb0sBni7rA6rpJvYVBf7cnwzTimYmI%2FtDNfC4o0lCC25cJc4VQgBloLNJQwdvK4AbzGOjOiMfFNpWEzCalKnCBjqkARskhO58bXZVrGrPWD%2FJWyzuVbsJmlCoStwkb0eBezLFdQZqyaQf8XwhdF02YBkbuCzwkee9%2FCEosHBM%2FyNnZgdSEsttIgjN91eG3TvQv4aeDfJv9NsFiSlRumDTY2ehwm0cGRo4RMj0U3Wt4OW1m3%2Ft3eauNpDff2QwGZJRTiJNrhx%2FVg3RSvXOI1%2BzwPeFVWvfldyF8gHhcyevIEqS%2FWtixr6C&X-Amz-Signature=4fd9ad64352b6c8140881c72c81d93b737dbef717dcdff2db6a374d769bff0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
