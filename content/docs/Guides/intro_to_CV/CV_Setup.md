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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RWLAWZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIF4sSpyLZKZbtG7TzHl14xQVTL5B9QxuHhyqlTf0k%2FkqAiAJxrGSc7yASeNlKYz9LeQQuW1mogUiBT3kq11HI%2BPx%2BiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8g18QJUmvYcjX2kKtwDfqCE2f6%2F5gNu7esa%2BPFbpw3SuZV1dPeUdpn8tALLhW3osj1JXKiwTjEobdDUR1gIpDJKXTgN2XO4ZsAFoeJIWzH2lfeWaWENnPBcUgVO%2FzhZbCNLBw6uN5r0IiBz3EEqAQc6okHMzQ4YrNVxJWSe61ANRgr%2BmB0wtDTQmlynvLoefj7JgD7GOs4vBCVGedDecq10A5Oyqf6id3RxwSwz91jE2kvB71OQwz7Ae3q7ITd2Br1sUHLb4NxgMSeLMn0golGH8klnuex%2FTk%2B6pFS0eYGRuekpazsfAl0QjMtzrc6cgl2o0n9GStpHmidf%2FQweTs135KkDYymzUp4v93MBzmx7jHlMumN67pIa2YAP%2BvoXZaDmkitgw0sAn2mbNX8YFZcgSB%2FBNSoEhRbcNXLUn7p8g%2BUMVVSRVvhW%2F1fHLoFie%2FJZZBjr7ZsmDcZiR%2FMeO95JFvfrNItf4275wiivZXoZxPljiHnB0tODCL%2BxtIkhF05X%2FOJ4Bq3vCWS7XfllbILUROoowPh1LxfjjBOMdW6czwmwZrdQqiYLnLIBGuNxZ3MHXs1LrtpeVqDFWe0FTmgmu9z7qNNBKSWN0h0B1WFitQVgCCgUFsHd3OSJaklrGBLoFmMsWRG8wgowwIHYxAY6pgFPwHl6TDr%2BJ%2Bc8RPug3p1zfiW2dG78F6ImjK5kjo2mvdzdQsOFIT4fIA2kE2g2vVbu0W77snv9kZ%2Bl2KRnVRyScf0xi9ggXNi9HYuVG7VkuGGjmoffvNa1NdO%2BvvmtI8Nw8T2A6Q7x%2Fye1Bs6VFWEp0j6P55lFQmBT8dCs9xw0SV9bCiCgjc27f6%2FBMP9BeZ42Cs2kSCOKcz4BtXYirzH46nZcyX8f&X-Amz-Signature=0ee81cd445726e60152f59f315e0166f6ec60dc5e293de4238bfa7d1629ef880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6X7OA7M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD9Cm9AA2G6byR8XH4YDK5YTgq4YTMHIqxxeaKemEu%2BBgIhAJaCch8r780DvARN1mrMiK36bY2Tq3%2Bf8QoBiNDenZUBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsYQIB%2Fm9CoPPqcN4q3APfWXuGuKvCITbrjArXpigC5g3tjpZFtRbobhOAkV5HfTp0MqOWyA5WWJi9ajmdoFJlRCoTZo2JH79DXfxbjNvLJApaB9MXTDCkUiKG83bXmhFFR8c4Ud8Ivp78ssmszO%2BzxvhN1cGFNWDicGibzD4N%2BkfrYCRsqu9TZH3gHic%2FDhU%2BZnyQjpPJ2LOxvNq7bL51ktmligbl2z6deqrUUw2otGl2YgwYeXqfkPaZ%2BeLOlu9qA6NOkK0Ubs%2FnRAoXh06XR%2BmZIiUF90UrDdbrNiLEgDDNeiShSO%2Bu5nhehfIFXj%2FMSB7TO2YNIA52m%2F6CZU5LXtsnE0hi9xmOvB0cHCtjMXFDlmusTEl9ToZ%2BT5TX9Srw4nBfIOL%2FZE1OxOnmEdFPr4M6zHV55Uelei22keuvBPOO5OoxG72GYcBMjuqNd%2BQcYI%2BDA8%2FZBXEGiygwfqHcPa%2F843Q6tyuczz%2FDw6Xedz40oLWswpW6ou6386PhbGtTegP%2F3g1puzfEWUU8eRRmjb%2B96upyYI3noMmrvE%2F4sFffJdHBK6g85nJ2BYyXlLEg9raaalep6lIvtaQgGiBqBOJ%2BLK702Yi17i2RpZVrpWkWu5wBkSXCYmNRew0GHUR1FC66iYE23zA%2BzjCjgtjEBjqkAd3Q5lr0nA%2Be3Fq7NjdslEFIrn8qlkMjYAg7f9tHyybpgcW1p8MSvN5fZBzR9Ayu5PYHTOyLd6XJFkIq4jg2HW4rdU1w%2FqngxnYS6oQeB6lBNkmL99cZeeVfBLWVupk9uEfT0uXFTR%2BLDQl5BNA61Sl99NT5KMuhYi4%2F91IHdPwT1kwxjuHiStqaftlMAxXSpWZHbC32yMUvDjKb8YE7iKoTn5pC&X-Amz-Signature=df73d1c424348960ae619ef39d0e6b7b63241c5a608332c650260ea1b8fe2012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
