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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL2DMQR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDVEnGRPZLeihqlM4cx6MkACGe%2BoP1tf6BmOSjcBsT0dAIhAK8T8ZvwEZypSptEex6K1V%2FsaTn%2FER3ilRyh%2BJ%2BEHtttKv8DCFQQABoMNjM3NDIzMTgzODA1IgwzC7JdvJjc43vs9NIq3AML1nMrc3GSsMLM3Ntp%2FQJNQvvhZfxfFHJpPPa5MfjfZcIwJYQIas%2BCUIrLNuxeP3nRj8hOzR9Y%2BYrNg5Pwz6nuErMz6qjF8F27cXszsdLIQ52WbR29cNo2Hhs7FaLykdzniQn1y9RgRyXO%2FtBChNvEHIP67ltBMLFlHIqAqzjYJeL%2BM%2BQQ7L34c0YX250645JFuqWK%2B4YOZyBhbQEOo0aq05XCaAuMbSm0qabMKeSsM2jcklW%2BriBUmovghEqmuWzZe4bOuES2yXGvUF2QVANAvf1vEQfSyStzoXp0VEcbHC%2FrmqGe85BVntMQzBAmvVj5iUUwSyYYtYlMfjhuVbPgRGcW2s099ut3rgBwv4dg3F1ysBuyYAQ3y4kMQzxUhcx71jovnHn77quIBEUfSeGMh%2BrjpwPEU%2Bz%2FU2qJmEH5hUKvtAPZPIkViD4jbBsMtqXMfPkijH3HWBOkBenUKSROL43Bicszp9cXeDHfqSdbivxVKSE168mrWbM9GY1OxcJxwhNhjzg1kv477qT%2BJZwOp72pQO8gQJXlmNuedRBbptnk7t2Koa9mkPKjVyL5MqtWY%2FcZlzPuUhx1ur9tnYBQtvEupxrpG9Gx55ffRXZHbIZmWMPeY0YH1YJHrjCz3%2FLCBjqkATCSwWhoLAo%2Bb4RibmBL6CyAwH6wgoQJcbCxBhnVJLGnTlFxL7W5SYgoiH67MY%2BqwXHHsHEDs8suXVBHARS2dTo3k6auocZxWEKnecr9h%2FSfMOsujWHVbBsh8V4plX764ARKxHEbNBXmKxNmhtDXut0ERxUe7m18Fxb4%2BhfZTfxxYtWhWZ3PVYRxVlfdL%2Ba4ja0CFlTJsFETFMSl0UDqhkpn8s9C&X-Amz-Signature=78c94b36b3bfa78d34d850a724c8bfa500bb1ff32f9bc1124de5041357b37350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WPZTENU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIARfMRdecJxxcql7KUvZOnqbyGmA5NMZBltD4Kcu%2FumrAiBY%2ByL9k%2BzqCzPFLjyymbmINAw6aNhXR1KR60DVujgAvSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMeTtdMiFgvfkjwyRYKtwDGglqV%2FXSUGJ01aw2uO6Y7NpEeYQlQWk1Vf%2FyE2S3%2FXMIBqjeGHTXAYLzQ566YflYjxRYxAwFwRJQBbGhk%2Bw43dctsrmiBZC9Hk%2BdpBqYXRy%2BnfrRph2efVD%2BwRlPtwdpro%2BqXAUiGeag%2FWfEOf%2F40bj5AGPmOtbqHBfrcCvO0rFpXy8Seg%2FCcS7tQG7WkskymFWLTvg%2FOzqcZKGSxosFXJoJAwDtltxK72NDWfjw6qj1IVI2qnvhAYJoabY6CXzCZMRaEoO9eT7HxRlpfY4P%2FUkRH3i3K3YF1RP5XFG2s4IDNFmzFtI7o2Wvpo8LqZ73n%2B%2BAraezbBLEQXADqF8Lk%2Bm9qnxpHgnacfA12eMsdZX64hqS%2BBIYETNreZVokye7P6Tj%2BB4ikLluGePbHn0RWC2mxmxyDFrsqmzlmSfLr8d6DLnXAD9Mop2%2BO4RGPdVt1EzV4aCy4s9af2lG9qvfGN%2BghatkGgMTHDC6%2Bzr25CC7VuMNbLh%2FJDLfdVKNnlHYrQXquE1M49U2PvauJYn8C2uHvRUJOPWL5QI4sT1VlkJ4tBRLY9h85E8DIXxrf%2FkDpmbHRyWRb117VDzuXtEk949vrRT3F0wAJezWleyoljj5f0fRu2eBs9DN%2BcEwmN%2FywgY6pgF9%2FQ8Gb9TdU3jdREtO6u1lvHsN9%2Fu83JCB3A78Ky6DpsNUEU8GjR0pglQOjPSu%2BZX6lUi8XqTITrm%2FJPFEoVsf825FopPqKVu1POT%2FLR987WE5MX%2F%2Fk%2FquX3bT475Ukc66R7AAtqhczlMPfPtT%2FoNXhm%2FxxUdOLbU9fUvaYPYqQY8WRJ8zxaUA%2Fw6WT3qqyJ1mBtvupU%2BKWA3pROJL6CNpFxLgxviv&X-Amz-Signature=1d4f9df33a6760773b00d81ff9ab0fdc6d4942d85bb250c6c2e898a0b8ebbb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
