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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOWFGVJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDsq6kBbPBLqNzvNUw0BT%2BDNCHBfe3hIh3UAyLLc0ZHlQIgdstWGJR%2FPpIkzZuf5%2Fx97xUqOqtSy8kjW3rRTZR%2F2cEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFXZLBBTn2DGWy5iPyrcA7hYLc74Wb4CCFSibGq%2FVx17pr4e1SP9%2FjSfD2ZK6mq96%2FuQR2SdPtwDKy0Ee0T1lZBL%2BIZdr6k49JBM0PGXk6SdcXyXuVvR%2F%2FTxTw0%2BjMSxpRj%2F312Jlo8PN2QQiPa9ZDrzRC5NqQbbDR6Y9UY0%2FR3ELsmBoNxpA0c19mpu35%2FEajh%2FagdSGkJ7VDNxJEQjeabEHo7YvYwzU1IernXAGnMVfP9sPTJIKjETOIeA8tiKl3IUlP55P5vQj0tJLruePQZd7nskuyo0PhhUOjPZzVAFiijErxB1XlSrtwB6KgcHU17COMHKAYFG3f%2BpmfDaY9Qz4E%2BQjHrkGOJPzh94ivHRoxlsE1Wy%2FjF1Ml5ObdFQFgxU6C1U%2F1fq3c8DLIbuKUUt2ZYhM0QUZVEMDRVGtuTHS1dpjXfukJ4qinDrB5utQXQ4NnMl9N0iSrdbxeL%2BXu6Wicc1lYqTfvPWSQHH1WyB4JII7AAc4be0kpHq2vcbcSdr0cUBdsoYLiLd%2FO9boLbqRwOyGsIPlcp0Q%2FY7Dp1P%2FGwnc0TsI5JwdndCr%2F22OwA1QhFrkLWNLFnSOaRhnDAsmXboJEMv1bajTMbGIjqrznrDTkyePEXybMUyYdLpaTL%2FbLd9BHc6kF34MP3Xh8IGOqUBPKomcc7MVrSNkQ9QATYaPcl7SW6FBcBNJxN8gHZbIrmWEXEQAhTO4lMEZBaG1D9zfmZ0%2FPMINqCO%2Bf2KLaKop7WpB973CTacnChpOPewKnQZnHxLFGJbNRBrdznzffjgBY%2FrPeGfx8h6o2pFbVP2gPi43ziNp5KZbTj7s4iA6SbYNFmGcOZ28UOeeOvFrRBL8vjIdkRY2KZr8LrJhAf%2Brh27gnWM&X-Amz-Signature=dbd558f91b65c8ef87c3c275965d961d8e5c6c0de776637a0a183e5d64903314&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWXCSR3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDg6%2FNIbmWOZwo53vUM4UnzHsdC18I6JCcLA%2FCbrTtdYQIhAOFXXjV7gcIotGdP2g29sDi2nmWX3aJvCOufA0JWYBuqKv8DCEwQABoMNjM3NDIzMTgzODA1IgyZPKTaw8SahNKPRR0q3AODybGKhPgjFs%2FcH7fIt4QynAFT49CEw35AfJwKIpUmG4Y1Jde1QhUsOu3XmHqFRzGhnYbTtAxtqzg3HbZtsatkct16MjFyoG2c4SFEbJVYXSYRNjdk5ksrXHcJ6NzRD%2F7VH8eKncXizXC%2BsvCQT3l7TFCJNBb21RWfs7VpYj6l%2BpUrL59DHeN4wBtpJWpX06BO5kyA6Tpi0ivUZo6fKhZa5TVvF74VzIo%2FG1AE%2BlpCFnN3h0w05yV5MjU06MuuSXP7oZW03uO9EEEsoWm3yudGCyiu1GOW02shobpWaPFMWq9mpLkF1RkYjLfmVr7eIJ9UitA9ZkGZiX9QXCJkT%2FSyIMEjYMMfrkjZSvJD%2BYkVA9juyY7Ar3G%2BrQZoQmKwvhZQtYrfUPItMnn96Yi9SYIMvHfwU550R7TykxFuUCnLTexNzyJgy1yVAycaItk6R0ZXIpf4hLX7EIbe2SubrA6jhSLYG%2BZF7lqQxBPGBVxqdjJgsVgtEvW47%2FoAa1J65y%2F6jT%2FNc9lgamtOnuucfA3uPclvy3DdncoG8InlMk8kRB8i0Y5tUHrRrHWtdCFRsy8qiM3DiJgoI7lvJXnWtCRG7YDTC1CiV8cFfcPbhLD10mrJm1ZIXS9Ku9MUyDCi2IfCBjqkAcLrfrhO0DzvQ%2Bv6censvr3PSuRjF2Oz6XujkmSL2X%2F0G6ZrXIjEhMiI%2BW1viZ7mIkv3On5ZjDR%2BGHISKpA2%2F5DAdSk8GA7MXxfjMfNuWX5vuzyedyHwaZM3z8eenYMLuXFgIiD2YTeLG7Oe9s1hsCTmYPS6fWmkbeHy1r8Fuits6CzSsYeFu5IOZJxKCq8UTJhd8y52KxqYAa0m011LLa8SWVDr&X-Amz-Signature=3cfcd3ef2e5fc63e5e2196611f1c528680412ee89a2995d5bceab4cc5f398a50&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
