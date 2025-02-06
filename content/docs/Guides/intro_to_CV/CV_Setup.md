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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XT5AZZP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHi7%2BQ%2F961NZEQ0s%2BTkHC03jU50sJ9sWk4mQxU7wP53VAiBFEi7opTlLpaSgPS0Fu85fNAV1QJ1wA%2FKEBcen%2Fexshir%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMw2v0sS2q2AzO4%2Bt4KtwD5Q0POhaKJpJDIAm4Sl7cWvd%2BWajmzqMtO0LKyELOPwvycDzD6Oo1FCo0wg%2FHGuX4%2F%2BnosUBxjoByYSvvQAZbJJQ9sdDXDYnNihI6uA8Zv1Cs3WPU0nsSnwmURYQ6t6Hau%2BCsbi4%2FO4EwKI9xXRPv%2BVzGbEAItvIUMIkyVkecHfAgCe8d8JXw3nNFV1TUw9jruFLi%2Bl3oNnmaq10dJ%2B36%2BfbL8S5g8WMvb%2FrINSQblnQGZfDNrzWL4vl051a%2FGMqiiILcmIiUMJMVb%2BAqfxS22QvF0XMlw6oWkAPs4KO2qoia3L27GHaKWd6YD5qXozgTb8xyrHaXpgkdeYQEWpxOk%2FHW57saILu%2F%2BkQBDLNlwbwe7B%2FJEfgZkJKXHndujbDG8QY8%2FnP7DrSVXfDz3frhQOtCnXcXRm3fO8kNmlhYTSSwPq4c11rHEFlfIQ6%2FsJ9bDT%2Bca6R5ZwbpRqBArTiwJhnrj7QIMUNVnFemH2Uspi3El3DdQcvbZsvai5F8r3JYs1rOL7IuG8riWZcF2xxehoIEWgJMWycVhho06TCFRwYL8w%2F9kRhlTRLP2FKdx4Kyu%2Bgp4muauvPfCOA4YooLi6FXE2hwGbWoD4shUHiojy1ooWepzDcHUls7HA8w5%2F2TvQY6pgEBBYVwiXe0szn3ejYzhyW2tc%2FMbJQse5jBlhjPNqpkwohgokpTDyua%2BQ1m%2Ft3xAR1rIrFdkfQyMZfH7HqDF3Wp8ormKglf6DWm4QrezVMJgqCWHwelCP%2FC1ZSNp0qTUPxmHuo83O5enCR9rajIlN5%2FrTt3MRvTDoujRJpaQRUESk6GSkXRULSZ0Hv3YqrZB36G3xFoYyEU0uH8Py1AqK5hCAxAzTTk&X-Amz-Signature=e2af0b6b739af819998d8f01876a7e2037443236785ff7b887161523e4f90ac1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHZBEVEL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDCRUbDnFzVFU3W8JBp8%2BFmY9HlZPywST4aJx1WLyhXIAiBtXvu7KyNMLW6%2BLU7A5r%2B66nrZzgx%2FQxyLi0VPvCFBuSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMHnPeN9V3FlPCa3WuKtwD70N07Ml3gsbalGwf6TJHzLkDiOsItx%2FroZh%2FnUp7T0cVD8jSirl3xlrkXWSGK2rMOMt5thOvSQR5ih4XzlbMPzovuHvsz73vSqLr7vWo3EUSfBWnYC5W5YQhloNyspdFudUfV%2FxduCYPtmitrXQnXTXVqOJfU2I2shdH1o%2FR7adzfs0tzkuNjq2YjGwSp7%2BQk9czyz9lOHO7bvwv1Bq7Fe5hYgXurJ8PHEA%2Fid%2FA9tOhZgFdbhj3wGLPUHE7U69BiQOi3J4N7ZPX40o1SKItrMQoQ2W%2FszRsPc9sOMZY0P1Y7sXJZu8xVEcHOSnGP4b0m%2Bw%2F8yeyg4g46wfMGUjwGM9FKiKudwCpykTJkLe1AZU0tqfiNpEyAsvPM%2B5EvFiv9mvlC%2Fj6wn7wLwXeQ0mpt2hilhEUapxarlSMkOO7c4bC%2Fw2dWLi6JPauz6lP0Cf0SX%2BQdkLc5fsJxGM0UbHBYiJSJcqtVaO%2BCLb5I3P8hk8stzzEPNY2qHnbP2Q3Bu6IQM3pj%2FVcboRxt4s1%2B1hrI4rIH1%2Fc0dIb2A5B2%2FxEooJ1M5xowJ%2F0vNTwh2hYvX1cdrjzmKGTAPB6MIC4z2N%2FL2eu%2BOtGGq7yqTFupTi7RU5w81ymw4wb5ww5WSYwmf2TvQY6pgFdGpAAOAXvqIlk7XSawqYc%2FA4e8zX%2BgJRJWiumnymn3fozNh808L0XZSF03%2BoDm3e0Bz9E5Ruz7Xpe5gQv3t6dsgZD9MfgKtW4G5HCR%2B04NdOOzhDtisiIExkG%2BrBvSTC8pKyyaj%2Bw8NvOzBDYysOrX93Prm5z4fKZ10wGrFDRazJKa0e7JEAhB%2B0owaANAYcuhmTMbIJPA50ygxQ1zB7JD3GemCBB&X-Amz-Signature=f1c33f6491363b0bc285bd463af22c7bf75f5c9eb2801b0fa85deedcd1ae98fa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
