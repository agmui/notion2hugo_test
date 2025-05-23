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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQY3454N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIF1Pr20oTp2gXRQlYDyPzmKxPgBSWY8m9kxBG%2FNM43SWAiA1Vq3mZguK8txi2ugviTqapSx5t%2FWVk64fzJ37OhfyTiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAko4zL5J3EBRQHFGKtwDocnlTy7XUkjaeHEuNwrKjR3NvDoOPeZkd%2FH0OZ1%2Fe3Mq1X%2F3WxqwDV%2FRdRMC9IRLoPgsrZia15SR1pR2ivBAmiRpFdMwvnv5wxXZzil1kXQ0%2FTsBgY%2BzYkU3YfHK4vRgx6YYpJbTJRbo5HvIQZExy%2FBgmOXPTebOxVgj43%2BT8AyiiX8S6AqrRW7mizW5aG4cYJj%2B0N6ff5rQ%2Ftq7esHfrWB40DZVG%2BqSIMeESskUA57AEgM4WQnyXnrSPtuVDLkYYR4s3SXP0n5qpA8JZLWCh0bBfMBdug00I6r5NJJOiKF8Yvht2ZO6%2F2CL9jyMrDNUzER5JpZ7R7tA8BgrYoOj9xnFGH8JbfC6BZu6qLKM%2FYEaNPQPkZOlg%2FH%2BIlkgD1wqh%2B0sXJHqPz%2F%2BnxKs5Ymx6X4YTMGgxZbOQwIUJYv%2FcP0Kf8n%2FWoDHFVwYmM8yW%2FqiUy8cCKGEAXnsAVdwj75KP5Q9I0pIlDlgHcLtzkjnrWv1Ty9gJSf%2Fm5bPMzDhBOYDH9Xl2UORTxbJhYh1oNg9YnuDZ4Aoyrd%2B2liAquq1EYDM6Q0vPpzSyHbapqM%2BxwWbdifu9fciP83Dz2Afxmgpvm8XPaDEoylLbuSq8RwfOVKlzzuhEskF8UrBOr4wi6LDwQY6pgHUecIWKsClx7mm%2BxPtISxcEo%2Bw7Qz3OFXc5qwv8ASIrN7298hwzuMRhw%2BjDeWl9XVwXHzeA%2Fggk4hvwQrigsv0tp47SCSFL%2BO9c3SS1OuHHPgGv6c%2Bi6eQgTfvHkSNb5SlEufN%2Bb6CL7TaJ%2FOPRUnc4Jwi7kunJC5iXRz5qQBH5hIvtW65XVqFGtcJ7rB2sNNfqH3hmX1dynmbBZJjTwM8Ih76Zi8K&X-Amz-Signature=2dfaec91d0642c2c8bed5ad131db89de39ce38046fdb23dfb555af3b75a71de6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLLZ5UF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDVW8ST2VB57yhqLaNpP1uhsJKlYedCiOmkVj9kWGvEZAiEAwdRPiCVTbPX2q7ymWUeyz%2B7vBL8q8aihjSph81LeDO0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrKoLkFQgKugmFtnircA%2F%2F53DQJzyvqQzyFtWpZB3MywSF3JBhiMflXQjoW%2FCLOpQ6QV5E%2F5MvQv%2BYYPfLZjqReVK82cCVI5K9lsUMTUKIAHtzhMuESJwDaxgpbwlZPGMf434hZYP3jrq1Y5%2FT1uhMtAroE4%2FKd8JSLBDyg5SJohzmPu9f9pr4YbSQ4dj0xrMwkIPzDL0hrgQGKrt5xeeDx%2BeOYUYJL4CVS4jYFNDZZ3J9wHgOT7v3NUoXC8ODi0BHNrdz9%2BykG0NoW19v8sxNz9VJLy0cqzguMDUwQ8X0ON4s7UtTlsssIN0XTUEJD%2BCZbJtHg58Er2LjNk4hIWAKjHU10J9wHIYVRtoMYmeSzC1vNYRWI%2FTspAn2O%2BWteghNqSitIGh0YmQVRrh3ejd9pgc2SiwiVJ%2BiC0lUArrXHViiFWTJ7QI%2FMa%2FIjng9LB557wj2QzmbNZjG3HVXwnwJ4jWU9izN1IYwvHp%2Bsl%2FpMWcgs%2BtPMtlSa5GF7tk%2FDqMbnjhnfs2L4YYKbpmGVOG6QL052VEqnGs6bNWMvanoofjbZqHSbiqGREJ0mAcpIxi4EK4vOi09Lgr41OiCEDqfrmAWhmgdPMAsjI0YgP7yWkY1Yhhux8wHgkSiql13ksozh%2B1PGJ03GaO8hMMmhw8EGOqUBmKydL9IXpd2bcz9oSH5%2FNrJ5var4cOxi1KgT2tsL2Au57WSji8mc5h6JemVd3Nc4Cfak7TyflJj7WpFIcaYXUP66OeB52QC6Gsc2oOWE2qeNB8wCqTeQGKrViHszah4W%2BhO1HDTxOhQIqbfTMxJ4Kh%2Bn7MrVtzQjN8Q3qux7Zkm34gN2GYAxhCwDM1Dx1ssHiVvzqNj3fm8uHoHzl1LD3y9iTaeY&X-Amz-Signature=fa16da3f8d8b1dbca6483e5d08cb8d16353aa4e7d9848a65afd2a2583d7ae51b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
