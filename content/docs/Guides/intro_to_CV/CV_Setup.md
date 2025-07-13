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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMT432HM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCOGnVuILWb4wQDOtf%2BDIbx3xA4Tp2cRv4kS3Qk%2Fg0dUQIgKgOR1sggpK4abaLw14E%2BZfVsWgER0sFoRh1mgK0EbOQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEK6dULu72OGmGQj0ircA1VYHZejYcgwaaX4xfceM7x5ThDGLQDfhKZHh4Z1e03gA6jaZFSRrwBR1lPYZfXScoOSnA9J2UMaoEXUQk1Z8RLkHqhzJzI29jFkb7%2F2UUCjzj%2FlTjmM7Wk3Q%2Fl9PUh25C71Xl%2BoGlMW2MbBvdewwxIlm1S6N0njqp4pSJ0Cc%2F1eHEO61Cdqf7o1UfX82JW1yjOhsy33u4iuFQ1mN7%2FTHpdZfJTSSN6PMy9emEsrXIT9H1o1gbDGICaDBwzjXbjmjJuCtw62t74zXD3GrhcJWbi7OsAikqh5hLThQ2aNx5BcCHXfQZKhKYPD4PlRjNXL6evpot5rv%2BMaLi9rhjY68Mue2wmTFCVMBY%2B9dG9MaYwABSQKS%2FQQ3hShca%2BrMo9HK2rUdd2UQ7LvJGl540ZHzzT4YmJEU4rXVKiR87ZkypvK4OokBGnSmPiVPGAeiZdpt1pc5EB%2FlGYhI%2FEE7onOAmhZY8iNdVTU6vpCcUGSTE6clLMyqqcs3awmxh4QUXDrIAMqlQReRFoVWk%2FoYWoSY8GauarCHzY55p3HFtRnf%2FezSRAJdx06O9DTUbauS4dPbaseHq8NxuVc6fw2EnUXQlQbLMzOe%2Bk9nAqaDbUYWqVLHhf1r3JmhegUMtg%2FMMKP0MMGOqUBqKafgKS6lHU8xAxwF6Xt%2BnIIEca1hrRnhRqPHJlI5vkYzGqji0baT%2FaeZg16NHq%2FmMevxVlTnCHlXH7vpMaWv9wqwuWg2a6kYhoqVmKTNp%2B5o8CsPTPlVvIjE%2B94E6SrDcgqyaaUP7f8cT9scxNy582mOeGxhqicHh9CkPiGqn1bH4jzAiHtIM7PqywFaZQ1nUmii0n%2FmdR%2BgsFUc48jWGna93pA&X-Amz-Signature=bd3ee59a602b05570f0326ef102998c84db10f5a807abc13a4bce6730c999338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZUWAK3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDN7dI5Hijnh6iobyVT%2Br9VWG60tYKhEwRKFkZRKWxz1QIhAMPEHOhu76DujwfRRrHvzyn0TW65NEiVUXFcXz5XGOIBKv8DCB0QABoMNjM3NDIzMTgzODA1IgwSs8fJbMOWZ0nhrfAq3AOcGJzI6Y52T8EmBNp5BJrKtIbGYGqGJnGNF6okdP55yeOM%2FB9wE3bjcjduP1%2BVMqjkK%2BAagrSI77JddCoD7tOmVVZ3GyKsapw44CMs0YgKZgKdBbv0mfBTC22rTC%2FDiYQsBEH6Qm5Qnu%2BJL5X%2FMeJBptoSuveaFYGTUOAzKQ8wkN9K7qZwcRbGLq6qErnr6im1GV3FBH8B%2Fm7x7Mp6NpwSqj1bod3VuFMhvwE3d113wBVKunwbzByRXio6Md4qWIOdo1225pDsoUPZ6jttp51G8Zd8z6zRPjlCMiANA2y6BjDBj2dIVk3cCv8WkKLDJGrc7S1i7A3QOmmPfbatQPHAuyt7cnmJ4ep2Zoi0eYFdx3FPh8YpclG9QKtSsdSMb6jr%2B2m1crOcMBs9%2Fs9Nd%2FH0p3XCsYJEFWUIfaTSc1GHuLXBYuX8tWFU8ouxU44EzwtQ%2FgBUeBtS2pAS1i%2FcOsGG7HuwKT0kSlM6GVDBypeTyw2XhwBOSowqDq%2BttHjm8Uavvef%2BRoGMnioAentjl1R2DNCbwaybU%2BzuCgpflumhc6Hokhu2M94yhGkMUREKM0MXIUL2WQdc%2FuaiAlQRCbeL4hhYHffB1e8sCHEedrXImYSiLJgRUytqQjpn9DD8j9DDBjqkARiuMMO6YpjNlrsYM0KyxXkGlwdrIQ4tWP6hMYrgu2YMNoMmcK%2BBkxOFgrGvxc9RM6TNefTsMKpwAAU1%2F%2F9OC%2BU0WIjfwnXHhW6RX2Dn89svpcPL%2F9umDhQo9HSEgV2aJ9c3xq0NubFU9pB0s3LAoNLQTQm3A3D17EEMxikXX4a4dZiTBF%2FA1reNKQfJmsOKOZUbYKt%2FYTSj8gYSWisz9GwWwT%2FC&X-Amz-Signature=eb38be87d2b63a6de7ece3a661eab266f2e7a61f28d51d450967e7db11badc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
