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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXN5OX3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC73JiMn8319zA6FWmxn8h%2BKK%2BfZDU%2FqBCNrwiDIohSewIhAKX2B2EuXcZydjfuAEGpNbhkJcljsqw1OMWD9yqwmZDaKv8DCCsQABoMNjM3NDIzMTgzODA1IgyaQHdhPLaqoCmGeXsq3AMSlg0gl15alY1TNPnwZzG7gx3dxs9CRGZWn7otojXcvEhGfRJTUq2TvSFCG96qj2m80sogUKGTXAy4UTOWdq272aNC%2FLfHPh1Mk5YjYgkmOPuOYCe47nJY%2BT4gStw3HoKB74EJyawekF0s9jxSAMGl63LyG9nFyYlpER5xo%2FhP7MJJ2Vqe1FsxVY9%2B6RlMW2XOeP5kke0t13P%2FgRMUVl4sJHbXiTEMFP0e0STYMKplcxIdr5uaD8GvzBo0kPBoZiOgZG63zKo%2B1HHGDqxVZGAI6jeO5oxDClYo5HtjaTK5W35z%2Fc%2FZtFkwcrBsYpEFCCGxqQq7Z8bpkuCVCUQ8ku3CzTuBx4CwoL2uDI1axCe19HfCTWa1j11u31hU2%2FeBePpdnScgSTpH32pOK5RG3SKxoFOePoV8SluxdKDisyIYos8fXb5k%2B1tXWUvhKf%2BSxWkiAumZOKDxN0Rx27J5o6Bvcv2qQiiq8GNi4m9ck6eK0T2vd8TUBMlD5hM7UF7%2B3rOPfj%2FD9ZBUzyO5aKc%2BaS9krGB67CqnmowikiW%2FN7cFkOj31NWxLVWFaBCkBT2DXlIoGbYkybbEnONqB%2F6d6nwlQ7k4FJXLEQQNpJDy6KPNz%2BpNNMAVbxGoWZn%2FKjD5vJ7DBjqkAetiXpU1uVCY%2FbiwiEQEPoDq36P1WibwZNgTO%2BRH4DHOAMpe4iz3hvRcjdBFp8utM6zKTaKTEzC5hJUYza%2FeXvA8G9haPvH%2FVHXKRYQEyqfOd0aMIYucO1qFMRlDnZQ1HBBtevZNSYtI2XHytPhmB45ao3AgG6iDhxxIieXv6JkpvrXnnfXe4b7gy8wKT3ePwLylgxxUBWtHsQ2a8MTKH2EOVIPY&X-Amz-Signature=0ae33abba21f11076ccb39a6d6f79f3970660bd63fdf350480f533645504a76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKBPTXA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIANBPkYpfzoZgkU2h7zBTqvgNH21dkdFbdPBTMrAyV4sAiEApgJpWPWgjHWMjKhPasKu8B2O9M1Mg85zT%2FiZQkmSYKkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAZV6AVyPWlubTPdBCrcA56C9TztxybrX4I1enTNEmhLLG%2BYw1wUJrbvW271e6pTi4WPIAK5amX6Dii1J6mBFTrQydy7R6X%2F8XAx7J70kGWbEeABpRcetMoBN8sr1%2FcjIip9ZQjqfNNl2cFZZ%2FCeE2hIYmyZIRjkh7XLh%2Fy6BkSklBL0TXCDoFqJwkf4YR2dfGMzsufHu5TvzgkIE79CyZ1UxfEdjo4%2FQTcH8OJfnIIj8EBxi1Ne2xcf43BYQKaD0UQZeLdYT4nnciFpUETWBKXIDUtdv%2F8HohSJcVZkQrvsuQHFVhEqtKNRbo7R%2FFc%2F6YSsXL5nvAa7LJam66qNRLPHEZruaqHoGSIkKAmF1uljuOLIkqKDaOaJSHk%2B%2By8eC%2FrehyTGf9tHZ0oBZMoki2xUAIhO%2Batm0bLZivKQxUP5wJnvWjAPD7JfaaRt3g1JJoBJP2g3M0SltQiKRgFJHXOyTfBRHnkjaryKfPs3qGJP8xnzqQ3UvgTqGvdgfTod9DygFt6zqbBpTUbtDVo06t7Qca%2FAoFyaseF%2B8fnkFocl1DSTiaPoBzmPeuMKG7L5XQzXgOvurOrw2q4rFQkarvZ4WSppOVBxpNUcykPQe%2FwzGbofKcgaWX8T0HS8B%2FJB29ug0EUQ3gkjAw9nMK6%2BnsMGOqUBhneLyTb096BPhegNtLedXjQPZXB%2BypcrGxVp2YGajMQEEREyt6Fkn%2FETPE0s5duVQJl3cOaRb0pXS7jOr6osRk3gtZhWR%2BWlOByl3U6UDSngZikS%2B%2BCFpuquCYNmMPbISGQ0ImyZLENyJ381Lhf73%2F8%2FSV%2Bw3BxlLOABP0Mrl5VcJHSkUmIDc1pDkcQ99lvt3Vwo6vcKn2OEzPI0VL%2FCdmJ0Widz&X-Amz-Signature=8f621a12f3899594e51df9c927b80239555c8a65f3712c0181990c4e234ac52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
