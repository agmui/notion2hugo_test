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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWXSP66%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC5Mj02ZIgXpwT8FxnQgQ9iOfV4wuIy5LXxiz1wlGuuAiA%2B%2B%2F1mJjBIsOBoLBFgnCEOLimJ4vmRISvNgR70DetwnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oDSURE%2Bg%2FGgNRVrKtwD0AOQ2%2FcXROI0QpE%2BkR%2F4strbsYHoG0v4pUXStCJMLeH29DU1N4s1NqI%2Fy1rZKaKccnE17F8bVz9iu3jMXxtzOQlhUo24u1rXP2H81SOn8z97EF6ZAqGr0EaVZoEhNuvzMeFIuCM9SDK3i8GHJAVETyjfDts3M7PPl2S%2F8m80KcrfuqGAopyPO%2FTM2F2Mllf0EkKrnHR8rBs8BadgTVHPREtuiSRzfcl%2FYjMU%2FQqkk7TZ4Pbnem9CKxkBrjj03W5nqOMd%2FS%2Bo5ZT9ZTQoFB2HIPbAJrYOfoNu2FyGSv1vj%2BNsUP0KKEjvQM%2FmZBT%2B2nnE1pbs%2F1L0lx0b2j60K1n3YpuSRyvUUi%2Bk%2F2ciGFAUrySYlcykwFljNNLlFVyxTIHV2u%2Boc05TJVu9z73Y92UgsUHWlWPTNrEq30xUhqqwMfIDo1RJX5ytjtASz45TFyJ5z7qISDj2jYsj6gk6gR9J%2F90VdXSmNWl7tcyYyZcvCudgAg37yPgg6cC6kL3gEDvqxq36WYb8wFG45udcp8%2FIr7FIAQj%2BbWlZfZs0Q9%2FBZMyg1vnsP7RvdVWWpAnUTunoQaN7ipJjHWqJOvV2yRQNI%2BRKA7Acr9L26u40rBHzbQejakL%2BozI2D%2F2SPocw%2BJPSvgY6pgHv81YxDweCr6tb8K1mlMbocHK%2Bb03AWX6lBGBd6OMQVj9mnNDIZcFdvOhoTDl71wj7EWEQqntgOJ3ipevRG2v4lRR%2FTVkZrxfQ31DdjCCyAkI2cUCzD2gHVv0sLzcDwv%2ByMQWsfwr4HeggAjn89eVCIQwtMtxsbH3GyvEyqLanror6B2ZQqmgoWckH%2FC86aU%2B57%2F%2FVVAAn0%2BBDK8BikvPJBknSTB6r&X-Amz-Signature=187cc2282b969c55a2583f69e3738b24dcbca45f66e8088f92afa4d85397c475&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UYGJZ7Q%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeX6fxLEaNcBUhAexzl%2FVAKDE8q1HgDhF4ViIoFfHqOAIhAPjfk2ZSuZjpoYOKtXTcjLZ3pDEtCXecrd%2BE05zcrF8bKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0teZb2fX4B3KLSygq3ANf%2FLtJGR9lpIqXAVs76jvZxZV33EAxVqsXDMvv9WwhzN7CdkVjEsTfg%2FI9xrsu5FSmdxKo%2BY0VnM6aVnPH8oIRDUFWNBktDcd1c4kYG66I%2BwCcXOEOdcCe5wlO%2BVrEW%2FPKc0kjH3nEYb9oYkncWlgHiQexLUeU6uYMZMku9Rl5uGz1XojP9%2FIYmOC9bqGf3YLotfzQnTzVWdKgNZ7V8usqR5cgpJkFJEoIyV1ecxkfYH9HhE%2FH%2BvVdbgVl3QpqeuB0HAB9OFfHrKISC7XemHUmlg9Nh74ZHxqkAnAdMBzBCf2Xz%2FzFFmATtVgTt46itSSgj7UQqg%2FeudlpRHgyT0n4ZpXTBx%2BB8ZjZ4muLgCHKtuw0MQPgz9IlYy3VfUqm82ok9nmB5perqdsaaWIU3Sj6A9fLk1kk09dzMru4e1l9AEjYt0trePlFOcwtjCWHr%2BpYJ%2FJjOyBpBUKdDfLc68iYf9qmWaQuttisSouRZgu2QkbDjWhZXJ4Kt%2Fw8zMUw3%2FyhMcrcgg8JIdy5dUeSmbgOOoAAB7VPBtvStViZ3Tvhyjr8InDIXZjfnmUDbx3vmA%2FK2L5cFL8fDO%2FRZX1eLJidH4DlPDpthIRoeQJvYnkZ4DEP90YGxwExEVTDcjDwktK%2BBjqkAf84DkYGOuB%2BzdiwltD%2B%2B2QhpuERoGahhagv9OhjshFrboX%2BGRl90%2FHLZp0ANBpKDq8OpizBpjhlqQu6H2xgBgpeZoLxC%2BK7wO%2Fq02BG4LRPoIKKE4JH7dhxI35IBFpDcNFk8n4LRz2iewCjvioxZqrX1Y8gyuL3LxNkMdXisYi5prC3XAZOt59aHVZ%2B0h6Q8bfJP1ifQPWl%2FDZZMcpmzTLWNAez&X-Amz-Signature=eac661d2756e10f53dab84e8f4e32d719b19d1d15bfca5b59b2873d45b0baa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
