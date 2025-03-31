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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGYXXF3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIG%2BkOJ5za5clCUUglTmfrbhwFgbfdvUy%2BPtWcyvRzF55AiEAslls6vFGZSfF9Vegmfsv5JwF%2FzRC3IwhR0H4xUReqrUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4UIygwZFyO%2BFMMpircA5GuPvtSXW%2FlxwsFK3jF%2BbMf3eX5Dn9%2BDQV3d83rvBAwRvG980S3p1dz4A%2FYjeS%2FicOcPpEUramYMIV%2BBKjdqDKHv7%2F9wTqGv9M8Rl2R5iL%2BfKNGuWpQRd%2BrbZNPQDusnCIJT5o%2Fv3eVVsIFd3vYOdnXkWsg3AvXa8JYhdRnBOCSck%2Foqe9Vm%2BrFvuYzdgSANdPN5e13XFOZ%2BqAc0LUrv%2BvdXuXDeAqTegEX7ey8%2FvZlc3RwXnArXTnu7MMKozPp%2FJ5KnQCApDeW%2BaOWYssnpE8%2FBI87cvU0t38UzPk5sMSu9dhp7jp%2BjWohe83ACoaed8c55xE3wpyHrApqzkxaj%2Fjuu4ffUSajALaCEpHZwkwE7GwkC%2BwsFcTJXJswNIZZrvCSfvqtCdf23sZwwWtanMGaj6ep8mtdy%2FsnBYonn0A6KR0FOte8Q%2Buwr0qTTLYV7HPLg%2F62rZEJ2%2BNrDdCaZbIJbnVzhedDaOPNUPpZzaRt5eK4oSw%2FJlqc3WbCjhjGiBSvluK5Nlc2IigzNLiMR6RcDMEu6aoa5iB36Ezy272xhJ6YfoGJfqA0MCUrSgJZKDh5h2hqTHbaq5IETPO1KOw8gDb%2Bze73vTq%2BqYfJubWV3Gs1D3reF57h1212MMyUqL8GOqUB7iHzz7J1B58X3BRsbyBJ58zpzJzMf0JOb1DtGCQKKp%2B%2B9ovQbOpm4HYIq36%2B%2BoZJlt%2BYFoCoo7QHKse5Wx2D2bbNLBVCYme7CRh4ePFZoyMxz9jX2y2kJnrLXcc39qXcjNdPOCLXAw6XQqCygGMm1iDNuZKA1YdxeTYFYtjYMi7xF%2BHgc3MQ8k6SwGfozv3anPntWUaHo2nzDWzF6gW4O9nYBRiv&X-Amz-Signature=7c70c8e19387840a30934af413a7464d9d1b45bbbac5bae6124bc887dc645a6e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNP6HE5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBjbln9wOb179nvcRx%2FCsvSMMHhJmd5x%2F%2Bu35DeGaAG5AiAN69ki51i3d%2Fmqyu%2FyqMUb7n%2BiiSjyqASRo1pNZOECuSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtkpfQAFbpOR6Ofk1KtwDzNaATuxnah9px06m2kOOuXGLmv9GpxCyi8ebs7%2FQPBnxyQxsty8kYaqSXQTvdXK6jSQYCj1EGC23uMV8dc69fTREnqoiY5zdKZplARY7xK%2BGVMvVcaGvFohZQCo24av%2F2rRSqMOybG%2FPr876G6PfJoj6Z5SnYLrPwDdbJvf%2Bzn%2FWA89KIaakHcdgOBH5zWeO0DThQjhlQM5uFD1xuAPEJ8GFrkGQVhsryNkaAQEJPysY6InA%2FKKV4jm%2FtIQH2K6TlV9usOII38AQl00KKEcvJCCBdiTkaa%2BWEz9ZA6RgjDd%2Fh1gaCNoDPemhhHZBTTkllw72OkX84PTDaxD%2BJA%2BNayY9uo84CHcbBoaUzvAxke%2BZDrbx02tBQ9uEPrWR75t7n2NHIiEOe%2BvgCugOnaMr3sLNoK%2BdnNTZ%2BhYFZ2hMBFirV19SESE3kOe1n40CujWoASBpJdPnnFlulOHk53O0lxtCrs52q3umY3aomBY8v8J3CyIMDjq2I%2F5Dtd11zIUSPSuRGimyQWs%2FP6xuGcUsqSTmrKPPB%2FktYkTTfOFgd%2B2HTTq9KqxBloOPcgWs9h0AyEjZdiPZ%2F9bI%2FXQ%2FqsESvHfcfJtEsdfHLDOUJs0Sts2l7FcZhPCQZNwJVicww5SovwY6pgFPpkPIKfEYpeT2Nd3Mj2tmwtLW%2B4Qof0Qh%2B%2BNWnq3UVOf%2BKKbp1kHVNqHHdps6FjOAZVj%2FzpyTltpz0Ytn1c7W1G3UWm3PygPAwM7FLzkB6Dvcxrn06PPc4URGOU%2FT2IWxSGmne9%2F1WJkqLLJXNxB6GiLnhfoBfTxqVtdmRCTquRmQjMwRZUwcUR1oJwXJaivn2ZMQCrvDTF7wxJuKI3GozYJ8rbcA&X-Amz-Signature=0ee60c71ab56c1b07e37354416084a7293a7ef18a8d790f7991780a41d45fba2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
