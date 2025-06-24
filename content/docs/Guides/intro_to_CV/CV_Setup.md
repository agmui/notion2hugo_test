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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKM5WQA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFFAmWErZFXzGx08J0J5ZvO0kf1d10J6ejZRci8f1Rw7AiEAtQz59TMBlLwPPdVgm7TwOhNEuz%2FLV%2FgZ0WWo5kKWPCEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB2VpU3IPB2yxuG91CrcA8%2BSQ0tgJ51qALW8T8N6pcHmW6WdiXIwEJsW4CNJQ%2FQuopLaM0khdJYWyheeHSFBVOWbh4llMfy9h79Nk1kac0GqHK7OPGzauF%2BsrHZDeO%2Bk5uWVlhzHO6fMTokwousKCKRcSPBvatScopecF34%2Fg37%2BVhk3IS%2FoFZzKH26QcOK9TeDCvVINZtuL9ZVhKUf9BMrr8WNbXi2arexSVz3%2FEHnstlJIJ16XEEJ%2FhD9HghTCS9lxU1vfKWCVTyAgx6pg1RCVsJuI8Dj%2BUlGoCikCYsGiqezq1%2Bgj5QUQscbZ%2FaDv2cYMUlZ3ImTiks%2FMiqbZY7FD2Bay5JxAsOus1Bww1Tv6tpwdZW0Ku4BJL2YiIJ8fVH6ZOv%2Fx%2BGGBLOJKiY%2FxwdR7ZpWlXYyRqn%2FY6flSMxH71VaHKLc2PZ3bgBKz0Y%2Fz4L8LIzCThPcZXNZvgYleFBnF9AXtwE1fUPu4EgIQ0a9YMD7HCUjuls3BiWXJY1ojjVzpJIXZPR2%2FgKUnf2j0qwcXBBJnkVo2SfS%2BV%2FvG%2FtLrVP4h9ybb9kEUBKgldvq62zbLi03NA3pYLFu0LYIJ0HnoncigC7nfpkfqibVhLnq7h%2FIkqrJ0vJLWQGF3UeJjDztEXNLQLZlvNifGMI657MIGOqUBc3%2FkakGZlvUc%2BmWhYDyusEdQpfAah16w3Q5OUkCcoImbOLZkdB%2BXfOTfgdxGeMkNmf8BQkscesGLchmSE0ab1Rx5HtnMSRSwyUAZpdGRqPW8hPqY3QEvYJ1%2BGg71gbL42rb4El1klOxRokecYin13XNhT9OfjgvmpFJ76qN5FSmYZYIGRcD21Rg%2F%2BX9FxSIV7pDM%2BNGn2G5m6pfLeLIk7ZE65js2&X-Amz-Signature=30f77342dfd833c4a5a0b90016a42e12404e2019d5c70d36b6ffcdb734d65b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEJ7SUA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC2vG2isgNlCD6tZnrIs7CGve6yBeDWUzkjpjBToAyplgIgWA3Wulm5T7Wqt4VVWzosw4g3VorP86SV1z5u8KO6H%2FEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFBSh2mYDkBWbPYcjCrcAwtULnSPbW5u9P2Q382p6PAz7ZVgtYY9RJX3rR57k1jXDD5f0qYx1mZhdV0Yt1zVe6NyKyQrcpjt%2FelFHyn%2Bbce5RxMhC1MccU5vkjnzGWfdjDzQJ4yqLMTqo%2Fr4F1LM58gjVpIOzOXpJcIduQkcD620dGicZqVAF%2FJjLAlu9AwswIeQ6k57a0hA%2FA%2FMr1n3%2BIggyUncztxAg27IAHjbz%2Fse6%2BIMna1H%2B6V3FKY75KDKvV3Ruqm49xVJGJfSMC9Tij0ADNYs18IXqGK7KlEXiT%2F1w06R9%2FCNi7vScFjUd1%2F%2ButFf6d%2Fqebg2xMfEaXiTog8BuBUwF445uZvggsJfNEqpoj4ngOkV6hw%2FnAY96eCJKCahytbABL0dAJIaOUmtw9LptGSLv1lU6RHHhIsFnGzWJqX6Is644unVmcDotykgc3kciIw8qGYK5t2LLrA7Winn0yrO8bk5Vjz8%2Fsk0JAPRHgiBTEiAE5P0HWO2EKhAJl3A%2FH4NyTavLeoRTS8Mipzbz62pQ48b7s%2Fyzxx5p5RG2vnQtxEl2aMmMttomhpsegQkhgd9tPhxi6cM660CqNYmvIf5mojekQKsn7CG%2Fw8Z1UIIe89060iOMGfZZQuD5vMJf9%2Fq8%2FXkJgWyMIK57MIGOqUBlavjVU3RV94FcL3w4njDphuyE9MY5NB45FQpA4daQktqFtYn4mGpe7J3OyNlHSpkpRGJpv1MD7RFGn21ioCJg92m59Dv2Qw%2FMpwYIoIsB7uOzzIxCCWCK1iEdTzonn6ASmalt5O8rkLHEam%2FwYi4vuqXkgYH1NjCXhqkmIUU2Qbe4lP9EvnwsvgXZfJC28kW%2FbZ1WFfcqDLxRjkN%2F0k5Of5Av7Fg&X-Amz-Signature=2f862f9c58035e9e7ea81f7c9829258ab466fe9dcbd9a3e347871bd92947e92b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
