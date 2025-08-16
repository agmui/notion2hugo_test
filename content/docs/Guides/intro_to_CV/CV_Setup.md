---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIWRCPO%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDs7a8H0jrGehmBFXytTyEVlsh5HKuMm%2FHUsL3wm1XxMAiEArbfDDubxK7vcJ7exw0%2B5USobkKZLKIlBRFF9m5U%2FPh0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCEpb%2F%2B15k7BirxkOircAxOq6gYCS8xJZhc1w1ugyyUniOYR%2BODYyPte0a7vJhEN5vEzYw3Us4QkaN6x5f6v9qhwmF3pC%2FXwXfgQyYKfhRpKa3mazSeLpDLwJ0lvMHEfBompmoxtkeYUP6RZ6TrZK1k71CQ1LmUqvlnsgzmRBHxupKnoBxOl1%2F8ryrL6a7atxfgAXTAMfnOfK6qURqwYSfS9RZNniwUZOsj1vei2%2BuiaBWgAoVYlx8iTq5fHGaeSz59nw1BAbJ5SEQU2aw1OppPjiP64%2FMSt3ayvpUTQ%2Bodbwfty7c4qvd1rQeFSXQNGMgG0N%2BcpnPZ%2F7i4FH12TkzD1mSqLgtEu3OL4jP7RTTSm%2FhP7rQM7nioT0JNRlUfEMAJ3HeUvMKEDfDXI64Fhdk41%2Bepl%2Bgzah69KEjHWo8w6JDQOB3X2Z%2F02B4psw21d%2FrjaJ9BK9ZM6Vu3T5Vubd9lPz0Xo4OhvAv0AyjKo19t6po4i8gDzxRiDSceOVkg7uDeDnvDiSanH8%2Bfzr4NsuNXQida3DZ0xGw3VPYUxnye1%2BHrmnFfpJadzWyD4KFuyCsFA69%2BO0RLK1rKmOM8DSPx%2BZMm6InBSdlFHZn4%2BiTwkdYb817toHwxbWw2gys%2F8F6bG7Ja364%2FqXOFSMJOUgsUGOqUBbNjjL048B%2FDgEl69Fx0VbCSp5MsxmMU8hU3Lw58blxODWavUOxxf4xw1LKSi8G4vooLtvg7lYqiAXfIk884fe2Hu085%2BzvxYlw8m7IseNas6%2FEqQz0iNzN5nKjXz4cPnFHnuxIoiMc0MpNxYzzdo%2FOX9OyiZH3snRBir25AANisQG4EKiLvg5UesG%2F6VG3iMhJwZSob%2BEap9YwMHrzUaPdCpUx6A&X-Amz-Signature=9e3510ce2dee747980cc095f3cb4aa86e85a15a1a9ad08472fdb128981b67382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVND4ZJC%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDpeeya49PENXZIUbUtazxHxkf6j%2Ff3s6T4v63JhBYqHgIhAJL%2BbFKF0mMjYVf8SGcbAlE4OPJsUVJtr%2FbFjbD3ogBgKv8DCHcQABoMNjM3NDIzMTgzODA1Igz8vRp4c9eQih4sX%2BIq3AODmlTcU4OIj6B0A1NhSbnExuQobquMuOUCPcWtMlgeVwTiJN3B99btYCx19zXA%2Boy%2FDA5mayn10Dw4S2q9ryuK%2Fu%2BYFRBkIAoDSggz95xlUCty0v7Vm7e5dAhdyn6M203SAlRYIYXgn7IF2HpZfj%2FxwVSgQOc39hBeL08Dzu%2B0KgPmlvU1pIjDOhu8E0AEO3Ccfa%2BlB6Xf0qqwD5F7KUMZyzW8UfDwy5plZOjtOxYqW9fF3QFeGkaqb0TkUk%2BxvQpKHRZPMf7WBuIygX8QpFd%2BrOj7L50G5FhG76tZOEVtKNT8Qb2%2BZmlkA9qWWSF5YBTznUum0u0UrAsX2IN27YsIfJhfnrYE5xFdTQj4mEbqKKwdx8WXdxl26jIvrWzUcWboLSh1VB%2FJlFMhC0LjuHI96ATFI1FoFKG54e%2BEgbyyZdgGD7QDtLKKrN%2B8DxlAUrU3NkCquUcqOQ8iRhb5D3dlQwrrqMGhexYi07NhD0UylUElqwYdwLl9uPt8zZrksjsNxfWgjqcwJs3ZQAq%2B%2BuJ4gHK3uW0Kjb3PEOl01jUxesYOrtI5S4DXWyjGcrTaZL7lnFAEt6e9vVzD2j143DYPgz8eh82V0Yjity%2BsPBUEvogLHPVooF08MxcS0DClmYLFBjqkAWpdSufVeyPD8yP8ZIu3eiZribAzta4gkVZiAkL9xjWbZBfQNlZuBo1Fc%2BkB2T5jRhP%2FYkjawZRmFD1FBR7l8gDGOdV0c9j680xvMeZ7vlgZHZKfXuZO7%2FpTWjd2igJqm9wyW0HQ5Z4NQ8PFLfrj1zvL7tR5DFYx2GqKkt8ZyViCF255tGGT8gU1za8gH5Z0ASI7hQ1%2FmerjKLeSchY9OtPurbDb&X-Amz-Signature=1ab8651ad6e1fc42fd3fb189e93513ed967468d1a6f3259c2bad0f32151bf33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
