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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KO4GSRP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC5EpzBp9jcZwuLDOxUG7Dub9m0ZAivnDg%2FTlu5XdaYKAIhAP2VyIW6pMGIAorC07iRQgIificqYabp1SDLkWg1n5jGKv8DCBIQABoMNjM3NDIzMTgzODA1Igyzm7rzc4LxM4Kf3gIq3AP1x3PYRG7PfZ%2BRVCeUjRVq4A1gKBzx5N0y06v1M938sSjqY2iKmq4FSetld9NImFgu0A3Vn1sr6AwaDjplZwbS9C1aZ4FE8Htp9Jg6qV9Zu3u3Z5HvZgUXOfY7Hy5MbfRUqnKJ1NagmMSW8AeB82976ATTJx86UQKpVQQyPDxs%2Fu%2Fb1JVHlHCKGzB2NTJ6YmIvaXI%2Bj8Ck3hPU3m%2BtMdUKk01%2F1zvruwfEAdNh%2Fk%2BmxOL8GTGFkXVxgPHxdTSESEbUG%2BMxEe2vs036w30u%2FKh5rJQe6p7oo8VfbMQd8mhkZr0OQaswfnz2ouPfEZveG9JO5fiXTblgO%2Fcij407vnS1a1by%2BuNuMaVJJNfB7SXTsHwiBrnaMOza9GxtQWkyFOclalL6HgMXOG8xIQylipuA%2BQhxicZY%2FUS7ehyPZ%2Fb26fh1uiRT9x%2BV85bLiukVj1gxsDmFpFVvK5picN17pcdSHpscU6sLm7wSdLQ8LZ5Hfsv5uYO5YAhkwGLb25IENgXYZlgvmQ8wkgCPOFjJFpSjruQsS%2BaXq6u7eg4fhdD7MRTnHstpJ68VBheEM4SRuytU86JkydEqG0lghRC6fjft4kn8vF%2FO4t5r6RC8JnJpGfdFAJo5Yjpln8C2TDDTiJnDBjqkAfYTy0%2BUx9j6%2FBUjPf4sFvSQPqHVev7cGO5bB5guZCQhKG3vFSrNhRG7mPCCzsUKqfnUK4AY7ysDOyPcw8YMsj2GsyoCmdahVDH9iz3pGd%2BJwR0X8d6jqg7ZnZdXOJnC7G2AVYalmMm977RUT%2B%2F1Meaj9SD4qUn4H0AMBjL8bCa8EWMkUkwzN5z%2BBaztWshqotUA5sg8saIIK3m%2FsaY5wekRwc5Y&X-Amz-Signature=ea6a41417c52f47b855b88d7a1f703ed064b6ad403286d94475636e7169c8355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664VEGHNH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFM%2B1YnZM%2FqFja%2F%2FUIl9JoQwuKJDgjM9xINk9i%2FqPi4oAiBleaHX7gvYeX%2FWn5apH1hn2T8ZC6pYpUK1%2B%2BzuqBZi%2BCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMg09PyT4d5Duw9f10KtwDc0aZpfK1kszNvU8Vek%2BxLes2cT3w5EIkXKWUygBNua0xXAkl5jkHvkLuMsZR4%2FJv8Cv4oX8yj8utAcbMR%2F4%2B46ASIcfCdobtzGiV6vwCVvPI5g%2F0PC8mOr2l0VgZwTgTqx8XsI1%2BkOUGgtSMI%2BfEOSJ5JLCtWyEcXWN8%2FqnXoWvUDVLJRkUpbsC1dhbWuA%2FUHS9XJi1FiOVtpwjG07IZi5qC%2BaTsyQ9r%2F4jJ61Xy7z%2BTQE2Xtrj6Uea5tK0nSI08HGgsu3RQ0t2qsf%2FAflTPLKcRh0MBj%2FlbroIlOmu087gmLW7Q3KoAur6uyzrRVEoaVvLhhQCwO3ka4DTB0hN0v966aQxDt0h4atk99yadgiCEM7KzZ5OClCRwYRNLw6zFJH18c0nsdG3Qnfeb1%2B2YdVjiUFiaAy2fEjaDhYrdTB889MoOJVsW0trbRCPH3Khg5hPBwL7bhhqv9AEwkvwNB8t4VNo0ZkUY%2FZThp3dqFzjvz9PTXUXSSJumW4WZy89cQIn%2Fk56xDr%2F5rKiUSkg9FYkIr1qrD2KQK3QHMORiLhEqWUKdLTKlaRnPyU0J3vWiSwk2%2Fu%2BK65UZHSvkUzIagnkoyKl3Gn2%2BciPiRQdS3yo2uOi8x5qAOPE3rRswnIiZwwY6pgEvn1fneV8tPdmWkWvMTfj0n6mL1ClJL7axuNZ6hWNeYPgI7EWp6FPUn55xPwdoKfWxM8JGAbQr9npIvlVioEFal1r5u49LBOHAPrST8kQDejNEuLDDOczoLn2YyNlm9JIWipC8SJDECAwmT39%2FwzjyitqseHehsAIhd2MmJYyRZy%2FPrE%2FFlK038Pb%2BVOiAfDzu05LtokNB%2BVluJbPMt9I2QESEZB%2Ff&X-Amz-Signature=d90222662b413de829347583e30a9691aa47be643d95fc6b83a0e7cc09023224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
