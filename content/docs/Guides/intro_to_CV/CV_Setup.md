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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YR7I6O%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu%2FQ7ZpkNN%2FZTh9KF6MCuEUKTpU03gM663HMWqRcmYxAiEA1SONhxV3roLEECoGoOJxSUXPJjWbFBGmPCAPcG62IT0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSTN3q1F75riAKW%2BCrcA%2Bk3Q49VKEyXd7NuRDFS9s%2Fh8RpMHWTyx1jNIXqESygGw%2FsCxgQro26hyZ0byTVpp%2BJDxIgWCdNQRaNCQjGTDulX9EH7b8y6g9AeQSKuW%2B3Hoyw%2FpjvpJn4l7rq7DRl9q4UhXiLFgbk1RQIskslWzHiqoxg3spyz%2F4SlXWyQh2IUJgDt5SMYcYTochrR4UXBH9QHEfYFQ%2Bv87f5dErzkah8nEf1ZW0UhddVB0g9RUi8aCSB7kAOz0unvQmgxkUB2mEBbcHrvqP63Fbe1cxf1k1yo69ScE%2B4OsQIogFSRGZQ73CSXKsuih4EmfbkPlJlDS7u72zmUKMPfqtyFvz4cjB6gnAjpw%2FpqrZYyOu9DKGccWOD2W008Y0G%2Fvpz38tF3Hgo7QD%2B8ImrOz5sNaqg%2BhowvJzn4qzloa4dJ40k3k8D%2FwWM5ucwYAuks5XuvLkmft4FUAoa4aPlFeiA5DJtgoQFhB4HSUahBAr9T2ardXcw3NmcPSYwfCGa3ne8t8Mto45AY23oVGLpsTpoYGJMArG4k1AFP9QXKFgiJ5h335igIDLOeMZmINV5ZWSoIer6XqajAITLlSThEshM%2BGNkzun7qYfVe0VoJwGeR2%2FFybYgEvLDRxKapscH4p9a6MJHK%2BLwGOqUBZ4IzZCQptJ9foUA2aeOba57Q9bQHt3%2F4hKnM0fLQmAJRKiLeq7hIEZ7jXg6QbK%2B4YWtUyg1d2ExMOM00t89K7MgjGonRInlMZ5qvuXhlwRy3OwFlx%2BjHUCkOdT%2FZwifHqTDpXxo9ahIdlheBexOogg1%2FTi3okPjv4BCsI3OQZhaOUHJlsV%2BHj6qrinfX6P5PJz%2FGe7B61G1i2yFqi7ecf4HU5Z9C&X-Amz-Signature=922f626400b30cef2421eaf4dd72391648c8086c1cc075c923a6ed3acab266f2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJCDKEWB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWb5dWX6EiCzXEgkj8E2HloC%2F0cCtqgzOq23yQKehHaAIhAN58El2iYGHuNw49P6QuGasy2toiTHIKMo8cQGqUdLaOKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCJVqpBkLKtnXjWL0q3ANaR2jh6yofMo1Z7bfmX0kLXZbE8dUj6xWxiY26jC4n13HfHmMD2EQeYSJ6WdkayR31cHMQZbMnRobABF1pmQ1oVqrfF38hDeflZRfv9643fVPt6VNWZPll%2BmX4OgRXENkQlV47R6EBqgItkJh6Ih9R1nfpmPAo%2FNr6ACD1bRoc7vPmFsIX3VlacbvGqPgQGIsFymgSjeAsaHySxnFbMzGNXx%2FAN8t93FqirFynbM%2F189JUAMfuiX%2B3GtPrFHiktAO77sQNAgWD1EKMgNcSM9xe6RSQAzKqdsPpfdm92z%2FPu04vNq6hU9ZbcUBO2TTO5obiuK0A1rthjeE5cpSM3w6SKRAN9x72oOGoaNR4bIok7zEw64PworTi%2Fg3OnjJajwsfMU8QSDCGlZcCgMUSX0pQCtECw8nfXji%2FKFU0glJ%2FGPj6BjdjoZnW27ILmok2Qd5oxKijR%2FYTZK0GgtAOTJgGuueliCZVnU1VUMCYhAQZeqC3%2BU54o0Yt64%2BKHNmyb97WWe985b5nzwi4CsODAoHilbzYLv8Q4Cy6cl9skvlM3yhfKL0rbePexcaNnVGYt5faPdJZjOr2yDxB0xMvehgxFWmxGrOvyTX3aIX3r1mZpwzRHNTMLpek9vRqAzCvyfi8BjqkATAjXlM5n5HrP7Cl2%2BkX6Mmsq5iqzQmETi7HceHnbbglIGzbKIRK6EWs81ftSfbgIsn9N0X2X6v%2BqgRYahKydpJzkb%2FPFdTfeTc8gcHjcruXTv1ziqqf%2BxcMZk0saw3RnpFcdwnhFpoTZrvZWcvg094DUKr48HS1qYFPuFCyxksudU49ziH9f5Vf8acbelgcMYyWSwEvuFjVJEF4AI%2FYdWz%2BuHI%2B&X-Amz-Signature=38f400587d93f9df7c6c79bbe62ec010f9d58ba334e42ab5bff4b4c2a1f70dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
