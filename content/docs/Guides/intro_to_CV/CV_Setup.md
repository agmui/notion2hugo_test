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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3PXLBV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2FyCgbIeg9S%2FAxOJYEXog2Av3mTbYTRXshBQqnZYvPIAIhAMtkNRRdT7sofx%2BWV9KpMgXVgwTb8RmSyDLP3aHX45C9Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwDjLzBqLzVwrLq804q3AMR5NGaMDjn%2Bd73JkxIF%2Bxvd%2B7XP9%2BVCoGl4VfD6NEwa%2BZeKboFczHOUaH7OBuKselyDAiIFTNqbhf%2B8orbfzMXMSc5AOLuUjtJj7SGSVRx0PVMyJw%2B%2B%2B5sgGAQA%2FTrABoKTcjSkHviq5oh%2FD9fscks1yuA4rzY5A8Y2JIvpatTbW2ly%2BYiXb%2BDPjxsJ%2BZ%2F1jBh7uLEF6MaiYoXlY7kix37bbEBnaG4cn2ULPbpkfVh2%2FLSqu3zX7Nn8rcYqfZwZf55TaC%2BgwJJftBocPRfBeIOjebSprxZ4FOXkOLk%2BbVp9dMPVhWT%2FQNebHf7CO9XVbFoYNfu555pMYVKIggcbVTJVwl9%2BjLW%2BreBIEf2Dx%2FdYtdKeTvShoZMj2%2FmQ%2BcKSofhEuMHJbf5xQ0YjcmkIWNWZbj4yOnay8zWEWSqUKLakvTHEYat%2FF1HgdoyFzhV1Q6%2BljA0Fxci%2BwVxASrsp3K1DwQkFiZwySeYv8oqJxx7qvJR8%2F9Boqv%2FHpv%2BYjLSWJ7pD4Z6d4i3%2Bp2ZE1UYiVGXLzIbkjSgoRalgJbnN6%2F2FbIp5VC0018ihP0y5OsED6jeVzciOiy0ArmHcel3AKu7yXAxywVSfeEAbINp9SP6zs%2FJYbp%2FsLS3uyQOzTDa1LK%2BBjqkAeOjQGeGyT4zQ0MIKLQnmRuu0veLATBnbfiFkn43HcZZbXFps%2FXPbHFUZuYOvN4ZE9qSzAxHzyZrvF0PUo0GKDuqc%2BMOYTgK9xqjdqWxrinbqI9pRQSM5OclMo9cjdg4WwANUQAfef%2BkvGEQuuuTU18qLMqgFWvTOiaqb3BrXvwUwHVVGnM4dX98wcEUM7Spog0qVHMOyz7vnQrSmsTHlaSAcGs3&X-Amz-Signature=b410762f3e6d6e4eda80725c059a1158e532800e360a18989d79b38c2cc1c7c5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJTHGLUN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCd6qGkdpnEtcL9W2Ssb1sQ87Vj%2FXlgG5Atr81FGuFaxQIhAOuzmxw1XGnotYggRZf%2FU6T6H4ZyqFzhsb0aJ1vHFmYjKv8DCGYQABoMNjM3NDIzMTgzODA1Igwztz%2Bwbij1t8qerA0q3AMNCQkNX2LhEoEAjJbTjb5Z3MNxwds89jwfHOud7WAFPQkXkl4i2kLtLEn462vlWZUEWv9V2hOoKPuFqaBhwyOo180ing9g4B6bcQVtuc1mkSfvgmzmReJpAGt4UBwahGofVgkeBoPiiN8Ko%2B4ylbyjcign%2FJbXi2qVlmB7e%2B5y81LyzLatE5Cv%2FX8J9LPJvX7k01gVqzJhExd0RSq%2FjoxxPvVwWaSq7IgKG7OnBAchE1KqH%2BVVN0vw%2FDsYHJQ23lbV5zulGgirT8G5z0mLST%2FzWTknB4RpOwK1XoS9rpaALAhRJNAKmrNSQWHeJUv5vn83pZOWiUiCIucV0Yg6TIGvs%2BdRUbGXk%2BDoyfo37kxaIrOKGt%2F5%2B2W6%2FPYLL%2FQAyZrflFAPD%2FRi4kwO%2FbRWrwXJvwDW%2BjCmoAa%2FGCcPvApnMevBeQ%2F6NUnkFkiu9nrR2SlQTqEqMmzrlSYdyY%2FxAsYMnLK%2FSZSn6Bll%2BNB5f%2BcenD3CkMs6hDx%2BMQb2%2BexoWsUypB5kYFutUyCBUM2npYOV5IaXAQAauMpM%2FPRaCHA46gPBJchW0%2F5VpoQahcjSWF45YqI7pHTyD1tR4JhVYaYfLP2IfZWnMVE%2BsIdkbVlmg2zQ5UON3k0IvviGrDCT1bK%2BBjqkAaf4Q9voijiNA58Wp%2BijCOoQ6zDcuNbD9Htq6VKSheM%2FwYLu9IL%2F6Xa0hfCE0EbPPJXtylfULfdeqA2Gg6ZvhMSqm0%2BaHXCj316kqvq5GhcH7r%2FUokFYgg%2B0Jtd1kbBH%2F%2Bto4dpReCQ3wO9rO373oY0tq1LS5zH59dTOKnU2tv95kQaJCxn2J9nIBGPlQyP0bhEOHVYC9PMNND91NIjmKAgcyIhU&X-Amz-Signature=73b33e52572574c27b913157413ada0de1e2c819d31566f2c3fa4a930ccdef78&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
